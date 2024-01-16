import React,{useState} from 'react'

export default function SignUp() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Usertype, setUsertype] = useState('');
    const [secretKey, setsecretKey] = useState('')


    const handleSubmit = (e) =>{
        if(Usertype==='Admin' && secretKey!=="Munkh"){
            e.preventDefault();
            alert("Invalid admin")
        }else{
            e.preventDefault();

            console.log(fname,lname, email,password);
            fetch('http://localhost:3000/register',{
                method:'POST',
                crossDomain:true,
                headers:{
                    "Content-type":"application/json",
                    Accept:"appilcation/json",
                    "Access-Control-Allow-Origin":"*",
                },
                body:JSON.stringify({
                    fname,
                    email,
                    lname,
                    password,
                    Usertype
                }),
            })
                .then((res)=> res.json())
                .then((data)=> {
                    console.log(data, "userSign")
                    if(data.status === 'ok'){
                        alert("registeration success")
                    }else{
                        alert("something went wrong")
                    }
                })
        }
      
    };
    return(
        <form onSubmit={handleSubmit}>
            <div className='signup'>
                <div className='signup-box'>
                    <h3>Бүртгүүлэх</h3>
                    <div className='registeras'>
                        <h4>Register as</h4>
                        <input
                            type='radio'
                            name="UserType"
                            value='User'
                            onChange = {(e)=>setUsertype(e.target.value)}
                        /> User
                        <input
                            type='radio'
                            name='UserType'
                            value='Admin'
                            onChange={(e)=> setUsertype(e.target.value)}
                        />  Admin

                    </div>
                    {Usertype==="Admin"?
                        <div className='mb-3'>
                        <label>Secret Key</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Secret Key'
                            onChange={(e)=> setsecretKey(e.target.value)}
                        />
                    </div>
                    :null
                }
                



                    <div className='mb-3'>
                       
                        <input
                            type='text'
                            className='form-control'
                            placeholder='First name'
                            onChange={(e)=> setFname(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Last name'
                            onChange={(e)=> setLname(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                       
                        <input
                            type='email'
                            className='form-control'
                            placeholder='First name'
                            onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Enter password'
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='button-66'>
                            Sign Up
                        </button>
                        <p className='forgot-password'>
                            Already registered<a href='/sign-in'>Sign in?</a>
                        </p>
                    </div>
                </div>
                
                <div className='signup-blank'>
                <h1>Welcome<br/>to Green Garden</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                </div>
            </div>
        </form>
     )
}
    