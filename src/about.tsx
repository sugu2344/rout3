import { useNavigate } from 'react-router-dom';
const About = () => {
    const gate=useNavigate()
    return(
    <div>
          <h2 onClick={()=>gate("/home")}>about</h2>
  
      <p>This is the about page.</p>
    </div>
    )
    };
  export default About;