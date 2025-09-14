<script setup>
    import { ref } from 'vue';

    import Window from '/src/components/_common/Window.vue';
    import fields from '/fields.json';
    import ExerciceRoutine from '/src/services/ExerciceRoutine.js';

    const props = defineProps({
        "row_number": {
            "default": null
        }
    });

    const emit = defineEmits(['close']);

    const routine = new ExerciceRoutine();
    const data = ref(routine.get_routine());
    const form_values = ref(props.row_number !== null ? data.value[props.row_number] : {});

    if (!Object.keys(form_values.value).length) {
        fields.forEach(field => {
            form_values.value[field.name] = field.default;
        })
    }

    function save_changes() {
        routine.update_exercice(props.row_number, form_values.value);
        emit('close');
    }

</script>
<template>
    <Window @close="emit('close')" title="Editar Exercício">
        <form class="flex flex-col m-2" @submit.prevent="save_changes">
            <div v-for="field in fields" class="flex flex-col my-2">
                <label for="sets">{{ field.label }}:</label>
                <input 
                v-model="form_values[field.name]"
                :type="field.type"
                :id="`field-${field.name}`"
                :name="field.name"
                />
            </div>
            <div class="w-full flex justify-center items-center mt-4">
                <input type="submit" value="Salvar" class="bg-green px-5 py-1 text-white rounded-full" />
            </div>
        </form>
    </Window>
</template>