<script setup>
import PartialCard from '@/components/partialCard.vue';
import TopNav from '@/components/topNav.vue';
import StudentAccountCard from '@/components/StudentAccountCard.vue';
import StaffAccountCard from '@/components/StaffAccountCard.vue';
import HomeActions from '@/components/HomeActions.vue';
import HomeHistory from '@/components/HomeHistory.vue';
import BottomNav from '@/components/BottomNav.vue';
</script>

<template>
    <TopNav />
    <PartialCard height="h-[83%]" padding-t="p-0">
        <template #card-content>
            <div class="">

                <div class="flex flex-wrap gap-[20%]">

                    <!-- <StudentAccountCard /> -->
                    <StaffAccountCard />
                    <HomeActions />
                </div>
                <div class="mt-4">
                    <HomeHistory />
                </div>
                <!-- <BottomNav /> -->
            </div>

        </template>
    </PartialCard>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>