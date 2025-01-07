
function to_go_faraiz_section() {
    var maslak = document.getElementById("maslak").value;

    if (!maslak) {
        alert("Please select an option.");
        return;
    }
    var maslakNumeric;
    switch (maslak) {
        case "Hanafi":
            maslakNumeric = "1";
            break;
        case "Shafi'i":
            maslakNumeric = "2";
            break;
        case "Maliki":
            maslakNumeric = "3";
            break;
        case "Hanbali":
            maslakNumeric = "4";
            break;
        default:
            alert("Invalid selection. Please choose a valid option.");
            return;
    }
    document.getElementById("maslak_main_div").style.display = "none";
    document.getElementById("second_div_solution_page_ashabeFaraiz").style.display = "flex";
    document.getElementById("solution_page_main_div").style.height = "220vh";
}

function to_go_asbaa_section() {
    document.getElementById("second_div_solution_page_ashabeFaraiz").style.display = "none";
    document.getElementById("third_div_solution_page_ashabeFaraiz").style.display = "flex";
}


// Global Object
let faraiz_part_obj = {};
let faraiz_defined_part_obj = {};

// Submit Button Event Listener
document.getElementById('faraiz_details_submit_btn').addEventListener('click', function () {
    // Fetch and sanitize values from form
    const father = document.getElementById("father_ashabeFaraiz").value.trim().toLowerCase();
    const grand_father = document.getElementById("grand_father_ashabeFaraiz").value.trim().toLowerCase();
    const husband = document.getElementById("husband_ashabeFaraiz").value.trim().toLowerCase();
    const step_brother = document.getElementById("stepbrother_ashabeFaraiz").value.trim().toLowerCase();
    const step_sister = document.getElementById("stepsister_ashabeFaraiz").value.trim().toLowerCase();
    const wife = document.getElementById("wife_ashabeFaraiz").value.trim().toLowerCase();
    const daughter = Number(document.getElementById("daughter_ashabeFaraiz").value) || 0;
    const grand_daughter = Number(document.getElementById("granddaughter_ashabeFaraiz").value) || 0;
    const full_sister = document.getElementById("fullsister_ashabeFaraiz").value.trim().toLowerCase();
    const half_sister_paternal = document.getElementById("half_sister_(paternal)_ashabeFaraiz").value.trim().toLowerCase();
    const mother = document.getElementById("mother_ashabeFaraiz").value.trim().toLowerCase();
    const grand_mother = document.getElementById("grand_mother_ashabeFaraiz").value.trim().toLowerCase();
    const son = Number(document.getElementById("son_asbaa").value) || 0;
    const grand_son = Number(document.getElementById("grandson_asbaa").value) || 0;
    const brothers = document.getElementById("brothers_asbaa").value.trim().toLowerCase();
    const nephews = document.getElementById("nephews_asbaa").value.trim().toLowerCase();
    const uncle = document.getElementById("uncle_asbaa").value.trim().toLowerCase();
    const cousins = document.getElementById("cousins_asbaa").value.trim().toLowerCase();

    // Update Global Object
    faraiz_part_obj = {
        father,
        grand_father,
        husband,
        step_brother,
        step_sister,
        wife,
        daughter,
        grand_daughter,
        full_sister,
        half_sister_paternal,
        mother,
        grand_mother,
        son,
        grand_son,
        brothers,
        nephews,
        uncle,
        cousins
    };

    console.log("Form Data:", faraiz_part_obj);

    // Call Solution Function
    solution();
});

