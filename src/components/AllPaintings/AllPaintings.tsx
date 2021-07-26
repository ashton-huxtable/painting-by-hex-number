// import React from 'react';
import React, { Component } from 'react';
import { fetchArtData } from '../../Utils/apiCalls'

interface Art {
    longTitle: string,
    webImage: string, 
    title: string,
    id: string,
    artist: string
}

class AllPaintings extends Component<Art> {

componentDidMount() {
    fetchArtData(981313)
}

    render() {

    }





}


export default AllPaintings;