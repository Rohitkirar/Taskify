import React from "react";

export const Login = () => {
  return (
    <>
      <div className="card p-4 shadow-lg container w-50 ">
        <h3 className="text-center">Login</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <div className="text-center mt-3">
            <a href="#">Forgot password?</a>
          </div>
          <div className="text-center mt-2">
            Don't have an account? <a href="register.html">Register</a>
          </div>
        </form>
      </div>
    </>
  );
};
