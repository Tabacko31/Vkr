import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainPage } from './pages/main/main-page';
import { ProductPage } from './pages/product/product-page';
import './app.css'
import { Details } from './pages/product/details';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Add } from './pages/add/add';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route index element={<MainPage />} />
        <Route path='products' element={<ProductPage/>}/>
        <Route path='products/:id'element={<Details/>}/>
        <Route path='add' element={<Add/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </Router>
  </Provider>
  )
}

export default App
