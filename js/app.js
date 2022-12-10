/* - - - - Navigation scroll effect - - - - */
const headerScroll = () => {
    const headerElement = document.querySelector(".header")
    this.scrollY >= 30 ? headerElement.classList.add("active") : headerElement.classList.remove("active")
}

window.addEventListener("scroll", headerScroll)

const navigationScroll = () => {
    const navigationContainer = document.querySelector(".navigation-container")
    this.scrollY >= 30 ? navigationContainer.classList.add("active") : navigationContainer.classList.remove("active")
}

window.addEventListener("scroll", navigationScroll)

/* - - - - Hamburger menu toggle - - - - */
const menuToggler = document.querySelector("#menu-toggler")
const navigationContainer = document.querySelector(".navigation-container")
const barTop = document.querySelector(".bar-top")
const barMid = document.querySelector(".bar-mid")
const barBottom = document.querySelector(".bar-bottom")
const hamburgerMenu = document.querySelector(".hamburger-menu")

const toggleMenu = () => {
    navigationContainer.classList.toggle("open")
    barTop.classList.toggle("active")
    barMid.classList.toggle("active")
    barBottom.classList.toggle("active")
    hamburgerMenu.classList.toggle("active")
}

menuToggler.addEventListener("click", toggleMenu)


/* - - - - Close when menu links clicked - - - - */
const listItemsToggle = (e) => {
    if ((e.target.classList.contains("navbar__list-item"))
        || (e.target.classList.contains("navbar__list-link"))) {
        navigationContainer.classList.remove("open")
        barTop.classList.remove("active")
        barMid.classList.remove("active")
        barBottom.classList.remove("active")
        hamburgerMenu.classList.remove("active")
    }
}

window.addEventListener("click", listItemsToggle)

/* - - - - Portfolio Component - - - - */
/* 
const swiperSlideComponent = source => {
    return `
    <div class="swiper-slide">
        <div class="swiper-overlay">
            <button class="btn-show-more">Show more</button>
        </div>
        <img src=${source} alt="">
    </div>
    `
}

const swiperSlideLoadEvent = () => {
    const swiperWrapperElement = document.querySelector("#swiper-wrapper")

    for (portfolioElement of portfolio) {
        swiperWrapperElement.insertAdjacentHTML("beforeend", swiperSlideComponent(portfolioElement.imgLink))
    }
}

window.addEventListener("load", swiperSlideLoadEvent)
 */

/* - - - - Swiper - - - - */

const swiper = new Swiper(".my-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    mousewheel: true,
    grabCursor: true,
    loop: true,
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})


/* - - - - Project details - - - - */

const projectDescriptionComponent = (id, title, details, projectLink, gitLink) => {
    return `
    <div class="portfolio-details-container hidden" id=${id}>

            <div class="project-details">
                <h3 class="project-title">${title}</h3>
                <p class="project-details-describe">${details}</p>
            </div>

            <div class="project-button-container">
                <a class="btn-project" href=${projectLink} target=”_blank”>
                    <i class="fa-solid fa-circle-arrow-right"></i>
                    <p class="project-btn-text">Go to the project</p>
                </a>

                <a class="btn-project" href=${gitLink} target=”_blank”>
                    <i class="fa-brands fa-github"></i>
                    <p class="project-btn-text">Check the code</p>
                </a>
            </div>
        </div>
    `
}

const projectDescriptionLoadEvent = () => {
    const portfolioDetailsElement = document.getElementById("portfolio-details")

    for (project of portfolio) {
        portfolioDetailsElement.insertAdjacentHTML("beforeend", projectDescriptionComponent(project.id, project.title, project.details, project.liveProject, project.gitLink))
    }
}

window.addEventListener("load", projectDescriptionLoadEvent)

/* - - - - Project details visibility- - - - */
const swiperElement = document.querySelector(".swiper")
let activeSwiperSlideId = "1"

const projectDetailsVisible = () => {
    activeSwiperSlideId = document.querySelector(".swiper-slide-active").id.slice(12)
    console.log(activeSwiperSlideId)

    const projectDetailsElements = document.querySelectorAll(".portfolio-details-container")
    for (projectDetailsElement of projectDetailsElements) {
        if (projectDetailsElement.id === activeSwiperSlideId) {
            projectDetailsElement.classList.remove("hidden")
        } else {
            projectDetailsElement.classList.add("hidden")
        }
    }
}

window.addEventListener("load", projectDetailsVisible)
swiperElement.addEventListener("mousemove", projectDetailsVisible)
swiperElement.addEventListener("wheel", projectDetailsVisible)
swiperElement.addEventListener("touchstart", projectDetailsVisible)
swiperElement.addEventListener("touchend", projectDetailsVisible)
swiperElement.addEventListener("touchcancel", projectDetailsVisible)
swiperElement.addEventListener("touchmove", projectDetailsVisible)




/* - - - - Web Knowledge Component - - - - */
const webKnowledgeCardComponent = (title, icon, experience) => {
    return `
        <div class="skill-container web">
            <p class="skill-name">${title}</p>
            ${icon}
            <div class="xp-level ${experience}"></div>
            <div class="reference-bar"></div>
        </div>
    `
}

const webLoadEvent = () => {
    const webKnowledgeElement = document.getElementById("web-knowledge")

    for (webSkill of webSkills) {

        webKnowledgeElement.insertAdjacentHTML("beforeend", webKnowledgeCardComponent(webSkill.title, webSkill.icon, webSkill.experience))
    }
}

window.addEventListener("load", webLoadEvent)



/* - - - - Design Knowledge Component - - - - */
const designKnowledgeCardComponent = (title, experience) => {
    return `
        <div class="skill-container design">
            <p class="design-skill-name">${title}</p>
            <div class="xp-level ${experience}"></div>
            <div class="reference-bar"></div>
        </div>
    `
}

const designLoadEvent = () => {
    const designKnowledgeElement = document.getElementById("design-knowledge")

    for (designSkill of designSkills) {

        designKnowledgeElement.insertAdjacentHTML("beforeend", designKnowledgeCardComponent(designSkill.title, designSkill.experience))
    }

}

window.addEventListener("load", designLoadEvent)


/* - - - - Scroll reveal - - - - */
const sr = ScrollReveal({
    distance: "50px",
    duration: 1500,
    easing: "cubic-bezier(0.68, -0.05, 0.256, 1.55)"
})

sr.reveal(".name, .forward-icon-container, .title-container, .portfolio-container, .skills-container, .behance-link", {
    origin: "top",
    interval: 40
})
sr.reveal(".profile-image, input:nth-child(1)", {
    origin: "left",
    interval: 40
})
sr.reveal(".introduction-text, input:nth-child(2)", {
    origin: "right",
    interval: 40
})
sr.reveal("#portfolio-details, #message", {
    interval: 40
})

/* - - - - Clear contact form - - - - */
const inputFields = document.querySelectorAll(".sender-data")
const messageArea = document.querySelector("#message")
const sendButton = document.querySelector("#btn-send-message")

setTimeout(function clearInputFields() {
    inputFields[0].value = ""
    inputFields[1].value = ""
    messageArea.value = ""
}, 100)

sendButton.addEventListener("click", clearInputFields)




