export default function list(state = [], action) {
  switch (action.type) {
    case 'REMOVE_TO_LIST':
      return [...state, action.dragons];
    case 'ADD_TO_LIST':
      return [...state, action.dragons];
    default:
      return state;
  }
}
