import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password ,setpassword] = useState('')
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return setError("All fields are required");
    }
   if(password.length<6){
   return  setError("password must contain atleast 6 characters ")
   }
   let resp = async()=>{
    try{
    let res = await axios.post("http://localhost:5000/api/register",{
    name,email,password
    

   }
)
console.log(res)
navigate("/");
    }catch{
        setError("something went wrong")
        return console.log(error)
    }
}

  resp();


    setError(""); // Clear any existing error
   
  };

  return (
    <div className='mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20'>
      <form onSubmit={submit} className="max-w-md mx-auto border border-red-700 bg-white p-6 rounded-l shadow-md">
        {error && <p className="text-red-600 mb-4 font-semibold">{error}</p>}

        <label className="block text-gray-700 font-semibold mb-2">Name</label>
        <input 
         
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder="Enter your name" 
          className="w-full px-4 py-2 rounded-2xl focus:ring focus:ring-blue-300"
        />

        <label className="block text-gray-700 font-semibold mt-4 mb-2">Email</label>
        <input 
         
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder="Enter your email" 
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />

        <label className="block text-gray-700 font-semibold mt-4 mb-2">Message</label>
       <input type="password" placeholder='Enter a t character passord' required onChange={(e)=>
        setpassword(e.target.value)

       }  />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
