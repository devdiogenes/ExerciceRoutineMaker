<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import Row from './Table/Row.vue';
    import ActionButton from '/src/components/_common/ActionButton.vue';
    import ExerciceRoutine from '/src/services/ExerciceRoutine.js';

    const emit = defineEmits(['show_window'])

    const routine = new ExerciceRoutine();
    const data = ref(routine.get_routine());

    const focused_row = ref(null);
    function toggle_focused_row(numero = null) {
        focused_row.value = numero;
    }

    function emit_show_window(window, row_number = null) {
        emit('show_window', window, row_number);
    }

    function update_data() {
        data.value = routine.get_routine();
    }

    onMounted(() => {
        window.addEventListener('routine-updated', update_data);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('routine-updated', update_data);
    });
</script>
<template>
    <div class="my-2 font-normal shadow-xl">
        <Row :main="true" />
        <Row v-for="row, index in data" :key="index"
        :values="row" 
        :is_focused="focused_row === row['numero']"
        :row_number="index"
        @focusin="toggle_focused_row(row['numero'])"
        @focusout="toggle_focused_row()"
        @show_window="emit_show_window"
        @delete_row="routine.delete_exercice(index)"
        />
    </div>
    <div class="flex justify-center">
        <ActionButton title="Adicionar Exercício" 
        icon="add" 
        size="large" 
        class="m-1"
        @click="emit('show_window', 'edit_row')"
        />
    </div>
</template>

<style scoped>
  
</style>