const AllProduct = document.querySelector("#main-3-all-product");
const CartAdder = document.querySelector("#Cart-adder")
const Specialproduct = document.querySelector(".main-6")
const searchNav = document.querySelector("#search-nav")
const select = document.querySelector("#select")
const selectTwo = document.querySelector("#select2")
const listView = document.querySelector(".View-list")
const listViewTwo = document.querySelector(".View-listTwo")
const gridView = document.querySelector(".View-grid")
const gridViewTwo = document.querySelector(".View-gridTwo")
const CartAdderMessage = document.querySelector(".Cart-adder-message")

let Cart = JSON.parse(localStorage.getItem("Cart")) || [];

function saveToLocalStorage(){
    localStorage.setItem("Cart", JSON.stringify(Cart))
}

if (Cart.length > 0) {
  CartAdder.innerHTML = `<p>${adder(Cart)}</p>`;
}

let searchProduct = []
let selectData = []
let selectDataTwo = []

async function fetchProduct(){
    await fetch("./allProduct.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        searchProduct = data
        selectData = data
        
        
        DisplayProducts(data)
    })
    .catch((err) => console.log("Error occur while fetching data", err))
    
}
fetchProduct()

function DisplayProducts(Products){
    AllProduct.innerHTML = "";
    Products.map((item, index, arr) => {
        let productCard = document.createElement("div")
        productCard.classList.add("productCard")
        productCard.innerHTML = `
        <img src="${item.thumbnail}" class="productCard-img" alt="">
        <div class="card-content">
            <p class="card-p">${item.title}</p>
            <h4 class="card-h4">$${item.price}</h4>
            <img src="./media/stars.png" class="rate" alt="">
            <button class="card-button">ADD TO CART</button>
        </div>
        `
        AllProduct.appendChild(productCard)
        productCard.addEventListener("click", () => {
            window.location.href = `product.html?id=${item.id}&title=${item.title}`;
        })

        let btn = productCard.querySelector(".card-button")
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // ⛔ stops card click
            addToCart(item.id, item.title, item.price, item.category, item.thumbnail, item.images, item.rating, item.description, item.story);
            CartAdderMESSAGE();
        })
    })
    

}

searchNav.addEventListener("input", (input) => {
    let userSearch = input.target.value.toLowerCase().trim()
    let filteredProduct = searchProduct.filter(product => product.title.toLowerCase().includes(userSearch) || product.description.toLowerCase().includes(userSearch)  || product.price.toString().includes(userSearch))
    
    DisplayProducts(filteredProduct)
})
select.addEventListener("input", (input) => {
    let userInput = input.target.value.toLowerCase().trim()
    switch(userInput){
        case "low to high":
            let sorted = selectData.sort((a, b) => {
            return a.price - b.price
        })

        DisplayProducts(sorted)

        break;

        case "high to low":
        let SOrted = selectData.sort((a, b) => {
            return b.price - a.price
        })

        DisplayProducts(SOrted)
        break;

        case "newest arrivals":
            let SORteds = selectData.sort((a, b) => {
            return a.title.length - b.title.length
        })

        DisplayProducts(SORteds)
        break;
        case "best selling":
        case "popularity / trending":
        let SORted = selectData.sort((a, b) => {
            return b.title.length - a.title.length
        })

        DisplayProducts(SORted)
        break;

        case "alphabetical a to z":
        let SORTed = selectData.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })

        DisplayProducts(SORTed)
        break;

        case "alphabetical z to a":
        let SORTEd = selectData.sort((a, b) => {
            return b.title.localeCompare(a.title)
        })

        DisplayProducts(SORTEd)
        break;

        default:
            let SORTED = selectData.sort((a, b) => {
            return a.id - b.id
        })

        DisplayProducts(SORTED)
    }
    
})
    // if (userInput === "low to high"){
    //     let sorted = selectData.sort((a, b) => {
    //         return a.price - b.price
    //     })

    //     DisplayProducts(sorted)
    // }
    // else if (userInput === "high to low"){
    //     let sorted = selectData.sort((a, b) => {
    //         return b.price - a.price
    //     })

    //     DisplayProducts(sorted)
    // }
    // else if (userInput === "newest arrivals" || userInput === "best selling" || userInput === "popularity / trending"){
    //     let sorted = selectData.sort((a, b) => {
    //         return b.title.length - a.title.length
    //     })

    //     DisplayProducts(sorted)
    // }
    // else if (userInput === "alphabetical a to z"){
    //     let sorted = selectData.sort((a, b) => {
    //         return a.title.localeCompare(b.title)
    //     })

    //     DisplayProducts(sorted)
    // }
    // else if (userInput === "alphabetical z to a"){
    //     let sorted = selectData.sort((a, b) => {
    //         return b.title.localeCompare(a.title)
    //     })

    //     DisplayProducts(sorted)
    // }
    // else {
    //     let sorted = selectData.sort((a, b) => {
    //         return a.id - b.id
    //     })

    //     DisplayProducts(sorted)
    // }


