<script setup>
    import ActionButton from '/src/components/_common/ActionButton.vue';

    const emit = defineEmits(['show_window']);

    function show_hide_buttons(){
        document.querySelectorAll(".action_bar_hidden_button").forEach((b) => {
            if (b.classList.contains("hidden")){
                b.classList.remove("hidden")
            } else {
                b.classList.add("hidden")
            }
        })
    }
</script>
<template>
    <div class="w-screen bottom-0 left-0 fixed">
        <div class="m-5 flex justify-between items-end">
            <div class="flex sm:h-12 sm:items-end flex-col sm:flex-row">
                <!-- TODO
                <ActionButton title="Trocar Treino" 
                icon="repeat-outline" 
                size="large" 
                class="action_bar_hidden_button hidden sm:flex m-1"
                @click="emit('show_window', 'change_routine')"
                />
                <ActionButton title="Configurações" 
                icon="options-outline" 
                size="large" 
                class="action_bar_hidden_button hidden sm:flex m-1"
                @click="emit('show_window', 'settings')"
                />
                <ActionButton title="Baixar Treino" 
                icon="cloud-download-outline" 
                size="large" 
                class="action_bar_hidden_button hidden sm:flex m-1"
                />
                <ActionButton title="Enviar Treino" 
                icon="cloud-upload-outline" 
                size="large" 
                class="action_bar_hidden_button hidden sm:flex m-1"
                />
                <ActionButton icon="ellipsis-horizontal" 
                size="large" 
                @click="show_hide_buttons" 
                class="flex sm:hidden m-1" 
                />
                -->
            </div>
            <div
            @click="emit('show_window', 'play')"
            class="flex items-center bg-white py-2 pl-6 pr-3 rounded-full shadow-md cursor-pointer
            hover:pl-5 hover:pr-4 transition-all"
            >
                <span class="select-none mr-1 font-bold text-lg tracking-wide"                >
                    TREINAR
                </span>
                <ActionButton icon="play" size="medium" class="ml-1" :grow_in_hover="false"/>
            </div>
        </div>
    </div>
</template>