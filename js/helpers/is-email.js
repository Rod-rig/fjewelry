export const isEmail = email => {
  const emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
};
