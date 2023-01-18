import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
// HANDLER
// COMPONENTS
import UserLayout from "@/layout/UserLayout";
import Btn from "@/components/Button/Btn";
// REDUCERS
import { appSelector, setVerification } from "../../features/slice/appSlice";

const Verification = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { membershipForm } = useSelector(appSelector);
  const imageRef = useRef(null);
  const [picture, setPicture] = useState(
    membershipForm?.verification?.picture || null
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChangePicture = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setPicture(reader.result);
      });
    }
    // console.log(URL.createObjectURL(e.target.files));
  };

  const onSubmit = (data) => {
    dispatch(
      setVerification({
        ...data,
        passport_expiry_date: Date.parse(data.passport_expiry_date),
        image: picture,
      })
    );
    router.push("/membership_form/4");
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
              <label htmlFor="passport_number" className="text-slate-400">
                Passport Number *
              </label>
              {errors.passport_number && (
                <p className="text-red-400 font-semibold">
                  {errors.passport_number.message}
                </p>
              )}
            </div>
            <Controller
              name="passport_number"
              defaultValue={
                membershipForm?.verification?.passport_number
                  ? membershipForm?.verification?.passport_number
                  : ""
              }
              control={control}
              rules={{
                required: "Passport number is required",
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
                  id="passport_number"
                  placeholder="Type your passport number."
                  className="my-4 p-4 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                />
              )}
            />
          </span>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <label className="text-slate-400" htmlFor="expiry_date">
                Expiry Date *
              </label>
              {errors.passport_expiry_date && (
                <p className="text-red-400 font-semibold">
                  {errors.passport_expiry_date.message}
                </p>
              )}
            </div>
            <span className="my-4 flex gap-x-5 relative">
              {/* <DatePicker
              selected={year}
              showPopperArrow={false}
              maxDate={new Date()}
              dateFormat="yyyy"
              showYearPicker
              onChange={(date) => {
                setYear(date);
                setDate(date);
              }}
              className="grow p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
            />
            <DatePicker
              selected={Date.parse(year)}
              showPopperArrow={false}
              maxDate={new Date()}
              dateFormat="MM"
              showMonthYearPicker
              onChange={(date) => {
                setYear(date);
                setDate(date);
              }}
              className="grow p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
            /> */}
              <Controller
                name="passport_expiry_date"
                defaultValue={
                  membershipForm?.verification?.passport_expiry_date &&
                  new Date(membershipForm?.verification?.passport_expiry_date)
                }
                control={control}
                render={({ field }) => (
                  <>
                    <DatePicker
                      selected={field.value}
                      showPopperArrow={false}
                      minDate={new Date()}
                      showDayMonthYearPicker
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      className="grow p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                      {...field}
                      required
                    />
                  </>
                )}
              />
            </span>
          </div>
          <span className="flex flex-col">
            <div className="flex gap-3">
              <label htmlFor="profession" className="text-slate-400">
                Citizenship *
              </label>
              {errors.citizenship && (
                <p className="text-red-400 font-semibold">
                  {errors.citizenship.message}
                </p>
              )}
            </div>
            <Controller
              name="citizenship"
              defaultValue={
                membershipForm?.verification?.citizenship
                  ? membershipForm?.verification?.citizenship
                  : ""
              }
              control={control}
              rules={{
                required: "Citizenship type is required",
              }}
              render={({ field }) => (
                <select
                  id="citizenship"
                  placeholder="Select your citizenship"
                  className="my-4 p-4 text-sm text-slate-400 capitalize border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                >
                  <option defaultValue="">None</option>
                  <option value="global">Global</option>
                </select>
              )}
            />
          </span>
        </div>
        <div>
          <span className="flex flex-col">
            <label htmlFor="passport_number" className="text-slate-400">
              Profile Image
            </label>
            <input
              type="file"
              className="hidden"
              ref={imageRef}
              onChange={onChangePicture}
              // ref={(e) => {
              //   register("picture");
              //   imageRef.current = e;
              // }}
            />
            <div
              className="w-36 h-40 my-3 border-solid border-2 border-slate-400 bg-slate-50 cursor-pointer flex justify-center items-center"
              onClick={() => imageRef.current?.click()}
            >
              {membershipForm?.verification?.picture || picture ? (
                <img
                  src={
                    picture ? picture : membershipForm?.verification?.picture
                  }
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              ) : (
                <p className="text-slate-400 font-medium">Browse</p>
              )}
            </div>
          </span>
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

export default Verification;
