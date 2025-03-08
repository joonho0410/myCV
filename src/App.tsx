import './App.css'
import Layout from './Components/Layout/Layout'
import Main from './Components/Main/Main'
import Others from './Components/Others/Others'
import Project from './Components/Project/Project'
import ProfileAndSkills from './Components/ProfileAndSkills/ProfileAndSkills'

function App() {

  return (
    <Layout>
      <Main/>
      <ProfileAndSkills/>
      <Project/>
      <Others/>
    </Layout>    
  )
}

export default App
