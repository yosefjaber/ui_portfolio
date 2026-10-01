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
            <Slider max={waistMax} min={waistMin} bindVal={pants.waist} step={2} label={"Waist"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={upperLegLengthMax} min={upperLegLengthMin} bindVal={pants.upperLegLength} step={2} label={"Upper Leg Length"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={upperLegWidthMax} min={upperLegWidthMin} bindVal={pants.upperLegWidth} step={2} label={"Upper Leg Width"}/>
        </div>
      </div>

      <div id="rightSide">
        <div class = "controlPanel">
            <Slider max={lowerLegLengthMax} min={lowerLegLengthMin} bindVal={pants.lowerlegLength} step={2} label={"Lower Leg Length"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={lowerLegWidthMax} min={lowerLegWidthMin} bindVal={pants.lowerLegWidth} step={2} label={"Lower Leg Width"}/>
        </div>

        <div class = "controlPanel">
            <Slider max={ankleMax} min={ankleMin} bindVal={pants.ankle} step={2} label={"Ankle"}/>
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