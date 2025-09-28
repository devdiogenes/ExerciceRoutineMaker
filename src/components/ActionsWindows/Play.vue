<script setup>
    import { ref, computed } from 'vue';

    import Window from '/src/components/_common/Window.vue';
    import ExerciceRoutine from '/src/services/ExerciceRoutine.js';
    import ActionButton from '/src/components/_common/ActionButton.vue';
    
    const emit = defineEmits(['close'])

    const routine = new ExerciceRoutine();
    const data = routine.get_routine();
    
    function get_sets() {
        let p = [];
        for (let exercice of data) {
            for (let i = 1; i <= exercice['sets']; i++) {
                let set = {...exercice};
                set.current_set = i;
                p.push(set);
                if (exercice.rest) {
                    p.push({
                        current_set: i,
                        exercice: "Descanse",
                        qty: exercice.rest,
                        type: "Segundos",
                    });
                }
            }
        }
        return p;
    }
    
    const sets = get_sets();
    const current_set_index = ref(0);
    const current_exercice = computed(() => sets[current_set_index.value]);
    const next_exercice = computed(() => sets[current_set_index.value + 1]);
    const current_countdown_value = ref(current_exercice.value.qty);
    const countdown_active = ref(false);

    function change_exercice(steps = 1) {
        current_set_index.value += steps;
        if (current_set_index.value >= sets.length) {
            emit('close');
        }

        current_countdown_value.value = current_exercice.value.qty;
        countdown_active.value = Boolean(current_exercice.value.exercice == "Descanse");
    }

    setInterval(() => {
        if (countdown_active.value) {
            current_countdown_value.value -= 1;
            if (current_countdown_value.value <= 0) {
                change_exercice();
            }
        }
    }, 1000);
</script>
<template>
    <Window @close="emit('close')" :title="current_exercice.exercice">
        <div class="text-center">
            <div v-if="current_exercice.exercice != 'Descanse'">
                {{ current_exercice.current_set }} / {{ current_exercice.sets }}
            </div>
            <div v-else-if="next_exercice">
                Próximo: {{ next_exercice.exercice }}
            </div>
            <div v-else>
                Fim
            </div>
            <div class="text-8xl mt-5 font-bold text-green">
                {{ current_exercice.type == "Segundos" ? current_countdown_value : current_exercice.qty }}
            </div>
            <div class="text-xl">
                {{ current_exercice.type }}
            </div>
            <div class="text-3xl mt-3 flex items-center justify-center">
                <div class="w-10">
                    <ion-icon 
                        v-if="current_set_index > 0"
                        name="chevron-back-outline"
                        style="margin-bottom: -17px"
                        class="cursor-pointer hover:text-green"
                        @click="change_exercice(-1)"
                    />
                </div>
                <div class="w-28 flex items-center justify-center mt-6 mx-5">
                    <template v-if="current_exercice.type == 'Segundos'">
                        <button 
                        class="bg-black text-white px-5 py-1 rounded-full text-lg w-24 hover:w-32 transition-all"
                        @click="countdown_active = !countdown_active"
                        >
                            {{ countdown_active ? 'Parar' : 'Iniciar' }}
                        </button>
                    </template>
                    <template v-else>
                        <ActionButton title="Proximo" icon="checkmark" size="large" @click="change_exercice()"/>
                    </template>
                </div>
                <div class="w-10">
                    <ion-icon 
                        name="chevron-forward-outline"
                        style="margin-bottom: -17px"
                        class="cursor-pointer hover:text-green"
                        @click="change_exercice()"
                    />
                </div>
            </div>
        </div>
    </Window>
</template>