// import { useState } from 'react'
import { Header } from "../components/header";
import { Card } from "../components/card";
import { Footer } from "../components/footer";
// import home_img from "../../public/home_img.,jpg"

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <section className="img-section">
            <h1>Bem vindo a Floricultura Arendt!</h1>
        </section>
        <section className="produtos-section-home">
          <div className="produtos-text">
            <h2>Produtos</h2>
            <a href="/produtos">Ver Mais...</a>
          </div>
          <div className="card-group">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
