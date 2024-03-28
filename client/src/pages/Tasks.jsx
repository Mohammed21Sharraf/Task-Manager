import {useState} from 'react'
import { Navigate, useLocation } from "react-router-dom";
import {  useSelector } from "react-redux";
import Sidebar from '../components/Sidebar/Sidebar';
import './Dashboard.scss'
import Navbar from '../components/Navbar/Navbar';
import TaskTable from '../components/Task/TaskTable';

const Tasks = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div >
               
                <Navbar>
                <TaskTable/>
                </Navbar>
    </div>

  )
}

export default Tasks