let password = 'ICODE4FOOD'

const crackme7 = (password) => {
  if (password.length === 10) {
    if (password[0].charCodeAt() === 73) {
      if (password[1].charCodeAt() === 67) {
        if (password[2].charCodeAt() === 79) {
          if (password[3].charCodeAt() === 68) {
            if (password[4].charCodeAt() === 69) {
              if (password[5].charCodeAt() === 52) {
                if (password[6].charCodeAt() === 70) {
                  if (password[7].charCodeAt() === 79) {
                    if (password[8].charCodeAt() === 79) {
                      if (password[9].charCodeAt() === 68) {
                        console.log('OK')
                        /*Le mot de passe doit absolument contenir 10 caractères
                        et la fonction ".charCodeAT" fait donc référence à la table ASCII*/
                      } else {
                        console.log('BAD')
                      }
                    } else {
                      console.log('BAD')
                    }
                  } else {
                    console.log('BAD')
                  }
                } else {
                  console.log('BAD')
                }
              } else {
                console.log('BAD')
              }
            } else {
              console.log('BAD')
            }
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme7(password)