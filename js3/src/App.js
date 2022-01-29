import  React from "react";
import { GlobalStyle } from './globalSytels';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import Header from "./components/Header";
import Footer from "./components/Footer";



const App = () => {

    return (
        <>
        <Router>
            <GlobalStyle />
            <Header />
                <Routes />
            <Footer />
        </Router>
        </>
    );
}

export default App;