import { Link,Outlet } from "react-router-dom";
export function Form(){
    return(
        <div>
            <Link to="personalinfo" className="personalinfo">Personal Info</Link> <br />
<Link to= "workexperience" className="workexperience">Work Experience</Link> <br />
<Link to="educationinfo" className="educationinfo">Education</Link><br />
<Link to ="keyskillInfo" className="keyskillInfo">Key Skill</Link>
<Outlet/>
        </div>
    )
}