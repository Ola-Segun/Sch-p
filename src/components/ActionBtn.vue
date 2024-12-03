<script setup>
    import { Button, SelectButton } from 'primevue';
    import { RouterLink } from 'vue-router';

    defineProps({
        link:{
            type: String,
            Required: true
        }
    })
</script>

<template>
    <RouterLink :to="link" class="action-btn-link">
        <Button variant="outlined" class="!border-2 grid shadow-lg action-button">
            <slot name="iconImg"></slot>
            <slot name="btnName"></slot>
        </Button>
    </RouterLink>


</template>

<style scoped>
    .p-button{
        scale: 0.9;
    }
</style>