import $ from 'jquery'

$(document).ready(() => {
        $('#container ul li').each((i, e) => {
            let current = e.innerText
            e.innerHTML = 'from node ' + current
        })
        setTimeout((args) => alert(`Welcome jquery / node / babel webpack - ${args.p}`),
            1000,
            {p: 'setTimeout arg'}
        )
    }
)
