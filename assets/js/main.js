// Output Grundumsatz
const grundKcal = document.querySelector(".grundumsatzKcal");
const grundKj = document.querySelector(".grundumsatzKj");
// Output Gesamtumsatz
const gesamtKcal = document.querySelector(".gesamtKcal");
const gesamtKJ = document.querySelector(".gesamtKj");
// Pal-selector
const pal = document.querySelector("#pal");

// FUNKTION
// ============================
const kalorien = () => {
  // Variablen auslesen
  let groesse = Number(document.querySelector("#groesse").value);
  let alter = Number(document.querySelector("#alter").value);
  let gewicht = Number(document.querySelector("#gewicht").value);
  let geschlecht = document.querySelector(
    "input[name=koerperbau]:checked"
  ).value;
  //   pal-Wert <select> auslesen
  let palWert = Number(pal.options[pal.selectedIndex].value);
  // =============================
  if (geschlecht === "weiblich") {
    let grundumsatzFrau = Math.round(
      655.1 + 9.6 * gewicht + 1.8 * groesse - 4.7 * alter
    );
    let grundumsatzFrauKj = Math.round(grundumsatzFrau * 4.184);
    let gesamtKjouleFrau = Math.round(grundumsatzFrauKj * palWert);
    // Ausgabe im HTML========================
    grundKcal.innerHTML = grundumsatzFrau + " kcal";
    grundKj.innerHTML = grundumsatzFrauKj + " kJ";
    gesamtKcal.innerHTML = Math.round(grundumsatzFrau * palWert) + " kcal";
    gesamtKJ.innerHTML = gesamtKjouleFrau + " kJ";
  } else {
    let grundumsatzMann = Math.round(
      66.47 + 13.7 * gewicht + 5 * groesse - 6.8 * alter
    );
    let grundumsatzMannKj = Math.round(grundumsatzMann * 4.184);
    let gesamtKjouleMann = Math.round(grundumsatzMannKj * palWert);
    // Ausgabe im HTML========================
    grundKcal.innerHTML = grundumsatzMann + " kcal";
    grundKj.innerHTML = grundumsatzMannKj + " kJ";
    gesamtKcal.innerHTML = Math.round(grundumsatzMann * palWert) + " kcal";
    gesamtKJ.innerHTML = gesamtKjouleMann + " kJ";
  }
};
