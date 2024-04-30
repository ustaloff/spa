<template>
    <component :is="Top" @showSidebar="showSidebar"/>

    <component :is="Bar" :showSidebar="bar"/>

    <main class="">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />

        MAIN

        <div>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
            dsfsdfsdfsdfsdfsdfdsf<br/>
        </div>

        <ul>
            <li class="">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>
            <li class="t">aaaaaaaa</li>

        </ul>

        <ul>
            <li>aaaaaaaa</li>
        </ul>

        <dl>
            <dt>gigogne</dt>
            <dd>
                <dl>
                    <dt>fusée</dt>
                    <dd>multistage rocket</dd>
                    <dt>table</dt>
                    <dd>nest of tables</dd>
                </dl>
            </dd>
        </dl>


        <router-view/>
    </main>

    <component :is="Foo"/>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';

const Top = defineAsyncComponent(() => import('@/components/Top.vue'));
const Foo = defineAsyncComponent(() => import('@/components/Foo.vue'));
const Bar = defineAsyncComponent(() => import('@/components/main/Bar.vue'));

import {ref} from 'vue';
let bar = ref(false);
//let bar = false;


let showSidebar = () => {
    console.log('main1', bar);
    bar.value = true
    console.log('main2', bar);
}
</script>

<script>
export default {
    name: "layout",
}
</script>
