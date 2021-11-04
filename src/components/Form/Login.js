import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/auth/thunks";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../Reusable/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const authenticated = useSelector((state) => state.authReducer.authenticated);
  const auth = useSelector((state) => state.authReducer.authenticated);
  console.log(auth);

  const handleLogin = (data) => {
    setloading(true);
    setTimeout(() => setloading(false), 2000);
    try {
      dispatch(login(data));
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div className="borzLandingWrapper">
      {authenticated && <Redirect to="/" />}
      <section className="registerSection position-relative h-100">
        <div className="registerSectionFlex align-items-center">
          <div className="registerSectionFlexSub">
            <form onSubmit={handleSubmit(handleLogin)} className="mt-4">
              <h1 className="auth_title">Вход</h1>
              <input
                type="text"
                name="email"
                ref={register({
                  required: true,
                })}
                placeholder="Email"
              />
              {errors.username && (
                <span className="validationErrorBox">Это поле обязательно</span>
              )}
              <input
                type="password"
                name="password"
                ref={register({
                  required: true,
                })}
                placeholder="Password"
              />
              {errors.password && (
                <span className="validationErrorBox">Это поле обязательно</span>
              )}

              <button
                type="sumbit"
                className={`app-button width100`}
                style={{ position: "relative" }}
              >
                {!loading && <span>Вход</span>}
                {loading && <Loader loading={loading} />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
