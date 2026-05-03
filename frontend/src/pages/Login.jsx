function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>

      <input placeholder="Email" />
      <br /><br />
      <input placeholder="Password" type="password" />
      <br /><br />

      <button>Login</button>
    </div>
  );
}

export default Login;