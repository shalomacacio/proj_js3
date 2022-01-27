import  React from "react";
import { GlobalStyle } from './globalSytels';


import Header from "./components/Header";
import Content from "./components/Header/Content";
import Footer from "./components/Footer";



const App = () => {

    return (
        <>
            <GlobalStyle />
            <Header />
            <Content>
                
             </Content> 
            <Footer />
        </>
    );
}

export default App;