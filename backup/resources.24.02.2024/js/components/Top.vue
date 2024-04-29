<template>
    <header class="header">
        <nav class="">
            <button class="hamburger" :area-expanded="bar" @click="$store.commit('SET_BAR_EXPANDED', !bar)">
                <div></div>
            </button>

            <div class="header__logo">
                <router-link :to="{name:'index'}" class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                         width="270px" height="270px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red">
                            GH
                        </text>
                        <circle cx="80" cy="50" r="5" fill="#fcb711">
                            <animate attributeName="cx" values="80;59" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="cy" values="50;78" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="fill" values="#fcb711;#f37021" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="59" cy="78" r="5" fill="#f37021">
                            <animate attributeName="cx" values="59;25" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="cy" values="78;67" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="fill" values="#f37021;#cc004c" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="25" cy="67" r="5" fill="#cc004c">
                            <animate attributeName="cx" values="25;25" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="cy" values="67;32" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="fill" values="#cc004c;#6460aa" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="25" cy="32" r="5" fill="#6460aa">
                            <animate attributeName="cx" values="25;59" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="cy" values="32;21" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="fill" values="#6460aa;#0089d0" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="59" cy="21" r="5" fill="#0089d0">
                            <animate attributeName="cx" values="59;80" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="cy" values="21;49" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                            <animate attributeName="fill" values="#0089d0;#fcb711" keyTimes="0;1"
                                     dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                    </svg>
                </router-link>
            </div>

            <!--            <ul class="nav">
                            <li class="nav-item">
                                <router-link :to="{name:'dashboard'}" class="nav-link">Dashboard</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'map'}" class="nav-link">Map</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{name:'products'}" class="nav-link">Products</router-link>
                            </li>
                            <li class="nav-item" v-if="user.name">
                                <router-link :to="{name:'profile'}" class="nav-link">Profile</router-link>
                            </li>
                            <li class="nav-item" v-if="!user.name">
                                <router-link :to="{name:'login'}" class="nav-link">Login Now!</router-link>
                            </li>
                            <li class="nav-item" v-if="!user.name">
                                <router-link :to="{name:'register'}" class="nav-link">Register Now!</router-link>
                            </li>
                            <li class="nav-item" v-if="user.name">
                                <a href="javascript:void(0)" @click="logout" class="nav-link">Logout {{ user.name }}</a>
                            </li>
                        </ul>-->

            <ul class="nav">
                <li class="nav-item">
                    <router-link :to="`/items`" class="nav-link">Products</router-link>
                </li>
                <li class="nav-item" v-for="(item, index) in baseData">
                    <router-link :to="`/items/${item.name}`" class="nav-link">{{ item.name }}</router-link>
                </li>
                <li class="nav-item" v-if="!user.name">
                    <router-link :to="{name: 'login'}" class="nav-link">Login Now!</router-link>
                </li>
                <li class="nav-item" v-if="!user.name">
                    <router-link :to="{name: 'register'}" class="nav-link">Register Now!</router-link>
                </li>
                <li class="nav-item" v-if="user.name">
                    <router-link :to="{name: 'profile'}" class="nav-link">Profile</router-link>
                </li>
                <li class="nav-item" v-if="user.name">
                    <router-link :to="{name: 'dashboard'}" class="nav-link">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="user.name">
                    <a href="javascript:void(0)" @click="this.logout" class="nav-link">Logout {{ user.name }} :
                        {{ user.role }}</a>
                </li>
            </ul>

            <!--label for="distance">Distance (between 0 and 50): {{ distance }}</label>
            <input type="range" id="distance" name="distance" v-model="distance" min="0" max="50"
                   @change="distanceChange"-->

            <component :is="ThemeSwitcher"/>


        </nav>

    </header>
</template>

<script setup>
import {defineAsyncComponent} from 'vue';

const ThemeSwitcher = defineAsyncComponent(() => import('@/components/ThemeSwitcher.vue'));
</script>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: "top",

    data() {
        return {
            aside: false,
            menu: [],
            distance: 5,
        }
    },

    created() {
        //this.getBaseData();
    },

    mounted() {
    },

    computed: {
        /*...mapGetters({
            baseData: 'baseData'
        }),*/

        ...mapGetters(['baseData']),

        user() {
            return this.$store.state.auth.user;
        },

        bar() {
            return this.$store.state.bar;
        },
    },

    methods: {
        ...mapActions({
            signOut: "auth/logout",
            getBaseData: 'getBaseData',
        }),

        //...mapActions(['auth/logout']),

        async logout() {

            //console.log('logout', this.user);
            //return;

            await axios.post('/logout').then(({data}) => {
                //this['auth/logout']();
                this.signOut();
                //this.$router.push({name: "index"})
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
@import "../../sass/components/top"
</style>
