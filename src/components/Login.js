export default function Login({ show }) {
  return (
    <div id="login__modal">
      <div className="login__form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
    </div>
  );
}
