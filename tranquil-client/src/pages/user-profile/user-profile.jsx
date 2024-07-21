import { useCallback, useEffect, useState } from "react";
import UserInfo from "./components/user-info";
import { getUserProfile } from "./helper";
import KycForm from "./components/kyc-form";
import Divider from "../../components/divider";
export default function UserProfile() {
  const [flag, setFlag] = useState(false);
  const getUser = useCallback(async () => {
    await getUserProfile();
  }, []);
  useEffect(() => {
    getUser();
  }, [getUser]);
  return (
    <div className="my-8">
      <UserInfo />
      {!flag ? (
        <button
          className="px-3 py-2 mt-5 font-semibold text-white border rounded bg-sky-700"
          onClick={() => setFlag(true)}
        >
          Apply for KYC
        </button>
      ) : (
        <>
          <Divider />
          <div className="text-lg font-semibold">
            <p>Fill in the kyc</p>
            <p>To post rooms for rent</p>
          </div>
          <KycForm />
        </>
      )}
    </div>
  );
}
