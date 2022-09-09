
export default function Register(){


return(
<>  
<form> 
    <label>Email:</label>
    <input
        class="registration"
        placeholder="example@mail.com"    
    />

    <label>First Name:</label>
    <input
        class="registration"
        placeholder="Jane"
    />

    <label>Last Name:</label>
    <input
        class="registration"
        placeholder="Doe"
    />  

    <label>Password:</label>
    <input
        class="registration"
        placeholder="janedoe123"
    />

    <label>Department:</label>
    <select>
        <option value="HR"></option>
        <option value="IT"></option>
    </select>
    






</form>
</>

);
}