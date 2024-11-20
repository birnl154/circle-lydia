let clickCount = 0

function clickInstructionsTitle(el) {
    console.log(el);
    let title = document.getElementById("title");
    let subtitle = document.getElementById ("subtitle");

    if(el == title) {
        console.log("title")
        let img = document.createElement("img");
        let imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image");
        imageWrapper.appendChild(img)
        img.src = "bibble.jpg";
        document.body.appendChild(img)
    } else if (el == subtitle) {
        console.log("subtitle clicked")
    }
    clickCount++; // Increment counter

    if (clickCount === 6) {
        // Perform the desired action on the 6th click
        document.body.style.backgroundColor = "#97ebf5";
        // Reset the counter if you want it to happen again
        clickCount = 0; 
    }
}

document.addEventListener("click", function(event) {
    clickInstructionsTitle(event.target)
    clickInstructionsSubTitle(event.target)

});



function clickInstructionsSubTitle(el) {
    console.log(el);
    let title = document.getElementById("title");
    let subtitle = document.getElementById ("subtitle");

    if(el == subtitle) {
        console.log("subtitle")
        let p = document.createElement("p");
        let firstText = document.createTextNode("Bibble Nation ");
        let secondText = document.createTextNode("Rise Up!");
        p.appendChild(firstText);
        p.appendChild(secondText)
        document.body.appendChild(p);        
    } else if (el == title) {
        console.log("title clicked")
    }
}

let bibbleTraits = ["fluffy", "queen", "fruity", "slay", "icon"]

let listOfTraits = ""
for (let i = 0; i < bibbleTraits.length; i++) {
    listOfTraits += bibbleTraits[i] + " ";
}
let list = document.createElement("p");
list.innerHTML = listOfTraits;
document.body.appendChild(list);
