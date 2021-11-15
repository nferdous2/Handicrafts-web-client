import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';
import Explore from './components/Pages/Explore/Explore';
import Review from './components/Pages/Review/Review';
import Login from './components/Pages/Login/Login';
import Home from './components/Home/Home/Home';
import Purchase from './components/Pages/Purchase/Purchase';
import Products from './components/Pages/Products/Products';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import Register from './components/Pages/Register/Register';
import MakeAdmin from './components/Pages/MakeAdmin/MakeAdmin';
import AddReview from './components/Home/AddReview/AddReview';
import Admin from './components/Home/Admin/Admin';
import AddProduct from './components/Pages/AddProduct/AddProduct';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/addreview">
              <AddReview />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
