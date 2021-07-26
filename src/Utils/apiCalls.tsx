const baseURL : string = 'https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23'

// 981313


// const checkForError = (response) => {
//     if (response.ok) {
//      return response.json()
//     } else {
//       throw new Error('Sorry, your request did not go through')
//     }
//   };


export default function fetchArtData(endpoint): Promise<Art[]> {
    return fetch(`${baseURL}${endpoint}`)
        .then(response => response.json())
        .then(response => {
            return response as Art []
        })
        // .then(checkForError)

}