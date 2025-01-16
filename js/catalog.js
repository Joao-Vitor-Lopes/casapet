const products = [
    { id: 1, name: 'Ração Cachorro Granplus Choice', price: 'R$122,41', originalPrice: 'R$141,99', image: './fotos/loja/1.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    { id: 2, name: 'Cama Pet Simples Pop Pequena Turquesa', price: 'R$52,90', originalPrice: 'R$64,90', image: './fotos/loja/51.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    { id: 3, name: 'WHISKAS Ração Carne Gatos', price: 'R$49,90', originalPrice: 'R$59,99', image: './fotos/loja/7.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    { id: 4, name: 'Kit Shampoo 5 Em 1 + Condicionador + Perfume Cães E Gatos - PET CLEAN', price: 'R$39,90', image: './fotos/loja/34.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 5, name: 'Pingente de Identificação para Cachorro Metal Formato de Osso Liso', price: 'R$48,80', image: './fotos/loja/66.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 6, name: 'Limpador De Ouvido Limpa Orelha Cachorro Gato Pet Clean', price: 'R$18,90', image: './fotos/loja/80.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 7, name: 'Roupa para Cachorro - adidog', price: 'R$160,00', image: './fotos/loja/71.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 8, name: 'Conjunto Guia e Coleira Peitoral Ajustável Cães e Gatos', price: 'R$23,90', image: './fotos/loja/62.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 9, name: 'Cama Colchonete Para Cães E Gatos Almofada Confortável', price: 'R$25,99', image: './fotos/loja/52.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 10, name: 'Comedouro Bebedouro Duplo Elevado Para Cachorro E Gatos', price: 'R$78,99', image: './fotos/loja/18.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 11, name: 'Comedouro Duplo Inox Suspenso Pequeno', price: 'R$ 39,99', image: './fotos/loja/20.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 12, name: '.', price: '.', image: './fotos/loja/2.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 13, name: '.', price: '.', image: './fotos/loja/3.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 14, name: '.', price: '.', image: './fotos/loja/4.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 15, name: '.', price: '.', image: './fotos/loja/5.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 16, name: '.', price: '.', image: './fotos/loja/6.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 17, name: '.', price: '.', image: './fotos/loja/8.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 18, name: '.', price: '.', image: './fotos/loja/9.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 19, name: '.', price: '.', image: './fotos/loja/10.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 20, name: '.', price: '.', image: './fotos/loja/11.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 21, name: '.', price: '.', image: './fotos/loja/12.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 22, name: '.', price: '.', image: './fotos/loja/13.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 23, name: '.', price: '.', image: './fotos/loja/14.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 24, name: '.', price: '.', image: './fotos/loja/15.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 25, name: '.', price: '.', image: './fotos/loja/16.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 26, name: '.', price: '.', image: './fotos/loja/17.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 27, name: '.', price: '.', image: './fotos/loja/19.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 28, name: '.', price: '.', image: './fotos/loja/21.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 29, name: '.', price: '.', image: './fotos/loja/22.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 30, name: '.', price: '.', image: './fotos/loja/23.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 31, name: '.', price: '.', image: './fotos/loja/24.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 32, name: '.', price: '.', image: './fotos/loja/25.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' }

  ];
  
  // Display featured products
  const featuredProductsContainer = document.getElementById('featuredProducts');
  
  products.slice(0, 11).forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3 class="center-product">${product.name}</h3>
      <p class="price">
    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
    <span>${product.price}</span>
  </p>
      <div class="rate"> ${product.rate}</div>
    `;
  
    featuredProductsContainer.appendChild(productCard);
  });