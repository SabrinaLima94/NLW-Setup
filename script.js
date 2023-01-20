const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-01", "01-02", "01-06", "01-12"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  sleep: ["01-01", "01-05", "01-12", "01-15", "01-22"],
  read: ["01-02", "01-04"],
  dog: ["01-01", "01-02", "01-06"],
  code: ["01-04", "01-05"],
}

nlwSetup.setData(data)
nlwSetup.load()
