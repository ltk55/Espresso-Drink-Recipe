if (typeof window !== "undefined") {
  let i = 0;
  const el = document.getElementById("background");
  const color = ["#f0d87a", "#40dc67", "#489fe4", "#ec7914", "#ebc693"];
  const text = ["Macchiato", "Cappccino", "Mocha", "Dalgona", "Latte"];

  const change = () => {
    i = (i + 1) % color.length;
    el.innerText = text[i];
    el.style.color = color[i];
  };
  setInterval(change, 1000);
}

export default function SubHeader() {
  return (
    <div>
      <span>
        learn to make<span id="background"></span>
      </span>
    </div>
  );
}
