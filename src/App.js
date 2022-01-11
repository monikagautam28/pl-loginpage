//import logo from './logo.svg';

import Login  from './pages/Login';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Rightbar from './Component/Rightbar';
import Profile from './Component/Profile';
import Test from './Component/Test';
import PageNotFound from './pages/PageNotFound';
import Ref from './Component/Ref';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  let check = false;
  if(localStorage.getItem("login")){
    check=true;
  }
  return (
    <BrowserRouter>
    {
      check == true ?   <Routes>   
  
    <Route path="/profile" element={<Profile />}/>
    <Route path="/reference" element={<Ref />}/>
    <Route path="/sidebar" element={<Sidebar />}/>
    <Route path="/rightbar" element={<Rightbar />}/>
    <Route path="/header" element={<Header />}/>
    <Route path="/Test" element={<Test />}/>
      <Route path="*" exact= "true" element={<PageNotFound/>}/>
    </Routes>:  
    <Routes>   
    <Route path="/" element={<Login />}/>
    <Route path="/reference" element={<Ref />}/>
    <Route path="*" element={<Navigate to='/'/>}/>
     
    </Routes>
    }
  
    
 </BrowserRouter>
  );
}

export default App;
