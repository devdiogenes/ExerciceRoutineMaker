<script setup>
    import Window from '/src/components/_common/Window.vue';

    const emit = defineEmits(['close'])
</script>
<template>
    <Window @close="emit('close')">Play Window</Window>
</template>