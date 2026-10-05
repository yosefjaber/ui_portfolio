<script>
  let {min, max, bindVal = $bindable((min+max)/2), step, label, size = "16rem", unit = '"'} = $props()

  let pct = $derived(((bindVal - min) / (max - min)) * 100)
  let nudge = $derived((0.5 - pct / 100) * 16)

  let outputVal = $derived(bindVal + unit)
  let outputMin = $derived(min + unit)
  let outputMax = $derived(max + unit)
</script>

<main>
  <div class="controlPanel">
      <h3>{label}</h3>
      <div class="slider" style:width={size}>
          <output style="left: calc({pct}% + {nudge}px)">{outputVal}</output>
          <input type="range" {min} {max} {step} bind:value={bindVal} />
          <div class="labels">
          <span>{outputMin}</span>
          <span>{outputMax}</span>
          </div>
      </div>
  </div>
</main>

<style> 
  .controlPanel { padding: 0.5rem; }

  .slider {
    position: relative;
    padding-top: 1.75rem;
  }

  input[type="range"] {
    accent-color: var(--accent);
    width: 100%;
  }

  output {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-weight: 600;
    white-space: nowrap;
  }

  .labels {
    display: flex;
    justify-content: space-between;
  }

</style>