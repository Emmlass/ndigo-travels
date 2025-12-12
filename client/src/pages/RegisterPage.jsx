import {Link} from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-66">                
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form action="" className="max-w-md mx-auto border">
                <input type="email" placeholder={"input your email"} />
                <input type="password" placeholder={"input your password"} />
                <button className="primary">Login</button>
                <div>
                    <span>Don't have an account yet?</span>
                    <Link to={'/register'} className="text-ndt-primary  underline ml-2">Register Now</Link>                
                </div>
                </form>
            </div>
        </div>
    );
}

