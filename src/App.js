import logo from './logo.svg';
import './App.css';
import NavBar from './components/Shared/NavBar/NavBar';
import HeaderBanner from './components/Home/HeaderBanner/HeaderBanner';
import Services from './components/Home/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage/HomePage';
import NotFound from './components/Shared/NotFound/NotFound';
import { Placeholder } from 'react-bootstrap';
import PlaceBooking from './components/Pages/PlaceBooking/PlaceBooking';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <PrivateRoute path="/placebooking/:id">
                            <PlaceBooking />
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
