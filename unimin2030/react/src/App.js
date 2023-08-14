import {useEffect, useState} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => (prev + 1));
    console.log("call an api");

    useEffect(() => {
        console.log("Once")
    }, []);

    return (
        <div>
            {/*<h1 className = {styles.title}>Welcome Back to React JS</h1>*/}
            <h1>{counter}</h1>
            <button onClick = {onClick}>Click me!</button>
        </div>
    );
}

export default App;
