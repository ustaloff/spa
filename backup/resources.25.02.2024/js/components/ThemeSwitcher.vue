<template>
    <label id="switch" class="switch">
        <input type="checkbox" @change="toggleTheme()" :checked="checked">
        <span class="slider round"></span>
    </label>
</template>

<script>
export default {
    name: "theme-switcher",

    data() {
        return {
            checked: localStorage.getItem('theme') === 'theme-dark',
        }
    },

    methods: {
        toggleTheme() {
            localStorage.getItem('theme')
                ? localStorage.removeItem('theme')
                : localStorage.setItem('theme', 'theme-dark');

            document.documentElement.classList.toggle('theme-dark');
        }
    },
}
</script>

<style lang="sass" scoped>
@import "../../sass/components/theme-switcher"
</style>
