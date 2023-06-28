/* Start Local Storage */
// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color-option")

if (mainColor !== null){
    document.documentElement.style.setProperty("--main-color" , mainColor)
    // Remove Active Class From All Items
    document.querySelectorAll(".colors-list li").forEach((element) =>{
        element.classList.remove("active")
        if (element.dataset.color === mainColor){
            element.classList.add("active")
        }
    })
}
/* End Local Storage */

/* Start Settings Box */
// Set Settings Box
let settingsBox = document.querySelector(".settings-box");

// Set Icon Settings
let iconSetting = document.querySelector(".icon-setting");

// Set Toggle Setting
let toggleSetting = document.querySelector(".toggle-setting");

// When click on icon will appear the list
toggleSetting.addEventListener("click", () => {
  settingsBox.classList.toggle("open");
  iconSetting.classList.toggle("fa-spin");
});
/* End Settings Box */

/* Start Color Chosen */
// Set Colors List 
const colorsList = document.querySelectorAll(".colors-list li");

// Loop On Colors List
colorsList.forEach((li) => {
    // When Click On Any Color Found In List
    li.addEventListener("click", (e) =>{
        // Get Value Of Color 
        let colorChose= li.getAttribute("data-color")
        // Change Main Color With Color Chosen
        document.documentElement.style.setProperty("--main-color",colorChose)
        // Set Color On Local Storage
        localStorage.setItem("color-option" , colorChose)
        // Remove Active Class From All Children
        // The First Way 
        // let allClassActive = document.querySelectorAll(".active") 
        // allClassActive.forEach((color) =>{
        //     color.classList.remove("active")
        //     e.target.classList.add("active")
        // })
        // The Second Way
        e.target.parentElement.querySelectorAll(".active").forEach((element) =>{
            // Remove Class Active
            element.classList.remove("active")
        })
        // Add Class Active
        e.target.classList.add("active")
    })
});
/* End Color Chosen */

// Set Random Background List 
const randomBack = document.querySelectorAll(".option-box span");



// Loop On All Spans
randomBack.forEach((sp) => {
    // When Click On Any Span
    sp.addEventListener("click", (e) =>{
        // Remove Active Class From All Spans
        e.target.parentElement.querySelectorAll(".active").forEach((element) =>{
            // Remove Class Active From Clickable Span
            element.classList.remove("active")
        })
        // Add Class Active To Span
        e.target.classList.add("active")

        if (e.target.dataset.background === "yes"){
            backgroundOption = true;
            randomizeImgs()
            localStorage.setItem("background-option",true)
        } else{
            backgroundOption = false;
            clearInterval(backgroundInterval)
            localStorage.setItem("background-option",false)
        }
    })
});

/* Start Landing Page */
// Select Landing Page
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = [
  "imgs/wallpaperflare.com_wallpaper (39).jpg",
  "imgs/wallpaperflare.com_wallpaper (40).jpg",
  "imgs/wallpaperflare.com_wallpaper (41).jpg",
  "imgs/wallpaperflare.com_wallpaper (38).jpg",
  "imgs/wallpaperflare.com_wallpaper (42).jpg",
];

// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let backgroundInterval;

// Check If There's Random Background In Local Storage
let backgroundLocalItem = localStorage.getItem("background-option")

// Check Local Storage
if (backgroundLocalItem !== null){
    if(backgroundLocalItem === "true"){
        backgroundOption = true;
    } else{
        backgroundOption = false;
    }
    // Remove Class Active From All Options
    document.querySelectorAll(".option-box span").forEach((element) =>{
        element.classList.remove("active")
    })
    if (backgroundLocalItem === "true"){
        document.querySelector(".option-box span.yes").classList.add("active")
    } else{
        document.querySelector(".option-box span.no").classList.add("active")
    }
}

// Function To Randomize Images
function randomizeImgs(){
    if (backgroundOption === true){
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let randomNumber = Math.floor(Math.random() * imgsArray.length)
            // Change Background Image Every 2 seconds
            landingPage.style.backgroundImage = `url("${imgsArray[randomNumber]}")`
        }, 5000);
    }
}
randomizeImgs()
/* End Landing Page */

