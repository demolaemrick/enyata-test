import dayjs from "dayjs";

export const formatDate = (date) => {
  return dayjs(date).format("M/D/YY");
};

export const shorten = (val, restrictToLen) => {
  // console.log({ shorten: { val, restrictToLen } })

  let len = val.length;

  if (len <= restrictToLen) {
    return val;
  } else {
    return val.substring(0, restrictToLen) + "...";
  }
};
