let onlinePricing = document.querySelector(".online-pricing")
let largerPricing = document.querySelector(".larger-pricing")
let customPricing = document.querySelector(".custom-pricing")
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

const saveToStorage = () => {
  let id = document.querySelector(".billing-box.billed").attributes.id.value
  let pricing = document
    .getElementById(id)
    .children[1].classList.contains("hide")
    ? document.getElementById(id).children[2].children[1].innerText
    : document.getElementById(id).children[1].children[1].innerText
  let interval = pricing.slice(-2) === "mo" ? "monthly" : "yearly"
  onlinePricing.innerText = interval === "monthly" ? "+$1/mo" : "+$10/yr"
  largerPricing.innerText = interval === "monthly" ? "+$2/mo" : "+$20/yr"
  customPricing.innerText = interval === "monthly" ? "+$2/mo" : "+$20/yr"
  localStorage.setItem("Plan", JSON.stringify({ id, pricing, interval }))
}

document.querySelectorAll(".billing-box").forEach((item) => {
  item.addEventListener("click", (e) => {
    const { id } = e.target
    document.querySelectorAll(".billing-box").forEach((item) => {
      item.classList.remove("billed")
    })
    document.getElementById(id).classList.add("billed")
    saveToStorage()
  })
})
document.querySelectorAll(".online-service").forEach((item) => {
  item.addEventListener("click", (e) => {
    const { id } = e.target
    e.target.classList.toggle("billed")
    document.getElementById(id.slice(0, -3)).checked = !document.getElementById(
      id.slice(0, -3)
    ).checked
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
  saveToStorage()
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
