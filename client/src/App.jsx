import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './containers/pages/Home';
import Singup from './containers/authentication/Singup';
import Activate from './containers/authentication/Activate';
import Login from './containers/authentication/Login';
import ResetPassword from './containers/authentication/ResetPassword';
import ConfirmResetPassword from './containers/authentication/ConfirmResetPassword';
import CategoryBlog from './components/blog/CategoryBlog';
import { PageCategory } from './containers/pages/PageCategory';
import BlogListOfCategory from './components/blog/BlogListOfCategory';
import { PageListBlogOfCategory } from './containers/pages/PageListBlogOfCategory';
import DetailPostBlog from './components/blog/DetailPostBlog';
import { PageDetailPost } from './containers/pages/PageDetailPost';
import { PageProfileUser } from './containers/pages/PageProfileUser';
import FormProfileUser from './components/profileuser/FormProfileUser';
import { Contact } from './containers/pages/Contact';


function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<PageProfileUser/>} />
          <Route path="/Registrar" element={<Singup />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/form-profile/:user' element={<FormProfileUser/>} />


          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/password/reset/confirm/:uid/:token' element={<ConfirmResetPassword />} />

          <Route path='/categoria' element={<PageCategory />} />
          <Route path='/categoria/:slug_category/' element={<PageListBlogOfCategory/>} />
          <Route path='/post/:slug/' element={<PageDetailPost/>} />
          <Route path='/contacto' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

}

export default App
