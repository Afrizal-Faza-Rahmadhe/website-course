import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("https://fakestoreapi.com/auth/login", {
                username,
                password,
            });

            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (err) {
            setError("Login gagal, periksa email dan password!");
        }
    };

    return (
        <div className="login container py-5">
        <h1 className="text-center mb-4 mt-0">Ngobar.</h1>

         <div className="card mx-auto shadow-lg" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
          <h2 className="text-center mb-4">Login</h2>
          <form
            onSubmit={handleLogin}
            className="mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <div className="mb-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-primary w-100">
                Login
            </button>
            <p className="mt-3 text-center">
                Belum punya akun?{" "}
                <Link to="/register" className="text-decoration-none fw-bold">
                    Register
                </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    )
}

export default LoginPage;