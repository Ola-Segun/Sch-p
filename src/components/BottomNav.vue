<script setup>
    import { Menubar, SpeedDial } from 'primevue';

    import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>
<template>
    <div class=" absolute z-10 top-5">
        <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ position: 'absolute', left: 0, top: 0 }" />
    </div>
</template>

<style scoped>
    .p-speeddial{
        background-color: #000;
    }
</style>