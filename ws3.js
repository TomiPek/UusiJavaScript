// Piilotan taulukon ja kutsun sen napilla takaisin
//
document.getElementById("example").style.display = "none";

// Ekan napin kutsu

document.getElementById("ekaNappi").addEventListener("click", function () {
  var pvm = new Date();
  var oma = "You clicked me!\n";
  alert(oma + pvm);
});

// Tokan napin kutsu
document.getElementById("tokaNappi").addEventListener("click", function () {
  document.getElementById("example").style.display = "block";
});

// Kolmannen napin kutsu
document.getElementById("kolmasNappi").addEventListener("click", function () {
  var persons = [
    "Nyssa P. Skinner",
    "593-4241 Lacus, St.",
    "Cape Verde",
    "Camilla F. Strickland",
    "391-2150 Ac Rd.",
    "Andorra",
    "Reagan U. Andrews",
    "P.O. Box 472, 2271 Mauris Ave",
    "Faroe Islands",
    "Kelsey D. Clark",
    "P.O. Box 866, 7793 Aliquet Ave",
    "Bulgaria",
  ];
  let cell = 3;
  html = "<table><tr>";
  for (let i = 0; i < persons.length; i++) {
    html += "<td>" + persons[i] + "</td>";

    let next = i + 1;
    if (next % cell == 0 && next != persons.length) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";
  document.getElementById("kolmasnappitaulu").innerHTML = html;
});
// harjoitus 2 mouseover
document.getElementById("aa").addEventListener("mouseover", function () {
  console.log("Stepped over my a mouse!");
});
// harjoitus 2 mouseout
document.getElementById("aa").addEventListener("mouseout", function () {
  alert("Bye bye mouse!");
});

// harjoitus 3 kaks ekaa kohtaa
document.getElementById("textdata").addEventListener("focus", function () {
  document.getElementById("textdata").style.backgroundColor = "red";
  document.getElementById("textdata").value =
    "Please fill in the form with proper data.";
});
