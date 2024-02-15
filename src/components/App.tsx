import React, { useCallback, useState } from 'react';

const App = (props: { message: string }) => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount((count) => count + 1)
    }, [count])
    return (
        <>
            <h2>{props.message}</h2>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default App;