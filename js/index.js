let camposAPreencher = document.querySelectorAll(".campo");
let avisos = document.querySelectorAll(".msg-aviso");

camposAPreencher.forEach((item) => {
  item.addEventListener("input", () => {
    if (item.value !== "") {
      item.classList.add("campo-preenchido");
    } else {
      item.classList.remove("campo-preenchido");
    }
  });
});

function avisar(index) {
  avisos[index].classList.remove("esconder");
  camposAPreencher[index].classList.add("campo-vazio");
}

function esconder(index) {
  avisos[index].classList.add("esconder");
  camposAPreencher[index].classList.remove("campo-vazio");
}

function validar() {
  camposAPreencher[0].value === ""? avisar(0):esconder(0);
  camposAPreencher[1].value === ""? avisar(1):esconder(1);
  camposAPreencher[2].value === ""? avisar(2):esconder(2);
  camposAPreencher[3].value === ""? avisar(3):esconder(3);
}
