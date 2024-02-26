export function EducationInfo(){
    return(
        <div className="div1">
        <h1>Education info page</h1>
        <form action="" method="post">
        <label htmlFor="type" className="label1">Type</label><br />
        <input type="text" id="type" name="type" placeholder="Post Gratuation" className="input1"/><br />

        <label htmlFor="university" className="label1">University</label><br />
        <input type="text" id="university" name="university"  placeholder="select university" className="input1"/>
         
         <label htmlFor="degree"className="label1">Degree</label>
         <input type="text" id="degree" name="degree" placeholder="select score" className="input1" /><br />

         <label htmlFor="Startyear"className="label1"> Start year</label><br />
         <input type="text" id="Startyear" name="Startyear" placeholder="select year" className="input1" />

         <label htmlFor="endyear" className="label1">End year</label>
         <input type="text" id="endyear" name="endyear" placeholder="select year" className="input1"/>


        </form>
        
        </div>
    )
}