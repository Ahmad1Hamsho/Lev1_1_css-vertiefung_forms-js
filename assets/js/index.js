function rechnung() {
  const nummer = document.getElementById("nummer").value;
  const rechnung = nummer * 2;
  document.getElementById("ergebniss").innerText = rechnung;
}
