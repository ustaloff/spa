<template>
    <component :is="Top"/>

    <component :is="Bar"/>

    <main class="">
        DASHBOARD
        <router-view/>
    </main>

<!--    <component :is="Foo"/>-->
</template>

<script setup>
import {defineAsyncComponent} from 'vue';

const Top = defineAsyncComponent(() => import('@/components/Top.vue'));
const Foo = defineAsyncComponent(() => import('@/components/Foo.vue'));
const Bar = defineAsyncComponent(() => import('@/components/dashboard/Bar.vue'));
</script>

<script>
export default {
    name: "layout",
}
</script>
