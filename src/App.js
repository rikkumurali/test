
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// import typography from '@mui/material';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import ComA from './ComA/ComA';
// import About from './Pages/About';
// import ErrorPage from './Pages/ErrorPage';

// import Profile from './Pages/Profile';
// import Form from './Form/Form';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import HeroSection from './components/HeroSection';
// import { Container } from '@mui/material';
// import CakeSection from './components/CakeSection';
// import ContactUs from './components/ContactUs';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#864313',
//     },
    
//   },
// });


    {/* <Router>
      // <nav>
      //   <Link to="/">Home</Link>
      //   <Link to="/about">About</Link>
      //   <Link to="/profile">Profile</Link>
      // </nav>
      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/profile/:username" element={<Profile />} />
      //   <Route path="*" element={<ErrorPage />} />
      // </Routes> */}
       {/* <ThemeProvider theme={theme}>
        <NavBar /> 
        <Container>
             <HeroSection />
            <CakeSection />  
             <ContactUs />
        </Container>
        
      </ThemeProvider> */}



      const App = () => {

        return <>

      <div className="App">
        
          <Router>
             <NavBar />

            <Routes>
        
              <Route path="/" element={<Home />} /> 
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
              <Footer />
          </Router>
      </div>
 
    
  </>;
}

export default App;



