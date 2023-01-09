import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
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
      <div className="flex justify-center items-center mt-10">
        <button
          type="button"
          data-testid="customer_products__button-cart"
          onClick={ () => navigate('/customer/checkout') }
          disabled={ isDisable }
          className="bg-[#DCE91C] p-4 rounded-xl"
        >
          <p data-testid="customer_products__checkout-bottom-value">
            <ShoppingCartCheckoutIcon />
            {`R$${total.replace('.', ',')}`}
          </p>
        </button>
      </div>
      <div className="flex flex-wrap m-10 justify-center">
        {products.map((p, index) => (
          <div
            key={ index }
            className="m-6 p-6 bg-[#DCE91C] rounded-xl shadow-lg shadow-[#919191]"
          >
            <p
              data-testid={ `customer_products__element-card-price-${p.id}` }
              className="font-bold mb-2"
            >
              {`R$${((p.price).toString()).replace('.', ',')}`}
            </p>
            <div className="flex flex-col items-center justify-center">
              <img
                alt={ `foto de ${p.name}` }
                width="250"
                src={ p.urlImage }
                data-testid={ `customer_products__img-card-bg-image-${p.id}` }
              />
              <p
                data-testid={ `customer_products__element-card-title-${p.id}` }
                className="mt-2 mb-2 font-light"
              >
                {p.name}
              </p>
              <div className="flex w-18 mt-2 items-center">
                <button
                  data-testid={ `customer_products__button-card-rm-item-${p.id}` }
                  type="button"
                  onClick={ () => subtractQuantity(p.id) }
                  className="bg-[#EC2C31] rounded-xl mr-2"
                >
                  <RemoveIcon sx={ { color: 'white' } } />
                </button>
                <input
                  data-testid={ `customer_products__input-card-quantity-${p.id}` }
                  id={ `customer_products__input-card-quantity-${p.id}` }
                  type="number"
                  onChange={ () => setChange(change + 1) }
                  defaultValue={ 0 }
                  className="w-6"
                />
                <button
                  data-testid={ `customer_products__button-card-add-item-${p.id}` }
                  type="button"
                  onClick={ () => sumQuantity(p.id) }
                  className="bg-[#EC2C31] rounded-xl ml-2"
                >
                  <AddIcon sx={ { color: 'white' } } />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Elemento genérico do nome/título do produto;
// Elemento genérico do preço do produto;
// Imagem do produto;
// Botão para adicionar quantidade de itens;
// Botão para remover quantidade de itens;
// Input de quantidade de itens.
