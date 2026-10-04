<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"
  import Size from "./ui/Size.svelte"
  import Pants from "./ui/Pants.svelte"
  import Temp from "./ui/Temp.svelte"
  import Bike from "./ui/Bike.svelte"

  let { pants = $bindable() } = $props()
</script>

<main>
  <!-- <StepCounter steps={pants.steps}/> -->
  <div class = "row-holder">
    <div class="customization top-row">
      <div id="pants">
        <Color pants={pants} />
      </div>
      <Pants pants={pants} />
      <Size pants={pants} />
    </div>
    <div class = "customization bottom-row">
      <div id="pants">
        <Temp pants={pants} />
      </div>
      <div id="bike">
          <Bike pants={pants}/>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    margin-top: 2rem;
  }

  .customization {
    display: flex;
  }

  .row-holder {
    display: block;
    margin-left: 1rem;
  }

  #pants {
    margin-left: 1rem;
  }

  #bike {
    display: flex;
    align-items: center;
    margin: 10rem;
    margin-left: 20rem;
    margin: 0 0 0 20rem;
  }

  .bottom-row {
    align-items: baseline;
  }
</style>