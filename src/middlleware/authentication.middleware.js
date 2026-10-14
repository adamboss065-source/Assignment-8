import jwt from "jsonwebtoken";
import { findonebyid } from "../DB/models/db.repo.js";
import usermodel from "../DB/models/user.model.js";
import { Typetoken } from "../common/enum/token.enum.js";

function auth(typetoken = Typetoken) {
  return async function (req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error("token not found");
    }
    const payload = jwt.verify(
      token,
      typetoken == Typetoken.access ? "adam" : "dama",
    );
    if (!payload.sub) {
      throw new Error("sub not found");
    }
    const user = await findonebyid({ model: usermodel, id: payload.sub });
    req.user = user;
    req.payload = payload;
    next();
  };
}
export default auth;
