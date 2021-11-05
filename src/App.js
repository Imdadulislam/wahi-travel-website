import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home/Home';
import Header from './Pages/Header/Header';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details/Details';
import Login from './Pages/Login/Login/Login';
import Notfound from './Pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider';
import MyBooking from './Pages/Home/MyBooking/MyBooking';
import AddService from './Pages/Home/AddService/AddService';
import ManageAllBooking from './Pages/Home/ManageAllBooking/ManageAllBooking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/manageAllBooking">
              <ManageAllBooking></ManageAllBooking>
            </Route>
            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
