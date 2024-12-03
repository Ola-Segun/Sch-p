<script setup>
    import { Card } from 'primevue';
    import { defineProps } from 'vue';

    defineProps({
        height:{
            type: String,
            default: 'h-[87%]'
        },
        paddingT:{
            type: String,
            default: 'p-0'
        },
        margin:{
            type:String,
            default: 'mt-5'
        },
        overflow:{
            type: String,
            default: 'overflow-hidden'
        },
    })
    
</script>
<template>
    <Card :class="`${height} ${paddingT} ${overflow} cus-m-5 w-screen self-end transition-[height] duration-[.5s]` ">
        <template #title>
            <div class=" text-text-primary font-bold">
                <slot name="card-title"></slot>
            </div>
        </template>
        <template #content :class="`h-full z-10`">
                <slot name="card-content"></slot>
        </template>
    </Card>
</template>


<!-- <style scoped>
.p-card{
    background-color: ;
}
</style> -->