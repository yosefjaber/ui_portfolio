<script>
    let {pants = $bindable()} = $props()

    let fill = $derived(pants.style === "primary" ? pants.primaryColor : `url(#${pants.style})`)

    function changeStyle(newStyle) {
        pants.style = newStyle
    }

    let waistXMax = 100

</script>

<main>
    <div class="preview">
        <svg viewBox="0 0 500 1000" width="100%">

            <defs>
                <linearGradient id="half">
                    <stop offset="50%" stop-color="{pants.primaryColor}" />
                    <stop offset="50%" stop-color="{pants.secondaryColor}" />
                </linearGradient>

                <pattern id="camo" width="150" height="150" patternUnits="userSpaceOnUse">
                    <rect width="150" height="150" fill="{pants.primaryColor}" />
                    <ellipse cx="40" cy="40" rx="30" ry="20" fill="{pants.secondaryColor}" />
                    <ellipse cx="110" cy="100" rx="35" ry="25" fill="{pants.secondaryColor}" />
                </pattern>

                <linearGradient id="gradient">
                    <stop offset="0%" stop-color="{pants.primaryColor}" />
                    <stop offset="100%" stop-color="{pants.secondaryColor}" />
                </linearGradient>

                <pattern id="stripes" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect width="30" height="60" fill="{pants.secondaryColor}" />
                    <rect x="30" width="30" height="60" fill="{pants.primaryColor}" />
                </pattern>
            </defs>

            <polygon points="100,0 400,0 500,1000, 300,1000, 250,100 200,1000 0,1000" {fill} stroke="black" stroke-width="15"></polygon>
        </svg>
    </div>
</main>

<style> 
    main {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .preview {
        flex: 1;
        max-width: 220px;
    }

    svg {
        padding: .5rem;
    }
</style>