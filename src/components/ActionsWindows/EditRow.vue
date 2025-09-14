<script setup>
    import ExerciceForm from '/src/components/_common/ExerciceForm.vue';

    const emit = defineEmits(['close'])

    const props = defineProps({
        "row_number": {
            "default": null,
        }
    })
</script>
<template>
    <ExerciceForm @close="emit('close')" :row_number="props.row_number" title="Editar Exercício" />
</template>