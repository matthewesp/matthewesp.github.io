// Smooth Scroll Transition
// creates an array of all the 'a'
let anchorlinks = document.querySelectorAll('a[href^="#"]')

// Get's anchors Items
for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        const yCoordinate = target.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -60;

        window.scrollTo({
            top: yCoordinate + yOffset,
            behavior: 'smooth'
        });
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

//jquery spyscroll
$('body').scrollspy({ target: '#navbar' })

console.log("hello there");