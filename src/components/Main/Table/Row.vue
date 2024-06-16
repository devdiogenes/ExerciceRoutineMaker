<script setup>
    import Cell from './Row/Cell.vue'

    import { computed } from 'vue'

    const props = defineProps({
        "main": {
            "default": false
        },
        "values": {
            "default": {
                "numero": "Nº",
                "series": "Series",
                "qtd": "QTD",
                "formato": "Formato",
                "descanso": "Descanso",
                "exercicio": "Exercício",
            }
        },
        "row_number": {
            "default": 0
        },
        "is_focused": {
            "default": false
        }
    })

    const emit = defineEmits(['focusin', 'focusout']);

    const sizes = {
        "numero": "small",
        "series": "small",
        "qtd": "small",
        "formato": "small",
        "descanso": "small",
        "exercicio": "large",
    };

    const computed_classes = computed(() => {
        if (props.main) {
            return 'font-bold text-white bg-green';
        }
        if (props.values.numero % 2 == 0){
            return 'cursor-pointer bg-white';
        } else {
            return 'cursor-pointer bg-silver';
        }
    });

    function hide_on_mobile(field) {
        let classes = "";
        if (["series", "qtd", "formato", "descanso"].includes(field)) {
            return "hidden sm:block";
        }
        return "";
    };

    function cell_classes(field) {
        let classes = "";
        //classes = (field == "numero") ? "text-center" : "text-center";
        return `${classes} ${hide_on_mobile(field)}`;
    };

    function emit_event(event) {
        if (!props.main) {
            emit(event);
        }
    }

</script>
<template>
    <div :tabindex="values['numero']"
    class="w-full flex h-10 sm:h-8 items-center justify-center sm:justify-between" 
    :class="computed_classes"
    @focusin="emit_event('focusin')"
    @focusout="emit_event('focusout')"
    >
        <template v-for="([key, value], index) in Object.entries(values)">
            <Cell :size="sizes[key]" :class="cell_classes(key)">
                {{ value }}
            </Cell>
            <div v-if="key != 'exercicio'" class="w-[1px] h-4 bg-green" :class="hide_on_mobile(key)" />
        </template>
    </div>
    <div v-if="!main && is_focused" :id="`row_${values['numero']}`">test</div>
</template>