let illustrationArray = [
    "imgs/Usability testing.gif",
    "imgs/Usability testing (1).gif",
    "imgs/Usability testing (2).gif",
    "imgs/Usability testing (3).gif",
    "imgs/Usability testing (4).gif"]



let myImage = document.querySelector(".image-box img")

let yellow = document.querySelector(".colors-list .Yellow")
let red = document.querySelector(".colors-list .Red")
let blue = document.querySelector(".colors-list .Blue")
let brown = document.querySelector(".colors-list .Brown")
let green = document.querySelector(".colors-list .Green")

yellow.addEventListener(("click") , () =>{
    myImage.src = illustrationArray[0]
})
red.addEventListener(("click") , () =>{
    myImage.src = illustrationArray[1]
})
blue.addEventListener(("click") , () =>{
    myImage.src = illustrationArray[2]
})
brown.addEventListener(("click") , () =>{
    myImage.src = illustrationArray[3]
})
green.addEventListener(("click") , () =>{
    myImage.src = illustrationArray[4]
})


// ==== First Way
// if (yellow.classList.contains("active") === true){
//     yellowColor()
// }

// if (red.classList.contains("active") === true){
//     redColor()
// }
// if (blue.classList.contains("active") === true){
//     blueColor()
// }
// if (brown.classList.contains("active") === true){
//     brownColor()
// }
// if (green.classList.contains("active") === true){
//     greenColor()
// }

// ==== Professional Way
if (yellow.classList.contains("active") === true){
    yellowColor()
} else if (red.classList.contains("active") === true){
    redColor()
} else if (blue.classList.contains("active") === true){
    blueColor()
} else if (brown.classList.contains("active") === true){
    brownColor()
} else if (green.classList.contains("active") === true){
    greenColor()
}


// Function For Each Color With Local Storage
function yellowColor(){
    localStorage.setItem("option", illustrationArray[0])
    let redOption = localStorage.getItem("option")
    if (redOption !== null){
    myImage.src = redOption
    } 
}

function redColor(){
    localStorage.setItem("option", illustrationArray[1])
    let redOption = localStorage.getItem("option")
    if (redOption !== null){
    myImage.src = redOption
    } 
}
function blueColor(){
    localStorage.setItem("option", illustrationArray[2])
    let redOption = localStorage.getItem("option")
    if (redOption !== null){
    myImage.src = redOption
    } 
}
function brownColor(){
    localStorage.setItem("option", illustrationArray[3])
    let redOption = localStorage.getItem("option")
    if (redOption !== null){
    myImage.src = redOption
    } 
}
function greenColor(){
    localStorage.setItem("option", illustrationArray[4])
    let redOption = localStorage.getItem("option")
    if (redOption !== null){
    myImage.src = redOption
    } 
}



// Select Skills Span
let ourSkills = document.querySelector(".skills")
let allSkills = document.querySelectorAll(".skill-box .skill-progress span")

// While Scroll
window.onscroll = function(){
    // When Scroll And Go To Selected Section
    if (window.scrollY > (ourSkills.offsetTop + ourSkills.offsetHeight - this.scrollY -250)){
        allSkills.forEach((skill) =>{
            skill.style.width = skill.dataset.progress;
        })
    } else{
        allSkills.forEach((skill) =>{
            skill.style.width = 0;
        })
    }
    if (window.scrollY > document.querySelector(".landing-page").offsetTop + document.querySelector(".landing-page").offsetHeight - this.scrollY){
        buttonUp.style.display = "block";
    } else{
        buttonUp.style.display = "none";
    }
}
let buttonUp = document.querySelector(".btn-up .button-up")

buttonUp.onclick = () =>{
    document.querySelector(".landing-page").scrollIntoView({
        behavior: "smooth"
    })
}


// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img")

