import logo from "../../assets/logo.png";
// import armoiries from "../../assets/armoiries.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      {/* <div className="armoiries">
        <img src={armoiries} alt="" />
      </div> */}
      <div className="form">
        <div className="logo">
          <div className="image">
            <img src={logo} alt="" />
          </div>
          {/* <p>Garages du gouvernement</p> */}
        </div>
        <form>
          <h3>Connectez-vous à votre compte.</h3>
          <div>
            <label htmlFor="username" className=""></label>
            <input
              type="text"
              name="username"
              placeholder="Nom d'utilisateur"
            />
          </div>
          <div>
            <label htmlFor="password" className=""></label>
            <input type="password" name="password" placeholder="Mot de passe" />
          </div>
          <div className="forgot">
            <span>Mot de passe oublié ?</span>
          </div>
          <Link to='/dashboard'>
            <button>Se connecter</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
