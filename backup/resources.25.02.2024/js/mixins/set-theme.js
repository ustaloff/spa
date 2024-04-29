export default {
    created() {
        //this.setTheme();
        if (localStorage.getItem('theme') === 'theme-dark') {
            document.documentElement.className = 'theme-dark';
        }
    },

    methods: {
        /*setTheme() {
            if (localStorage.getItem('theme') === 'theme-dark') {
                document.documentElement.className = 'theme-dark';
            }
        },*/
    }
}
