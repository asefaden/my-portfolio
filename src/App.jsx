import './index.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About/About.jsx'
import Experience from './Pages/EXperience/Experience.jsx'
import Projects from './Pages/Projects/Projects.jsx'
import Skills from './Pages/Skills/Skills.jsx'
import Blogs from './Pages/Blogs/Blogs.jsx'
import Resume from './Pages/Resume/Resume.jsx'
import { useEffect,useState } from 'react'
import Cliploader from 'react-spinners/Cliploader';

// Convert CSS string to JS object
const override = {
  display: "block",
  margin: "100px auto",
   // Fixed: camelCase from "border-color"
};

function App() {
  const [loading,setLoading]=useState(true)
    useEffect(()=>{
      
      setTimeout(()=>{setLoading(false)},1000)
},[])

  return (
    <>
     {
      loading?
      <Cliploader  color={'#4169E1'} cssOverride={override} loading={loading} size={150} aria-label="Loading Spinner"
        data-testid="loader" />
     :
     <div>
       <Navbar/>
       <div className='container'>
       <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
       </Routes>
        </div>
        <Footer/>
        </div>
     }
      
    </>
  )
}


export default App
