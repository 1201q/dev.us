import { getAuthErrorMsg } from "@/utils/common/getAuthErrorMsg";
import { authService } from "@/utils/firebase/client";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useState } from "react";

interface Type {
  loading: boolean;
  onSignup: (
    email: string,
    password: string,
    checkPassword: string,
    name: string,
    callback: (d?: any) => void
  ) => Promise<void>;
}

const useSignup = (): Type => {
  const [loading, setLoading] = useState(false);

  const onSignup = async (
    email: string,
    password: string,
    checkPassword: string,
    name: string,
    callback: (msg?: any) => void
  ) => {
    callback(null);
    setLoading(true);
    if (password !== checkPassword) {
      setTimeout(() => {
        setLoading(false);
        callback("비밀번호가 맞는지 다시 확인해주세요.");
      }, 200);
    } else {
      createUserWithEmailAndPassword(authService, email, password)
        .then(async (userObj) => {
          await updateProfile(userObj.user, { displayName: name });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          callback && callback(getAuthErrorMsg(error.code));
        });
    }
  };

  return { loading, onSignup };
};
export default useSignup;
