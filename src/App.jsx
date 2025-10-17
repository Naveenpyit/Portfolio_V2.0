import './App.css'
import Headers from './pages/headers'
import Home from './pages/home'
import Aboutme from './pages/aboutme'
import Skills from './pages/skills'
import Project from './pages/project'
import Experience from './pages/experience'
import Contact from './pages/contact'
import Footer from './pages/footer'
import { useSelector } from 'react-redux'
import { getTheme } from './store/changeTheme'

function App() {
  const sectionClass = 'min-h-screen flex items-center justify-center'
  const theme = useSelector(getTheme);
  return (
    <>
      <div className={` ${theme == 'blue' ? 'bg-slate-800' : 'bg-black'}  text-white h-full `}>
        <Headers />
        <section id='home' className={sectionClass}><Home /></section>
        <section id='aboutme' className={sectionClass}><Aboutme /></section>
        <section id='skills' className={sectionClass}><Skills /></section>
        <section id='experience' className={sectionClass}><Experience /></section>
        <section id='projects' className={sectionClass}><Project /></section>
        <section id='contact' className={sectionClass}><Contact /></section>
        <Footer />
      </div>
    </>
  )
}

export default App
