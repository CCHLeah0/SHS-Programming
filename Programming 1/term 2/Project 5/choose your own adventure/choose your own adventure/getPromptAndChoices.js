const getPromptAndChoices = (path) => {
    if (path.length == 0) {
      return {
        prompt:
          'This is an example starting prompt. Choose either the left path or right path.',
        leftPath: 'This is the left path. This will lead to another prompt.',
        rightPath:
          'This is the right path. This will also lead to another prompt, but different.',
      }
    } else if (path[0] == 'left') {
      if (path.length == 1) {
        return {
          prompt:
            'You took the left path. This is where you can choose another path.',
          leftPath: 'This is the left path for the left path.',
          rightPath: 'This is the right path for the left path.',
        }
      } else if (path[1] == 'left') {
        return {
          prompt:
            'You chose left then left. This is an example of the end of a path.',
          end: true,
        }
      } else if (path[1] == 'right') {
        return {
          prompt:
            'You chose left then right. This is an example of the end of a path.',
          end: true,
        }
      }
    } else if (path[0] == 'right') {
      if (path.length == 1) {
        return {
          prompt:
            'You took the right path. This is where you can choose another path.',
          leftPath: 'This is the left path for the right path.',
          rightPath: 'This is the right path for the right path.',
        }
      } else if (path[1] == 'left') {
        return {
          prompt:
            'You chose right then left. This is an example of the end of a path.',
          end: true,
        }
      } else if (path[1] == 'right') {
        return {
          prompt:
            'You chose right then right. This is an example of the end of a path.',
          end: true,
        }
      }
    }
  }
  
  export default getPromptAndChoices
  