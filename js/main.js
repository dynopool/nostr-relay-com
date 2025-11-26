const npub = 'npub1t4mkysr62f90n5ntq8wa9vfpk0q9a2y532url7vactmpx4vc3g5qph24sy';
const btn = document.getElementById('npubButton');
const tooltip = document.getElementById('npubTooltip');

btn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(npub);
    tooltip.textContent = 'Copied!';
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.textContent = 'Click to copy';
      tooltip.classList.remove('show');
    }, 1500);
  } catch (e) {
    tooltip.textContent = 'Copy failed';
    tooltip.classList.add('show');
    setTimeout(() => {
      tooltip.textContent = 'Click to copy';
      tooltip.classList.remove('show');
    }, 1500);
  }
});

btn.addEventListener('mouseenter', () => {
  tooltip.classList.add('show');
});

btn.addEventListener('mouseleave', () => {
  tooltip.classList.remove('show');
});
