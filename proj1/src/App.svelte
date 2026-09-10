<script>

  import UI from './lib/UI.svelte'
  import Test from './lib/Test.svelte'

  let steps = $state(0)

  function takeStep(){
    steps += 1
  }

</script>

<div class="app-container">
  <div class="ui-region">
    <UI {steps}/>
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