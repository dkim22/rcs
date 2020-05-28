import { Request, Response } from "express";
import { User } from "../entity/User";
import { redis } from "../redis";

export const confirmEmail = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = await redis.get(id);
  if (userId) {
    await User.update({ id: userId }, { confirmed: true });
    await redis.del(id);
    // TODO: test하기 위하여 res.send("ok")를 넣어줌 mock test를 넣기 전까지 대체할 예정
    if (process.env.NODE_ENV === "test") {
      res.send("ok");
    } else {
      res.redirect(`${process.env.FRONTEND_HOST}/login`);
    }
  } else {
    res.send("invalid");
  }
};
