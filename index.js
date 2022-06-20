const body = document.querySelector('body')
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.nav-links')
const navLinks = document.querySelectorAll('.scroll-link')
const cards = document.querySelectorAll('.card')
const navbar = document.querySelector('.navbar')
// top link 
const topLink = document.querySelector('.top-link')
window.onscroll = () => {
    const scrollHeight = window.pageYOffset
    if (scrollHeight > 1200) {
        topLink.style.display = 'block'
    } else {
        topLink.style.display = 'none'
    }

    linksContainer.classList.remove('show-link')
    navToggle.innerHTML = `<i class="fas fa-bars"></i>`

}

// toggle 

navToggle.addEventListener("click", () => {
    body.classList.toggle('show-link')
    linksContainer.classList.toggle('show-link')
    if (linksContainer.classList.contains('show-link')) {
        navToggle.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        navToggle.innerHTML = `<i class="fas fa-bars"></i>`
    }
    // console.log(navToggle.children)

})

// remove show-links 
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        linksContainer.classList.remove('show-link')
        body.classList.remove('show-link')
        navToggle.innerHTML = `<i class="fas fa-bars"></i>`


        const id = e.target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
      
    
    const position = element.offsetTop - navbar.getBoundingClientRect().height
    //   console.log(position)

      window.scrollTo  ({
      left: 0,
   top: position
      })
    })
})

