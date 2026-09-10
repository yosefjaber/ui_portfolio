<script>
  let steps = $state(0)

  import UI from './lib/UI.svelte'
  import Test from './lib/Test.svelte'
</script>

<div class="app-container">
  <div class="ui-region">
    <UI {steps}/>
  </div>
  <div class="test-region">
    <Test {steps}/>
  </div>
</div>

<style>
  :global(body) {
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