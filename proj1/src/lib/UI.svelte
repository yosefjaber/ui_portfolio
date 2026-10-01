<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"
  import Size from "./ui/Size.svelte"
  import Pants from "./ui/Pants.svelte"

  let { pants = $bindable() } = $props()
</script>

<main>
  <StepCounter steps={pants.steps}/>
  <div class="customization">
    <Color pants={pants} />
    <Pants pants={pants} />
    <Size pants={pants} />
  </div>
</main>

<style> 
  .customization {
    display: flex;
  }
</style>