import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// HANDLER
import { LocationIcon, LockIcon, MailIcon } from "../utils/icons";
// COMPONENTS
import Btn from "../components/Button/Btn";
import Spinner from "../layout/Loader/Spinner";
// REDUCERS
import { useLoginAuthMutation } from "../features/api/authApi";
import { clearState, login } from "../features/slice/appSlice";

const Login = () => {
  return (
    <>
      <main className="container mx-auto px-3 flex h-screen">
        <div className="my-auto p-10 md:py-20 lg:mx-40 w-full bg-slate-100">
          <div className="w-full lg:w-4/5 xl:w-2/5 m-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold text-sky-600 py-2">
                Registered Membership Form
              </h3>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 py-2">
                Dashboard
              </h3>
            </div>
            <Form />
          </div>
        </div>
      </main>
    </>
  );
};

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginAuth, { isLoading, isSuccess, isError, error, data }] =
    useLoginAuthMutation();

  const onSubmit = (data) => {
    loginAuth(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
    }
    if (isSuccess) {
      clearState();
      dispatch(
        login({
          token: data.data,
        })
      );
      router.push(`/dashboard`);
    }
  }, [isError, isSuccess]);

  return (
    <form
      className="my-16 text-center flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="relative">
        <label htmlFor="committee" className="absolute p-4">
          <LocationIcon className={"text-slate-500"} />
        </label>
        <Controller
          name="committee"
          defaultValue=""
          control={control}
          rules={{
            required: "Committee field required",
            minLength: {
              value: 1,
              message: "Min character length required",
            },
            maxLength: {
              value: 99,
              message: "Max character length exceded",
            },
          }}
          render={({ field }) => (
            <select
              id="committee"
              className={`w-full mb-4 p-4 pl-14 text-sm text-slate-500 font-semibold border-solid border-2 duration-100 ease-in-out focus:border-slate-600 focus-visible:outline-0 ${
                errors.committee ? "border-red-400" : "border-slate-400"
              }`}
              {...field}
            >
              <option value="">Select Comittee</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          )}
        />
      </span>
      <span className="relative">
        <label htmlFor="email" className="absolute p-4">
          <MailIcon className={"text-slate-500"} />
        </label>
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 1,
              message: "Min character length required",
            },
            maxLength: {
              value: 99,
              message: "Max character length exceded",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field }) => (
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className={`w-full mb-4 p-4 pl-14 text-sm text-slate-500 font-semibold border-solid border-2 duration-100 ease-in-out focus:border-slate-600 focus-visible:outline-0 ${
                errors.email ? "border-red-400" : "border-slate-400"
              }`}
              {...field}
            />
          )}
        />
      </span>
      <span className="relative">
        <label htmlFor="password" className="absolute p-4">
          <LockIcon className={"text-slate-500"} />
        </label>
        <Controller
          name="password"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            minLength: {
              value: 1,
              message: "Min character length required",
            },
            maxLength: {
              value: 99,
              message: "Max character length exceded",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              message: "Enter a valid password",
            },
          }}
          render={({ field }) => (
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={`w-full mb-4 p-4 pl-14 text-sm text-slate-500 font-semibold border-solid border-2 duration-100 ease-in-out focus:border-slate-600 focus-visible:outline-0 ${
                errors.password ? "border-red-400" : "border-slate-400"
              }`}
              {...field}
            />
          )}
        />
      </span>
      {errors.comittee && (
        <p className="text-red-400 font-semibold">{errors.comittee.message}</p>
      )}
      {errors.email && (
        <p className="text-red-400 font-semibold">{errors.email.message}</p>
      )}
      {errors.password && (
        <p className="text-red-400 font-semibold">{errors.password.message}</p>
      )}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <span className="flex items-center">
          <input
            type="checkbox"
            id="remember_me"
            className="my-7 p-4 h-5 w-5 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
          />
          <label htmlFor="remember_me" className="text-slate-400 mx-2">
            Remember me
          </label>
        </span>
        <Btn
          title={isLoading ? <Spinner /> : `Login`}
          className={"bg-sky-600 active:bg-sky-700"}
          disabled={isLoading && true}
        />
      </div>
    </form>
  );
};

export default Login;
