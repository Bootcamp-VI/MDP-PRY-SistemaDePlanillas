import MicrosoftLogin from "react-microsoft-login";
import "../FormLogin/FormLogin.css";


export const FormLogin = () => {

  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <form className="form-login">
      <h3 className="form-title mb-4">LOGIN</h3>
      <div className="form-group mb-4 w-auto">
          <MicrosoftLogin className="rounded-4" clientId={'f8c7976f-3e93-482d-88a3-62a1133cbbc3'} authCallback={authHandler} />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="email" className="form-label text-white d-block form-label-sm text-start">Email address</label>
        <input
          type="email"
          id="email"
          className="form-control rounded-white bg-opacity-70"
          placeholder="Enter your email address"
        />
      </div>

      <div className="form-group mb-4">
        <label htmlFor="password" className="form-label text-white d-block form-label-sm text-start">Password</label>
        <input
          type="password"
          id="password"
          className="form-control rounded-white bg-opacity-70 text-secondary"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4 btn-login">
        Iniciar Sesión
      </button>
    </form>
  );
};
