import "../../../../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import "./Expertise.css"
import SidePanel from "../Sidepanel/SidePanel";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Link } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
function Main(){
    const data = [
         {Language: 'C' , id: 1 },
         {Language: 'REACTJS' , id: 2 },
         {Language: 'C++' , id: 3 },
         

    ]
    const [options] = useState(data)

        
    return(
        <div className ="Expertisecv">
        <div className="container-fluid b" style={{backgroundColor: 'rgb(243, 247, 247)', zIndex: 5}}>
  <div className="container pt-2" style={{zIndex: 6}}>
    <div className="row"><div className="col-3 offset-1 ">
        <br />
        <SidePanel 
        CheckCircleOutlineIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}  />}
        CategoryIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}}    />}
        AccessibleIcon = {<CheckCircleIcon style={{fontSize: 20, color: '#174964'}} />}
        TimelineIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        SchoolIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        ApartmentIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        LanguageIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        TimerIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        PersonIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        PhotoCameraIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        LocationOnIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        PhoneIcon = {<CheckCircleOutlineIcon style={{fontSize: 20, color: 'gray'}}  />}
        
        />
      </div>
      <div className="col-8   pt-4 ">
    <div className="container " style={{width: '100%', backgroundColor: 'white', zIndex: 7, boxShadow: '0 0 6px 0 rgba(0,0,0,.12), 0 6px 6px 0 rgba(0,0,0,.24)'}}>
      <div className="row" style={{borderBottom: '2px solid rgb(165, 165, 165)'}}>
        <div className="col pt-4 pl-4 pr-4 pb-2">
          <a style={{fontSize: 22, fontWeight: 600}}>Expertise</a> 
          <br />
          <p style={{fontSize: 14, fontWeight: 400}}>Step 3 of 12</p>
        </div>
      </div>
      <br />
      <div className="row" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <a style={{fontSize: 20, fontWeight: 600}}>Select your skills</a>
        </div>
      </div>
      <div className="row" style={{}}>
        <div className="col pt-2 pl-4 pr-4 pb-2">
          <a style={{fontSize: 15, fontWeight: 700, color: 'maroon'}}>Not what you're looking for?</a> &nbsp;&nbsp; <a href><i style={{color: '#0d6efd'}} className="fas fa-question-circle" /></a> <br />
          <br />

 
  <div className="dropdown" style={{width: '96%'}}>
    
    
      <Multiselect className="options" options={options} displayValue="Language" style={{width: '100%' }} type="text" placeholder="Search.."/>
  
    </div>

  <br />
        
          <br />

          <br /><br />
          <br />
          <br />
        </div>
      </div>
      <div className="row pt-4 pb-4" style={{borderTop: '3px solid rgb(165, 165, 165)'}}>
        <div className="col-5  pl-4 pr-4 pb-3">
        <Link to = '/Category'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Back</button></Link>
        </div>
        <div className="col-5 offset-2 pt-0 pl-4 pr-4 pb-3">
        <Link to = '/ExpertiseLevel'><button className="p-2 but" style={{outline: 'none', width: '90%', borderRadius: 20}}>Next</button></Link>
        </div>
      </div>
    </div>
  </div>
 
      
      
      
      
      
      
      
      
      
      </div></div>
      <br /> <br /><br />
  <br />
 
      </div>


      </div>
        

    )
}
export default Main