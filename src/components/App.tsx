import React, { useCallback, useState } from 'react';

const App = (props: { message: string }) => {
    return (
        <>
            <h2>{props.message}</h2>
            <h3>Count: {count}</h3>
            <button>Increment</button>
        </>
    )
}