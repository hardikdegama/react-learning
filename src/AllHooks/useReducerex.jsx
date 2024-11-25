
import React, { useReducer } from 'react';


const initialState = {
    items: [],
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        case 'CLEAR_CART':
            return { ...state, items: [] };
        default:
            throw new Error('Unknown action type');
    }
}

const Demo = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    
    const sampleItems = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
    ];

    const handleAddItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const handleRemoveItem = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div>
            <h2>Available Items</h2>
            <ul>
                {sampleItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleAddItem(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h3>Your Cart</h3>
            <ul>
                {state.items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleClearCart}>Clear Cart</button>
            <p>Total Items in Cart: {state.items.length}</p>
        </div>
    );
};

export default Demo;