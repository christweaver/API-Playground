const isAuthenticated = (req) =>
  req.headers.authorization === process.env.API_KEY;
export default isAuthenticated;
