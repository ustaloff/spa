<template>
    <div class="product-list">
        <!--        <div v-for="index in count" class="product-list__item product-item">-->

        Items

        <a href="https://winsroyal.com/ar">ffffffffffff</a>
        <a href="https://winsroyal.com/ar">ffffffffffff</a>
        <a href="https://winsroyal.com/ar">ffffffffffff</a>
        <a href="https://winsroyal.com/ar">ffffffffffff</a>
        <a href="https://winsroyal.com/ar">ffffffffffff</a>


        <Button label="Submit" />

        <div v-for="(item, index) in this.items" class="product-list__item product-item">
            <div class="product-item__box">
                <div class="product-item__header">
                    Name: {{ item.name }}
                </div>

                <div class="product-item__content">
                    <div class="product-item__image">
                        <!--                        <img loading="lazy" class="lazy" alt=""
                                                     :src="placeholder"
                                                     data-src="https://cdn.pixabay.com/photo/2023/03/18/14/59/fox-7860789_960_720.jpg"
                                                     data-srcset="https://cdn.pixabay.com/photo/2023/03/19/20/59/rabbit-7863312_960_720.jpg">-->
                        <img loading="lazy" class="lazy" alt=""
                             :src="placeholder"
                             :data-src="getSrc(index)"
                             :data-srcset="getSrc(index)">
                    </div>
                    <div class="product-item__data">
                        Name: {{ item.name }}
                    </div>
                </div>

                <div class="product-item__footer">
                    Price: {{ item.amount }}
                </div>


            </div>
        </div>

        <div class="more"></div>
    </div>
</template>

<script>
export default {
    name: "items",

    data() {
        return {
            items: [],
            count: 30,
            //publicPath: process.env.APP_URL,
            //placeholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2s7IiB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlOTBjNTkiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMDs0MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC4yIDAgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDZkZmYwIiBzdHJva2Utd2lkdGg9IjIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMDs0MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49Ii0wLjVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPgo8L3N2Zz4K',
            placeholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiCiAgICAgdmlld0JveD0iMCAwIDEwMCAxMDAiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJkb2RnZXJibHVlIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjA7NDAiIGtleVRpbWVzPSIwOzEiCiAgICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIKICAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjBzIj48L2FuaW1hdGU+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZG9kZ2VyYmx1ZSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwOzQwIiBrZXlUaW1lcz0iMDsxIgogICAgICAgICAgICAgICAgIGtleVNwbGluZXM9IjAgMC4yIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiCiAgICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMC4yIDAgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=',
        }
    },

    created() {
        this.getItems(this.$route);
    },

    async beforeRouteUpdate(to, from) {
        this.getItems(to);
    },

    mounted() {
        //return;
        /*this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log(toParams, previousParams);
            }
        )*/

        //return false;

        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    //console.log('test');
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    //lazyImageObserver.unobserve(lazyImage);

                    lazyImage.classList.toggle("visible");

                    lazyImageObserver.unobserve(lazyImage);
                } else {
                    //let lazyImage = entry.target;
                    //lazyImage.classList.remove("visible");
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });


        const intersectionObserver = new IntersectionObserver(entries => {
            console.log('intersectionObserver', entries);
            if (entries[0].isIntersecting) {
                //this.count += 30;
            }

            /*setTimeout(() => {
                let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
                lazyImages.forEach(function (lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }, 100);*/

            // load more content;
            //loadItems(10);
        });
// start observing
        intersectionObserver.observe(document.querySelector(".more"));


//product-list
        // Select the node that will be observed for mutations
        const targetNode = document.querySelector(".product-list");

// Options for the observer (which mutations to observe)
        const config = {attributes: true, childList: true, subtree: true};

// Callback function to execute when mutations are observed
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    //console.log("A child node has been added or removed.");
                    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
                    lazyImages.forEach(function (lazyImage) {
                        lazyImageObserver.observe(lazyImage);
                    });

                } /*else if (mutation.type === "attributes") {
                    console.log(`The ${mutation.attributeName} attribute was modified.`);
                }*/
            }
        };

// Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    },

    methods: {
        getSrc(index) {
            let i = index % 6;
            return `/img/p-${i}.jpg`;
            //return `${@}/public/img/p-${i}.jpg`;
        },

        getItems(route) {
            let service = route.params && route.params.service || '';
            console.log('service', service);

            //return;`api/get-items/${service}?service=${service}
            axios.get(`/api/get-items?service=${service}`)
                .then(response => {
                    this.items = response.data;
                    console.log('responsesss', response);
                })
                .catch((error) => {
                    console.log(error.res.data);
                });
        },
    }
}
</script>

<style lang="sass" scoped>
@import "resources/sass/components/product-list"
</style>
