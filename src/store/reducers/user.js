const initialState = {
   users: [],
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case "ADD_USER":
         return {
            users: [...state.users, action.payload],
         };
      case "DELETE_USER":
         const tempUser = state.users.filter((_, index) => {
            return index !== action.payload
         })
         return {
            users: [...tempUser]
         }
      default: {
         return state
      }
   }
}

export default userReducer;