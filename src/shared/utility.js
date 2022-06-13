import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format("M/D/YY");
};

const validEmail = (email) => {
  let re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePassword = (value) => {
  let difference = 8 - value.length;
  const regEx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

  if (!value) {
    return "Password is required";
  }
  if (value.length < 8) {
    return "Must be atleast 8 characters! " + difference + " characters left";
  }
  if (!regEx.test(value)) {
    return "Password should contain atleast one letter and one number.";
  }
};

export const validateUserLogin = (user) => {
  let error = {};
  let isValid = false;

  if (!user.email) {
    error["email"] = "Email is required.";
  } else if (!validEmail(user.email)) {
    error["email"] = "Enter a valid email";
  }

  const invalidPassword = validatePassword(user.password);

  if (invalidPassword) {
    error["password"] = invalidPassword;
  }

  if (!error.email && !error.password) {
    isValid = true;
    error = null;
  }

  return { error, isValid };
};
