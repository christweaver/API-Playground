const isAuthenticated = (req) =>
  req.headers.authorization === process.env.NEXT_PUBLIC_API_KEY;
export default isAuthenticated;
