
import React from 'react'
import { useState, useEffect } from 'react'

interface HomeProps { }

const Home: React.FC<HomeProps> = props => {
    const [art, setArt ] = useState({})

  const getAllArt = async (hexId: number) => {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let art = await response.json()
      setArt(art.artObjects)
      console.log(art.artObjects)
  }

    useEffect(() => {
        getAllArt(981313)
    }, [])

    return (
        <main>
            <h1>HELLO WORLD</h1>
        </main>
    )
}

export default Home

// export const getAllArt = (hexId: number) => {
//     return fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
//     .then(response => response.json())
//     .catch(error => error)
// }