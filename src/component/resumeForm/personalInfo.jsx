


export function PersonalInfo() {
  return (
      <div className="div1">
          <h1>personal info page</h1>
         <form action="" method="post">
       
         <label htmlFor="firstname" className="label1">First name</label><br />
         <input type="text" id="firstname" name="firstname"className="input1" required  />
         
         <label htmlFor="lastname" className="label1">Last name</label>
         <input type="text" id="lastname" name="lastname" className="input1" required /><br />
      

        <label htmlFor="email" className="label1">Email</label><br />
         <input type="email" id="email" name="email" className="input1" required/>

         <label htmlFor="mobile" className="label1">Mobile</label>
        <input type="text" id="mobile" mobile="mobile" className="input1" required/><br />

        <label htmlFor="address" className="label1">Address</label><br />
        <input type="text" name="address" id="address" className="input1" required/>

        <label htmlFor="city" className="label1">city</label>
        <input type="text" id="city" name="city" className="input1" required/><br />

        <label htmlFor="state"className="label1">State</label><br />
        <input type="text" name="state" id="state" className="input1" required />

        <label htmlFor="postalcode"className="label1">Postal Code</label>
        <input type="code" id="postalcode" name="postalcode" className="input1"/><br />

        <label htmlFor="objective" className="label1">Object</label><br />
        <textarea name="" id="objective" cols="100" rows="4"></textarea>

         </form>


      </div>
  );
}
