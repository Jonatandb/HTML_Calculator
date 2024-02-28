const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn')

const errorMsg = 'Error!'
const operators = ['*', '/', '+', '-']

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const pressedButton = button.textContent

    if (button.id === 'clear') {
      screen.textContent = '0'
      return
    }

    if (button.id === 'delete') {
      if (screen.textContent.length === 1 || screen.textContent.includes(errorMsg)) {
        screen.textContent = '0'
      } else {
        screen.textContent = screen.textContent.slice(0, -1)
      }
      return
    }

    if (button.id === 'equal') {
      try {
        screen.textContent = eval(screen.textContent)
        if (screen.textContent === 'Infinity') {
          screen.textContent = errorMsg
        }
      } catch (error) {
        screen.textContent = errorMsg
      }
      return
    }

    if (pressedButton === '.') {
      const lastChar = screen.textContent[screen.textContent.length - 1]
      if (lastChar === pressedButton) return
    }

    if (operators.includes(pressedButton)) {
      const lastChar = screen.textContent[screen.textContent.length - 1]

      if (operators.includes(lastChar)) {
        let currentValue = screen.textContent.split('')
        currentValue.pop()
        currentValue.push(pressedButton)
        currentValue = currentValue.join('')
        screen.textContent = currentValue
        return
      }
    }

    if (screen.textContent === '0' || screen.textContent.includes(errorMsg)) {
      if (operators.includes(pressedButton)) {
        screen.textContent = '0' + pressedButton
      } else {
        screen.textContent = pressedButton
      }
    } else {
      screen.textContent += pressedButton
    }
  })
})