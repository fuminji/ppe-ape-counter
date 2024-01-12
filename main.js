// Company 1
let intelliCareApe = 0;
let intelliCarePpe = 0;
let intelApe = document.getElementById("inteli-el");
let intelPpe = document.getElementById("inteli-al");
let intelTotal = document.getElementById("inteli-total")

// Company 2
let maxiCareApe = 0;
let maxiCarePpe = 0;
let maxiApe = document.getElementById("maxi-el")
let maxiPpe = document.getElementById("maxi-al")
let maxiTotal = document.getElementById("maxi-total")
// Company 3
let cocoLifeApe = 0;
let cocoLifePpe = 0;
let cocoApe = document.getElementById("coco-el")
let cocoPpe = document.getElementById("coco-al")
let cocoTotal = document.getElementById("coco-total")

function reset (){
    let selected = document.getElementById("company-select")
    let typeSelect = document.getElementById("type-select")

    selected.selectedIndex = 0;
    typeSelect.selectedIndex = 0;
}


function checkCompany() {
    let selected = document.getElementById("company-select").value;
    let typeSelect = document.getElementById("type-select").value;
    if (selected === "intellicare" && typeSelect === "ape") {
        intelliCareApe += 1;
        intelApe.textContent = "APE: " + intelliCareApe;
        reset();
    } else if (selected === "intellicare" && typeSelect === "ppe") {
        intelliCarePpe += 1;
        intelPpe.textContent = "PPE: " + intelliCarePpe;
        reset();
    } else if (selected === "maxicare" && typeSelect === "ape") {
        maxiCareApe += 1;
        maxiApe.textContent = "APE: " + maxiCareApe;
        reset();
    } else if (selected === "maxicare" && typeSelect === "ppe") {
        maxiCarePpe += 1;
        maxiPpe.textContent = "PPE: " + maxiCarePpe;
        reset();
    } else if (selected === "cocolife" && typeSelect === "ape") {
        cocoLifeApe += 1;
        cocoApe.textContent = "APE: " + cocoLifeApe;
        reset();
    } else if (selected === "cocolife" && typeSelect === "ppe") {
        cocoLifePpe += 1;
        cocoApe.textContent = "PPE: " + cocoLifePpe;
        reset();
    }
}

