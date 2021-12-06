import  React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Filter from "./components/Filter";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div>
            <Header  />
            <Filter  />
            <Content />
        </div>

    );
}

export default App;