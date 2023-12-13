import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import { AuthContext } from "../Context/AuthProvider";

const LogIn = () => {
  const { googleSignIn } = useContext(AuthContext);
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Google
  const handleGoogle = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      swal("Good job!", "Log In successfully!", "success");
      navigate("/");
    });
  };

  // Manual
  const handleLogIn = (e) => {
    e.preventDefault();
    if (email && password) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);

          setEmail("");
          setPassword("");
          swal("Good job!", "Log In successfully!", "success");
          navigate("/");
        })
        .catch((err) => {
          setError(err.massage);
          swal("Error!", "Log In failed! Provide valid information", "error");
        });
    }
  };


  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/WKmDSRS/logo-08.png)" }}
    >
      <div className="hero min-h-screen pt-24">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1
              className="text-5xl font-bold font-Poppins"
            >
              Login now!
            </h1>
          </div>
          <div
            className="card flex-shrink-0 bg-base-100 lg:w-96 md:w-96 max-w-sm shadow-cyan-500/50 shadow-2xl font-bold"
          >
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <p>{error}</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="email"
                  className="input input-bordered shadow-lg"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="password"
                  className="input input-bordered shadow-lg"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div
                className="form-control mt-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <button
                  onClick={handleLogIn}
                  className="btn bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white"
                >
                  Login
                </button>
              </div>
              <button
                onClick={handleGoogle}
                className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-blue-600/50 text-white mt-4"
              >
                <FaGoogle></FaGoogle>Google
              </button>
              <p className="text-end mt-4">
                If new please
                <Link to="/register" className="text-blue-600 underline ml-1">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
