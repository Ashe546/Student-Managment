import './App.css';
import Home from "./Component/home/index" 
import { Routes, Route } from 'react-router-dom';
import Teachers from './Component/Teacher/all-teachers';
import Teacherdetail from './Component/Teacher/teacher-detail';
import Addteacher from './Component/Teacher/add-teacher';


export default function App() {

  return (
    <div>
      <Home />
      <Routes>
        <Route path='/teacher' element={<Teachers />}></Route>
        <Route path='/detail' element={<Teacherdetail />}></Route>
        <Route path='/Add/teacher' element={<Addteacher />}></Route>
      </Routes>
    </div>
  )
}

