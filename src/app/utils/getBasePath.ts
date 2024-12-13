export const getBasePath = () => {
  if (process.env.NODE_ENV === "development") return "";
  return "/cosmic-library";
};
