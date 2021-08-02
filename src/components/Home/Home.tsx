
import AllPaintings from '../AllPaintings/AllPaintings'
import ColorPalette from '../ColorPalette/ColorPalette'
import Error from '../Error/Error'
import Favorites from '../Favorites/Favorites';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'


export interface Favorites {
    id: string
     title: string
     longTitle: string
     principalOrFirstMaker: string
     webImage: {
         url: string
     }
}

const Home: React.FC = () => {
    
    const [art, setArt] = useState([])
    const [favorites, setFavorites] = useState<Favorites[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, checkError] = useState('')

  const getAllArt = async (hexId: string) => {
    setIsLoading(true)
    try {
      let response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=SkU9wRGq&f.normalized32Colors.hex=%20%23${hexId}`)
      let currentArt = await response.json()
      setArt(currentArt.artObjects)
    } catch (error) {
        console.log('ERROR', error)
        checkError('Uh oh something is real wrong here')
    } finally {
      setIsLoading(false)
    }
  }

    const handleColorClick = (hexId: string) => {
      getAllArt(hexId)
    }

    const addToFavorites = (artId: string) => {
      let newFavorite: any = art.find((piece: Favorites) => piece.id === artId) 
      if (!favorites.includes(newFavorite)){
        setFavorites(existingFavorites => [...existingFavorites, newFavorite])   
      } else {
        return null
      }
    }

    return (
      <main className='main-container'>
      <Switch>
        <Route exact path='/'>
          <aside className='palette-container'>
            <p className='select-color'>Select a color</p>
            <ColorPalette handleColorClick={handleColorClick}/>
          </aside>
          <section>
            {!art.length && <h2 className='loading'>To get started, please select a color from the palette!</h2>}
            {!art.length && isLoading && !error && <h2 className='loading'>Loading matching paintings 🎨</h2>}
            {!art.length && error && <h2 className="loading">Something has gone wrong</h2>}
            {art && !isLoading && !error && <AllPaintings art={art} addToFavorites={addToFavorites}/>}
          </section>
        </Route>
        <Route path='/favorites' render={() => <Favorites favorites={favorites}/>} />
        <Route  render={() => <Error />}/>
      </Switch>
    </main>
    )
}

export default Home
