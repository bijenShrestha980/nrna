import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
// REDUCERS
import { appSelector, setPersonalInfo } from "@/features/slice/appSlice";
// UTILS
import { COUNTRIES } from "@/utils/countries";
// COMPONENTS
import Btn from "@/components/Button/Btn";
import UserLayout from "@/layout/UserLayout";

const PersonalInformation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { membershipForm } = useSelector(appSelector);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setPersonalInfo(data));
    router.push("/membership_form/2");
  };

  return (
    <UserLayout>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <span className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="first_name" className="text-slate-400">
                First Name *
              </label>
              {errors.first_name && (
                <p className="text-red-400 font-semibold">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            <Controller
              name="first_name"
              defaultValue={
                membershipForm?.personalInfo?.first_name
                  ? membershipForm?.personalInfo?.first_name
                  : ""
              }
              control={control}
              rules={{
                required: "First name is required",
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
                <input
                  type="text"
                  id="first_name"
                  placeholder="Type your first name."
                  className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                />
              )}
            />
          </span>
          <span className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="middle_name" className="text-slate-400">
                Middle Name
              </label>
              {errors.middle_name && (
                <p className="text-red-400 font-semibold">
                  {errors.middle_name.message}
                </p>
              )}
            </div>
            <Controller
              name="middle_name"
              defaultValue={
                membershipForm?.personalInfo?.middle_name
                  ? membershipForm?.personalInfo?.middle_name
                  : ""
              }
              control={control}
              rules={{
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
                <input
                  type="text"
                  id="middle_name"
                  placeholder="Type your middle name."
                  className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                />
              )}
            />
          </span>
          <span className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="last_name" className="text-slate-400">
                Last Name *
              </label>
              {errors.last_name && (
                <p className="text-red-400 font-semibold">
                  {errors.last_name.message}
                </p>
              )}
            </div>
            <Controller
              name="last_name"
              defaultValue={
                membershipForm?.personalInfo?.last_name
                  ? membershipForm?.personalInfo?.last_name
                  : ""
              }
              control={control}
              rules={{
                required: "Last name is required",
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
                <input
                  type="text"
                  id="last_name"
                  placeholder="Type your last name."
                  className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                />
              )}
            />
          </span>
        </div>
        <div>
          <div className="flex flex-col xl:flex-row xl:space-x-5">
            <span className="grow-0 flex-auto flex flex-col">
              <div className="flex gap-3">
                <label htmlFor="country" className="text-slate-400">
                  Country *
                </label>
                {errors.country && (
                  <p className="text-red-400 font-semibold">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <Controller
                name="country"
                defaultValue={
                  membershipForm?.personalInfo?.country
                    ? membershipForm?.personalInfo?.country
                    : ""
                }
                control={control}
                rules={{
                  required: "Country is required",
                }}
                render={({ field }) => (
                  <select
                    id="country"
                    placeholder="Select country"
                    className="my-4 p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  >
                    <option defaultValue="">Select country</option>
                    {COUNTRIES.map((item, i) => (
                      <option value={item.name} key={i}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </span>
            <span className="grow flex-auto flex flex-col">
              <div className="flex gap-3">
                <label htmlFor="city" className="text-slate-400">
                  City
                </label>
                {errors.city && (
                  <p className="text-red-400 font-semibold">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <Controller
                name="city"
                defaultValue={
                  membershipForm?.personalInfo?.city
                    ? membershipForm?.personalInfo?.city
                    : ""
                }
                control={control}
                rules={{
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
                  <input
                    type="text"
                    name="city"
                    placeholder="Type your city name."
                    className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  />
                )}
              />
            </span>
          </div>
          <span className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="email" className="text-slate-400">
                Email *
              </label>
              {errors.email && (
                <p className="text-red-400 font-semibold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Controller
              name="email"
              defaultValue={
                membershipForm?.personalInfo?.email
                  ? membershipForm?.personalInfo?.email
                  : ""
              }
              control={control}
              rules={{
                required: "Email is required",
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
                  placeholder="Insert valid email address."
                  className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                />
              )}
            />
          </span>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="code" className="text-slate-400">
                Mobile
              </label>
              {errors.mobile && (
                <p className="text-red-400 font-semibold">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            <span className="flex flex-col lg:flex-row lg:space-x-5">
              <Controller
                name="code"
                defaultValue={
                  membershipForm?.personalInfo?.code
                    ? membershipForm?.personalInfo?.code
                    : ""
                }
                control={control}
                render={({ field }) => (
                  <select
                    id="code"
                    className="shrink my-4 p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  >
                    <option defaultValue="">Choose a country code</option>
                    {COUNTRIES.map((item, i) => {
                      return (
                        <option value={item.prefix} key={i}>
                          {item.prefix}
                        </option>
                      );
                    })}
                  </select>
                )}
              />
              <Controller
                name="mobile"
                defaultValue={
                  membershipForm?.personalInfo?.mobile
                    ? membershipForm?.personalInfo?.mobile
                    : ""
                }
                control={control}
                rules={{
                  minLength: {
                    value: 1,
                    message: "Min character length required",
                  },
                  maxLength: {
                    value: 15,
                    message: "Max character length exceded",
                  },
                }}
                render={({ field }) => (
                  <input
                    type="number"
                    name="mobile"
                    placeholder="Type your mobile number."
                    className="grow my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    onWheel={(e) => e.target.blur()}
                    {...field}
                  />
                )}
              />
            </span>
          </div>
        </div>
        <div className="md:col-start-2">
          <div className="flex flex-col md:flex-row justify-end">
            <Btn title={"Next"} className={"bg-sky-600 active:bg-sky-700"} />
          </div>
        </div>
      </form>
    </UserLayout>
  );
};

export default PersonalInformation;
