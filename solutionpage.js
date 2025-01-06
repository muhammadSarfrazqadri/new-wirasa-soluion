function maslak_selection() {
  var maslak = document.getElementById("maslak").value;

  // Log the initial selection
  console.log("Selected School of Thought: " + maslak);

  // Check if the user made a selection
  if (!maslak) {
      alert("Please select an option.");
      return;
  }

  // Map maslak to numeric values
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

  // Log the numeric value of the selection
  console.log("Selected School of Thought (Numeric Value): " + maslakNumeric);

  // Hide the current div and display the next one
  document.getElementById("maslak_main_div").style.display = "none";
  document.getElementById("second_div_solution_page_ashabeFaraiz").style.display = "flex";
  document.getElementsByClassName("solution_page_main_div").style.height = "130vh";
}




// function maslak_selection() {
//     var maslak = document.getElementById("maslak").value;
  
//     console.log("Selected School of Thought (Numeric Value): " + maslak);
//     if (maslak === null || undefined) {
//       alert("Please Select Anyone Option.");
//       return;
//     }
//     if (maslak === "Hanafi") {
//       maslak = "1";
//     } else if (maslak === "Shafi'i") {
//       maslak = "2";
//     } else if (maslak === "Maliki") {
//       maslak = "3";
//     } else if (maslak === "Hanbali") {
//       maslak = "4";
//     }
//     console.log("Selected School of Thought (Numeric Value): " + maslak);
//     document.getElementById("maslak_main_div").style.display = "none";
//     document.getElementById("second_div_solution_page_ashabeFaraiz").style.display = "block";
//   }