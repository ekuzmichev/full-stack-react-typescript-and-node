export interface PasswordValidationResult {
  message: string;
  isValid: boolean;
}

export const isPasswordValid = (password: string): PasswordValidationResult => {
  const passwordValidationResult: PasswordValidationResult = {
    message: "",
    isValid: true,
  };

  if (password.length < 8) {
    passwordValidationResult.message = "Password must be at least 8 characters";
    passwordValidationResult.isValid = false;
    return passwordValidationResult;
  }

  const strongPasswordRegExp: RegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!strongPasswordRegExp.test(password)) {
    passwordValidationResult.message =
      "Password must contain at least 1 special character, 1 cap letter, and 1 number";
    passwordValidationResult.isValid = false;
  }

  return passwordValidationResult;
};
