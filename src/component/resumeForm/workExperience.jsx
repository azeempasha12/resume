export function WorkExperience() {
    return (
        <div className="div1">
            <h1>Work experince page</h1>
            <form action="" method="post" className="WorkExperience">
                <label htmlFor="jobtitle" className="label1">Job title</label><br />
                <input type="text" id="jobtitle" name="jobtitle" required className="input1" />
                <label htmlFor="organizationName" className="label1"> Organization Name</label>
                <input type="text" id="organisationName" name="organisationName" className="input1"/><br />

                <label htmlFor="startyear" className="label1"> Start year</label><br />
                <input type="text" id="startYear" name="startYear" className="input1"/>

                <label htmlFor="endyear"className="label1">End year</label>
                <input type="text" id="endyear" name="endyear" className="input1"/>
                







            </form>
        </div>
    )
}