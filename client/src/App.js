import './App.css';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute.component';
import Login from "./components/Login/Login.component";
import Register from "./components/Register/Register.component";
import Dashboard from "./components/Dashboard/Dashboard.component";

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path={"/login"} exact={true} element={<Login />} />
          <Route path={"/register"} exact={true} element={<Register />} />
          <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
          <Route path={"/dashboard"} exact={true} element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 
       </Routes>
    </div>
  );
}

export default App;
