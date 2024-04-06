import { authService } from "@/utils/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

interface Type {
  loading: boolean;
  onLogin: (
    email: string,
    password: string,
    callback: (d?: any) => void
  ) => Promise<void>;
}

const useLogin = (): Type => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onLogin = async (
    email: string,
    password: string,
    callback: (d?: any) => void
  ) => {
    setLoading(true);
    signInWithEmailAndPassword(authService, email, password)
      .then((res) => {
        setLoading(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        callback && callback(error);
      });
  };

  return { loading, onLogin };
};
export default useLogin;
