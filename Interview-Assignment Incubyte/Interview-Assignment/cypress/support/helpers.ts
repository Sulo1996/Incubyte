
  /**
   * It generates a text with a specific length of characters
   * that are generated randomly from a characters list
   *
   * @param {int} number of characters that will have the string
   * @return text with a length of a specific number of characters
   */
  export function getTextWithLengthOf(numOfCharacters) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < numOfCharacters; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }