<script setup>
    import { ref } from 'vue';
    import Info from './Main/Info.vue';
    import Table from './Main/Table.vue';
    import ExerciceRoutine from '/src/services/ExerciceRoutine.js';

    const emit = defineEmits(['show_window'])

    const routine = new ExerciceRoutine();
    const data = ref(routine.get_routine());

    function emit_show_window(window){
        emit('show_window', window);
    }
</script>
<template>
    <main class="py-10 font-bold">
        <Info />
        <Table :data="data" @show_window="emit_show_window" />
    </main>
</template>