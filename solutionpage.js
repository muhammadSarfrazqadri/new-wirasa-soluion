function maslak_selection() {
    var maslak = document.getElementById("maslak").value;
  
    console.log("Selected School of Thought (Numeric Value): " + maslak);
    if (maslak === "") {
      alert("Please Select Anyone Option.");
      return;
    }
    if (maslak === "Hanafi") {
      maslak = "1";
    } else if (maslak === "Shafi'i") {
      maslak = "2";
    } else if (maslak === "Maliki") {
      maslak = "3";
    } else if (maslak === "Hanbali") {
      maslak = "4";
    }
    console.log("Selected School of Thought (Numeric Value): " + maslak);
    document.getElementById("maslak_selection").style.display = "none";
    document.getElementById("step2").style.display = "block";
  }