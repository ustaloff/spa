<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>SPA Authentication using Laravel 9 Sanctum, Vue 3 and Vite - TechvBlogs</title>

    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('favicon.ico') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">

    <!-- Fonts -->
    <!--link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"-->

    @vite(['resources/js/app.js'])
</head>
<body>
<div id="app">
    <router-view/>
</div>

<script type="application/javascript">
    /*(function () {


        if (localStorage.getItem('theme') === 'theme-dark') {
            document.documentElement.className = 'theme-dark';
        }
    })();*/

    /*(function () {
        const queryString = window.location.search,
            urlParams = new URLSearchParams(queryString),
            stag = urlParams.get('stag'),
            links = document.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            links[i].href = links[i].href.replace('{stag}', stag);
        }
    })();*/
</script>

<script>
    /*(function () {
        const queryString = window.location.search,
            urlParams = new URLSearchParams(queryString),
            stag = urlParams.get('stag');

        if (stag) {
            setTimeout(() => {
                document.querySelectorAll('a').forEach(link => {
                    link.href += `?stag=${stag}#signup`;
                });
            }, 1000);
        }
    })();*/
</script>
</body>
</html>

