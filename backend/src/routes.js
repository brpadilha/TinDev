server.get("/", (req, res) => {
  return res.send({ message: `Olá ${req.query.name}` });
});
