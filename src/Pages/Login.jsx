import { Link } from "react-router";
import Container from "../Components/Container";
import { useContext } from "react";
import AuthContext from "../Authentication/AuthContext";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold mx-auto">Login now!</h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                {/* forgot password */}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                {/* login button */}
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {/* register page route */}
              <p className="mt-2 font-medium">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-800 font-semibold hover:underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
