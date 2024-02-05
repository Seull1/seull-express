const express = require('express');
const router = express.Router();

router.get('/artists/:id',function(req,res){
	console.log("id 는" + req.params.id+"입니다")
	res.send("id : " + req.params.id)
});

router.get('/artists/:id/company/:company',function (req,res){
	res.send("id : " +req.params.id +" 회사 : "+ req.params.company)
});

router.get('/artists', function (req, res) {
  console.log("이름은 " + req.query.name + " 입니다")
  res.send("name : " + req.query.name)
});
