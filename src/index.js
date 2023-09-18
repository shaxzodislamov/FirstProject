import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Poisk from "./Components/Poiskovik";
import Tashkilot from "./Components/Tashkilot";
import Kurierlar_item from "./Components/kurierlar_item";
import Kurier from "./Components/Kurier";
import Kurier_info from "./Components/Kurier_info";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


