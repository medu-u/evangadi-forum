const login = async (req, res) => {
  const { email, password } = req.body;
  //validate request

  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide all required values" });
  }
try {
  
} catch (error) {
  console.log("Login error:", error.message);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Error fetching user data" });
}
};


export { login };
