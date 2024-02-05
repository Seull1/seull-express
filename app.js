const express = require('express')
const myCommon = require('seull1-common-fun')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const a = 1
  const b = 10
  let myJson = { "Hello": "World", "ADD": myCommon.add(a, b) }

  res.json(myJson)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

