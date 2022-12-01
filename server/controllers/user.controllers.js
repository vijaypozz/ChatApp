const { getAllUser, updateUserMessgae } = require("../models/user.models");
const getUserName = require("../utils/getUserName");

exports.getUser = (async(req,res) => {
console.log(res);
console.log(req);
   const data = await getAllUser()
   console.log("-------",data);
res.status(200).send({
    success : true,
    data
})
// res.send({
//     message :"get request fethched"
// })
})

exports.updateMessage = (async(req,res) => {
try {
   const id = await getAllUser()
    const data = await updateUserMessgae(...id)
    console.log("-----updatedataaaaaaa--",data);
 res.status(200).send({
     success : true,
     data
 })
 // res.send({
 //     message :"get request fethched"
 // })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success : false,
        message: error
    })
}
})

