<template>
    <component :is="Top"/>

    <component :is="Bar"/>

    <main class="">
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
</script>

<script>
export default {
    name: "layout",
}
</script>
