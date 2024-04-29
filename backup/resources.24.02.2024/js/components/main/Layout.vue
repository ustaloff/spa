<template>
    <component :is="Top"/>

    <component :is="Bar"/>

    <main class="">
        MAIN
        <router-view/>
    </main>

    <component :is="Foo"/>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';
import {computed, onMounted, watch} from "vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute();

/*const isChild = computed(() => (name) => {
    console.log("isChild('main')", route.matched);

    return route.matched.map((item) => {
        return item.name;
    }).includes(name);
});*/

/*computed(() => (name) => {
    console.log("isChild('main')", route.matched);

    return route.matched.map((item) => {
        return item.name;
    }).includes(name);
});*/

//computed(() => route, () => console.log('ddddd', route.name));

watch(() => route, () => (toParams, previousParams) => {
    console.log('this.$routeddddddddddddddddddd', toParams, previousParams);

    //this.test='main'
}, {immediate: true, deep: true});

function setup() {
    const router = useRouter();

    watch(() => router.currentRoute.value, currentRoute => {
            console.log(currentRoute.path)
        }, {immediate: true}
    )
}

//setup();

/*setup() {
    const router = useRouter()
    watch(
        () => router.currentRoute.value,
        currentRoute=> {
            console.log(currentRoute.path)
        },
        { immediate: true }
    )
}*/

onMounted(() => {
    console.log('mounted');

    /*watch(() => route.name, () => (toParams, previousParams) => {
        console.log('this.$routeddddddddddddddddddd', toParams, previousParams);

        //this.test='main'
    }, {immediate: true, deep: true});*/

    /*const router = useRouter();

    watch(() => router.currentRoute.value, currentRoute => {
            console.log(currentRoute.path)
        }, {immediate: true}
    )*/
})

const router = useRouter();

watch(() => router.currentRoute.value, currentRoute => {
        console.log(currentRoute)
    }, {immediate: true}
)

/*watch(
    () =>
        route((to, from) => { //got error here
                if (route.query.preference == "wfh") {
                    //const {place, ...to} = route.query;
                    // $router.replace({ query: to });
                }
                console.log(to, from);
                //getTopics(route.query);
            },
        ))*/

//(isChild('main') ? 'main/' : '')

//console.log("isChild('main')", route.matched);

const Top = defineAsyncComponent(() => import('@/components/Top.vue'));
const Bar = defineAsyncComponent(() => import('@/components/Bar.vue'));

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
            test: '',
            bar: false,
            //user:this.$store.state.auth.user
        }
    },

    created() {
        console.log('localStorage', localStorage);
        //console.log('this.$route', this.$route);


        this.$watch(
            () => this.$route,
            (toParams, previousParams) => {
                //console.log('this.$route', toParams, previousParams);

                //this.test='main'
            }
        )

        if (localStorage.getItem('theme') === 'theme-dark') {
            document.documentElement.className = 'theme-dark';
        }

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
