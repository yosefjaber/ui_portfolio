<script>

  import UI from './lib/UI.svelte'
  import Test from './lib/Test.svelte'

  let steps = $state(0)

  let pants = $state({
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
  })

  function takeStep() {
    pants.steps += 1
  }

</script>

<div class="app-container">
  <div class="ui-region">
    <UI {pants}/>
  </div>
  <div class="test-region">
    <Test {takeStep}/>
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
    background-color: var(--surface);
    color: var(--text);
  }
</style>