const products = [
  /* Produtos em promoção (precisam ficar em cima para os clientes ver) */
    { id: 1, name: 'Ração Cachorro Granplus Choice 15kg', price: 'R$ 122,41', originalPrice: 'R$ 141,99', image: './fotos/loja/1.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    { id: 51, name: 'Cama Pet Simples Pop Pequena Turquesa', price: 'R$ 52,90', originalPrice: 'R$ 64,90', image: './fotos/loja/51.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    { id: 7, name: 'WHISKAS Ração Carne Gatos 2,7kg', price: 'R$ 49,90', originalPrice: 'R$ 59,99', image: './fotos/loja/7.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9733;' },
    
      /* Os produtos com preço original (não destacados)*/
    
      /* id 1 está destacado */
    { id: 2, name: 'PEDIGREE Ração Pedigree Para Cães Filhotes 10,1 Kg', price: 'R$ 159,80', image: './fotos/loja/2.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 3, name: 'Ração Granplus Mini Cães Filhote Raça Pequena 10,1kg', price: 'R$ 48,80', image: './fotos/loja/3.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 4, name: 'Sachê Ração Filhotes Pedigree Pro Vital Frango Ao Molho 100g', price: 'R$ 3,90', image: './fotos/loja/4.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 5, name: 'Ração Seca Para Cães Adultos - Carne 900g Pedigree', price: 'R$ 38,99', image: './fotos/loja/5.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 6, name: 'Ração Whiskas para Gatos Filhotes sabor Carne e Leite 2,7kg', price: 'R$ 52,80', image: './fotos/loja/6.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    /* id 7 está destacado */
    { id: 8, name: 'Ração Whiskas Melhor Por Natureza Frango Gatos Adultos 900g', price: 'R$ 29,99', image: './fotos/loja/8.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 9, name: 'Ração Para Gato Whiskas Premium Peixe Com Delicrocs 10,1kg', price: 'R$ 147,99', image: './fotos/loja/9.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 10, name: 'GoldeN Gourmet Gatos Castrados Carne, Abóbora e Arroz Integral', price: 'R$ 3,99', image: './fotos/loja/10.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 11, name: 'Alimento Ração Golden 1kg Para Gatos Adultos Castrados 1kg', price: 'R$ 33,50', image: './fotos/loja/11.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 12, name: 'Alimento Golden Premium Especial Castrados para gato adulto sabor frango de 1 kg', price: 'R$ 39,80', image: './fotos/loja/12.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 13, name: 'Gatan Mix Gatos Adultos Carne e Frango 10,1kg', price: 'R$ 82,00', image: './fotos/loja/13.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 14, name: 'Kit Bebedouro e Comedouro Porte Grande Automático', price: 'R$ 79,99', image: './fotos/loja/14.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 15, name: 'Comedouro P Duplo Pet Elevado Cães E Gatos Madeira E Inox', price: 'R$ 78,62', image: './fotos/loja/15.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 16, name: 'Comedouro Para Pet Tigela Inox Base Ventosa 560 ml Jambo', price: 'R$ 39,99', image: './fotos/loja/16.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 17, name: 'Comedouro E Bebedouro Automático Para Cães e Gatos Antiformigas', price: 'R$ 37,99', image: './fotos/loja/17.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 18, name: 'Comedouro Bebedouro Duplo Elevado para Cachorro e Gatos - P', price: 'R$ 77,00', image: './fotos/loja/18.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 19, name: 'Comedouro Duplo Madeira Natural para Cães e Gatos', price: 'R$ 59,90', image: './fotos/loja/19.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 20, name: 'Comedouro Duplo Inox Suspenso Pequeno', price: 'R$ 39,60', image: './fotos/loja/20.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 21, name: 'Tapete De Lamber Cães E Gatos Alimentação Lenta Com Ventosa', price: 'R$ 27,10', image: './fotos/loja/21.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 22, name: 'Pack Ração Úmida Whiskas para Gatos Adultos Castrados, Sachê Carne ao Molho, 85g - 20 unidades', price: 'R$ 67,80', image: './fotos/loja/22.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 23, name: 'Brinquedo para Pet Galinha Grande com Som - Western', price: 'R$ 29,20', image: './fotos/loja/23.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 24, name: 'Brinquedo Pelúcia Pet para Cães e Gatos Estrela - Estrela rosa / 11x15cm', price: 'R$ 39,90', image: './fotos/loja/24.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 25, name: 'Brinquedo Mordedor com Bola para cachorro', price: 'R$ 59,90', image: './fotos/loja/25.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 26, name: 'MY PET BRASIL - Brinquedo Para Cachorro, Bola Cravinho, Brinquedo Mordedor', price: 'R$ 9,90', image: './fotos/loja/26.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 27, name: 'Brinquedo de Pelúcia para Cachorros - Macaco AUmigão', price: 'R$ 39,90', image: './fotos/loja/27.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 28, name: 'Brinquedo Para Gatos Com Erva De Gato Catnip Bola Sisal', price: 'R$ 21,59', image: './fotos/loja/28.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 29, name: 'Arranhador Para Gatos Poste Sisal Brinquedo Com Bolinha Pet', price: 'R$ 42,90', image: './fotos/loja/29.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 30, name: 'Brinquedos Pets Coisas Para Cachorros Pelúcia Para Cães Top', price: 'R$ 21,50', image: './fotos/loja/30.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 31, name: 'Brinquedo Pelúcia Pet para Cães e Gatos - Melancia / 14x8cm', price: 'R$ 49,90', image: './fotos/loja/31.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 32, name: 'Combo Au.migos Pets: Shampoo 5 Em 1 400ml + Condicionador 40', price: 'R$ 119,90', image: './fotos/loja/32.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 33, name: '.', price: '.', image: './fotos/loja/33.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 34, name: '.', price: '.', image: './fotos/loja/34.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 35, name: '.', price: '.', image: './fotos/loja/35.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 36, name: '.', price: '.', image: './fotos/loja/36.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 37, name: '.', price: '.', image: './fotos/loja/37.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 38, name: '.', price: '.', image: './fotos/loja/38.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 39, name: '.', price: '.', image: './fotos/loja/39.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 40, name: '.', price: '.', image: './fotos/loja/40.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 41, name: '.', price: '.', image: './fotos/loja/41.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 42, name: '.', price: '.', image: './fotos/loja/42.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 43, name: '.', price: '.', image: './fotos/loja/43.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 44, name: '.', price: '.', image: './fotos/loja/44.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 45, name: '.', price: '.', image: './fotos/loja/45.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 46, name: '.', price: '.', image: './fotos/loja/46.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 47, name: '.', price: '.', image: './fotos/loja/47.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 48, name: '.', price: '.', image: './fotos/loja/48.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 49, name: '.', price: '.', image: './fotos/loja/49.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 50, name: '.', price: '.', image: './fotos/loja/50.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    /* id 51 está destacado */
    { id: 52, name: '.', price: '.', image: './fotos/loja/52.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 53, name: '.', price: '.', image: './fotos/loja/53.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 54, name: '.', price: '.', image: './fotos/loja/54.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 55, name: '.', price: '.', image: './fotos/loja/55.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 56, name: '.', price: '.', image: './fotos/loja/56.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 57, name: '.', price: '.', image: './fotos/loja/57.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 58, name: '.', price: '.', image: './fotos/loja/58.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 59, name: '.', price: '.', image: './fotos/loja/59.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 60, name: '.', price: '.', image: './fotos/loja/60.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 61, name: '.', price: '.', image: './fotos/loja/61.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 62, name: '.', price: '.', image: './fotos/loja/62.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 63, name: '.', price: '.', image: './fotos/loja/63.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 64, name: '.', price: '.', image: './fotos/loja/64.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 65, name: '.', price: '.', image: './fotos/loja/65.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 66, name: '.', price: '.', image: './fotos/loja/66.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 67, name: '.', price: '.', image: './fotos/loja/67.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 68, name: '.', price: '.', image: './fotos/loja/68.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 69, name: '.', price: '.', image: './fotos/loja/69.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 70, name: '.', price: '.', image: './fotos/loja/70.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 71, name: 'Roupa para Cachorro - adidog', price: 'R$160,00', image: './fotos/loja/71.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 72, name: '.', price: '.', image: './fotos/loja/72.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 73, name: '.', price: '.', image: './fotos/loja/73.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 74, name: '.', price: '.', image: './fotos/loja/74.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 75, name: '.', price: '.', image: './fotos/loja/75.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 76, name: '.', price: '.', image: './fotos/loja/76.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 77, name: '.', price: '.', image: './fotos/loja/77.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 78, name: '.', price: '.', image: './fotos/loja/78.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 79, name: '.', price: '.', image: './fotos/loja/79.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 80, name: '.', price: '.', image: './fotos/loja/80.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 81, name: '.', price: '.', image: './fotos/loja/81.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 82, name: '.', price: '.', image: './fotos/loja/82.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 83, name: '.', price: '.', image: './fotos/loja/83.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 84, name: '.', price: '.', image: './fotos/loja/84.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },
    { id: 85, name: '.', price: '.', image: './fotos/loja/85.png', rate: '&#9733; &#9733; &#9733; &#9733; &#9734;' },


  ];


const selectedIds = [1, 51, 7, 18, 20];

const featuredProductsContainer = document.getElementById('featuredProducts');

products.filter(product => selectedIds.includes(product.id)).forEach(product => {
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

