<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"
  import Size from "./ui/Size.svelte"

  export let steps
</script>

<main>
  <StepCounter {steps}/>
  <Color/>
  <Size/>
</main>

<style> 

</style>