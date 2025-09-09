import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post("https://fakestoreapi.com/users", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            navigate("/login");
        } catch (err) {
            setError("Register gagal, coba lagi!");
        }
    };

    return (
        <div className="login container py-5">
        <h1 className="text-center mb-4 fw-mt-0">Ngobar.</h1>

         <div className="card mx-auto shadow-lg" style={{ maxWidth: "400px" }}>
          <div className="card-body p-4">
          <h2 className="text-center mb-4">Register</h2>
          <form
            onSubmit={handleRegister}
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

            <button type="submit" className="btn btn-success w-100">
                Register
            </button>
            <p className="mt-3 text-center">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-decoration-none fw-bold">
                    Login
                </Link>
            </p>
          </form>
        </div>
      </div>
     </div>
    );
 };

export default RegisterPage;