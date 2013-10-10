
function printToOutputBox(selectobj){
var e_proglangs = document.getElementById("proglangs");
var e_outputbox = document.getElementById("outputbox");
e_outputbox.innerHTML = "Du har selektert programmeringsspr&aringket " + e_proglangs.options[selectobj.selectedIndex].text;
}