<script setup>
    import { ref } from 'vue';
    import Info from './Main/Info.vue';
    import Table from './Main/Table.vue';
    import ExerciceRoutine from '/src/services/ExerciceRoutine.js';
    console.log("ok")
    console.log()

    const routine = new ExerciceRoutine();
    const data = ref(routine.get_routine());

</script>
<template>
    <main class="py-10 font-bold">
        <Info />
        <Table :data="data" />
    </main>
</template>