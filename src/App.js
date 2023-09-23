import React, { useState } from 'react';
import './App.css';


function App() {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [passwprd, setPassword] = useState('');


  function post() {
    const firstname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    console.log(firstname,email,password);
    fetch("http://localhost:3000/register", {
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      body:JSON.stringify({
        firstname,
        email,
        password,
      }),
      }).then((res)=>res.json())
        .then((data) => {
          console.log(data,"userRegistration");
        })
  }
  return (
    <div className='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-cover pb-6'>
      <h1 className=' text-6xl text-center pt-10 text-gray-800 underline'>Sign Up</h1>
        <div className=' ml-96'> 
          <input type="text" placeholder='First Name' id='fname' value={firstname} onChange={(e) => setFirstName(e.target.value)} 
          className=' text-center w-96 h-9 mt-10 rounded-2xl ml-16 pl-16 pr-16' required /><br />
          <input type="text" placeholder='E-Mail' id='email' value={email} onChange={(e) => setEmail(e.target.value)} 
          className=' text-center w-96 h-9 mt-10 rounded-2xl ml-16 pl-16 pr-16' required /><br />
          <input type="password" placeholder='Password' id='pass' value={passwprd} onChange={(e) => setPassword(e.target.value)} 
          className=' text-center w-96 h-9 mt-10 rounded-2xl ml-16 pl-16 pr-16' required /><br />
        <div className=' ml-32'>
          <input type='button' onClick={post} value='Register' className=' text-white ml-20 mt-6 bg-red-600 w-28 h-8 rounded-2xl border-black hover:bg-fuchsia-600 cursor-pointer align-middle text-center' /><br /><br />
        </div>
        <div>
          <h1 className=' text-6xl text-center pt-10 text-gray-800 underline pb-5'>Student List</h1>
        </div>
    </div>
    </div>
  );
}

export default App;