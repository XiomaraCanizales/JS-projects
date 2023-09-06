// grab elements from HTML
const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

// add eventListener to parent
about.addEventListener('click', function(e) {
    // search for buttons with data-id
    const id = e.target.dataset.id
    if (id) {
        // remove&add active class
        btns.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })
        // hide&display articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})