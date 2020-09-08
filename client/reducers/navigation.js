export const NAVIGATE = 'NAVIGATE'

const navigation = (state = 'listing', action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.target
    default:
      return state
  }
}

export default navigation
