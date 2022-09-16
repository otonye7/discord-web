const express = require("express");
const router = express.Router();

const auth  = require("../middlewares/index");
const { postInvite, postAccept, postReject } = require("../controllers/friends");

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email()
})

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required()
})

router.post("/friend-invitation/invite", auth, validator.body(postFriendInvitationSchema), postInvite);
router.post("/friend-invitation/accept", auth, validator.body(inviteDecisionSchema), postAccept);
router.post("/friend-invitation/reject", auth, validator.body(inviteDecisionSchema), postReject)

module.exports = router