// Solution Function
function solution() {
    if (faraiz_part_obj.father === "yes") {
        faraiz_defined_part_obj.father = father_farz(
            faraiz_part_obj.son,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_daughter
        );
    } else {
        faraiz_defined_part_obj.father = 0; // Assign default value if condition is not met
    }

    if (faraiz_part_obj.grand_father === "yes") {
        faraiz_defined_part_obj.grand_father = grand_father_farz(
            faraiz_part_obj.son,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_daughter,
            faraiz_part_obj.father
        );
    } else {
        faraiz_defined_part_obj.grand_father = 0; // Assign default value if condition is not met
    }

    if (faraiz_part_obj.husband === "yes") {
        faraiz_defined_part_obj.husband = husband_farz(
            faraiz_part_obj.son,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_daughter
        );
    } else {
        faraiz_defined_part_obj.husband = 0;
    }
    
    if (faraiz_part_obj.step_brother > 0) {
        faraiz_defined_part_obj.step_brother = step_brother_farz(
            faraiz_part_obj.father,
            faraiz_part_obj.grand_father,
            faraiz_part_obj.son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.grand_daughter,
            faraiz_part_obj.step_brother,
            faraiz_part_obj.step_sister
        );
    } else {
        faraiz_defined_part_obj.step_brother = 0;
    }
    
    if (faraiz_part_obj.step_sister > 0) {
        faraiz_defined_part_obj.step_sister = step_sister_farz(
            faraiz_part_obj.father,
            faraiz_part_obj.grand_father,
            faraiz_part_obj.son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.grand_daughter,
            faraiz_part_obj.step_brother,
            faraiz_part_obj.step_sister
        );
    } else {
        faraiz_defined_part_obj.step_sister = 0;
    }

    if (faraiz_part_obj.daughter > 0) {
        faraiz_defined_part_obj.daughter = daughter_farz(
            faraiz_part_obj.son,
            faraiz_part_obj.daughter
        );
    } else {
        faraiz_defined_part_obj.daughter = 0;
    }

    if (faraiz_part_obj.wife === "yes") {
        faraiz_defined_part_obj.wife = wife_farz(
            faraiz_part_obj.son,
            faraiz_part_obj.grand_son,
            faraiz_part_obj.daughter,
            faraiz_part_obj.grand_daughter
        );
    } else {
        faraiz_defined_part_obj.wife = 0;
    }




    if (faraiz_part_obj.grand_mother === "yes") {
        faraiz_defined_part_obj.grand_mother = grand_mother_farz(
            faraiz_part_obj.mother
        );
    } else {
        faraiz_defined_part_obj.grand_mother = 0;
    }



    console.log("Updated Defined Parts Object:", faraiz_defined_part_obj);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// faraiz functions //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////// father باپ  //////////////////////////////////////////////////


function father_farz(son, grand_son, daughter, grand_daughter) {
    console.log("Inputs to father_farz - Son:", son, "Grand Son:", grand_son, "Daughter:", daughter, "Grand Daughter:", grand_daughter);

    let farz_part = 0;

    if (son > 0 || grand_son > 0) {
        farz_part = 1/6;
    } else if ((daughter > 0 || grand_daughter > 0) && !(son > 0 || grand_son > 0)) {
        farz_part = 1/6 + father_asbaa();
    } else if (!(son > 0 && daughter > 0 && grand_daughter > 0 && grand_son > 0)) {
        farz_part = father_asbaa();
    }

    console.log("Calculated Father Part:", farz_part);
    return farz_part;
}

/////////////////////////// grand father دادا //////////////////////////////////////////////////

function grand_father_farz(son, grand_son, daughter, grand_daughter,father) {
    let farz_part = 0;

    if (son > 0 || grand_son > 0) {
        farz_part = 1/6;
    } else if ((daughter > 0 || grand_daughter > 0) && !(son > 0 || grand_son > 0)) {
        farz_part = 1/6 + father_asbaa();
    } else if (!(son > 0 && daughter > 0 && grand_daughter > 0 && grand_son > 0)) {
        farz_part = 0; // Or any default value
    } else if (father === "yes") {
        farz_part = 0;
    }

    return farz_part;
}

/////////////////////////// husband  شوہر //////////////////////////////////////////////////

function husband_farz(son, grand_son, daughter, grand_daughter) {
    let farz_part = 0;

    if ((son > 0 || daughter > 0 || grand_daughter > 0 || grand_son > 0)) {
        farz_part = 1 / 4;
    } else if (!(son > 0 && daughter > 0 && grand_daughter > 0 && grand_son > 0)) {
        farz_part = 1 / 2;
    }
    return farz_part;
}

/////////////////////////// step brother اخیافی بھائی //////////////////////////////////////////////////

function step_brother_farz(father, grand_father, son, daughter, grand_son, grand_daughter, step_brother, step_sister){
    let farz_part = 0;

    if (father === "yes" || grand_father === "yes" || son > 0 || daughter > 0 || grand_son > 0 ||  grand_daughter > 0) {
        farz_part = 0;
    } else if (step_brother === 1 || step_sister === 1) {
        farz_part = 1/6;
    } else if (step_brother > 1 || step_sister > 1) {
        farz_part = 1/3; 
    }

    return farz_part;
}

/////////////////////////// step sister اخیافی بہن//////////////////////////////////////////////////

function step_sister_farz(father, grand_father, son, daughter, grand_son, grand_daughter, step_brother, step_sister){
    let farz_part = 0;

    if (father === "yes" || grand_father === "yes" || son > 0 || daughter > 0 || grand_son > 0 ||  grand_daughter > 0) {
        farz_part = 0;
    } else if (step_brother === 1 || step_sister === 1) {
        farz_part = 1/6;
    } else if (step_brother > 1 || step_sister > 1) {
        farz_part = 1/3; 
    }

    return farz_part;
}

/////////////////////////// wife بیوی //////////////////////////////////////////////////

function wife_farz(son, grand_son, daughter, grand_daughter) {
    let farz_part = 0;

    if ((son > 0 || daughter > 0 || grand_daughter > 0 || grand_son > 0)) {
        farz_part = 1 / 8;
    } else if (!(son > 0 && daughter > 0 && grand_daughter > 0 && grand_son > 0)) {
        farz_part = 1 / 4;
    }
    return farz_part;
}

/////////////////////////// daugther بیٹی //////////////////////////////////////////////////

function daughter_farz(son, daughter){
    let farz_part = 0;

    if (son > 0) {
        farz_part = asbaa();
    } else if (daughter === 1 && son === "no") {
        farz_part = 1/2;
    } else if (daughter > 1 && son === "no") {
        farz_part = 2/3; 
    }

    return farz_part;
}

////////////////////////// grand daugther پوتی //////////////////////////////////////////////////


///////////////////////////   FULL SISTER  سگی بہن //////////////////////////////////////////////////

///////////////////////////  HALF SISTER PATERNAL  علاتی بہن //////////////////////////////////////////////////


///////////////////////////  MOTHER  ماں //////////////////////////////////////////////////


///////////////////////////  GRAND MOTHER  جدہ صحیحہ  //////////////////////////////////////////////////

function grand_mother_farz(mother){
    let farz_part = 0;

    if (mother > "yes") {
        farz_part = 0;
    } else{
        farz_part = 1/6;
    }

    return farz_part;
}



function asbaa() {
    return 0;
}