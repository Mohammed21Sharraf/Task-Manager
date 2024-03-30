// import React from 'react'
// import 
// { BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
//   BsListCheck, BsMenuButtonWideFill}
//  from 'react-icons/bs'
//  import { FaTasks } from "react-icons/fa";
//  import { BiTask } from "react-icons/bi";
//  import { MdIncompleteCircle } from "react-icons/md";
//  import { GrInProgress } from "react-icons/gr";
//  import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import ClearIcon from '@mui/icons-material/Clear';
// import './Sidebar.scss'

// function Sidebar({openSidebarToggle, OpenSidebar}) {
//   const navigate = useNavigate();
//   return (
//     <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
//         <div className='sidebar-title'>
//             <div className='sidebar-brand'>
//                 <BiTask  className='icon_header'/> Task Manager
//             </div>
//             <button>
//              <ClearIcon className='icon close_icon' onClick={OpenSidebar}></ClearIcon>
//             </button>
//             {/* <ClearIcon className='icon close_icon' onClick={OpenSidebar}></ClearIcon> */}
//         </div>

//         <ul className='sidebar-list'>
//             <li className='sidebar-list-item'>
//                 <a href="" onClick={() => navigate("/dashboard")}>
//                     <BsGrid1X2Fill className='icon'/> Dashboard
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="" onClick={() => navigate("/tasks")}>
//                     <FaTasks className='icon'/> Tasks
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <MdIncompleteCircle className='icon'/> Completed
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <GrInProgress className='icon'/> In Progress
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <MdOutlineAutoAwesomeMotion className='icon'/> To do
//                 </a>
//             </li>
//             <li className='sidebar-list-item'>
//                 <a href="">
//                     <BsFillGrid3X3GapFill className='icon'/> Categories
//                 </a>
//             </li>
//         </ul>
//     </aside>
//   )
// }

// export default Sidebar