const featureButton = document.getElementById("feature-btn");
const companyButton = document.getElementById("company-btn");
const featureDropdown = document.getElementById("features-dropdown");
const companyDropdown = document.getElementById("company-dropdown");


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