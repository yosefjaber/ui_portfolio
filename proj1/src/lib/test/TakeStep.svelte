<script>

  let { takeStep } = $props()

</script>

<main>
    <button class="button" onclick={takeStep}>
        Take a step
    </button>
</main>

<style>
    .button {
        margin: .5rem
    }
</style>