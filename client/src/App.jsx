import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './containers/pages/Home';
import Singup from './containers/authentication/Singup';
import Activate from './containers/authentication/Activate';
import Login from './containers/authentication/Login';


function App() {
 

  return (
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Registrar" element={<Singup/>} />
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
          <Route path='/login' element={<Login/>}/>
    
          
        </Routes>
    </BrowserRouter>
    </Provider>
  );
  
}

export default App
