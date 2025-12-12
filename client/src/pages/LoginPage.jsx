export default function LoginPage() {
    return (
        <div className="mt-4">
            <h1 className="text-4xl text-center">Login</h1>
            <form action="" className="max-w-md mx-auto border">
            <input type="email" placeholder={"input your email"} />
            <input type="password" placeholder={"input your password"} />
            <button>Login</button>
        </form>
        </div>
    );
}

