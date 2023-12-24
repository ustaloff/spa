export function loadScript(src, id = '') {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.async = true
        script.defer = true
        script.src = src

        if (id) {
            const scriptExists = document.getElementById(id)

            if (scriptExists) {
                return resolve(1)
            }

            script.id = id
        }

        const head = document.head || document.getElementsByTagName('head')[0]
        head.appendChild(script)

        script.onload = resolve
        script.onerror = reject
    })
}
