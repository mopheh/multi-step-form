
document.querySelectorAll(".digit").forEach((item) => {
  item.addEventListener("click", (e) => {
    const { id } = e.target
    setActiveButton(id)
    e.target.classList.add('active')
    changeSteps(id)
  })
})

const changeSteps = (step) => {
  document.querySelectorAll(".steps-value").forEach((item) => {
    item.classList.add('hide')
  })
  document.querySelector(`.${step}`).classList.remove('hide')
}

const setActiveButton = (id) => {
  document.querySelectorAll(".digit").forEach((item) => {
    item.classList.remove('active')
  })
  document.getElementById(id).classList.add('active')
}
