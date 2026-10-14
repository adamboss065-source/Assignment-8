import { Router } from "express";
import auth from "../../middlleware/authentication.middleware.js";
import { Typetoken } from "../../common/enum/token.enum.js";
import { rotatetoken } from "./user.service.js";
const userRouter = Router();

userRouter.get("/get-profile", auth(Typetoken.access), async (req, res) => {
  try {
    return res
      .status(200)
      .json({ msg: "created", user: req.user, payload: req.payload });
  } catch (error) {
    res.status(500).json({
      message: "Error aggregating notes",
      error: error.message,
    });
  }
});

userRouter.post("/rotate-token", auth(Typetoken.refresh), async (req, res) => {
  try {
    const result = await rotatetoken(req.payload);

    return res.status(200).json({
      msg: "Tokens rotated successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default userRouter;
