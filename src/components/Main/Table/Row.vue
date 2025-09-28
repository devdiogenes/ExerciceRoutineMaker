<script setup>
    import { computed } from 'vue'
    import Cell from './Row/Cell.vue'
    import fields from '/fields.json'
    
    const props = defineProps({
        "main": {
            "default": false
        },
        "values": {
            "default": Object.fromEntries([
                ["number", "Nº"],
                ...fields.map(item => [item.name, item.label])
            ]),
        },
        "row_number": {
            "default": 0
        },
        "is_focused": {
            "default": false
        }
    })

    const emit = defineEmits(['focusin', 'focusout', 'show_window', 'delete_row']);

    const sizes = {
        "number": "small",
        "sets": "small",
        "qty": "small",
        "type": "small",
        "rest": "small",
        "exercice": "large",
    };

    const computed_classes = computed(() => {
        if (props.main) {
            return 'font-bold text-white bg-green';
        }
        if (props.values.number % 2 == 0){
            return 'cursor-pointer bg-white';
        } else {
            return 'cursor-pointer bg-silver';
        }
    });

    function hide_on_mobile(field) {
        let classes = "";
        if (["sets", "qty", "type", "rest"].includes(field)) {
            return "hidden sm:block";
        }
        return "";
    };

    function cell_classes(field) {
        let classes = "";
        //classes = (field == "number") ? "text-center" : "text-center";
        return `${classes} ${hide_on_mobile(field)}`;
    };

    function emit_event(event) {
        if (!props.main) {
            emit(event);
        }
    }

</script>
<template>
    <div class="focus:border-[1px] border-green"
    @focusin="emit_event('focusin')" 
    @focusout="emit_event('focusout')" 
    :tabindex="values['number']"
    >
        <div
        class="select-none transition-all w-full flex h-10 sm:h-8 items-center justify-center sm:justify-evenly" 
        :class="computed_classes"
        >
            <template v-for="([key, value], index) in Object.entries(values)" :key="index">
                <Cell :size="sizes[key]" :class="cell_classes(key)">
                    {{ value }}
                </Cell>
                <div v-if="index < Object.keys(values).length - 1" class="w-[1px] h-4 bg-green" :class="hide_on_mobile(key)" />
            </template>
        </div>
        <div v-if="!main && is_focused" 
        :id="`row_${values['number']}`"
        class="row_options transition-all w-full flex justify-center items-center bg-gray text-white select-none"
        >
            <!-- <ActionButton icon="arrow-up" size="small" class="mr-2" :grow_in_hover="false"/> -->
            <span class="cursor-pointer hover:font-bold" @click="emit('show_window', 'edit_row', row_number)">Editar</span>
            <span class="mx-2">|</span>
            <span class="cursor-pointer hover:font-bold" @click="emit('delete_row', row_number)">Excluir</span>
            <!-- <ActionButton icon="arrow-down" size="small" class="ml-2" :grow_in_hover="false"/> -->
        </div>
    </div>
</template>
<style scoped>
    @keyframes row_options_animation {
        from {height: 0;}
        to {height: 40px;}
    }
    .row_options {
        height: 40px;
        animation-name: row_options_animation;
        animation-duration: .3s;
    }
</style>