import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function registerUser(){
        axios.get("http://localhost:4000/test")
    }

    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-66">                
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form action="" className="max-w-md mx-auto"  onSubmit={registerUser}>
                    <input type="text" 
                        placeholder="John Doe" 
                        value={name} 
                        onChange={(ev)=>setName(ev.target.value)} />
                    <input type="email" 
                        placeholder="input your email" 
                        value={email} 
                        onChange={(ev)=>setEmail(ev.target.value)}/>
                    <input type="password" 
                        placeholder="input your password" 
                        value={password} 
                        onChange={(ev)=>setPassword(ev.target.value)} />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                    <span>Already a member?</span>
                    <Link to={'/login'} className="text-center underline ">Register</Link>                
                </div>
                </form>
            </div>
        </div>
    );
}

