import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Pizza from './components/Pizza';
import './index.css'

function App(){
    return <div className='container'>
    <Header/>
        <main>
    <Pizza/>
    </main>
    </div>
}



// React v18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);

