import  React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

const App = () => {

    const [num, setNum] = useState(0);

    function incrementa(){
        return setNum(num+10);
    }


    return (
        <div>
            <Header num={num} />
            <button onClick={incrementa}> +10 </button>
            <Filter />
            <Footer />
        </div>

    );
}

export default App;