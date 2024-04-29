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
            checked: localStorage.getItem('theme') === 'dark',
        }
    },

    methods: {
        toggleTheme() {
            let theme = localStorage.getItem('theme'),
                el = document.documentElement;

            theme = theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            el.setAttribute('data-theme', theme);
        }
    },
}
</script>

<style lang="sass" scoped>
@import "resources/sass/components/common/theme-switcher"
</style>
