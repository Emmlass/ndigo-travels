import {Link} from "react-router-dom";
export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around ">
            <div className="mb-66">                
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form action="" className="max-w-md mx-auto border">
                <input type="email" placeholder={"input your email"} />
                <input type="password" placeholder={"input your password"} />
                <button className="primary">Login</button>
                <div  className="text-center py-2 text-gray-500">
                    <span>Don't have an account yet?</span>
                    <Link to={'/register'} className="  underline text-black">Register Now</Link>                
                </div>
                </form>
            </div>
        </div>
    );
}

