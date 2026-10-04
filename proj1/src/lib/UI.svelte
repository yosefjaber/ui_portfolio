<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"
  import Size from "./ui/Size.svelte"
  import Pants from "./ui/Pants.svelte"
  import Temp from "./ui/Temp.svelte"

  let { pants = $bindable() } = $props()
</script>

<main>
  <!-- <StepCounter steps={pants.steps}/> -->
  <div class = "row-holder">
    <div class="customization top-row">
      <Color pants={pants} />
      <Pants pants={pants} />
      <Size pants={pants} />
    </div>
    <div class = "customization bottom-row">
      <Temp pants={pants} />
    </div>
  </div>
</main>

<style> 
  .customization {
    display: flex;
  }

  .row-holder {
    display: block;
  }
</style>