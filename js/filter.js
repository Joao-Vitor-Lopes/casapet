const ul = document.getElementById('itens-list');

products.forEach(product => {
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="#">
      <img width="50" src="${product.image}" alt="${product.name}">
      <span class="item-name">${product.name}</span>
    </a>
  `;
  ul.appendChild(li);
});

function filtre(){
    var input,
    filter,
    ul,
    li,
    a,
    i,
    span,
    txtValue,
    count = 0

    input = document.getElementById('inputSearch');
    ul = document.getElementById('itens-list');
    filter = input.value.toUpperCase();
    li = ul.getElementsByTagName("li");
    for(i = 0; i < li.length; i++ ){
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            //se for o mesmo valor
            li[i].style.display = "";
            count++
            //ficar negrito caso ache
            span = li[i].querySelector(".item-name");

            if(span){
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"),(match)=>{
                    return "<strong>" + match + "</strong>"
                })
            }
        }else{
            li[i].style.display = "none";
        }
    }

    if (count == 0){
        ul.style.display = "none";
    }else{
        ul.style.display = "block";
    }

}


/* Fecha a lista ao clicar fora */
document.addEventListener('click', function(event) {
  const input = document.getElementById('inputSearch');
  const ul = document.getElementById('itens-list');
  
  // Se o clique não for no input nem na lista, esconde
  if (!input.contains(event.target) && !ul.contains(event.target)) {
    ul.style.display = 'none';
  }
});