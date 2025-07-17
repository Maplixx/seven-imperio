
let carrinho = [];
function addCarrinho(nome, preco) {
  carrinho.push({nome, preco});
  updateCarrinho();
}
function updateCarrinho() {
  const ul = document.getElementById('itens');
  ul.innerHTML = '';
  let total = 0;
  carrinho.forEach((item, i) => {
    total += item.preco;
    const li = document.createElement('li');
    li.textContent = `${item.nome} – R$ ${item.preco.toFixed(2)}`;
    ul.appendChild(li);
  });
  document.getElementById('total').textContent = total.toFixed(2);
  document.getElementById('checkoutBtn').disabled = carrinho.length === 0;
}
function checkout() {
  document.getElementById('checkout').classList.remove('hidden');
  window.location.hash = '#checkout';
}
