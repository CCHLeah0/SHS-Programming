const getPromptAndChoices = (path) => {
  // layer the 0th
  if (path.length == 0) {
    return {
      prompt:
        "You wake and get out of a strange bed, which seals behind you, where do you want to look?",
      leftPath: "To your left.",
      rightPath: "To your right.",
    }; //return
    // left layer 1
  } else if (path[0] == "left") {
    if (path.length == 1) {
      return {
        prompt:
          "You find yourslelf in a glass room, here there are 2 odd devices sticking out of the only opaque pannel in the room, with a timer above it that is ticking down from 59s.",
        leftPath: "Inspect the outer room",
        rightPath: "Inspect the right half of the room you are in",
      }; // return
    } else if (path[1] == "left") {
      // left layer 2
      if (path.length == 2) {
        return {
          prompt:
            "Looking directly ahead there appears to be a matching pair of devices and countdown clock directly in front of you, and to your left there appears to be a sign.",
          leftPath: "Inspect sign",
          rightPath: "Inspect right side of room",
        }; // return
      } else if (path[2] == "left") {
        // left layer 3
        if (path.length == 3) {
          return {
            prompt: "You inspect the sign, it appears to be off currently, it may turn on if you wait for the timer to go off.  Suddenly, the lights dim for a moment, and a cold, robotic voice fills the room, saying 'Hello and, again, welcome to the Aperture Science computer-aided enrichment center.  We hope your brief detention in the relaxation vault has been a pleasant one.  Your specimen has been processed and we are now ready to begin the test proper.'",
            leftPath: "Wait for screen to light up to read",
            rightPath: "Look at the other side of the room and try to ignore Her.",
          }; //return
        } else if (path[3] == "left") {
          // left layer 4 :D
          if (path.length == 4) {
            return {
              prompt: "While you wait, the voice continues, 'Before we start, however, keep in mind that although fun and learning are the primary goals of all enrichment center activities, serious injuries may occur.  For your own safety and the safety of others, please refrain from touching  [static hiss] <faster> Por favor bordón de fallar Muchos gracias de fallar gracias </faster> stand back. The portal will open in three. two. one.' The screen finally lights up and the pairs of devices rip connected holes through the fabric of reality.",
              leftPath: "Walk through the portal.",
              rightPath: "Read the screen.",
            }; // return
          } else if (path[4] == "left") {
            return {
              prompt: "You walk through the portal and through the circular door to begin Testing.",
              end: true,
            }; // return
          } else if (path[4] == "right") {
            return {
              prompt: "The screen reads '00; 00/19; and has 2 symbols, one of a box falling out of a rectangle, one a box falling on a cartoon humanoid.",
              end: true,
            }; //return
          } // left layer 4
        } else if (path[3] == "right") {
          return {
            prompt: "You see a small table with a few objects and an oddly rotund toilet, feel a disturbance behind you where a portal has opened between the pairs of bars.  Welcome to Testing.",
            end: true,
          }; // return
        } // left layer 3
      } else if (path[2] == "right") {
        // right side of the room
        return {
          prompt: "To your right there is a small hollow table with a radio, a coffee cup and a small clipboard on it.  And a toilet to the side of it.",
          end: true,
        }; //return
      } // left layer 2
    } else if (path[1] == "right") {
      return {
        prompt:
          "There is a small table with a few objects, and a toilet next to it.",
        end: true,
      }; //return
    }
    // right layer 1
  } else if (path[0] == "right") {
    if (path.length == 1) {
      return {
        prompt:
          "You look to the right and see an outer room outside of the glass box you are currently in, a few futureistic style peices of furnature.  The strange bed you just crawled out of, a toilet and a small table with a coffee mug, radio and small clipboard on it.",
        leftPath: "Shove that cup into the toilet.",
        rightPath: "Listen to the radio.",
      }; //return
    } else if (path[1] == "left") {
      return {
        prompt:
          "You push the mug into the toilet, the toilet automatically flushes and says, 'your buisness is appreciated'.",
        end: true,
      }; //return
    } else if (path[1] == "right") {
      return {
        prompt:
          "An upbeat tune plays on the radio, sounds a lot like Still Alive.",
        end: true,
      }; // return
    } // right layer 1
  } // layer 0
}; // getPromptAndChoices

export default getPromptAndChoices;
