<script>

  import UI from './lib/UI.svelte'
  import Test from './lib/Test.svelte'

  let _pant = {
    style: "primary",
    primaryColor: "black",
    secondaryColor: "white",
    waist: 32,
    upperLegWidth: 12,
    upperLegLength: 20,
    lowerLegWidth: 8,
    lowerLegLength: 20,
    ankle: 5,
    steps: 0,
    temp: 72,
    bike: false,
    heart: { bpm: 89, min: 59, max: 180, avg: 60 },
    calories: { burned: 500, goal: 800, yesterday: 780 },
    stepsGoal: 900,
    stepsYesterday: 463,
    sleep: [7, 10, 5.5, 6.5, 7.5, 0, 0]
  }

  let slot = $state(0)

  let pantsArray = $state([structuredClone(_pant), structuredClone(_pant), structuredClone(_pant)])

  let pants = $derived(pantsArray[slot])

  function takeStep() {
    pants.steps += 1
  }

  let phoneUI = $state(false)

</script>

<div class="app-container">
  <div class="ui-region">
    <UI {pants} bind:slot bind:phoneUI/>
  </div>
  <div class="test-region">
    <Test bind:phoneUI {pants}/>
  </div>
</div>

<style>
  :global(:root) {
    --onyx: #090C08;
    --grape: #474056;
    --granite: #757083;
    --steel: #8a95a5;
    --ash: #b9c6ae;

    --graphite: #333333;
    --turquoise: #48E5C2;
    --snow: #FCFAF9;
    --sand: #F3D3BD;
    --charcoal: #5E5E5E;

    --bg: var(--onyx);
    --surface: var(--grape);
    --stage: var(--steel);
    --text: var(--ash);
    --text-on-light: var(--onyx);
    --accent: var(--ash);
    --line: var(--granite);

    --text-body: 24px;
    --text-heading: 30px;
    --text-button: 18px;
    --text-small: 14px;
    --text-subheading: 18px;
  }


  :global(body) {
    font-size: var(--text-body);
  }

  :global(h2) {
    font-size: var(--text-heading);
    color: var(--granite);
  }

  :global(h3) {
    font-size: 24px;;
    color: var(--steel);
  }

  :global(button) {
    font-size: var(--text-button);
  }

  :global(*) {
    margin: 0;
    padding: 0;
  }

  .app-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }

  .ui-region {
    flex: 0 0 80%;
    overflow: auto;
    background-color: var(--bg);
    color: var(--text);
  }

  .test-region {
    flex: 0 0 20%;
    overflow: auto;
    background-color: var(--ash);
    color: var(--text);
  }
</style>