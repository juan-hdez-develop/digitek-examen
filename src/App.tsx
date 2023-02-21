import { Routes ,Route, BrowserRouter as Router}  from 'react-router-dom'
import Notebook from './pages/Notebook';
import Welcome from './pages/Welcome';

function App() {
 
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/digitek-examen" element={<Welcome/>}/>
        <Route path="/notebook" element={ <Notebook/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
