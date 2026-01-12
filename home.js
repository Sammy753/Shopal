const AllProduct = document.querySelector("#main-3-all-product");
const CartAdder = document.querySelectorAll(".Cart-adder")
const Specialproduct = document.querySelector(".main-6")
const searchNav = document.querySelectorAll(".search-nav")
// const SearchNav = document.querySelector("#Search-nav")
const select = document.querySelector("#select")
const selectTwo = document.querySelector("#select2")
const listView = document.querySelector(".View-list")
const listViewTwo = document.querySelector(".View-listTwo")
const gridView = document.querySelector(".View-grid")
const gridViewTwo = document.querySelector(".View-gridTwo")
const CartAdderMessage = document.querySelector(".Cart-adder-message")
const navpop = document.querySelector(".navpop")
const hamburger = document.querySelector(".Hamburger")
const hamburgerLap = document.querySelector(".Hamburger-lap")
let setcheck = false
const ProfileImage = document.querySelector(".Profile-image")

// import { createClient } from "https://esm.sh/@supabase/supabase-js";

const supabaseUrl = "https://viphpfmfsxvlqxazlqxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcGhwZm1mc3h2bHF4YXpscXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDQzNjYsImV4cCI6MjA4MDM4MDM2Nn0.rLwimKfftqlT7ZLh2_npUNq-yfHHbzBTJFiGc1ooCAY";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey); 

// const {data: {session}} = await supabaseClient.auth.getSession()

// let userName;
// if(session){
//     const UserName = session.user.user_metadata.fullName;
//     console.log("User name:", UserName);

//     userName = UserName
// }


async function Check() {
    const {data} = await supabaseClient.auth.getUser()
    if(!data.user){
        console.log(data)
        // alert("log in alaye")
        ProfileImage.innerHTML= `<button class="SignIn">Sign in</button>`
            
        let SignIn = ProfileImage.querySelector(".SignIn")
        SignIn.addEventListener("click", () => window.location.href = "signin.html")
    }else{

        let userName = data.user.user_metadata.userName
        if(userName.length > 10){
            userName = userName.slice(0, 3) + "..."
        }


        ProfileImage.innerHTML= `<div class="profile-session">
            <div class="profile">
                <div class="Profile">
                    <img src="./media/Profile.png" class="profile-image" alt="profile-image" />
                </div>
                <p>${userName}</p>
            </div>
                <div class="logout"><div class="logout">
                    <img src="./media/logout.png" class="profile-image" alt="profile-image" />
                </div>
            </div>
        </div>`

        let Profile = ProfileImage.querySelector(".profile")
        Profile.addEventListener("click", () => {
            window.location.href = "ordertrack.html";
        })

        let logout = ProfileImage.querySelector(".logout")
        logout.addEventListener("click", async () => {
            await supabaseClient.auth.signOut();
            window.location.href = "signin.html";
        })
    }
    
}

async function Check2(ProfileImage2) {
    const {data} = await supabaseClient.auth.getUser()
    if(!data.user){
        // alert("log in alaye")
        // ProfileImage.innerHTML= `<button class="SignIn">Sign in</button>`
        
        console.log(data)
        ProfileImage2.innerHTML= `<button class="SignIn" >Sign in</button>`
        
        let SignIn = ProfileImage2.querySelector(".SignIn")
        SignIn.addEventListener("click", () => window.location.href = "signin.html")

    }else{

        let userName = data.user.user_metadata.userName || "User"
        if(userName.length > 10){
            userName = userName.slice(0, 3) + "..."
        }


        ProfileImage2.innerHTML= `<hr /><div class="profile-session">
            <div class="profile">
                <div class="Profile">
                    <img src="./media/Profile.png" class="profile-image" alt="profile-image" />
                </div>
                <p>${userName}</p>
            </div>
            <div class="Logout"><div class="logout">
                <img src="./media/logout.png" class="profile-image" alt="profile-image" />
            </div>
            <p>Logout</p>
            </div>
        </div>`

        let logout = ProfileImage2.querySelector(".Logout")
        let Profile = ProfileImage2.querySelector(".profile")
        Profile.addEventListener("click", () => {
            window.location.href = "ordertrack.html";
        })
        logout.addEventListener("click", async () => {
            await supabaseClient.auth.signOut();
            window.location.href = "signin.html";
        })
    
    }
}

Check();

let Cart = JSON.parse(localStorage.getItem("Cart")) || [];

function saveToLocalStorage(){
    localStorage.setItem("Cart", JSON.stringify(Cart))
}

if (Cart.length > 0) {
  CartAdder.forEach( add => add.innerHTML = `<p>${adder(Cart)}</p>`);
}

