const featureButton = document.getElementById("feature-btn");
const companyButton = document.getElementById("company-btn");
const featureDropdown = document.getElementById("features-dropdown");
const companyDropdown = document.getElementById("company-dropdown");
const closeMenu = document.getElementById("menu-close-div");
const mobileNav = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon")


featureButton.addEventListener("click", () => {
    if (featureDropdown.classList.contains("opacity-none")){
        featureDropdown.classList.remove("opacity-none");
        companyDropdown.classList.add("opacity-none");
    }else {
        featureDropdown.classList.add("opacity-none");
    }
    
})

companyButton.addEventListener("click", () => {

    if(companyDropdown.classList.contains("opacity-none")){
        companyDropdown.classList.remove("opacity-none");
        featureDropdown.classList.add("opacity-none");
    }else {
        companyDropdown.classList.add("opacity-none");
    }
})

closeMenu.addEventListener("click", () => {
   mobileNav.style.display = "none";
})
menuIcon.addEventListener("click",  () => {
    mobileNav.style.display ="block";
})