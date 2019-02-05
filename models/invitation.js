const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const inviteSchema = new Schema({
   
    status:{ type: String, enum:['SENT', 'ANSWERED','FINISHED']},
    email: { type: String, unique: true, required: true },
   
});





module.exports = mongoose.model('invitation', inviteSchema);
