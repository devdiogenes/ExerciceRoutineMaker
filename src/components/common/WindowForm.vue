<script setup>
    import ActionButton from '/src/components/common/ActionButton.vue';
</script>
<template>
    <div class="bg-black/90 fixed z-10">
        <div class="w-screen h-screen flex items-center justify-center">
            <div class="w-96 bg-silver flex flex-col rounded-lg">
                <div class="">
                    <div class="float-right" style="margin: -20px -20px 0 0">
                        <ActionButton title="Trocar treino" icon="repeat-outline" size="large"/>
                    </div>
                    <div>
                        <h1 class="font-bold text-xl">{ TITULO }</h1>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>