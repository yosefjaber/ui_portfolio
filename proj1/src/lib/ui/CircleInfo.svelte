<script>
    let { pct, big, small } = $props()
</script>

<main>
  <div class="ring">
    <svg viewBox="0 0 100 100">
      <circle class="track" cx="50" cy="50" r="42" pathLength="100" />
      <circle class="fill" cx="50" cy="50" r="42" pathLength="100"
        stroke-dasharray="{75 * Math.min(pct, 1)} 100" />
    </svg>
    <div class="ring-text">
      <strong>{big}</strong>
      <span>{small}</span>
    </div>
  </div>
</main>

<style>
    .ring { 
        position: relative; 
        width: 9rem; margin: 0.5rem auto 0; 
    }

    .track { 
        stroke: var(--line); stroke-dasharray: 75 100; 
    }

    .fill { 
        stroke: var(--accent); 
    }

    .ring-text { 
        position: absolute; 
        inset: 0; display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
    }

    svg { display: block; transform: rotate(135deg); }
    circle { fill: none; stroke-width: 8; stroke-linecap: round; }
    .ring-text strong { font-size: 28px; }
</style>