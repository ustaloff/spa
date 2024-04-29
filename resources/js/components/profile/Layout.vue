<template>
    <component :is="Top"/>

    <component :is="Bar"/>

    <main class="">
        PROFILE
        <router-view/>
    </main>

    <component :is="Foo"/>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';

const Top = defineAsyncComponent(() => import('@/components/Top.vue'));
const Foo = defineAsyncComponent(() => import('@/components/Foo.vue'));
const Bar = defineAsyncComponent(() => import('@/components/profile/Bar.vue'));
</script>

<script>
export default {
    name: "layout",
}
</script>
