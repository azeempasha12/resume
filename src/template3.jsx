export function Template3(){
    return(
        <div className="box19" style={{border:"2px solid red", backgroundColor:"biege",}}>
        <div >
            <div className="row  m-0 d-flex align-items-center" style={{height:"200px"}}>
                <div className="col-2 text-center media" >
                    {/* <img className="rounded align-self-center mx-auto " src={ dataStore.imageFile}alt='profile-pic' */}
                         {/* style={{maxHeight:'180px',minHeight:"120px", width:'100px', background:'grey',padding:0}}/> */}
                   
                </div>
                <div className="col-6    text-left font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div className=' d-flex justify-content-center' style={{color:"#00adb5",fontSize:"55px"}}>Azeem</div>
                    <h5 className=' d-flex justify-content-center'>full stack developer</h5>
                </div>
                <div className="col-4  ">
                    <div className=' p-3' style={{fontSize:"18px",float:"left",display:"inline-block"}}>
                        <div >email</div>
                        {/* <div >{dataStore.personalInfo.Email}</div> */}
                        <div>mobile</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, velit.
                        </div>
                        
                
                    </div>
                </div>
            </div>
        </div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
        <div className="text-justify mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, laborum.cd</div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>

        <div className="container" style={{fontFamily:"Serif",}}>
            <div className="row">
                <div className="col-3 text-left  " style={{color:"#00adb5"}}> <h4> Professional Experience</h4></div>
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                    {/* {dataStore.workEx.map((item)=>{
                        return(
                            <div key={shortid.generate()}>
                                <div className='mt-2'><b>{item.title}</b></div>
                                <div className='mt-2'>
                                    Worked in {item.orgName} from {item.startYear} to {item.endYear}.
                                </div>
                                <div>{item.jobDescription}</div>
                            </div>
                        )})
                    } */}
                
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left" style={{color:"#00adb5"}}><h4>Education</h4></div>
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        {/* {dataStore.education.map((item)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <b> {item.Degree}</b>
                                    <div> I have persued my {item.Type} in {item.Degree} from {item.University}</div>
                                    <p>Duration: {" "+item.Start+ " - " + item.End}</p> 
                                </div>
                            )
                        })} */}
                        
                    </div>
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left " >
                    <h4 style={{color:"#00adb5"}}>Key Skills</h4>
                </div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    
                        {/* {dataStore.skills.map((skill)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <li style={{listStyle:"none"}}>{skill.skillName}</li>
                                </div>
                            )
                             
                        })} */}
                </div>
                   
                </div>
        </div>
    </div>
    )
}