export const convertFees = (fees: number | undefined) => {
  return String(fees).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
