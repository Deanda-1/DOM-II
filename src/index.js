import './less/index.less'

// Your code goes here!
 window.onload = function (event) {
    console.log(`event ${event.type} fired! Ready to go`)
    const heading = document.querySelector('h1')
    heading.textContent = "READY TO GO!!"

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    document.body.addEventListener('click', event => {
        event.target.classList.toggle('mirror')
    })

    document.body.addEventListener('dblclick', event => {
        event.target.outerHTML = ''
    })

    window.addEventListener('keydown', event => {
        if (event.key == 6) {
            document.body.innerHTML = "<h1> YOU RAN ORDER </h1>"
        }
    })

    document.body.addEventListener('mousemove', event => {
        const {clientX, clientY} = event 
    })

    const destination = document.querySelectorAll{'.destination'}
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
 }


