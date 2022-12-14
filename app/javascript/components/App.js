import React from 'react'
import { Provider } from 'react-redux';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting';
import Header from './Header';
import Home from './Home';
import store from '../redux/ConfigureStore';

const App = () => {
  return (
      <Provider store={store}> 
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={ (<Home />) } />
          <Route exact path="/greeting" element={ (<Greeting />) } />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
