import { useState } from "react";
function App(){
const [userRge,setuserreges]=useState({
  userFirstname:"",
  userLastname:"",
  userPhone:"",
});
const [Record,setRecord] = useState([]);
 const handleclick=(e)=>{
const name =e.target.name;
const value = e.target.value;

console.log(name + value);
setuserreges({
  ...userRge,[name]:value
});

}
const onsubmit =(e)=>{
e.preventDefault();
const newRecord ={...userRge, id:new Date().getTime().toString}
setRecord([...Record,newRecord]);
setuserreges({
  userFirstname:"",
  userLastname:"",
  userPhone:"",

});
}


  return (
    <>
    <form onSubmit={onsubmit}>
      <label>First name:</label>
      <br />
      <input 
        
        className='userFirstname'
        name='userFirstname' 
        type='text'
      value={userRge.userFirstname}
      onChange={handleclick}
        
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
      
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={userRge.userLastname}
        onChange={handleclick}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
       
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={userRge.userPhone}
        onChange={handleclick}
      />
      <br/>
      <input 
      
        className='submitButton'
        type='submit' 
        value='Add User' 
        onChange={handleclick}
      />
    </form>
<div>

{
Record.map((current)=>{

return (
<div>
<p>{current.userFirstname}</p>
<p>{current.userLastname}</p>
<p>{current.userPhone}</p>


</div>



)

})


}


</div>

</>

  )



}
export default App;