document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animate-delay]').forEach(el => {
        const seconds = el.getAttribute('data-animate-delay')

        setTimeout(() => {
            el.classList.add('animate')
        }, seconds * 1000)
    })
})