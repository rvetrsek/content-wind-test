<script setup>
const props = defineProps({
    srcLight: { type: String, required: true },
    srcDark: { type: String, required: true },
    alt: { type: String, default: '' }
})

const colorMode = useColorMode()

const themedSrc = computed(() => {
    return colorMode.value === 'dark' ? props.srcDark : props.srcLight
})

// Track whether we're on the client
const isClient = ref(false)

// Check for client-side only onMounted
onMounted(() => {
    isClient.value = true
})
</script>

<template>
    <img :src="themedSrc" :alt="alt" v-if="isClient" />
</template>
