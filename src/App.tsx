import { Routes ,Route, BrowserRouter as Router}  from 'react-router-dom'
import Notebook from './pages/Notebook';
import Welcome from './pages/Welcome';

import { Provider } from 'react-redux'
import { store } from './store/index';


function App() {
 
  return (
    <Provider store={store}>
      <Router>
          <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/digitek-examen" element={<Welcome/>}/>
          <Route path="/notebook" element={ <Notebook/>}/>
        </Routes>
      </Router>
    </Provider>
   
  );
}

export default App;
