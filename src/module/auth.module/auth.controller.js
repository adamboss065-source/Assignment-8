import { Router } from "express";
import { signup, login } from "./auth.service.js";

const authRouter = Router();
authRouter.post("/signup", async (req, res) => {
  try {
    const result = await signup(req.body);
    return res.status(200).json({ msg: "created", data: result });
  } catch (error) {
    res.status(500).json({
      message: "Error aggregating notes",
      error: error.message,
    });
  }
});

authRouter.post("/login", async (req, res) => {
  const result = await login(req.body);
  return res.status(201).json({ msg: "done", data: result });
});
export default authRouter;
