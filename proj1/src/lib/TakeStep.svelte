<script>
  export let steps;

  function takeStep() {
    steps += 1
    console.log(steps)
  }
</script>

<main>
    <button onclick={takeStep}>
        Take a step
    </button>
</main>

<style>

</style>