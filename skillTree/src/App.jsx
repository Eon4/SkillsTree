import './App.css'
import projects from './components/projects/myProjects';
import ProjectTree from './components/skillTree/skillsTree';

function App() {

  return (
    <>
    <h1>Hello there</h1>
    <h2>Lets build a skillstree</h2>
    <ProjectTree projects={projects} />

    </>
  )
}

export default App
