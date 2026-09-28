<script>
    let waistSize = $state(32)
    let upperLeg = $state(12)

    function updateVal(val, change) {
        val = val + change
    }
</script>

<main>
    <h2>Size Control</h2>
    <div class = "row">
        <div class = "controlPanel">
            <h3>Waist</h3>
            <div class = "controlInputs">

                <button onclick={() => waistSize++}>+</button>
                <p class="inputText">{waistSize}"</p>
                <button onclick={() => waistSize--}>-</button>
            
            </div>
        </div>

        <div class = "controlPanel">
            <h3>Upper Leg</h3>
            <div class = "controlInputs">

                <button onclick={() => upperLeg++}>+</button>
                <p class="inputText">{upperLeg}"</p>
                <button onclick={() => upperLeg--}>-</button>
            
            </div>
        </div>
    </div>

    <div class = "row">
        <div class = "controlPanel">
            <h3>Waist</h3>
            <div class = "controlInputs">

                <button onclick={() => waistSize++}>+</button>
                <p class="inputText">{waistSize}"</p>
                <button onclick={() => waistSize--}>-</button>
            
            </div>
        </div>

        <div class = "controlPanel">
            <h3>Upper Leg</h3>
            <div class = "controlInputs">

                <button onclick={() => upperLeg++}>+</button>
                <p class="inputText">{upperLeg}"</p>
                <button onclick={() => upperLeg--}>-</button>
            
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
  }

  .inputText {
    margin: 1rem;
  }
</style>