import {  useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate=useNavigate()
    return (
<div>
    <h2 onClick={()=>navigate("/about")}>Home</h2>
    <p>Welcome to the home page!</p>
  </div>
    )
  
}
export default Home;