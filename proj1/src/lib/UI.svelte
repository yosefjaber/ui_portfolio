<script>
  import StepCounter from "./ui/StepCounter.svelte";
  import Color from "./ui/Color.svelte"
  import Size from "./ui/Size.svelte"
  import Pants from "./ui/Pants.svelte"
  import Temp from "./ui/Temp.svelte"
  import Bike from "./ui/Bike.svelte"
  import Navbar from "./ui/Navbar.svelte";
  import Phone from "./ui/Phone.svelte";

  let { pants = $bindable(), slot = $bindable(), phoneUI = $bindable()} = $props()
</script>

<main>
  <!-- <StepCounter steps={pants.steps}/> -->
  {#if phoneUI}
    <Phone bind:pants/>
  {:else}
    <div>
      <Navbar bind:pants bind:slot/>
    </div>
    {#key slot}
      <div class = "row-holder">
        <div class="customization top-row">
          <div id="pants">
            <Color bind:pants />
          </div>
          <Pants bind:pants />
          <Size bind:pants />
        </div>
        <div class = "customization bottom-row">
          <div id="pants">
            <Temp bind:pants />
          </div>
          <div id="bike">
              <Bike bind:pants/>
          </div>
        </div>
      </div>
    {/key}
  {/if}
</main>

<style>

  .customization {
    display: flex;
  }

  .row-holder {
    display: block;
    margin-left: 1rem;
    margin-top: 2rem;
    
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