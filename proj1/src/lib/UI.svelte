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
          <div class="pants-col">
            <Color bind:pants />
          </div>
          <Pants bind:pants />
          <Size bind:pants />
        </div>
        <div class="customization bottom-row">
          <div class="pants-col">
            <Temp bind:pants />
          </div>
          <div id="bike">
            <Bike bind:pants />
          </div>
        </div>
      </div>
    {/key}
  {/if}
</main>

<style>

  .customization {
    display: contents;
  }

  .row-holder {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 2rem;
    align-items: start;
    margin-left: 1rem;
    margin-top: 2rem;
  }

  .pants-col {
    margin-left: 1rem;
  }

  #pants {
    margin-left: 1rem;
  }

  #bike {
    grid-column: 3;
    justify-self: center;
    margin-left: 3rem;
    display: flex;
    align-items: center;
  }

  .bottom-row {
    align-items: baseline;
  }
</style>