function Card() {
  let numRandom = Math.floor(Math.random() * 10);

  let imgHref = "https://picsum.photos/300/200?random=" + numRandom;

  return (
    <div className="card">
      <img src={imgHref} alt="Girassol" />
      <div>
        <h4>Flor</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export { Card };
