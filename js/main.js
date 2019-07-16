// Smooth Scroll Transition
// creates an array of all the 'a'
let anchorlinks = document.querySelectorAll('a[href^="#"]')

// Get's anchors Items
for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}



console.log("hello there");