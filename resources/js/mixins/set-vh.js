export default {
    mounted() {
        this.setVH();

        window.addEventListener('resize', this.setVH);
        window.addEventListener('scroll', this.setVH);
        window.addEventListener('touchend', this.setVH, false);
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.setVH);
        window.removeEventListener('scroll', this.setVH);
        window.removeEventListener('touchend', this.setVH);
    },

    methods: {
        setVH() {
            let innerHeight = .01 * window.innerHeight,
                objectStyle = document.documentElement.style;

            objectStyle.setProperty('--vh', innerHeight + 'px');
        },
    }
}
