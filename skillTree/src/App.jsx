import './App.css'
import projects from './components/projects/myProjects';
import ProjectTree from './components/skillTree/skillsTree';

import ProjectTree3D from './components/ProjectTree3D/ProjectTree3D';


function App() {

  return (
    <>
    <h1>Hello there</h1>
    <h2>Lets build a skillstree</h2>
    <ProjectTree projects={projects} />

    
    <ProjectTree3D />

    </>
  )
}

export default App
