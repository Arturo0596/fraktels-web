import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacto from "./componets/contacto";
import Inicio from "./componets/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
    <div className="container">
       <switch>
         <Route path="/contacto" exact>
         </Route>
         <Route path="/" exact>
         </Route>
         <Route path='/servicios'>
         </Route>
       </switch>
    </div>
    </Router>
  );
}

export default App;
