module.exports = (req, res, next) => {
  // res.status(200).json({ tareas: [] })
  const token = '1234'
  // console.log(req.headers)
  if (req.headers['authorization'] === token) {
    next()
    return;
  }
  res.status(400).json({err: 'Invalid token'})
}