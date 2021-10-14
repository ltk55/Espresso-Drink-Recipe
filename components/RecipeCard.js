import Link from "next/link";
import Image from "next/image";
import IngredientChip from "./IngredientChip";

export default function RecipeCard({ recipe }) {
  console.log("test", recipe.fields);
  const { title, slug, cookingTime, thumbnail, ingredients } = recipe.fields;

  return (
    <div className="card">
      <div className="featured">
        <Image
          alt={title}
          className="image"
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <IngredientChip ingredients={ingredients} />
        </div>
        <div className="actions">
          <Link href={"/recipes/" + slug}>
            <a>
              <span className="material-icons-outlined arrow">
                arrow_right_alt
              </span>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
           {
            /* transform: rotateZ(-1deg); */
          }
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
          border-radius: 15px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0 10px 0;
          text-transform: uppercase;
        }
        .actions {
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: black;
          padding: 16px 24px;
        }
        .arrow {
          font-size: 40px;
        }
      `}</style>
    </div>
  );
}
