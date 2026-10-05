<script>
    import Slider from "./ui/Slider.svelte";


  let {phoneUI=$bindable(), pants = $bindable()} = $props()

  let nextDaySleep = $state(0)

  function goNextDay() {
    pants.calories.yesterday = pants.calories.burned
    pants.calories.burned = 0
    pants.stepsYesterday = pants.steps
    pants.steps = 0

    if (pants.day < 6) {
      pants.day++
      pants.sleep[pants.day] = nextDaySleep
    } else {
      pants.day = 0
      pants.sleep = [nextDaySleep, 0, 0, 0, 0, 0, 0]
    }

    console.log(pants.day)
  }

  function takeStep() {
    pants.steps++
    pants.calories.burned++
  }

</script>

<main>
  <div id="button-div">
    <button onclick = {() => (phoneUI = !phoneUI)}>{phoneUI ? "Switch to Pants UI" : "Switch to Phone UI"}</button>
    <button class="button" onclick={() => takeStep()}>
      Take a step
    </button>
    <button onclick = {() => pants.heart.bpm++}>
      Heart Rate Increase
    </button>
    <button onclick={() => { if (pants.heart.bpm > pants.heart.min) pants.heart.bpm-- }}>
      Heart Rate Decrease
    </button>
    <div class="test-sliders">
      <Slider max={2_000} min={0} bind:bindVal={pants.calories.goal} step={10} unit={" cal"} label="Calories Goal" />
      <Slider max={5_000} min={0} bind:bindVal={pants.stepsGoal} step={100} unit={" steps"} label="Steps Goal" />
    </div>
    <div class="test-sliders next-day">
      <Slider max={10} min={0} bind:bindVal={nextDaySleep} step={0.1} unit={" hrs"} label="Sleep" />
      <button onclick={() => {goNextDay()}}>
        Go to Next Day
      </button>
    </div>
  </div>
</main>

<style>

  main {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .test-sliders :global(.slider) {
    width: 8rem;
  }

  .test-sliders :global(input[type="range"]) {
    accent-color: var(--onyx);
  }

  .test-sliders {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    color: var(--onyx);
  }

  .test-sliders :global(h3) {
    color: var(--onyx);
  } 

  .test-sliders {
    margin-top: 2rem;
  }

  .next-day {
    margin-top: 5rem;
  }

  #button-div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    padding: .5rem;
    margin: .5rem;
    background-color: var(--surface);
    color: var(--text); 
    border: 1px solid var(--line);
    border-radius: .4rem;
    cursor: pointer;
  }

  button:hover {
    border-color: var(--accent);
    filter: brightness(1.15);
  }

  button:active {
    transform: scale(0.95);
  }
</style>