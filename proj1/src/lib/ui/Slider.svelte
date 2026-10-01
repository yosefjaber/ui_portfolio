<script>

    let {min, max, bindVal = $bindable((min+max)/2) , step, label} = $props()

    let pct = $derived(((bindVal - min) / (max - min)) * 100)
    let nudge = $derived((0.5 - pct / 100) * 16)

</script>

<main>
    <div class="controlPanel">
        <h3>{label}</h3>
        <div class="slider">
            <output style="left: calc({pct}% + {nudge}px)">{bindVal}"</output>
            <input type="range" {min} {max} {step} bind:value={bindVal} />
            <div class="labels">
            <span>{min}"</span>
            <span>{max}"</span>
            </div>
        </div>
    </div>
</main>

<style> 
  .controlPanel { padding: 0.5rem; }

  .slider {
    position: relative;
    width: 12rem;
    padding-top: 1.75rem;
  }

  output {
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    font-weight: 600;
  }

  input[type="range"] {
    width: 100%;
    accent-color: white;
  }

  .labels {
    display: flex;
    justify-content: space-between;
  }
</style>