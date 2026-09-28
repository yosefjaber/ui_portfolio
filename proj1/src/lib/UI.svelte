<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"

  export let steps
</script>

<main>
  <StepCounter {steps}/>
  <Color/>
</main>

<style> 

</style>