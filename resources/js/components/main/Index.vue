<template>
    <div class="main">
        Main Page

        <div id="translate">Google translation here please</div>
    </div>
</template>

<script>
import {loadScript} from '@/utils/load-script';

export default {
    name: "index",

    data() {
        return {
            count: 30,
            //publicPath: process.env.APP_URL,
            //placeholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOmF1dG87YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2s7IiB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CiAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlOTBjNTkiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMDs0MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMC4yIDAgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgPC9jaXJjbGU+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDZkZmYwIiBzdHJva2Utd2lkdGg9IjIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMDs0MCIga2V5VGltZXM9IjA7MSIga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMXMiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49Ii0wLjVzIj48L2FuaW1hdGU+CjwvY2lyY2xlPgo8L3N2Zz4K',
            placeholder: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiCiAgICAgdmlld0JveD0iMCAwIDEwMCAxMDAiCiAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJkb2RnZXJibHVlIiBzdHJva2Utd2lkdGg9IjIiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjA7NDAiIGtleVRpbWVzPSIwOzEiCiAgICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMCAwLjIgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSIwcyI+PC9hbmltYXRlPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIKICAgICAgICAgICAgICAgICBrZXlTcGxpbmVzPSIwLjIgMCAwLjggMSIgY2FsY01vZGU9InNwbGluZSIgYmVnaW49IjBzIj48L2FuaW1hdGU+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZG9kZ2VyYmx1ZSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwOzQwIiBrZXlUaW1lcz0iMDsxIgogICAgICAgICAgICAgICAgIGtleVNwbGluZXM9IjAgMC4yIDAuOCAxIiBjYWxjTW9kZT0ic3BsaW5lIiBiZWdpbj0iLTAuNXMiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiCiAgICAgICAgICAgICAgICAga2V5U3BsaW5lcz0iMC4yIDAgMC44IDEiIGNhbGNNb2RlPSJzcGxpbmUiIGJlZ2luPSItMC41cyI+PC9hbmltYXRlPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=',
        }
    },

    created() {
        /*axios.get('http://localhost:8000/api/posts')
            .then(response => {
                console.log('response', response);
            });*/
        /*axios.get('api/posts')
            .then(response => {
                console.log('response', response);
            });*/
    },

    mounted() {
        //https://adminway.ru/avtomaticheskii-perevod-vashego-saita-s-pomoshchyu-js-skripta-google-translate
        //https://stackoverflow.com/questions/37667671/is-it-possible-to-access-to-google-translate-api-for-free
        //https://github.com/cjvnjde/google-translate-api-browser
        //https://www.conveythis.com/ru/how-do-i-add-the-translate-button-to-my-website/
        //https://habr.com/ru/articles/438588/

        //new google.translate.TranslateElement({pageLanguage: 'ru'}, 'translate')

        return false;

        var sourceText = 'Могу ли я продавать товар по уникальному коду?';
        var sourceLang = 'ru';
        var targetLang = 'en';
        console.log(sourceText);

        //return false;

        //https://www.youtube.com/watch?v=f3q5OAehPJM&ab_channel=PythonToday
        //https://github.com/ssut/py-googletrans/blob/master/googletrans/constants.py#L3:1
        var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);

        url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ar&dt=t&q=test';

        console.log('url', url);

        axios.get(url)
            .then(response => {
                console.log('response', response);
                alert(response);
            })
            .catch(error => {
                console.log('error', error);
                alert(error);
            });


        return false;

        loadScript('//translate.google.com/translate_a/element.js', 'g-translate')
            .then(() => {

                //new google.translate.TranslateElement({pageLanguage: 'ru'}, 'translate')
                let t = new google

                console.log('ok', t);
            })
            .catch((error) => console.error(error))
    },

    methods: {}
}
</script>
