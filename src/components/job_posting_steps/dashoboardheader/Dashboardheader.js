import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Dashboardheader.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EditIcon from '@material-ui/icons/Edit';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GradeIcon from '@material-ui/icons/Grade';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
function Dashboardheader() {
  function meunToggle() {
    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
  }
  return (
    <div>
      <div className="mq">
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light  nav3">
              <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                &emsp;&emsp;&emsp;&emsp;
                <img src="images/logo.svg" className="logo" />
                &emsp;&emsp;  
                <div className="row p-0 " style={{ width: '100%' }}>
                  <div className="col-3 pl-0 pr-0 pt-0 " style={{ zIndex: 6, marginTop: '0.7rem', backgroundColor: '#174964', borderRadius: 50, border: '1px solid #00cde9', height: 30 }}>
                    <div className="row p-0" style={{ width: '100%' }}>
                      <div className="col-1 " style={{ paddingLeft: 5 }}> <SearchIcon className ="SearchIcon" /></div>
                      <div className="col-7" style={{}}><input className="emailll" placeholder="Search" style={{ width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: 18,  }} type="text" /></div>
                    </div>
                  </div>
                  <div className="col-9 " style={{ marginTop: '-0.8rem' }}>
                    <div className="wrapper">
                      <ul>
                        <li><Link >JOBS post</Link></li>
                        <li><Link >top rated</Link></li>
                        <li><Link>status</Link></li>
              
                        &nbsp;
                        
                        <HelpOutlineIcon style={{ fontSize: 30, color: '#00cde9', marginTop: '0rem', cursor:'pointer', }} />
                        &nbsp;
                        <NotificationsNoneIcon style={{ fontSize: 30, color: '#00cde9' }} />
                        &nbsp;
                        <div className="action">
                          <spam>


                            <AccountCircleIcon className="circle" onClick={meunToggle} style={{ fontSize: 30, color: '#00cde9' }} />
                          </spam>
                          <div className="menu">
                            <h3>SYED ABDUL HADI<br /><span>Web Designer</span></h3>
                            <ul>
                              <li><AccountCircleIcon /><Link>My Profile</Link></li>
                              <li><EditIcon /><Link> Edit Profile</Link></li>
                              <li><LockOpenIcon /><Link> Change Password</Link></li>
                              <li><SettingsIcon /><Link> Setting</Link></li>
                              <li><ExitToAppIcon /><Link> Logout</Link></li>
                            </ul>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div>
                  </div>
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
        <div>
          <div>
            <div className ="mq1">
          <nav className="navbar navbar-expand-lg navbar-light  nav3">
              <div className="container-fluid ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <img style={{ width: '140px !important' }} src="images/logo.svg"  className="logo" />
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                    </li>
                  </ul>
                  <form style={{}}>
                    <div style={{ paddingLeft: 30 }}>
                      <div className="row p-0 offset-1"><input className="em" placeholder="Search" style={{ color: 'white', width: '75%', zIndex: 6, backgroundColor: 'rgb(34, 86, 107)', borderRadius: 50, border: '2px solid #00cde9', height: 50, outline: 'none' }} />
                      </div>
                    </div>
                    <div className="container " style={{ alignContent: 'left' }}>
                      <hr />
                      <li><AccountCircleIcon /><k className="size" >My Profile</k></li>
                      <hr />
                      <li><EditIcon /><k className="size" > Edit Profile</k></li>
                      <hr />
                      <li><ChatBubbleOutlineIcon/><k className="size" > my posts</k></li>
                      <hr />
                      <li><DynamicFeedIcon /><k className="size" > Status</k></li>
                      <hr />
                      <li><GradeIcon /><k className="size" > top rated</k></li>
                      <hr />
                      <li><LockOpenIcon /><k className="size" > Change Password</k></li>
                      <hr />
                      <li><NotificationsNoneIcon /><k className="size" > NOTIFICATION</k></li>
                      <hr />
                      <li><HelpOutlineIcon /><k className="size" >HELP</k></li>
                      <hr />
                      <li><SettingsIcon /><k className="size" > Setting</k></li>
                      <hr />
                      <li><ExitToAppIcon /><k className="size" > Logout</k></li>
                    </div></form>
                </div>
              </div></nav>
          </div>
        </div>
    </div>
    </div>
  )
}
export default Dashboardheader;