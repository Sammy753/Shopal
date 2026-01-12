const CartAdderMessage = document.querySelector(".Cart-adder-message")
const CartAdder = document.querySelectorAll(".Cart-adder")
// cartAdder = document.querySelector("#cart-adder")
const heading = document.querySelector(".heading")
const Confirm = document.querySelector(".Confirm")
const inputs = document.querySelectorAll(".userInput")
const checkbox = document.querySelector("#checkboxd")
const navpop = document.querySelector(".navpop")
const hamburger = document.querySelector(".Hamburger")
let setcheck = false
const addressAndName = document.querySelector(".addressAndName")
const number = document.querySelector(".number")


const hamburgerLap = document.querySelector(".Hamburger-lap")
const ProfileImage = document.querySelector(".Profile-image")


const supabaseUrl = "https://viphpfmfsxvlqxazlqxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpcGhwZm1mc3h2bHF4YXpscXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MDQzNjYsImV4cCI6MjA4MDM4MDM2Nn0.rLwimKfftqlT7ZLh2_npUNq-yfHHbzBTJFiGc1ooCAY";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey); 


let Cart = JSON.parse(localStorage.getItem("Cart")) || [];

function saveToLocalStorage(){
    localStorage.setItem("Cart", JSON.stringify(Cart))
}

if (Cart.length > 0) {
    CartAdder.forEach( add => add.innerHTML = `<p>${adder(Cart)}</p>`);
}

        
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
            <div class="profile"><div class="Profile">
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
            <div class="profile"><div class="Profile">
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

        let Profile = ProfileImage2.querySelector(".profile")
        Profile.addEventListener("click", () => {
            window.location.href = "ordertrack.html";
        })

        let logout = ProfileImage2.querySelector(".Logout")
        logout.addEventListener("click", async () => {
            await supabaseClient.auth.signOut();
            window.location.href = "signin.html";
        })
    
    }
}

Check();

function saveToLocalStorage(){
    localStorage.setItem("Cart", JSON.stringify(Cart))
}

if (Cart.length > 0) {
CartAdder.forEach( add => add.innerHTML = `<p>${adder(Cart)}</p>`);
}

        
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
        navpop.classList.add("hidden");
    }

    setcheck = true;
})

navpop.addEventListener("click", () => {
    navpop.classList.add("hidden");
    setcheck = false;
});

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
    CartAdder.forEach( add => add.innerHTML = `<p>${adder(Cart)}</p>`);
    
    heading.innerHTML = `<h1 class="Heading">Shipping Details</h1>`
}


function adder(Cart){
    if (Cart.length > 0){
        CartAdder.forEach( add => add.classList.remove("hidden"))
        
        let cartShower = Cart.reduce((sum, item) => sum + item.quantity, 0);
        return cartShower;
    }

    // saveToLocalStorage()

}

addressAndName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\" "]/g, "").toUpperCase()
    
})

number.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if(value.length > 11){
        value = value.slice(0, 11);
    }

    e.target.value = value;
})

// function safeCheck(item){
//     if (item){
//         showDetail()
//     }else{
//         console.log("err")
//     }
// }