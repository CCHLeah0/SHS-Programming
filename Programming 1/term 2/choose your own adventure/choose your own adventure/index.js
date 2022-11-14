import getPromptAndChoices from './getPromptAndChoices.js'

const prompt = document.getElementsByClassName('prompt').item(0)
const leftPath = document.getElementsByClassName('leftPath').item(0)
const rightPath = document.getElementsByClassName('rightPath').item(0)
const restart = document.getElementsByClassName('restart').item(0)

const updateData = () => {
  const data = getPromptAndChoices(path)
  prompt.firstChild.innerHTML = data.prompt

  if (data.end) {
    leftPath.className += ' hidden'
    rightPath.className += ' hidden'
    restart.className = 'restart'
  } else {
    leftPath.firstChild.innerHTML = data.leftPath
    rightPath.firstChild.innerHTML = data.rightPath
  }
}

let path = []
updateData()

leftPath.addEventListener('click', () => {
  path.push('left')
  updateData()
})

rightPath.addEventListener('click', () => {
  path.push('right')
  updateData()
})

restart.addEventListener('click', () => {
  leftPath.className = 'leftPath'
  rightPath.className = 'rightPath'
  restart.className = 'restart hidden'
  path = []
  updateData()
})
