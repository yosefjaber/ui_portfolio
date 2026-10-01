<script>
  import Slider from "./Slider.svelte"

  let { pants = $bindable() } = $props()

  const waistMin = 26
  const waistMax = 46

  const upperLegLengthMin = 12
  const upperLegLengthMax = 20

  const upperLegWidthMin = 9
  const upperLegWidthMax = 16

  const lowerLegLengthMin = 12
  const lowerLegLengthMax = 20

  const lowerLegWidthMin = 6
  const lowerLegWidthMax = 12

  const ankleMin = 5
  const ankleMax = 11
</script>

<main>
    <h2>Size Control</h2>
    <div id="sliders">
      <div id="leftSide">
        <div class = "controlPanel">
            <Slider max={46} min={26} bindVal={pants.waist} step={2} label={"waist"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={20} min={12} bindVal={pants.upperLegLength} step={2} label={"waist"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={46} min={26} bindVal={pants.waist} step={2} label={"waist"}/>
        </div>
      </div>

      <div id="rightSide">
        <div class = "controlPanel">
            <Slider max={46} min={26} bindVal={pants.waist} step={2} label={"waist"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={46} min={26} bindVal={pants.waist} step={2} label={"waist"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={46} min={26} bindVal={pants.waist} step={2} label={"waist"}/>
        </div>
      </div>

    </div>

</main>

<style> 
  #sliders {
    display: flex;
  }

  #leftSide {
    margin-right: 1rem;
  }

  #rightSide {
    margin-left: 1rem;
  }

  main {
    margin-left: 3rem;
  }

  .controlPanel {
    padding: 0.5rem;  
  }

  main {
    color: white
  }
</style>