hamburger.addEventListener("click", () => {
    if(setcheck === false){
        navpop.classList.remove("hidden")
        navpop.innerHTML = `
            <div class="pop">
                <div class="location-And-Order">
                    <div class="location-nav">
                        <a href="">
                            <img src="./media/reliance_hmo 1.png" alt="">
                            <p>Uyo</p>
                        </a>
                    </div>
                    <div class="order-nav">
                        <a href="./ordertrack.html">
                            <img src="./media/Vector.png" alt="">
                            <p>Order</p>
                        </a>
                    </div>
                </div>
                <hr/>
                <div class="ul-navbar">
                    <ul>
                        <li><a href="./CLOTHINGS.html">CLOTHINGS</a></li>
                        <li><a href="./SHOES.html">SHOES</a></li>
                        <li><a href="./ELECTRONICS.html">ELECTRONICS</a></li>
                        <li><a href="./GADGETS.html">GADGETS</a></li>
                        <li><a href="./JEWELRY.html">JEWELRY</a></li>
                        <li><a href="./BEAUTY.html">BEAUTY</a></li>
                        <li><a href="./HEALTH.html">HEALTH & MEDICALS</a></li>
                    </ul>
                </div>
                <div class="Profile-image2"></div>
            
            </div>
        `

        
        const ProfileImage2 = navpop.querySelector(".Profile-image2")

        Check2(ProfileImage2)

    }else{
        navpop.classList.add("hidden")
    }

    setcheck = true
})


hamburgerLap.addEventListener("click", () => {
    if(setcheck === false){
        navpop.classList.remove("hidden")
        navpop.innerHTML = `
            <div class="pop">
                <div class="ul-navbar">
                    <ul>
                        <li><a href="./CLOTHINGS.html">CLOTHINGS</a></li>
                        <li><a href="./SHOES.html">SHOES</a></li>
                        <li><a href="./ELECTRONICS.html">ELECTRONICS</a></li>
                        <li><a href="./GADGETS.html">GADGETS</a></li>
                        <li><a href="./JEWELRY.html">JEWELRY</a></li>
                        <li><a href="./BEAUTY.html">BEAUTY</a></li>
                        <li><a href="./HEALTH.html">HEALTH & MEDICALS</a></li>
                    </ul>
                </div>            
            </div>
        `

    }else{
        navpop.classList.add("hidden")
    }

    setcheck = true
})


navpop.addEventListener("click", () => {
    navpop.classList.add("hidden")
    setcheck = false
})

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

searchNav.forEach(add => add.addEventListener("input", (input) => {
    let userSearch = input.target.value.toLowerCase().trim()
    let filteredProduct = searchProduct.filter(product => product.title.toLowerCase().includes(userSearch) || product.description.toLowerCase().includes(userSearch)  || product.price.toString().includes(userSearch))
    
    DisplayProducts(filteredProduct)
}))

// searchNav.addEventListener("input", (input) => {
//     let userSearch = input.target.value.toLowerCase().trim()
//     let filteredProduct = searchProduct.filter(product => product.title.toLowerCase().includes(userSearch) || product.description.toLowerCase().includes(userSearch)  || product.price.toString().includes(userSearch))
    
//     DisplayProducts(filteredProduct)
// })

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


async function addToCart(id, title, price, category, thumbnail, images, rating, description, story){
    const { data: userData } = await supabaseClient.auth.getUser();
    if (!userData.user) {
        alert("Sign In to add items to cart dude")
        return;
    } // user not logged in, skip DB sync

    const userId = userData.user.id;

    let checkProduct = Cart.find(prod => prod.id == id && prod.title == title)
    if (checkProduct){
        checkProduct.quantity++;
        
    }
    else{
        Cart.push({ id, title, price, category, thumbnail, images, rating, description, story, quantity: 1})
        
    }
    CartAdder.forEach( add => add.innerHTML = `<p>${adder(Cart)}</p>`);

    saveToLocalStorage()
    // CartAdderMESSAGE()
    
    CartAdderMessage.classList.remove("hidden")

    // 2️⃣ Sync with Supabase if user is logged in
    

    try {
        // Check if item already exists in DB
        const { data: existingItem } = await supabaseClient
            .from("cart_items")
            .select("*")
            .eq("user_id", userId)
            .eq("product_id", id)
            .single();

        if (existingItem) {
            // Update quantity in DB
            await supabaseClient
                .from("cart_items")
                .update({ quantity: existingItem.quantity + 1 })
                .eq("id", existingItem.id);
        } else {
            // Insert new item in DB
            await supabaseClient.from("cart_items").insert({
                user_id: userId,
                product_id: id,
                quantity: 1
            });
        }
    } catch (err) {
        console.error("Failed to sync cart with database:", err.message);
    }
}

function adder(Cart){
    if (Cart.length > 0){
        CartAdder.forEach(add => add.classList.remove("hidden"))
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

const links = document.querySelectorAll(".ul-navbar a")

links.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
});


console.log(Cart)
// saveToLocalStorage()


// product detail page

