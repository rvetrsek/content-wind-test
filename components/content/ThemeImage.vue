<script setup>
const props = defineProps({
    srcLight: { type: String, required: true },
    srcDark: { type: String, required: true },
    alt: { type: String, default: '' }
})

const colorMode = useColorMode()

const selectedSrc = computed(() => {
    return colorMode.value === 'dark' ? props.srcDark : props.srcLight
})
</script>

<template>
    <img v-if="colorMode.value" :src="selectedSrc" :alt="alt" />
</template>
