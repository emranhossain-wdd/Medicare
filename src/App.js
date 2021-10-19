import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FooterTop from './components/Footer/FooterTop/FooterTop';
import Footer from './components/Footer/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import SignUp from './components/SignUp/SignUp';
import Blogs from './components/Blogs/Blogs';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Doctors from './components/Doctors/Doctors';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App font-poppins">
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
            <Route exact path="/doctors">
              <Doctors />
            </Route>
            <PrivateRoute path="/doctors/:id">
              <DoctorDetails />
            </PrivateRoute>
            <Route exact path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/blogs">
              <Blogs />
            </PrivateRoute>
            <PrivateRoute path="/blogs/:id">
              <BlogDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <FooterTop />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
