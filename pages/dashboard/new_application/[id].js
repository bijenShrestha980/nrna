import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
// COMPONENTS
import AdminLayout from "@/layout/AdminLayout";
// REDUCETS
import { useGetMemberByIdMutation } from "@/features/api/membershipApi";

import user from "@/assets/images/user.png";
import Spinner from "@/layout/Loader/Spinner";

const Member = () => {
  const router = useRouter();
  const { id } = router.query;
  const [getMemberById, { data, isLoading, isSuccess }] =
    useGetMemberByIdMutation();

  useEffect(() => {
    getMemberById({ id: id });
  }, [id]);

  return (
    <AdminLayout>
      {/* {isLoading || !isSuccess ? (
        <Spinner />
      ) : ( */}
      <>
        {/* <div className="w-full p-6 grid grid-cols-2 items-center last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none mb-4">
            <div className="flex items-center gap-5">
              <Image
                width={"100"}
                height={"100"}
                unoptimized={data.data.image.length > 0 ? false : true}
                alt={"Profile Image"}
                loader={() =>
                  `${process.env.REACT_APP_BASE_URL}/images/${data.data.image[0]?.name}`
                }
                src={
                  data.data.image.length > 0
                    ? `${process.env.REACT_APP_BASE_URL}/images/${data.data.image[0]?.name}`
                    : user
                }
                className="rounded-xl h-16 w-16 shadow-md object-cover object-center"
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 capitalize">
                  {`${data.data.first_name} ${data?.data?.middle_name} ${data?.data?.last_name}`}
                </h3>
                <h5 className="text-md capitalize text-slate-500 font-semibold">
                  Public dwu
                </h5>
              </div>
            </div>
            <div className="text-end">
              <span
                className={`capitalize badge rounded-pill ${
                  data.data.membership === "new"
                    ? "badge-light-primary"
                    : "badge-light-danger"
                }`}
              >
                {data.data.membership}
              </span>
            </div>
          </div> */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <div className="w-full p-6 flex flex-col items-start last:mr-0 bg-white transition-all ease-in-out duration-300 rounded-xl shadow-md select-none">
            <h5 class="mb-4 text-lg font-semibold text-slate-600 capitalize">
              profile information
            </h5>
            <form action="" className="w-full">
              <div className="w-full flex items-baseline justify-between">
                <label
                  htmlFor=""
                  className="text-sm text-slate-700 font-bold pr-4"
                >
                  First Name :
                </label>
                <input
                  type="text"
                  defaultValue={"wddwdwdw"}
                  className="grow text-sm text-slate-400 outline-none p-2 pl-0"
                />
              </div>
            </form>
          </div>
        </div>
      </>
      {/* )} */}
    </AdminLayout>
  );
};

export default Member;
