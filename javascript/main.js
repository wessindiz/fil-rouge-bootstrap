/* Fonction ouverture et fermeture menu hamburger*/

function showResponsiveMenu() {
    var x = document.getElementById("open-menu");
    var y = document.getElementById("bars");
    var z = document.getElementById("cross");
    var w = document.getElementById("arrow")
    if (x.style.display === "block") {
      y.style.display="block";
      x.style.display = "none";
      z.style.display = "none";
      w.style.display = "block";
    } else {
      y.style.display="none";
      x.style.display = "block"; 
      z.style.display = "block";
      w.style.display = "none"; 
    }
  }
