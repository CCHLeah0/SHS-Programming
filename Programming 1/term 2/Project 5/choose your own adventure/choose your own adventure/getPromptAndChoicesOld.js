const getPromptAndChoices = (path) => {
  // first layer of the tree
  if (path.length == 0) {
    return {
      prompt:
        "You wake and get out of a strange bed, it closes behind you and you look around.",
      leftPath: 
        "Look to your right.",
      rightPath:
        "Look to your left.",
    };
  } else if (path[0] == "left") {
    // going to seccond layer for left
    if (path.length == 1) {
      return {
        prompt:
          "You took the left path. This is where you can choose another path.",
          // these do be broken oh no
        leftPath: 
          "Unholy screeching",
        rightPath: 
          "allegedly holy screaming",
      }; // return
    } else if (path[1] == "left") {
      // starting 3rd layer
      if (path.length == 2) {
        return {
          prompt:
            "unholy screeching brought you here, decide",
          leftPath: 
            "a bagle",
          rightPath:
            "2 bagles",
        }; // return
      } else if (path[2] == "right") {
        return {
          prompt:
            "NOOOO.",
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
          "There are 2 odd curved devices sticking out of the wall to your right on the only portion of the room you are in that doesn't consist of glass.  Above that is a timer that appears to have been counting down for 2 minutes.  There also appears to be items outside the glass.  ",
        leftPath: 
          "Investigate the back of the room (relative to current position).",
        rightPath: 
          "Look outside the room.",
      };
    } else if (path[1] == "left") {
      // right layer 3
      if (path.length == 2) {
        return {
          prompt:
            "You turn around and find a small table with a clipboard, empty mug and radio playing an energetic but unfamiliar song.  And a strangely round toilet.",
          rightPath: 
            'Read the clipboard.',
          leftPath:
            'Shove the mug in the toilet.',
        } // return
      } else if (path[2] == 'right') {
        prompt:
          'You appear to have run out of time, all of the lights dim and a robotic recording begins to play. Time to start Testing.',
        end = true
      } else if (path[2] == 'left') {
        prompt:
          'You appear to have run out of time, all of the lights dim and a robotic recording begins to play. Welcome to Aperture Science <<Subject Name Here>>.',
        end = true
      } // end right layer 3
      return {
        // investigate outside the room
        
        prompt:
          "how to we get here??????.",
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