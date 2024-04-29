<template>
    <aside :area-expanded="bar">
        Sidebar admin
    </aside>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';

const ThemeSwitcher = defineAsyncComponent(() => import('@/components/ThemeSwitcher.vue'));
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
@import "../../sass/components/bar"
</style>
