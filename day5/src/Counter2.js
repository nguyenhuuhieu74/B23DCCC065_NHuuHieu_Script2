import { useState } from "react";

function Counter2() {
    const [count, setCount] = useState(0);

    const handleClick=() => {
        setCount(count +1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Counter2;