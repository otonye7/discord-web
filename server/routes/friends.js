const express = require("express");
const router = express.Router();

const auth  = require("../middlewares/index");
const { postInvite } = require("../controllers/friends");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

router.post("/friend-invitation/invite", auth, validator.body(postFriendInvitationSchema), postInvite);

module.exports = router