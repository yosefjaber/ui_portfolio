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
    upperLegHeight: 20,
    lowerLegWidth: 8,
    lowerlegHeight: 20,
    ankle: 5,
    steps: 0,
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
    background-color: blue;
  }

  .test-region {
    flex: 0 0 20%;
    overflow: auto;
    background-color: red;
  }
</style>