async function fetchProduct2(){
    await fetch("./specialProduct.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        selectDataTwo = data
        DisplayProducts2(data)
    })
    .catch((err) => console.log("Error occur while fetching data", err))
}

fetchProduct2()

function DisplayProducts2(Products){
    Specialproduct.innerHTML = "";
    Products.map((item, index, arr) => {
        let productCard = document.createElement("div")
        productCard.classList.add("productCard")
        productCard.innerHTML = `
        <img src="${item.thumbnail}" class="productCard-img" alt="">
        <div class="card-content">
            <p class="card-p">${item.title}</p>
            <h4 class="card-h4">$${item.price}</h4>
            <img src="./media/stars.png" class="rate" alt="">
            <button class="card-button">ADD TO CART</button>
        </div>
        `
        Specialproduct.appendChild(productCard)
        productCard.addEventListener("click", () => {
            window.location.href = `product.html?id=${item.id}&title=${item.title}`;
        })

        let btn = productCard.querySelector(".card-button")
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // ⛔ stops card click
            addToCart(item.id, item.title, item.price, item.category, item.thumbnail, item.images, item.rating, item.description, item.story);
            CartAdderMESSAGE();
        })
    })
    
}


selectTwo.addEventListener("input", (input) => {
    let userInput = input.target.value.toLowerCase().trim()
    switch(userInput){
        case "low to high":
            let sorted = selectDataTwo.sort((a, b) => {
            return a.price - b.price
        })

        DisplayProducts2(sorted)
        break;

        case "high to low":
        let SOrted = selectDataTwo.sort((a, b) => {
            return b.price - a.price
        })

        DisplayProducts2(SOrted)
        break;

        case "newest arrivals":
        case "best selling":
        case "popularity / trending":
        let SORted = selectDataTwo.sort((a, b) => {
            return b.title.length - a.title.length
        })

        DisplayProducts2(SORted)
        break;

        case "alphabetical a to z":
        let SORTed = selectDataTwo.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })

        DisplayProducts2(SORTed)
        break;

        case "alphabetical z to a":
            // console.log(selectDataTwo)
        let SORTEd = selectDataTwo.sort((a, b) => {
            return b.title.localeCompare(a.title)
        })

        DisplayProducts2(SORTEd)
        break;

        default:
            let SORTED = selectDataTwo.sort((a, b) => {
            return a.id - b.id
        })

        DisplayProducts2(SORTED)
    }
    // saveToLocalStorage()
})


function addToCart(id, title, price, category, thumbnail, images, rating, description, story){
    let checkProduct = Cart.find(prod => prod.id == id && prod.title == title)
    if (checkProduct){
        checkProduct.quantity++;
        
    }
    else{
        Cart.push({ id, title, price, category, thumbnail, images, rating, description, story, quantity: 1})
        
    }
    CartAdder.innerHTML = `<p>${adder(Cart)}</p>`

    saveToLocalStorage()
    // CartAdderMESSAGE()
    
    CartAdderMessage.classList.remove("hidden")
}

function adder(Cart){
    if (Cart.length > 0){
        CartAdder.classList.remove("hidden")
        let cartShower = Cart.reduce((sum, item) => sum + item.quantity, 0);
        return cartShower;
    }

}


function CartAdderMESSAGE(){
    const CartAdderMessage = document.getElementById("Cart-adder-message")
    CartAdderMessage.innerHTML = `
        <div class="Cart-Adder-Message">
            <p class="hidden2 message">Product added successfully ✅. Continue shopping or check your cart to proceed to payment
            </p>
        </div>
    `;
    
}


listView.addEventListener("click", () => {
    AllProduct.classList.add("list")
})
listViewTwo.addEventListener("click", () => {
    Specialproduct.classList.add("list")
})
gridView.addEventListener("click", () => {
    AllProduct.classList.remove("list")
})
gridViewTwo.addEventListener("click", () => {
    Specialproduct.classList.remove("list")
})

const links = document.querySelector(".ul-navbar a")

links.forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))){
        links.classList.add('active')
    }
    
});

console.log(Cart)
// saveToLocalStorage()


// product detail page

