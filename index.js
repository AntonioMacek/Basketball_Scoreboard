let homeResult = 0;
let homeResultText = document.getElementById("home_result_screen"); 


let guestResult = 0;
let guestResultText = document.getElementById("guest_result_screen"); 



function addOneForHome(){
    homeResult += 1;
    homeResultText.innerHTML = homeResult;
}


function addTwoForHome(){
    homeResult += 2;
    homeResultText.innerHTML = homeResult;
}

function addThreeForHome(){
    homeResult += 3;
    homeResultText.innerHTML = homeResult;
}


function addOneForGuest(){
    guestResult += 1;
    guestResultText.innerHTML = guestResult;
}


function addTwoForGuest(){
    guestResult += 2;
    guestResultText.innerHTML = guestResult;
}

function addThreeForGuest(){
    guestResult += 3;
    guestResultText.innerHTML = guestResult;
}