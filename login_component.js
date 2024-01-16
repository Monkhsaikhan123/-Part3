import React,{ Component} from 'react'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const{email,password} = this.state;
        console.log(email,password);
        fetch('http://localhost:3000/login-user',{
            method:'POST',
            crossDomain:true,
            headers:{
                "Content-type":"application/json",
                Accept:"appilcation/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                email,
                password
            }),
        })
            .then((res)=> res.json())
            .then((data)=> {
                console.log(data, "userRegister")
                if(data.status==='ok'){
                    alert('login successful');
                    window.localStorage.setItem('token', data.data);
                    window.localStorage.setItem('loggedIn', true);

                    window.location.href='./userDetails'
                }
            })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className='login'>
                    <div className='login-box'>
                            <h1><span>Login</span> in Your Account</h1>

                            <div className='mb-3'>
                                
                               
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Enter email'
                                    
                                    onChange={(e)=> this.setState({email: e.target.value})}
                                />
                                
                            </div>

                            <div className='mb-3'>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter password'

                                    onChange={(e)=> this.setState({password: e.target.value})}
                                />
                                
                            </div>

                            <div className='mb-3'>
                                <div className='checkbox'>
                                    <input
                                        type='checkbox'
                                        className='checkbox-input'
                                        id='customCheck1'
                                    />
                                    <label className='label' htmlFor='customCheck1'>
                                        Remember Me 
                                    </label>
                                    <p className='forgot-password '>
                                        <a href='/reset'>Forgot password</a>
                                    </p>
                                </div>
                            </div>

                            <div className='d-grid'>
                                <button type='submit' className='button-66'>
                                    Submit
                                </button>
                            </div>
                            <p className='forgot-password'>
                                Don't have account?
                                <a href='/sign-up'>Sign up</a>
                            </p>
                           
                    </div>
                    <div className='login-blank'>
                            <h1>Welcome<br/>to Green Garden</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    </div>
                </div>
            </form>
        )
    }
}