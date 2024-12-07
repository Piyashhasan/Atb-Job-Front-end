export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  const accessToken = localStorage.getItem("accessToken");

  if (user && accessToken) {
    return {
      user: JSON.parse(user),
      accessToken,
    };
  }
  return {
    user: null,
    accessToken: null,
  };
};
