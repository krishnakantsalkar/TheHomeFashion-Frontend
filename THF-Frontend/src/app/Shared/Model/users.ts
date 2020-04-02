export interface Iusers {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  address: string;
  userLogin: {
    userEmail: string;
    userPassword: string;
  };
  isAdmin?: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  newLetterCheck: boolean;
  termsAcceptCheck: boolean;
  sendConfirmationMail?: string;

  token?: string;
  message?: string;
  _id?: string;
}
