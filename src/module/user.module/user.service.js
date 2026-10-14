import { creatlogintoken } from "../../security/token.security.js";

export async function rotatetoken(payload) {
  return creatlogintoken({
    payload: { sub: payload.sub },
  });
}
