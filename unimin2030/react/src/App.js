import {useEffect, useState} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => (prev + 1));
    const onChange = (event) => setKeyword(event.target.value);
    console.log("call an api");

    useEffect(() => {
        console.log("Once")
    }, []);
    useEffect(() => {
        console.log("For your", keyword);
    }, [keyword])
    return (
        <div>
            {/*<h1 className = {styles.title}>Welcome Back to React JS</h1>*/}
            <input
                value = {keyword}
                onChange = {onChange}
                type = "text"
                placeholder = "Serch here" />
            <h1>{counter}</h1>
            <button onClick = {onClick}>Click me!</button>
        </div>
    );
}

export default App;
