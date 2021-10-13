if (typeof window !== "undefined") {
  let i = 0;
  const el = document.getElementById("change");
  const color = ["#f0d87a", "#40dc67", "#489fe4", "#ec7914", "#ebc693"];
  const text = ["Macchiato", "Cappccino", "Mocha", "Dalgona", "Latte"];

  const change = () => {
    i = (i + 1) % color.length;
    el.innerText = text[i];
    el.style.color = color[i];
  };
  setInterval(change, 2000);
}

export default function SubHeader() {
  return (
    <div>
      <h2 className="subHeader__text">
        Learn to make <span id="change">Espresso</span>
      </h2>

      <style jsx>{`
        .subHeader__text {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 30px;
        }
      `}</style>
    </div>
  );
}
