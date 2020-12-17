const inputExposure = document.querySelector('#exposure');
const inputContrast = document.querySelector('#contrast');
const inputSaturation = document.querySelector('#saturation');
const inputTemperature = document.querySelector('#temperature');
const inputTint = document.querySelector('#tint');
const inputHighlights = document.querySelector('#highlights');
const inputShadows = document.querySelector('#shadows');

const postNewValues = () => {
  parent.postMessage({ pluginMessage: {
      exposure: parseFloat(inputExposure.value),
      contrast: parseFloat(inputContrast.value),
      saturation: parseFloat(inputSaturation.value),
      temperature: parseFloat(inputTemperature.value),
      tint: parseFloat(inputTint.value),
      highlights: parseFloat(inputHighlights.value),
      shadows: parseFloat(inputShadows.value)
    }}, '*')
}

[inputExposure, inputContrast, inputSaturation, inputTemperature, inputTint, inputHighlights, inputShadows].forEach(filterInput => {
  const outputElement = document.querySelector(`#${filterInput.id}Out`)

  outputElement.addEventListener('click', () => {
    outputElement.value = 0
    outputElement.style.left = '0'
    filterInput.value = 0
    postNewValues()
  })

  filterInput.addEventListener('input', event => {
    const { value } = event.target
    outputElement.value = value
    outputElement.style.left = value < 0 ? '-3.8px': '0'
    postNewValues()
  })
})
