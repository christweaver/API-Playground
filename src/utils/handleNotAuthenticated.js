const handleNotAuthenticated = (res) => {
  const UNAUTHORIZED = 401;
  return res.status(UNAUTHORIZED).json({ Error: "Incorrect Credentials" });
};

export default handleNotAuthenticated;
