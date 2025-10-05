import './App.css'
import Headers from './pages/headers'
import Home from './pages/home'
import Aboutme from './pages/aboutme'
import Skills from './pages/skills'
import Project from './pages/project'

function App() {

  return (
    <>
      <div className='bg-slate-800 text-white h-full '>
        <Headers />
        <Home />
        <Aboutme />
        <Skills />
        <Project />
      </div>
    </>
  )
}

export default App
