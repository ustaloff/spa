<template>
    <component :is="Layout"/>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';
import {computed, onMounted, watch} from "vue";
import {useRoute, useRouter} from 'vue-router'

const router = useRouter();
let Layout = defineAsyncComponent(() => import('@/components/main/Layout.vue'));

watch(() => router.currentRoute.value, currentRoute => {
        let profile = currentRoute.matched.map((item) => {
            return item.name;
        }).includes('profile');

        let dashboard = currentRoute.matched.map((item) => {
            return item.name;
        }).includes('dashboard');

        let layout = dashboard ? 'dashboard' : profile ? 'profile' : 'main'
        Layout = defineAsyncComponent(() => import(`@/components/${layout}/Layout.vue`));
    }, {immediate: true}
)
</script>

<script>
import {mapActions, mapGetters} from 'vuex'
import setVH from '@/mixins/set-vh'
import setTheme from '@/mixins/set-theme'

export default {
    name: "app",

    mixins: [setVH, setTheme],

    created() {
        this.getBaseData();
    },

    methods: {
        ...mapActions({
            getBaseData: 'getBaseData'
        }),
    }
}
</script>
