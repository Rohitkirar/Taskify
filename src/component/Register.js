import React from "react";

export const Register = () => {
    return (
        <>
        <div className="card p-4 shadow-lg container w-50">
    <h3 className="text-center">Register</h3>
    <form>
        <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" required />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
        <div className="text-center mt-2">
            Already have an account? <a href="login.html">Login</a>
        </div>
    </form>
</div>

        </>
    );
}