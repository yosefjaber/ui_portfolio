<script>
  import Steps from './test/TakeStep.svelte'

  let {takeStep, phoneUI = $bindable()} = $props()

</script>

<main>
  <Steps {takeStep} />
  <button onclick = {() => (phoneUI = !phoneUI)}>Test</button>
</main>

<style>
 
</style>