<script setup>
    import ActionButton from '/src/components/_common/ActionButton.vue';

    const props = defineProps({
        "title": {
            "default": "Titulo"
        }
    });

    const emit = defineEmits(['close']);
</script>
<template>
    <div class="font-roboto bg-black/90 fixed z-10">
        <div class="w-screen h-screen flex items-center justify-center">
            <div class="max-w-96 w-screen">
                <div class="mx-8 bg-silver flex flex-col rounded-lg">
                    <div class="">
                        <div class="float-right" style="margin: -20px -20px 0 0">
                            <ActionButton title="Trocar Treino" icon="close" size="large" @click="emit('close')"/>
                        </div>
                        <div class="mx-5 my-7">
                            <h1 class="font-semibold text-xl text-center">{{ title }}</h1>
                            <slot />
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>