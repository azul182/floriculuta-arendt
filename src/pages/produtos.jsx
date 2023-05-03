import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";

function Produtos() {
  return (
    <div>
      <Header/>
      <main>
        <section className="produtos-section-produtos">
          <h1>Flores e Produtos</h1>
          <card className="card-group">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </card>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Produtos;
  