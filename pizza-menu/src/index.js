import React from 'react';
import ReactDOM  from 'react-dom/client';
import pizzaData from './data';

function App(){
    return <Pizza/>
}

function Pizza(){
    return(
        <>
        {
            pizzaData.map(item => {
                return <>
                <img src={item.photoName} alt="" />
                <h2>{item.name} <small>(${item.price})</small></h2>
                <h3>{item.ingredients}</h3>
                </>
            })
        }
        </>
    )
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);

