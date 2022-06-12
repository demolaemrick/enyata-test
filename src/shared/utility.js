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

  if (!value) {
    return "Password is required";
  }
  if (value.length < 8) {
    return "Must be 8 characters! " + difference + " characters left";
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
