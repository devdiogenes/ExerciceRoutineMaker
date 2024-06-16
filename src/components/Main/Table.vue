<script setup>
    import { ref } from 'vue';
    import Row from './Table/Row.vue';

    const props = defineProps(['data']);

    const focused_row = ref(null);
    function toggle_focused_row(numero = null) {
        focused_row.value = numero;
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
        />
    </div>
</template>

<style scoped>
  
</style>