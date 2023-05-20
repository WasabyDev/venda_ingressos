function register() {
  var novonome = document.getElementById("novonome").value;
  var novasenha = document.getElementById("novasenha").value;
  if (localStorage.getItem(novonome)) {
    alert("Esse nome de usuário já existe!");
  } else {
    localStorage.setItem(novonome, novasenha);
    alert("Cadastro realizado com sucesso!");
  }
}