ourGallery.forEach((img) =>{
    img.addEventListener(("click") , (e) =>{
        // Create Overlay Element
        let overLay = document.createElement("div")
        // Add Class For Overlay
        overLay.className = "popup-overlay"
        // Append Overlay To Body
        document.body.appendChild(overLay)
        // Create The Popup
        let popupBox = document.createElement("div")
        // Add Class For Popup Box
        popupBox.className = "popup-box"
        // Check Image Is Containing Head Or No
        if(img.alt !== null){
            // Creating Heading
            let imgHeading = document.createElement("h3")
            // Create Text Of Heading
            let textHead = document.createTextNode(img.alt);
            // Append Text Head For Heading
            imgHeading.appendChild(textHead)
            // Append Img Head For Popup Box
            popupBox.appendChild(imgHeading)
        }
        // Create The Image
        let popupImage = document.createElement("img")
        // Set Image Source
        popupImage.src = img.src;
        // Add Popup Image In Popup Box
        popupBox.appendChild(popupImage)
        // Add Popup Box To The Body
        document.body.appendChild(popupBox)
        // Create The Close Button
        let closeButton = document.createElement("span")
        // Create Text Close Button
        let textButton = document.createTextNode("X")
        // Append Text To Close Button
        closeButton.appendChild(textButton)
        // Add Class To Close Button
        closeButton.className = "close-button"
        // Add Close Button To Popup Box
        popupBox.appendChild(closeButton)
    })
})
// Close Popup
document.addEventListener(("click"), (e) =>{
    // Check The Close Button
    if (e.target.className == "close-button"){
        // Remove The Current Popup
        e.target.parentElement.remove();
        // Remove Popup Overlay
        document.querySelector(".popup-overlay").remove();
    }else if (e.target.className == "popup-overlay"){
                // Remove The Current Popup
                document.querySelector(".close-button").remove();
                // Remove The Popup Box
                document.querySelector(".popup-box").remove();
                // Remove Popup Overlay
                document.querySelector(".popup-overlay").remove();
    }
}) 
let bullets = document.querySelectorAll(".nav-bullets .bullets")

// bullets.forEach((bull) =>{
//     bull.addEventListener(("click"), (e) =>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })

let linksLandingPage = document.querySelectorAll(".landing-page .links a")
// console.log(linksLandingPage)

// linksLandingPage.forEach((link) =>{
//     link.addEventListener(("click"), (e) =>{
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })

function goTo(allElement){
    allElement.forEach((Element) =>{
        Element.addEventListener(("click"), (e) =>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
goTo(bullets)
goTo(linksLandingPage)


// function removeClassActiveAndAddToTargetElement(allElement){
//     allElement.forEach((element) =>{
//         element.addEventListener(("click"), (e) =>{
//             allElement.forEach((element) =>{
//                 element.classList.remove("active");
//             })
//             e.target.classList.add("active")
//         })
//     })
// }

// function removeActiveFromAll(allEle){
//     allEle.forEach((ele) =>{
//         ele.classList.remove("active")
//     })
// }


let choseTestingOption = document.querySelectorAll(".option-box .chosen span")
let navBullets = document.querySelector(".nav-bullets")
choseTestingOption.forEach((choseElement) =>{
    choseElement.addEventListener(("click") , (e) =>{
        window.localStorage.setItem("data-option" , e.target.dataset.option)
        if (window.localStorage.getItem("data-option") === "no"){
            navBullets.style.display = "none";
        } else if (window.localStorage.getItem("data-option") === "yes"){
            navBullets.style.display = "block"
        }
    })
})

if (window.localStorage.getItem("data-option") === "no"){
    navBullets.style.display = "none";
    document.querySelector(".option-box .chosen .no").classList.add("active")
} else if (window.localStorage.getItem("data-option") === "yes"){
    navBullets.style.display = "block"
    document.querySelector(".option-box .chosen .yes").classList.add("active")
}

let btnReset = document.querySelector(".reset-option .button-reset")
btnReset.onclick = () =>{
    window.localStorage.removeItem("color-option");
    window.localStorage.removeItem("background-option");
    window.localStorage.removeItem("data-option");
    location.reload();
}

let btnNotAvailable = document.querySelectorAll(".personal-communication .not-available")
btnNotAvailable.forEach((btnNot) =>{
    btnNot.addEventListener(("click") , () =>{
        window.alert("Sorry bro, This not available now")
    })
})

let menuList = document.querySelector(".landing-page .container .img-list")
let menuLinks = document.querySelector(".header-area .links")

menuList.onclick = () =>{
    menuLinks.classList.toggle("open")
    menuList.classList.toggle("turn")
}


window.onload = () =>{
    window.alert("كل سنة وانت طيب يبرو وعيد سعيد عليك")
}