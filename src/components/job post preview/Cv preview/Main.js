import React from 'react'
import './Cvpreview.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hiring from './Hiring';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
        margin: 0,
    
     
  },
  avatar: {
      width: 180,
      height: 200,
  },
  paper: {
    flexGrow: 1,
    maxWidth: 700,
    margin: '0 auto'
  },
}));

function Main(){
    const classes = useStyles();
    return(
        
        <div className="body">
        <br />
             <div className={classes.root}>
    
<main className="main-content">
  <section className="left-section">
    <div className="left-content">
      <div className="profile">
        <div className="image">
        <Avatar  src="images/hadi.jpeg" className={classes.avatar} />
        </div>
        <h2 className="name">Syed Abdul Hadi</h2>
        <p className="career">Software Engineer</p>
      </div>
      <div className="contact-info">
        <h3 className="main-title">Contact Info</h3>
        <ul>
          <li>
            <PhoneIcon className="i" />
            031229389282
          </li>
          <li>
            <EmailIcon className="i"/>
            syedhadiazfar@gmail.com
          </li>
          <li>
            <LanguageIcon className="i" />
            syedhadisurge.sh
          </li>
          <li>
            <FacebookIcon className="i"/>
            www.facebook.com/lorem
          </li>
          <li>
            < GitHubIcon className="i" />
            Github
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h3 className="main-title">Skills</h3>
        <ul>
          <li>
            <p className="skill-title">Javascript</p>
          </li>
          <li>
            <p className="skill-title">Photoshop</p>
          </li>
          <li>
            <p className="skill-title">Java</p>
          </li>
          <li>
            <p className="skill-title">C++</p>
          </li>
          <li>
            <p className="skill-title">Ruby</p>
          </li>
          <li>
            <p className="skill-title">Node js</p>
          </li>
          <li>
            <p className="skill-title">html/css</p>
          </li>
          <li>
            <p className="skill-title">illustrator</p>
          </li>
          <li>
            <p className="skill-title">Wordpress</p>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h3 className="main-title">Languages</h3>
        <div className="referee">
          <ul>
            <li>URDU</li>
            <li>ENGLISH</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3 className="main-title">Location</h3>
          <div className="referee">
            <ul>
              <li>
                <LocationOnIcon className="i"/>
                karachi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="right-section">
    <div className="right-main-content">
      <section className="about sect">
        <h3 className="right-title">About Me</h3>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          molestias facilis ullam dolorum, reprehenderit dolorem accusantium sit
          quo dolore nostrum assumenda obcaecati animi commodi nobis labore
          exercitationem corporis esse eveniet optio laudantium molestiae
          maiores pariatur nisi cumque. Distinctio et, totam, dicta autem
          nostrum doloribus ipsam vel rerum, molestiae soluta laboriosam. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          iusto porro suscipit. Nihil blanditiis cum voluptates odio recusandae
          deleniti, nulla repudiandae aliquam adipisci iusto reiciendis sequi
          labore quos ratione accusamus consectetur, libero ex assumenda
          pariatur commodi animi nobis, dolore id.
        </p>
      </section>
      <section className="education sect">
        <h3 className="right-title">education</h3>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Cheney School</h5>
            <p className="para">2015 - 2016</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">O level</h5>
              <p className="para"></p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Cheney School</h5>
            <p className="para">2016 - 2018</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">A - Levels</h5>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">University of Sussex</h5>
            <p className="para">2018 - Present</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">(bS)Computer Science</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="experince sect">
        <h3 className="right-title">Experience</h3>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Microsoft</h5>
            <p className="para">2017 - 2019</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Junior Developer</h5>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias cupiditate vitae
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Google Inc</h5>
            <p className="para">2019 - 2020</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Lead Web developer</h5>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias cupiditate vitae
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Google Inc</h5>
            <p className="para">2019 - 2020</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Lead Web developer</h5>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias cupiditate vitae
              </p>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="left-tl-content">
            <h5 className="tl-title">Apple</h5>
            <p className="para">2020 - Present</p>
          </div>
          <div className="right-tl-content">
            <div className="tl-content">
              <h5 className="tl-title-2">Senior Developer</h5>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias cupiditate vitae
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>

</main>
</div>
<div className={classes.root}>
      <Grid >
        <Grid item xs={12}>
          <Paper className={classes.paper}><Hiring /></Paper>
        </Grid>
        
        </Grid>

        </div>
        <br />
        <br />
</div>
    )
}
export default Main