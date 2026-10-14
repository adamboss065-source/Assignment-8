import jwt from "jsonwebtoken";

export function signtoken({ payload = {}, signature, option } = {}) {
  return jwt.sign(payload, signature, option);
}

export function verifytoken({ token = {}, signature } = {}) {
  return jwt.verify(token, signature);
}
export function decodetoken(token) {
  return jwt.decode(token);
}

export function creatlogintoken({ payload = {}, option } = {}) {
  const Access_token = jwt.sign(payload, "adam", {
    ...option,
    expiresIn: 1800,
  });

  const Refresh_token = jwt.sign(payload, "dama", {
    ...option,
    expiresIn: 31536000,
  });

  return { Access_token, Refresh_token };
}
