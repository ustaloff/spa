export default {
    created() {
        let theme = localStorage.getItem('theme'),
            el = document.documentElement

        el.setAttribute('data-theme', theme);
    }
}
