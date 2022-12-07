import React from 'react';
import { getProducts } from '../utils/request';

export default function ProductCard() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  return (
    <>
      {products.map((p, index) => (
        <div key={ index }>
          <p data-testid={ `customer_products__element-card-price-${p.id}` }>
            {p.price}
          </p>
          <img
            alt={ `foto de ${p.name}` }
            src={ p.urlImage }
            data-testid={ `customer_products__img-card-bg-image-${p.id}` }
          />
          <p data-testid={ `customer_products__element-card-title-${p.id}` }>{p.name}</p>
          <div>
            <button
              data-testid={ `customer_products__button-card-rm-item-${p.id}` }
              type="button"
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${p.id}` }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${p.id}` }
              type="button"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

// Elemento genérico do nome/título do produto;
// Elemento genérico do preço do produto;
// Imagem do produto;
// Botão para adicionar quantidade de itens;
// Botão para remover quantidade de itens;
// Input de quantidade de itens.
