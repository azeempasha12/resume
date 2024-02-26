import Template1  from './template1';
import  Template2  from './template2';
import { Template3 } from './template3';
import './App.css';



export function App1(){
    return(
        <div className="container-horizontal">
        
            <Template1/>
            <Template2/>
            <Template3/>
        </div>
    )
}