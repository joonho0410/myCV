import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Others from './Components/Others/Others'
import Project from './Components/Project/Project'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Header>
        <Main/>
        <Skills/>
        <Project/>
        <Others/>
      </Header>
    </>    
  )
}

export default App
