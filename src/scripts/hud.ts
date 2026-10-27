// The HUD's two live readouts: the clock in UTC and the frame counter.
// Everything else in the HUD is CSS; under reduced motion only the clock keeps moving.

const clock = document.getElementById('hud-clock');
const frame = document.getElementById('hud-frame');
const pad = (v: number) => String(v).padStart(2, '0');

if (clock) {
  const tick = () => {
    const d = new Date();
    clock.textContent = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  };
  tick();
  setInterval(tick, 1000);
}

if (frame && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let n = 0;
  setInterval(() => {
    n = (n + 1) % 0x100000;
    frame.textContent = `0x${n.toString(16).toUpperCase().padStart(5, '0')}`;
  }, 90);
}
