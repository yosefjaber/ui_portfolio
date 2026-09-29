<script>

    let waistSize = $state(32)
    let upperLeg = $state(12)
    let lowerLeg = $state(10)
    let ankle = $state(6)

</script>

<main>
    <h2>Size Control</h2>

    <div class = "row">
        <div class = "controlPanel">
            <h3>Waist</h3>
            <div class = "controlInputs">
            
                <button onclick={() => waistSize++}>+</button>
                <p class="inputText">{waistSize}"</p>
                <button onclick={() => {if(waistSize>0) waistSize--}}>-</button>
            
            </div>
        </div>

        <div class = "controlPanel">
            <h3>Upper Leg</h3>
            <div class = "controlInputs">
            
                <button onclick={() => upperLeg++}>+</button>
                <p class="inputText">{upperLeg}"</p>
                <button onclick={() => {if(upperLeg>0) upperLeg--}}>-</button>
            
            </div>
        </div>
    </div>

    <div class = "row">
      <div class = "controlPanel">
          <h3>Lower Leg</h3>
          <div class = "controlInputs">
          
              <button onclick={() => lowerLeg++}>+</button>
              <p class="inputText">{lowerLeg}"</p>
              <button onclick={() => {if(lowerLeg>0) lowerLeg--}}>-</button>
          
          </div>
      </div>

      <div class = "controlPanel">
          <h3>Ankle</h3>
          <div class = "controlInputs">
          
              <button onclick={() => ankle++}>+</button>
              <p class="inputText">{ankle}"</p>
              <button onclick={() => {if(ankle>0) ankle--}}>-</button>
          
          </div>
      </div>
    </div>

</main>

<style> 
  .controlInputs {
    display:flex;
    align-items: center;
    flex-direction: row;
  }

  .row {
    display:flex
  }

  .controlPanel {
    padding: 2rem;  
  }

  main {
    color: white
  }

  h3 {
    padding-bottom: .5rem;
  }

  button {
    padding: .5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
  }

  button:hover {
    background: #A9A9A9;
  }

  button:active {
    transform: scale(0.9);
  }

  .inputText {
    margin: 1rem;
    display: inline-block;
    width: 2.5rem;
    text-align: center;
  }
</style>