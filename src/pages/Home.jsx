import React from 'react'
import {Main,Row} from '../components'
import requests from '../Requests'
import { nanoid } from 'nanoid'
const Home = () => {
  return (
    <>
    <Main/>
    <Row rowId={nanoid()} title="UpComing" fetchURL={requests.requestUpcoming}/>
    <Row rowId={nanoid()} title="Popular" fetchURL={requests.requestPopular}/>
    <Row rowId={nanoid()} title="Trending" fetchURL={requests.requestTrending}/>
    <Row rowId={nanoid()} title="Top Rated" fetchURL={requests.requestTopRated}/>
    <Row rowId={nanoid()} title="Horror" fetchURL={requests.requestHorror}/>
    </>
  )
}

export default Home