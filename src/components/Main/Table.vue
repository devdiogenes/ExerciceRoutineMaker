<script setup>
    import { ref } from 'vue';
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

    function emit_show_window(window){
        emit('show_window', window);
    }
</script>
<template>
    <div class="my-2 font-normal shadow-xl">
        <Row :main="true" />
        <Row v-for="row in data" 
        :values="row" 
        :is_focused="focused_row === row['numero']"
        @focusin="toggle_focused_row(row['numero'])"
        @focusout="toggle_focused_row()"
        @show_window="emit_show_window"
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