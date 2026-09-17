'use strict';
const cover = document.getElementById('cover');
const reveal = document.getElementById('reveal');
const video = document.getElementById('video');
const openButton = document.getElementById('open');
const playButton = document.getElementById('play');
const soundButton = document.getElementById('sound');
const status = document.getElementById('status');
let opened = false;
let revealing = false;
let attempt = 0;

function playbackFallback() {
  playButton.hidden = false;
  status.textContent = 'Toca Reproducir video para comenzar.';
}
async function startVideo() {
  const currentAttempt = ++attempt;
  playButton.hidden = true;
  status.textContent = 'Preparando tu invitación…';
  video.muted = false;
  try {
    // This call stays in the original tap, preserving mobile user activation.
    await video.play();
  } catch (error) {
    if (currentAttempt !== attempt || !opened) return;
    if (error.name === 'NotAllowedError') {
      video.muted = true;
      try { await video.play(); }
      catch (_) { if (currentAttempt === attempt) playbackFallback(); }
    } else if (!video.error) playbackFallback();
  }
  if (currentAttempt === attempt) soundButton.hidden = !video.muted;
}
openButton.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  revealing = true;
  openButton.disabled = true;
  cover.classList.add('opening');
  // Begin playback now, then rewind at reveal so no opening frames are missed.
  startVideo();
  const delay = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 1100;
  setTimeout(() => cover.classList.add('leaving'), Math.max(0, delay - 300));
  setTimeout(() => {
    cover.hidden = true;
    reveal.hidden = false;
    revealing = false;
    try { video.currentTime = 0; } catch (_) {}
    video.focus({preventScroll:true});
    if (video.paused && !video.error) playbackFallback();
  }, delay);
});
playButton.addEventListener('click', startVideo);
soundButton.addEventListener('click', () => {
  video.muted = false;
  video.play().catch(playbackFallback);
});
video.addEventListener('playing', () => {
  playButton.hidden = true;
  status.textContent = '';
  soundButton.hidden = !video.muted;
});
video.addEventListener('volumechange', () => { soundButton.hidden = !video.muted; });
video.addEventListener('waiting', () => { if (opened) status.textContent = 'Cargando video…'; });
video.addEventListener('pause', () => {
  if (opened && !revealing && !video.ended && !video.error) playButton.hidden = false;
});
video.addEventListener('ended', () => { status.textContent = ''; playButton.textContent = 'Volver a reproducir'; playButton.hidden = false; });
video.addEventListener('error', () => {
  status.textContent = 'No se pudo cargar el video. Puedes abrirlo directamente o volver a intentarlo.';
  document.getElementById('download').hidden = false;
});
document.getElementById('back').addEventListener('click', () => {
  opened = false;
  attempt++;
  video.pause();
  try { video.currentTime = 0; } catch (_) {}
  reveal.hidden = true;
  cover.hidden = false;
  cover.classList.remove('opening', 'leaving');
  openButton.disabled = false;
  playButton.textContent = 'Reproducir video';
  openButton.focus({preventScroll:true});
});
