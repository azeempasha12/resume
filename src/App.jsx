import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar';
//import { store } from './redux/store';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './component/aboutPage';
//import AddressForm from './component/personalInfo';
import { PersonalInfo } from './component/resumeForm/personalInfo';
//import { HomePage } from './component/resumeForm/HomePage';
import { WorkExperience } from './component/resumeForm/workExperience';
import { EducationInfo } from './component/resumeForm/education';
import { KeySkillInfo } from './component/resumeForm/keyskill';
import { Form } from './component/FORM';
// import Template1  from './template1';
// import  Template2  from './template2';
// import { Template3 } from './template3';


function App() {
  //console.log(store)

  return (
    <div className="App">
     
     
     


      <Navbar />
      {/* <HomePage /> */}
      {/* <Template1/>
      <Template2/>
      <Template3/> */}
     

      <Routes>


        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='form' element={<Form/>} ><Route path='personalinfo' element={<PersonalInfo />}></Route>
          <Route path='workexperience' element={<WorkExperience />}></Route>
          <Route path='educationinfo' element={<EducationInfo />}></Route>
          <Route path='keySkillinfo' element={<KeySkillInfo />}></Route></Route>
        {/* <Route path='/' element={<HomePage/>}></Route> */}


      </Routes>





    </div>

  
  );
}

export default App;
