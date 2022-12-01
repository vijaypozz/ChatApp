// const { default: socketIo } = require("../socket.io/socket.io");

//   const io = socketIo()
// io.on("connection", (socket) => {
    const getUserName = (name, room, message) => {
        console.log("name===================================-----------------",);
        return name, room, message
        // socket.emit("receive_message",name, room, message)
    }
    module.exports = getUserName
// })
/**
 *
 * @param {string} name note ID
 * @param {string} room note title
 * @param {string} message note message
 */

