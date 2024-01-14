const handleNotAuthenticated = (res) => {
  const UNAUTHORIZED = 401;
  return res.status(UNAUTHORIZED).json({ message: "Incorrect Credentials" });
};

export default handleNotAuthenticated;
