import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './containers/pages/Home';
import Singup from './containers/authentication/Singup';


function App() {
 

  return (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Registrar" element={<Singup/>} />
    
          
        </Routes>
    </BrowserRouter>
    </Provider>
  );
  
}

export default App
