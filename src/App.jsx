import { useState } from 'react'
import './App.css'

import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import {Admin} from './components/Admin'
import {Hr} from './components/Hr'
import {Finance} from './components/Finance'
import { MainPage } from './components/MainPage';
import {Employe} from './components/Employe'
import { Student } from './components/Student';
function App() {
  

  return (
   <div>
       <BrowserRouter>


<Routes>

  <Route path='/' element={<MainPage/>}/>
  <Route path='/Admin' element={<Admin/>}/>
  <Route path='/Hr' element={<Hr/>}/>
  <Route path='/Student' element={<Student/>}/>
  <Route path='/Employe' element={<Employe/>}/>
  <Route path='/Finance' element={<Finance/>}/>

 

</Routes>
</BrowserRouter>
   </div>
  )
}

export default App
