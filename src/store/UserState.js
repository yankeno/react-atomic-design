import { atom } from "recoil";

export const userState = atom({
  /**
   * 一意な key を設定する
   * 基本的にはファイル名と合わせるのが吉
   */
  key: "userState",
  default: { isAdmin: false },
});
