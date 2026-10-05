<script>
    import CircleInfo from "./CircleInfo.svelte";

  let { pants = $bindable() } = $props()

  // placeholder data until the real pants report it
  let heart = $state({ bpm: 89, min: 59, max: 180, avg: 60 })
  let calories = $state({ burned: 500, goal: 800, yesterday: 780 })
  let stepsGoal = 900
  let stepsYesterday = 463
  let sleep = $state([7, 8.5, 5.5, 6.5, 7.5, 0, 0])
  const days = ["M", "T", "W", "Th", "F", "Sa", "S"]

  let zone = $derived("Zone " + Math.min(5, Math.max(1, Math.floor(heart.bpm / 40))))
</script>

<main>
  <div class="phone">
    <header><h2>Pulse Pants</h2></header>

    <div class="feed">
      <section class="card">
        <h3>Heart Rate</h3>
        <CircleInfo pct={(heart.bpm - heart.min) / (heart.max - heart.min)} big={heart.bpm} small={zone}/>
        <div class="range"><span>{heart.min}</span><span>{heart.max}</span></div>
        <p>Today avg: {heart.avg} bpm</p>
      </section>

      <section class="card">
        <h3>Calories</h3>
        <CircleInfo pct={(calories.burned / calories.goal)} big={calories.burned} small="cals"/>
        <p>{calories.burned}/{calories.goal} cals</p>
        <p>Yesterday: {calories.yesterday} cals</p>
      </section>

      <section class="card">
        <h3>Steps</h3>
         <CircleInfo pct={(pants.steps / stepsGoal)} big={pants.steps} small="steps"/>
        <p>{pants.steps}/{stepsGoal} steps</p>
        <p>Yesterday: {stepsYesterday} steps</p>
      </section>

      <!-- more cards go here -->

      <section class="card">
        <h3>Sleep</h3>
        <div class="chart">
          {#each sleep as hours}
            <div class="slot"><div class="bar" style:height="{hours * 10}%"></div></div>
          {/each}
        </div>
        <div class="chart-labels">
          {#each days as d}<span>{d}</span>{/each}
        </div>
      </section>
    </div>
  </div>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        padding: 1rem;
    }

    .phone {
        height: 85vh;
        aspect-ratio: 9 / 19.5;
        display: flex;
        flex-direction: column;
        border: 8px solid var(--line);
        border-radius: 2.5rem;
        overflow: hidden;
        font-size: 18px;
    }

    header { 
        padding: 1rem; text-align: center; background: var(--surface); 
    }

    .feed {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .card {
        background: var(--surface);
        border-radius: 1rem;
        padding: 1rem;
        text-align: center;
    }

    .card h3 { 
        text-align: left; 
        font-size: 20px; 
    }

    .range { 
        display: flex; justify-content: space-between; width: 7rem; margin: -1rem auto 0.5rem; 
    }

    .chart { 
        display: flex; 
        gap: 0.5rem; 
        height: 9rem; 
        margin-top: 1rem; 
        border-bottom: 2px solid var(--text); 
    }

    .slot { 
        flex: 1; 
        display: flex; 
        align-items: flex-end; 
    }

    .bar { 
        width: 100%; 
        background: var(--accent); 
        border-radius: 0.3rem 0.3rem 0 0; 
    }
    
    .chart-labels { display: flex; gap: 0.5rem; }
    .chart-labels span { flex: 1; }
</style>