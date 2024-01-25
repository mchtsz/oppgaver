let imageGallery = [
    "bilde1", "bilde2", "bilde3", "bilde4", "bilde5", 
]

const showNextImage = () => {
    const currentImage = document.querySelector("#currentImage") as HTMLImageElement // Henter ut currentImage
    const currentImageIndex = imageGallery.indexOf(currentImage.src.split("/").pop() as string) // Finner indeksen til currentImage i imageGallery
    const nextImageIndex:number = currentImageIndex + 1 // Legger til 1 for å få neste bilde
    const nextImage:string = imageGallery[nextImageIndex]
    currentImage.src = `./images/${nextImage}.jpg`
}

const showPreviousImage = () => {
    const currentImage = document.querySelector("#currentImage") as HTMLImageElement // Henter ut currentImage
    const currentImageIndex = imageGallery.indexOf(currentImage.src.split("/").pop() as string) // Finner indeksen til currentImage i imageGallery
    const previousImageIndex:number = currentImageIndex - 1 // Trekker fra 1 for å få forrige bilde
    const previousImage:string = imageGallery[previousImageIndex]
    currentImage.src = `./images/${previousImage}.jpg`
}

const showRandomImage = () => {
    const currentImage = document.querySelector("#currentImage") as HTMLImageElement // Henter ut currentImage
    const randomImageIndex:number = Math.floor(Math.random() * imageGallery.length) // Finner en tilfeldig indeks
    const randomImage:string = imageGallery[randomImageIndex]
    currentImage.src = `./images/${randomImage}.jpg`
}

const showImage = (image:string) => {
    const currentImage = document.querySelector("#currentImage") as HTMLImageElement // Henter ut currentImage
    currentImage.src = `./images/${image}.jpg`
}