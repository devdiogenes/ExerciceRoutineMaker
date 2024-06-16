<script setup>
    import { computed } from 'vue';

    const props = defineProps(['size', 'class']);
    
    
    const computed_classes = computed(() => {
        let size_classes = {
            "small": "w-14 md:w-28",
            "medium": "w-28 md:w-52",
            "large": "w-60 md:w-96"
        }
        
        return `${size_classes[props.size]} ${props.class}`
    })
        
</script>
<template>
    <div class="text-center sm:text-center m-5 sm:m-3 truncate" :class="computed_classes">
        <slot />
    </div>
</template>