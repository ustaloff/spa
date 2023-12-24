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
const Bar = defineAsyncComponent(() => import('@/components/BarProfile.vue'));
const Foo = defineAsyncComponent(() => import('@/components/Foo.vue'));
</script>

<script>
import {mapActions, mapGetters} from 'vuex'
import fixVH from '@/mixins/fix-vh'

export default {
    name: "layout",

    mixins: [fixVH],

    data() {
        return {
            bar: false,
            //user:this.$store.state.auth.user
        }
    },

    created() {
        this.getBaseData();

        /*axios.get('http://localhost:8000/api/posts')
            .then(response => {
                console.log('response', response);
            });*/
        /*axios.get('api/posts')
            .then(response => {
                console.log('response', response);
            });*/
    },

    computed: {
        user() {
            return this.$store.state.auth.user;
        },
    },

    methods: {
        ...mapActions({
            signOut: "auth/logout",
            getBaseData: 'getBaseData'
        }),

        /*...mapActions({
            signOut: "auth/logout"
        }),*/

        async logout() {
            await axios.post('/logout').then(({data}) => {
                this.signOut()
                this.$router.push({name: "index"})
            })
        }
    }
}
</script>
