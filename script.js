const textElement = document.getElementById("text");
const texts = ["Resolve your inheritance issues on your own with our guidance.", "Need further help? Don't hesitate to contact us.", "We're here to support you in every step of your inheritance journey.", "Empowering you with knowledge and solutions for all inheritance matters."];
let textIndex = 0;
let charIndex = 0;
console.log(texts[textIndex][charIndex])

function type() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, 70);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  type();
});

// //////////////// MAIN PAGE BUTTONS ///////////////

// ///////// buttton 1 /////////////

document.getElementById('btn_to_go_to_sltion_pg').addEventListener('click', 
    function (){
        window.location.href = 'solutionpage.html'
    }
)

// ///////// buttton 2 /////////////

document.getElementById('btn_to_go_to_reading_rule').addEventListener('click', 
    function (){
        window.location.href = 'inheritancerules.html'
    }
)





// //////////////// SIX OPTIONS ///////////////

// ///////// buttton 1 /////////////

document.getElementById('quranic verses').addEventListener('click', 
  function (){
      window.location.href = 'quranic_verses.html'
  }
)

// ///////// buttton 2 /////////////

document.getElementById('ahadedh').addEventListener('click', 
  function (){
      window.location.href = 'ahadedh.html'
  }
)

// ///////// buttton 3 /////////////

document.getElementById('read rules').addEventListener('click', 
  function (){
      window.location.href = 'inheritancerules.html'
  }
)

// ///////// buttton 4 /////////////

document.getElementById('solve your Inheritance').addEventListener('click', 
  function (){
      window.location.href = 'solutionpage.html'
  }
)

// ///////// buttton 5 /////////////

document.getElementById('list of inheritors').addEventListener('click', 
  function (){
      window.location.href = 'inheritors.html'
  }
)

// ///////// buttton 6 /////////////

document.getElementById('contact us').addEventListener('click', 
  function (){
      window.location.href = 'contact.html'
  }
)
