function adicionar() {
  if (Number(num.value) <= 100 && Number(num.value) >= 1) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `o valor ${num.value} foi adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido");
  }

  num.value = "";
  num.focus();
}
