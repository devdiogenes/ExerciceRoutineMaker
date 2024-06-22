<script setup>
    import Settings from './ActionsWindows/Settings.vue';
    import ChangeRoutine from './ActionsWindows/ChangeRoutine.vue';
    import Play from './ActionsWindows/Play.vue';
    import EditRow from './ActionsWindows/EditRow.vue';

    const props = defineProps({
        current: {
            default: ""
        }
    })

    const emit = defineEmits(['close']);

</script>
<template>
    <Settings v-if="current == 'settings'" @close="emit('close')"/>
    <ChangeRoutine v-if="current == 'change_routine'" @close="emit('close')"/>
    <Play v-if="current == 'play'" @close="emit('close')"/>
    <EditRow v-if="current == 'edit_row'" @close="emit('close')"/>
</template>