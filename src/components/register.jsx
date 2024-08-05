import React from 'react';

const container = {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    background: "linear-gradient(90deg, #ffb3c1 0%, #ffe5e8 100%)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,.5)",
    padding: "20px",
    borderRadius: "7px",
    margin: "50px 20px"
};

const heading = {
    margin: "0 0 40px 0",
    color: "navy",
    textDecoration: "underline"
};

const signup = {
    margin: "25px 0 0 0",
    width: "40%",
    padding: "6px",
    borderRadius: "7px"
};

const button = {
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const wrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

function Register() {
    return (
        <div style={wrapper}>
            <div style={container}>
                <h2 style={heading}>Register</h2>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button style={signup}>Sign up</button>
                <p>Or Continue With</p>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" style={button}><img style={{ width: "30px" }} src="https://banner2.cleanpng.com/20171216/6c0/google-png-5a3554027e9924.3682726615134443545186.jpg" alt="Google" /></button>
                    <button type="submit" style={button}><img style={{ width: "30px" }} src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" /></button>
                    <button style={button}><img style={{ width: "30px" }} src="https://imgs.search.brave.com/m4rvy8vjT3VT-bwNdQKLeXx4Xtyd8LBR8SzrSLsNjck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzMyLzIwLzAz/LzM2MF9GXzUzMjIw/MDM1NV9vZEtOOU91/M1dCNmlIV0pURklF/bEZ0SmJUdXpKc3BZ/Ni5qcGc" alt="Other" /></button>
                </div>
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </div>
    );
}

export default Register;
