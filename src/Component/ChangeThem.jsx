import React, { useReducer, useEffect } from 'react';
import icon from "./themicon.jpg"; 

const initialState = { backgroundColor: 'white' };

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_COLOR':
            return { backgroundColor: state.backgroundColor === 'white' ? 'black' : 'white' };
        default:
            return state;
    }
};

function ToggleSwitch() {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    
    useEffect(() => {
        document.body.style.backgroundColor = state.backgroundColor;
    }, [state.backgroundColor]);

    const textColor = state.backgroundColor === 'white' ? 'black' : 'white';

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', color: textColor }}>
            <h1>Click the Image to Change Background Color</h1>
            <img
                src={icon}
                alt="Click to change color"
                style={{ cursor: 'pointer', width: '150px', height: '150px' }}
                onClick={() => dispatch({ type: 'TOGGLE_COLOR' })}
            />
        </div>
    );
}

export default ToggleSwitch;