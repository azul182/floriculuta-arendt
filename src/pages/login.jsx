import { Header } from "../components/header";
import google_logo from "../../public/google.png";
import { Footer } from "../components/footer";

function Login() {
  return (
    <div>
      <Header />
      <main>
        <section className="login-section">
          <form>
            <h1>Fazer login na Floricultura Arendt</h1>
            <input
              type="email"
              placeholder="Digite seu E-mail ou nome de usuário"
            />
            <input type="password" placeholder="Digite sua senha" />
            <button>Entrar</button>
          </form>
          <h2>ou</h2>
          <button className="btn-img">
            <img src={google_logo} alt="Ícone do Google" />
            <p>Continue com o Google</p>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
