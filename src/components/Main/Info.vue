<script setup>
    import ActionButton from '/src/components/common/ActionButton.vue'
</script>
<template>
    <div class="flex items-center pt-1 pb-4 sm:pb-1 justify-between flex-col sm:flex-row">
        <div class="flex items-center h-10">
            <h2 class="text-xl mr-1">
            <span class="text-green">TREINO DE HOJE: </span>
            <span class="text-black">{}</span>
            </h2>
        </div>
        <div>
            Tempo estimado: 
            <span class="font-normal">
                10 min(s)
            </span>
        </div>
    </div>
</template>