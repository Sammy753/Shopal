const CartAdderMessage = document.querySelector(".Cart-adder-message")
const CartAdder = document.querySelector("#Cart-adder")
const heading = document.querySelector(".heading")
const Confirm = document.querySelector(".Confirm")
const inputs = document.querySelectorAll(".userInput")
const checkbox = document.querySelector("#checkboxd")

let Cart = JSON.parse(localStorage.getItem("Cart")) || [];

function saveToLocalStorage(){
    localStorage.setItem("Cart", JSON.stringify(Cart))
}

if (Cart.length > 0) {
    CartAdder.innerHTML = `<p>${adder(Cart)}</p>`;

}else{
    AllProduct.classList.add("no-cart")
    AllProduct.innerHTML = `
        <p class="sapaa">
            You get no Product for Cart werey😭😂. Go to shop to spend your last card and embrace sapa😂🤣
        </p>
    `
}

// const inputs = input.values

Confirm.addEventListener("click", () => {
    let AllField = true 
    inputs.forEach((input) => {
        if ( input.value.trim() === ""){
            input.classList.add("error")
            // checkbox.classList.add("error")
            AllField = false
        }else{
            input.classList.remove("error")
            // checkbox.classList.remove("error")
            // AllField = true
        }
    })

    if (!checkbox.checked) {
        checkbox.classList.add("error");
        AllField = false;
    } else {
        checkbox.classList.remove("error");
    }

    if(AllField){
        window.location.href = `payment.html`
    }
    else{
        alert("You need to fill all fucking dawm input werey")
    }
    
})


if (Cart.length > 0) {
    CartAdder.innerHTML = `<p>${adder(Cart)}</p>`;
    heading.innerHTML = `<h1>Shipping Details</h1>`
}


function adder(Cart){
    if (Cart.length > 0){
        CartAdder.classList.remove("hidden")
        let cartShower = Cart.reduce((sum, item) => sum + item.quantity, 0);
        return cartShower;
    }

    // saveToLocalStorage()

}

// function safeCheck(item){
//     if (item){
//         showDetail()
//     }else{
//         console.log("err")
//     }
// }