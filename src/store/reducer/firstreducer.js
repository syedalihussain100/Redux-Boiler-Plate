const inialstate = {
  users: [
    {
      id: 1,
      name: "Hammad",
      email: "abc@gmail.com",
    },
    {
      id: 2,
      name: "Farhan",
      email: "xyz@gmail.com",
    },
  ],
};

export default (state = inialstate, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        users: [...state.users, action.data],
      };
    default:
  }

  return state;
};
