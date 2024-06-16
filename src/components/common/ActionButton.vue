<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        'icon': {
            'default': ''
        }, 
        'size': {
            'default': 'small'
        },
        'class': {
            'default': ''
        },
        'grow_in_hover': {
            'default': true
        },
        'title': {
            'default': ''
        }
    })

    const computed_classes = computed(() => {
        let size_classes = {
            "small": "w-7 h-7 text-md" + (props.grow_in_hover ? " hover:w-8 hover:h-8" : ""),
            "medium": "w-9 h-9 text-lg" + (props.grow_in_hover ? " hover:w-10 hover:h-10" : ""),
            "large": "w-10 h-10 text-2xl" + (props.grow_in_hover ? " hover:w-11 hover:h-11" : "")
        }

        return `${size_classes[props.size]} ${props.class}`
    })
</script>
<template>
    <div 
    :id="id"
    class="cursor-pointer bg-green rounded-full flex items-center justify-center text-white transition-all"
    :class="computed_classes"
    :title="title"
    >
        <ion-icon :name="icon"></ion-icon>
    </div>
</template>