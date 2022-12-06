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

  const subtractQuantity = (id) => {
    const input = document
      .getElementById(`customer_products__input-card-quantity-${id}`);
    if (input.value === 0) input.value = 0;
    if (input.value > 0) {
      const value = Number(input.value);
      input.value = value - 1;
    }
  };

  const sumQuantity = (id) => {
    const input = document
      .getElementById(`customer_products__input-card-quantity-${id}`);
    const value = Number(input.value);
    input.value = value + 1;
  };

  return (
    <>
      {products.map((p, index) => (
        <div key={ index }>
          <p data-testid={ `customer_products__element-card-price-${p.id}` }>
            {`${p.price.replace('.', ',')}`}
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
              onClick={ () => subtractQuantity(p.id) }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${p.id}` }
              id={ `customer_products__input-card-quantity-${p.id}` }
              type="number"
              defaultValue={ 0 }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${p.id}` }
              type="button"
              onClick={ () => sumQuantity(p.id) }
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
