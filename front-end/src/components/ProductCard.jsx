import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../utils/request';

export default function ProductCard() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [change, setChange] = React.useState(0);
  const [total, setTotal] = React.useState('0');
  const [isDisable, setIsDisable] = React.useState(true);

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
    const valueTotal = mapQty.reduce((acc, p) => acc + p.subTotal, 0);
    console.log(valueTotal);
    const carrinho = mapQty.filter((p) => p.quantity > 0);
    setTotal(`${valueTotal.toFixed(2)}`);
    if (valueTotal > 0) {
      setIsDisable(false);
      localStorage.setItem('carrinho', JSON.stringify({
        cartItems: carrinho,
        total: valueTotal.toFixed(2),
      }));
    } else {
      setIsDisable(true);
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
              onChange={ () => setChange(change + 1) }
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
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ isDisable }
      >
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
