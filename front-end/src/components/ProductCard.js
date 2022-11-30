function ProductCart(index, price, name, urlImage) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${index}` }>{price}</p>
      <img
        alt={ `foto de ${name}` }
        src={ urlImage }
        data-testid={ `customer_products__img-card-bg-image-${index}` }
      />
      <p data-testid={ `customer_products__element-card-title-${index}` }>{name}</p>
      <button
        data-testid={ `customer_products__button-card-rm-item-${index}` }
        type="button"
      >
        -
      </button>
      <input
        data-testid={ `customer_products__input-card-quantity${index}` }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${index}` }
        type="button"
      >
        +
      </button>

    </div>
  );
}

module.exports = { ProductCart };

// Elemento genérico do nome/título do produto;
// Elemento genérico do preço do produto;
// Imagem do produto;
// Botão para adicionar quantidade de itens;
// Botão para remover quantidade de itens;
// Input de quantidade de itens.
