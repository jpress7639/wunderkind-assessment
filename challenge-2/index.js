//grabbing elements through the document 
//the color buttons
let buttons = document.getElementsByClassName("color-swatch")
// product title
let title = document.getElementsByClassName("product-title")
// price of shirt (went with the price that wasn't crossed out even though it's wholesale price)
let price = document.getElementsByClassName("pdpprice-row2-main-text")
const body = document.body

//loop to run through each color button to ensure functionality on each button 
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', overlayAd)
}

function overlayAd() {
    body.style.position = "relative"
// calculate and able to display the discounted price w 15% off
    let discount = (parseFloat(price[0].innerText.slice(1)) * 0.85).toFixed(2)
// create the overlay div
    let overlay = document.createElement('div')
    overlay.style.position = "fixed";
    overlay.style.zIndex = "1000";
    overlay.style.left = '25%';
    overlay.style.top = "25%"
    overlay.style.width = "500px";
    overlay.style.height = "350px";
    overlay.style.display = "flex";
    overlay.style.flexDirection = 'column';
    overlay.style.justifyContent = "space-evenly";
    overlay.style.backgroundColor = "rgba(238, 238, 238, 0.9)";
    overlay.style.boxShadow = "0 0 0 999em rgba(0, 0, 0, 0.75)";
// adding the message onto the div
    let message = document.createElement('p');
    message.innerText = `Get this ${title[0].innerText} for $${discount} with a 15% discount`;
    message.style.textAlign = "center"
    message.style.fontSize = "30px"
    message.style.margin = "0 auto"
    message.style.padding = "5%"
    overlay.append(message)
// creating a div for the buttons to be held in 
    let buttonDiv = document.createElement('div')
    buttonDiv.style.display = "flex"
    buttonDiv.style.flexDirection = "row"
    buttonDiv.style.justifyContent = "space-evenly";
//adding the buttons
//close button
    let closeButton = document.createElement('a')
    closeButton.innerText = 'Close Ad'
    closeButton.style.width = '200px'
    closeButton.style.height = '40px'
    closeButton.style.paddingTop = '5px'
    closeButton.style.backgroundColor = 'darkgrey'
    closeButton.style.color = 'white'
    closeButton.style.textDecoration = 'none'
    closeButton.style.border = 'none'
    closeButton.style.fontSize = "20px"
    closeButton.style.textAlign = 'center'
    closeButton.style.boxShadow = '0.5px 0.5px 5px black'
//functionality to close the button and reopen the overlay
    closeButton.addEventListener('click', function close(){
        overlay.style.display = "none";
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', overlayAd)
        }
    })
//cart button function
    let cartButton = document.createElement('a')
    cartButton.setAttribute('href', 'https://www.kohls.com/checkout/shopping_cart.jsp')
    cartButton.innerText = 'Add To Cart'
    cartButton.style.color = 'white'
    cartButton.style.textDecoration = 'none'
    cartButton.style.width = '200px'
    cartButton.style.height = '40px'
    cartButton.style.paddingTop = '5px'
    cartButton.style.backgroundColor = 'darkgrey'
    cartButton.style.border = 'none'
    cartButton.style.fontSize = "20px"
    cartButton.style.textAlign = 'center'
    cartButton.style.boxShadow = '0.5px 0.5px 5px black'
    buttonDiv.append(closeButton, cartButton)
    overlay.append(buttonDiv)
//attaching div to body
    body.append(overlay)
}

