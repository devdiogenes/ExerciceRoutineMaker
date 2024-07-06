<script setup>
    import { ref } from 'vue';
    import Info from './Main/Info.vue';
    import Table from './Main/Table.vue';

    const emit = defineEmits(['show_window'])

    function emit_show_window(window){
        emit('show_window', window);
    }
</script>
<template>
    <main class="py-10 font-bold">
        <Info />
        <Table @show_window="emit_show_window" />
        <div class="h-10 w-full" />
    </main>
</template>