document.querySelectorAll(".digit").forEach((item) => {
  item.addEventListener("click", (e) => {
    const { id } = e.target
    setSteps(id)
  })
})

const changeSteps = (step) => {
  document.querySelectorAll(".steps-value").forEach((item) => {
    item.classList.add("hide")
  })
  document.querySelector(`.${step}`).classList.remove("hide")
}

const setActiveButton = (id) => {
  document.querySelectorAll(".digit").forEach((item) => {
    item.classList.remove("active")
  })
  document.getElementById(id).classList.add("active")
}

const setSteps = (step) => {
  setActiveButton(step)
  changeSteps(step)
}

document.querySelectorAll(".billing-box").forEach((item) => {
  item.addEventListener("click", (e) => {
    const { id } = e.target
    document.querySelectorAll(".billing-box").forEach((item) => {
      item.classList.remove("billed")
    })
    document.getElementById(id).classList.add("billed")
  })
})

document.querySelector(".toggle").addEventListener("click", () => {
  setBilling()
  document.querySelector(".circle").classList.toggle("toggle-year")
})

const setBilling = () => {
  if (document.querySelector(".circle").classList.contains("toggle-year")) {
    document.querySelectorAll(".monthly-billing").forEach((item) => {
      item.classList.remove("hide")
    })
    document.querySelectorAll(".yearly-billing").forEach((item) => {
      item.classList.add("hide")
    })
    document.querySelector(".monthly").classList.remove("grayscale")
    document.querySelector(".yearly").classList.add("grayscale")
  } else {
    document.querySelectorAll(".monthly-billing").forEach((item) => {
      item.classList.add("hide")
    })
    document.querySelectorAll(".yearly-billing").forEach((item) => {
      item.classList.remove("hide")
    })
    document.querySelector(".monthly").classList.add("grayscale")
    document.querySelector(".yearly").classList.remove("grayscale")
  }
}
var form = document.querySelector("form")
document.querySelector("form").addEventListener(
  "submit",
  function (e) {
    if (!form.checkValidity()) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      e.preventDefault()
      setSteps("step2")
    }

    form.classList.add("was-validated")
  },
  false
)
