<template>
    <!--    <aside :area-expanded="bar">
            Sidebar
        </aside>-->

    <Sidebar v-model:visible="showSidebar" :modal="false" :showCloseIcon="true" position="left" @hide="setClosedOption">
        <template #header>
            <div class="flex align-items-center gap-2">
                <!--                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />-->
                <span class="font-bold">Amy Elsner</span>


                <a href="javascript:void(0)" class="sidebar__close" >
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 17.285L16.8299 8.45508" stroke="#001219" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M8 17.285L16.8299 8.45508" stroke="#ABDDED" stroke-opacity="0.6" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8299 17.285L8 8.45508" stroke="#001219" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M16.8299 17.285L8 8.45508" stroke="#ABDDED" stroke-opacity="0.6" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
    </Sidebar>

    showSidebar: {{ showSidebar }}
    <!--    <Button icon="pi pi-plus" @click="bar = true" />-->
</template>

<script setup>
//import {ref} from 'vue';
//let bar = ref(false);
import {defineAsyncComponent} from 'vue';

//const ThemeSwitcher = defineAsyncComponent(() => import('@/components/ThemeSwitcher.vue'));
import {defineEmits, watch, ref, defineProps, toRef, toRefs} from 'vue'
//const props = defineProps(['showSidebar'])

//let showSidebar = props.showSidebar

//let props = defineProps(['showSidebar'])

let props = defineProps({
    //showSidebar: Boolean,
    showSidebar: {
        default: false,
        type: Boolean
    }
});

//let {showSidebar} = toRefs(props);
let {showSidebar} = toRefs(props);
//let showSidebar = props.showSidebar


console.log('bar', showSidebar);
console.log('bar2', props.showSidebar);



let setClosedOption = () => {
    console.log('bar3', bar);
    showSidebar.value = false
    console.log('bar4', bar);
}
</script>

<script>
import {mapActions} from 'vuex'

export default {
    name: "bar",

    data() {
        return {
            aside: false,
            distance: 5,
        }
    },

    mounted() {
        /*if (localStorage.getItem('theme') === 'theme-dark') {
            this.setTheme('theme-dark');
            document.getElementById('slider').checked = false;
        } else {
            this.setTheme('theme-light');
            document.getElementById('slider').checked = true;
        }*/

        /* if (localStorage.getItem('theme') === 'theme-dark') {
             document.documentElement.className = 'theme-dark';
             document.getElementById('slider').checked = true;
         }*/
    },

    computed: {
        user() {
            return this.$store.state.auth.user;
        },

        bar() {
            return this.$store.state.bar;
        },
    },

    methods: {
        ...mapActions({
            signOut: "auth/logout"
        }),

        async logout() {

            //console.log('logout', this.user);
            //return;

            await axios.post('/logout').then(({data}) => {
                this.signOut()
                this.$router.push({name: "index"})
            })
        },

        distanceChange() {
            console.log('distanceChange', this.distance);
        },

        /*setTheme(themeName) {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        },

        toggleTheme() {
            if (localStorage.getItem('theme')) {
                localStorage.removeItem('theme');
                document.documentElement.classList.remove('theme-dark');
            } else {
                localStorage.setItem('theme', 'theme-dark');
                document.documentElement.className = 'theme-dark';
            }
        }*/
    },
}
</script>

<style lang="sass" scoped>
@import "../../../sass/components/bar"
</style>
