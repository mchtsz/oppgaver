const question:any = prompt("Hvor gammel er du?");
const forUng = question  < 16;
const seksten = question === 16;
const atten = question === 18;
const tjueEtt = question === 21;
const tjueFire = question === 24;
const tooOld = question >= 50;

if (forUng) {
    console.log("Du er ikke myndig");
} else if (seksten) {
    console.log("Du kan ta moped lappen")
} else if (atten) {
    console.log("Du kan ta bil lappen")
} else if (tjueEtt) {
    console.log("Du kan ta lastebil lappen")
} else if (tjueFire) {
    console.log("Du kan ta buss lappen")
} else if (tooOld) {
    console.log("Du er for gammel, ta faste kontroller hos legen + oppføring i registeret")
}