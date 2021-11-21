import  React from 'react'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import Index from './pages/Index'
import DescriptionBook from './pages/DescriptionBook'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Index/>}/>
      <Route path = "/description" element = {<DescriptionBook />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
