export const getAllArt = (hexId: number) => {
    return fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
    .then(response => response.json())
    .catch(error => error)
}


