let input:number = 0;
let showImage:boolean = false;

if (input <= 18) {
    console.log("Du er ikke myndig");
} else {
    showImage = true
}

if (showImage) {
    const bilde:any = document.createElement("img");
    bilde.src = "/img/test.png"
}