//import logo from './logo.svg';

import Login  from './pages/Login';
import PageNotFound from './pages/PageNotFound'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>   
    <Route path="/" element={<Login />}/>
    
  
      <Route path="*" exact= "true" element={<PageNotFound/>}/>
    </Routes>
    
 </BrowserRouter>
  );
}

export default App;
