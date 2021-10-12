export default function Ingredient({ ingredients }) {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <span key={ingredient}>{ingredient}</span>
      ))}
      <style jsx>{`
        span {
          padding: 8px 10px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 12px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
          margin-right: 10px;
          color: #777;
        }
      `}</style>
    </div>
  );
}
