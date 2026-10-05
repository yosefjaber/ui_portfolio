<script>
    let {pants = $bindable()} = $props()

    let fill = $derived(pants.style === "primary" ? pants.primaryColor : `url(#${pants.style})`)

    /**
     * @param {string} newStyle
     */
    function changeStyle(newStyle) {
        pants.style = newStyle
    }

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

    const crotchY = 140
    const apexY = 120
    const gap = 40

    const crotchUpperLegDiff = 80

    let waistT = $derived((pants.waist - waistMin) / (waistMax - waistMin))
    let waistHalf = $derived(120 + waistT * 70)
    let waistLeft = $derived(250 - waistHalf)
    let waistRight = $derived(250 + waistHalf)

    let upperLegWidthT = $derived((pants.upperLegWidth - upperLegWidthMin) / (upperLegWidthMax - upperLegWidthMin))
    let thighHalf = $derived(gap + 90 + upperLegWidthT * 70)
    let thighLeft = $derived(250 - thighHalf)
    let thighRight = $derived(250 + thighHalf)

    let upperLegLengthT = $derived((pants.upperLegLength - upperLegLengthMin) / (upperLegLengthMax - upperLegLengthMin))
    let kneeY = $derived(crotchY + 175 + upperLegLengthT * 300)

    let lowerLegWidthT = $derived((pants.lowerLegWidth - lowerLegWidthMin) / (lowerLegWidthMax - lowerLegWidthMin))
    let kneeHalf = $derived(gap + 80 + lowerLegWidthT * 70)
    let kneeLeft = $derived(250 - kneeHalf)
    let kneeRight = $derived(250 + kneeHalf)

    let lowerLegLengthT = $derived((pants.lowerLegLength - lowerLegLengthMin) / (lowerLegLengthMax - lowerLegLengthMin))
    let ankleY = $derived(kneeY + 150 + lowerLegLengthT * 250)

    let ankleT = $derived((pants.ankle - ankleMin) / (ankleMax - ankleMin))
    let ankleHalf = $derived(gap + 60 + ankleT * 80)
    let ankleLeft = $derived(250 - ankleHalf)
    let ankleRight = $derived(250 + ankleHalf)

    let innerLeft = 250 - gap
    let innerRight = 250 + gap
</script>

<main>
    <div class="preview">
        <svg viewBox="0 0 500 1050" width="100%">

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
                <polygon
                points="{waistLeft},20 {waistRight},20
                        {thighRight},{crotchY + crotchUpperLegDiff} {kneeRight},{kneeY} {ankleRight},{ankleY}
                        {innerRight},{ankleY} {innerRight},{crotchY}
                        250,{apexY}
                        {innerLeft},{crotchY} {innerLeft},{ankleY}
                        {ankleLeft},{ankleY} {kneeLeft},{kneeY} {thighLeft},{crotchY + crotchUpperLegDiff}"
                {fill}
                stroke="#b9c6ae"
                stroke-width="10"
                stroke-linejoin="round"
                ></polygon>
        </svg>
    </div>
</main>

<style> 
    main {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .preview {
        flex: 1;
        max-width: 220px;
    }

    svg {
        padding: .5rem;
    }

    .preview {
        border-radius: 1rem;
    }
</style>