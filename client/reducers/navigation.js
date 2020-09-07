const navigation = (state = [], action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return [
        ...state,
        {
          id: action.id,
          word: action.word
        }
      ]

    default:
      return state
  }
}

export default navigation