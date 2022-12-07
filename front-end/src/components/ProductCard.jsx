import React from 'react';
import { getProducts } from '../utils/request';

export default function ProductCard() {
  const [products, setProducts] = React.useState([]);
  const [change, setChange] = React.useState(0);
  const [total, setTotal] = React.useState('0');

  React.useEffect(() => {
    async function fetchData() {
      const allProducts = await getProducts();
      setProducts(allProducts);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    const mapQty = products.map((p) => {
      const qty = document
        .getElementById(`customer_products__input-card-quantity-${p.id}`);
      p.quantity = Number(qty.value);
      p.price = Number(p.price).toFixed(2);
      p.subTotal = p.quantity * p.price;
      return p;
    });
    const valueTotal = mapQty.reduce((acc, p) => acc + p.quantity * p.price, 0);
    console.log(valueTotal);
    const carrinho = mapQty.filter((p) => p.qty > 0);
    setTotal(`${valueTotal.toFixed(2)}`);
    if (valueTotal > 0) {
      localStorage.setItem('carrinho', JSON.stringify({
        carrinho,
        total: valueTotal.toFixed(2),
      }));
    } else {
      localStorage.removeItem('carrinho');
    }
  }, [change, products]);

  const subtractQuantity = (id) => {
    const input = document
      .getElementById(`customer_products__input-card-quantity-${id}`);
    if (input.value === 0) input.value = 0;
    if (input.value > 0) {
      const value = Number(input.value);
      input.value = value - 1;
    }
    setChange(change + 1);
  };

  const sumQuantity = (id) => {
    const input = document
      .getElementById(`customer_products__input-card-quantity-${id}`);
    const value = Number(input.value);
    input.value = value + 1;
    setChange(change + 1);
  };

  return (
    <>
      {products.map((p, index) => (
        <div key={ index }>
          <p data-testid={ `customer_products__element-card-price-${p.id}` }>
            {`${((p.price).toString()).replace('.', ',')}`}
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
      <button type="button" data-testid="customer_products__button-cart">
        Ver carrinho:
        <p data-testid="customer_products__checkout-bottom-value">
          {`${total.replace('.', ',')}`}
        </p>
      </button>
    </>
  );
}

// Elemento genérico do nome/título do produto;
// Elemento genérico do preço do produto;
// Imagem do produto;
// Botão para adicionar quantidade de itens;
// Botão para remover quantidade de itens;
// Input de quantidade de itens.
