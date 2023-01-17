import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// REDUCERS
import { appSelector } from "@/features/slice/appSlice";

const Auth = ({ children }) => {
  const { token } = useSelector(appSelector);
  const router = useRouter();

  useEffect(() => {
    if (!token.nrna_token) {
      router.push("/login");
    }
  }, [token]);

  return <>{children}</>;
};

export default memo(Auth);
