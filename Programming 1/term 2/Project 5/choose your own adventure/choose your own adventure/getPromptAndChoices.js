const getPromptAndChoices = (path) => {
  // first layer of the tree
  if (path.length == 0) {
    return {
      prompt:
        "This is an example starting prompt. Choose either the left path or right path.",
      leftPath: "This is the left path. This will lead to another prompt.",
      rightPath:
        "This is the right path. This will also lead to another prompt, but different.",
    };
  } else if (path[0] == "left") {
    // going to seccond layer for left
    if (path.length == 1) {
      return {
        prompt:
          "You took the left path. This is where you can choose another path.",
        leftPath: "This is the left path for the left path.",
        rightPath: "This is the right path for the left path.",
      }; // return
    } else if (path[1] == "left") {
      // starting 3rd layer
      if (path.length == 2) {
        return {
          prompt:
            "You chose left then left. This is where you can choose another path.",
          leftPath: "This is the left path for the left path for the left path",
          rightPath:
            "This is the right path for the left path for the left path",
        }; // return
      } else if (path[2] == "right") {
        return {
          prompt:
            "You chose left then right.  This is an example of an end path.",
          end: true,
        }; //return
      } else if (path[2] == "left") {
        // starting 4th layer
        if (path.length == 3) {
          return {
            prompt:
              "You chose left then left then left.  This is where you can choose another path.",
            leftPath:
              "This is the left path for the left path for the left path for the left path",
            rightPath:
              "This is the right path for the left path for the left path for the left path",
          }; // return
        } else if (path[3] == "right") {
          // starting left layer 5
          if (path.length == 4) {
            return {
              prompt: 
                'You chose left then left then left then right.  This is where you can choose another path.',
              leftPath:
                'This is the left path for the left path for the left path for the left path for the left path.',
              rightPath:
                'This is the left path for the left path for the left path for the left path for the right path.',
            } //return
          } else if (path[4] == 'right') {
            return {
              prompt:
                'You chose left then left then left then left then right.  This is an example of an end path.',
                end: true,
            } // return
          } else if (path[4] == 'left') {
            return {
              prompt:
                'You chose left then left then left then left then left.  This is an example of an end path.',
                end: true,
            } //return
          } // end left layer 5
        } else if (path[3] == "left") {
          return {
            prompt:
              "You chose left then left then left then left. This is an example of an end path.",
            end: true,
          }; //return
        } // end of layer the forth
      } else if (path[1] == "right") {
        return {
          prompt:
            "You chose left then right. This is an example of the end of a path.",
          end: true,
        }; // return
      } // layer the third
    }
  } else if (path[0] == "right") {
    // going into seccond layer for right
    if (path.length == 1) {
      return {
        prompt:
          "You took the right path. This is where you can choose another path.",
        leftPath: "This is the left path for the right path.",
        rightPath: "This is the right path for the right path.",
      };
    } else if (path[1] == "left") {
      // right layer 3
      if (path.length == 2) {
        return {
          prompt:
            'You took the right path then the left.  This is where you can choose another path',
          rightPath: 
            'This is the right path for the right path.',
          leftPath:
            'This is the left path for the right path.',
        } // return
      } else if (path[2] == 'right') {
        prompt:
          'You took the right path then the left path then theright path, this is an example of an end path.',
        end = true
      } else if (path[2] == 'left') {
        prompt:
          'You took the right path then the left path then the left path, this is an example of an end path.',
        end = true
      } // end right layer 3
      return {
        prompt:
          "You chose right then left. This is an example of the end of a path.",
        end: true,
      }; // return
    } else if (path[1] == "right") {
      return {
        prompt:
          "You chose right then right. This is an example of the end of a path.",
        end: true,
      }; // return
    }  // end right layer 2
  } // end right layer 1
}; // getPromptAndChoices

export default getPromptAndChoices;
