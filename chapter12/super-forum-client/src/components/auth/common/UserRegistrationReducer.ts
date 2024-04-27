export interface UserRegistrationState {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  resultMessage: string;
}

export const userRegistrationReducer = (
  state: UserRegistrationState,
  action: { type: keyof UserRegistrationState; payload: any }
): UserRegistrationState => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirmation":
      return { ...state, passwordConfirmation: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "resultMessage":
      return { ...state, resultMessage: action.payload };
    default:
      return { ...state, resultMessage: "A failure has occurred." };
  }
};
