const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Adicionado com sucesso! ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//const data = {
// gym: ["01-01", "01-02", "01-06", "01-12"],
// water: ["01-04", "01-05"],
// food: ["01-01", "01-03"],
// sleep: ["01-01", "01-05", "01-12", "01-15", "01-22"],
// read: ["01-02", "01-04"],
//dog: ["01-01", "01-02", "01-06"],
// code: ["01-04", "01-05"],
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
