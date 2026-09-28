<script>

    let waistSize = $state(32)
    let upperLeg = $state(12)

</script>

<main>
    <h2>Size Control</h2>
    <div id = "firstRow">
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

</main>

<style> 
  .controlInputs {
    display:flex;
    align-items: center;
    flex-direction: row;
  }

  #firstRow {
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