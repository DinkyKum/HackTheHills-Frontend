import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Body from "./Componenets/Body";
import Home from "./Componenets/Home";
import Login from "./Componenets/Login";
import appStore from "./utils/appStore";
import AdminDashboard from "./Componenets/AdminDashboard";
import MergedSchedule from "./Componenets/MergedSchedule";
import MergeableSchedule from "./Componenets/MergeableSchedule";
import TransportCompany from "./Componenets/TransportCompany";


function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/transportCompany" element={<TransportCompany/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/mergedSchedule" element={<MergedSchedule/>}/>
      <Route path="/mergeable" element={<MergeableSchedule/>}/>

      
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>

  )
}

export default App
