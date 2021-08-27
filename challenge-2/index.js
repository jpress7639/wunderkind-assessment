
// let picture = document.getElementsByClassName("pdp-image-main-img")
let buttons = document.getElementsByClassName("color-swatch")
let title = document.getElementsByClassName("product-title")
let price = document.getElementsByClassName("pdpprice-row2-main-text")
const body = document.body

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', overlayAd)
}

function overlayAd() {
    body.style.position = "relative"
// calculate and able to display the discounted price w 15% off
    let discount = (parseFloat(price[0].innerText.slice(1)) * 0.85).toFixed(2)
// create the overlay div
    let overlay = document.createElement('div')
    overlay.style.position = "absolute";
    overlay.style.zIndex = "1000";
    overlay.style.left = '25%';
    overlay.style.top = "25%"
    overlay.style.width = "500px";
    overlay.style.height = "400px";
    overlay.style.display = "flex";
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = "space-evenly";
    overlay.style.backgroundColor = "lightgrey";
    overlay.style.boxShadow = "0 0 0 999em rgba(0, 0, 0, 0.8)";
// adding the message onto the div
    let message = document.createElement('p');
    message.innerText = `Get this ${title[0].innerText} for $${discount} with a 15% discount`;
    message.style.textAlign = "center"
    message.style.fontSize = "30px"
    message.style.margin = "0 auto"
    overlay.append(message)

    let buttonDiv = document.createElement('div')
    buttonDiv.style.display = "flex"
    buttonDiv.style.flexDirection = "row"
    buttonDiv.style.justifyContent = "space-evenly";
//adding the buttons
    let closeButton = document.createElement('button')
    closeButton.innerText = 'Close Ad'
    closeButton.style.width = '200px'
    closeButton.style.height = '50px'
    closeButton.style.backgroundColor = 'darkgrey'
    closeButton.style.color = 'white'
    closeButton.style.border = 'none'
    closeButton.style.fontSize = "20px"
    closeButton.style.textAlign = 'center'
//functionality to close the button and reopen the overlay
    closeButton.addEventListener('click', function close(){
        overlay.style.display = "none";
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', overlayAd)
        }
    })
//cart button function
    let cartButton = document.createElement('button')
    cartButton.className = "add-to-bag-btn"
    cartButton.innerText = 'Add To Cart'
    cartButton.style.width = '200px'
    cartButton.style.height = '50px'
    cartButton.style.backgroundColor = 'darkgrey'
    cartButton.style.color = 'white'
    cartButton.style.border = 'none'
    cartButton.style.fontSize = "20px"
    cartButton.style.textAlign = 'center'
    buttonDiv.append(closeButton, cartButton)
    overlay.append(buttonDiv)
//attaching div to body
    body.append(overlay)
}

