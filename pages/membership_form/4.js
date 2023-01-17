import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import Link from "next/link";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";

// ASSETS
import bankTransfer from "@/assets/images/payment/bank.png";
import esewa from "@/assets/images/payment/esewa.png";
import khalti from "@/assets/images/payment/khalti.svg";
import paypal from "@/assets/images/payment/paypal.webp";
// REDUCERS
import { appSelector, clearState, setPayment } from "@/features/slice/appSlice";
import { useGetPostsQuery } from "@/features/api/postApi";
import { useGetCommitteesQuery } from "@/features/api/committeeApi";
import { useMemberRegisterMutation } from "@/features/api/membershipApi";
// COMPONENTS
import PaymentVoucher from "@/components/Card/PaymentVoucher";
import Paypal from "@/components/Payment/Paypal";
import Btn from "@/components/Button/Btn";
import UserLayout from "@/layout/UserLayout";
import Spinner from "@/layout/Loader/Spinner";
// UTILS
import formatDate from "@/utils/dateFormater";
import { dataURLtoFile } from "@/utils/dataURLtoFile";

const Payment = () => {
  const dispatch = useDispatch();
  const { membershipForm } = useSelector(appSelector);
  const {
    isLoading: postIsLoading,
    isSuccess: postIsSuccess,
    data: postData,
  } = useGetPostsQuery();
  const {
    isLoading: committeeIsLoading,
    isSuccess: committeeIsSuccess,
    data: committeeData,
  } = useGetCommitteesQuery();

  const [endDate, setEndDate] = useState(null);
  const [checked, setChecked] = useState(false);
  const [paymentOption, setPaymentOption] = useState("paypal");
  const [picture, setPicture] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = () => {
    setChecked(!checked);
  };

  const handlePaymentOption = (e) => {
    setPaymentOption(e.target.value);
    setPicture(null);
  };

  const onSubmit = (data) => {
    dispatch(
      setPayment({
        ...data,
        "payments[amount]": 5,
        "payments[type]": paymentOption === "bank" ? 2 : 1,
        "payments[options]":
          paymentOption === "bank"
            ? 1
            : paymentOption === "paypal"
            ? 2
            : paymentOption === "esewa"
            ? 3
            : 4,
        ...(paymentOption === "bank" && { voucher: picture }),
      })
    );
  };

  return (
    <UserLayout>
      {postIsLoading ||
      committeeIsLoading ||
      !postIsSuccess ||
      !committeeIsSuccess ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <span className="flex flex-col">
              <label className="text-slate-400">Membership Fee</label>
              <div className="flex items-center space-x-5">
                {/* <div className="flex-none">
              <Controller
                name="year"
                defaultValue={
                  membershipForm?.payment?.year
                    ? membershipForm?.payment?.year
                    : ""
                }
                control={control}
                render={({ field }) => (
                  <>
                    <DatePicker
                      showPopperArrow={false}
                      selected={new Date()}
                      startDate={new Date()}
                      endDate={
                        field.value !== "" ? Date.parse(field.value[1]) : ""
                      }
                      selectsEnd
                      minDate={new Date()}
                      dateFormat="yyyy"
                      selectsRange
                      showYearPicker
                      className="grow p-4 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                      {...field}
                    />
                  </>
                )}
              />
            </div> */}
                <h3 className="flex-initial font-semibold text-slate-400 text-2xl">
                  USD $5
                </h3>
              </div>
            </span>
            <div className="flex flex-col mt-5">
              <label className="text-slate-400">Payment Option</label>

              <ul
                className="w-full flex flex-col md:flex-row md:items-center md:space-x-10"
                onChange={handlePaymentOption}
                id="payment"
              >
                <li className="flex items-center space-x-5">
                  <input
                    type="radio"
                    id="radio-one"
                    name="list-radio"
                    value="bank"
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out"
                  />
                  <label htmlFor="radio-one">
                    <Image
                      width="100"
                      height="100"
                      src={bankTransfer}
                      alt="Bank Transfer"
                      className="w-36 h-10 object-contain"
                    />
                  </label>
                </li>
                <li className="flex items-center space-x-5">
                  <input
                    type="radio"
                    id="radio-two"
                    name="list-radio"
                    value="esewa"
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out"
                  />
                  <label htmlFor="radio-two">
                    <Image
                      width="100"
                      height="100"
                      src={esewa}
                      alt="esewa"
                      className="w-36 h-10 object-contain"
                    />
                  </label>
                </li>
                <li className="flex items-center space-x-5">
                  <input
                    type="radio"
                    id="radio-three"
                    name="list-radio"
                    value="khalti"
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-100 ease-in-out"
                  />
                  <label htmlFor="radio-three">
                    <Image
                      width="100"
                      height="100"
                      src={khalti}
                      alt="khalti"
                      className="w-36 h-10 object-contain"
                    />
                  </label>
                </li>
                <li className="flex items-center space-x-5">
                  <input
                    type="radio"
                    id="radio-four"
                    name="list-radio"
                    value="paypal"
                    defaultChecked={true}
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-100 ease-in-out"
                  />
                  <label htmlFor="radio-four">
                    <Image
                      width="100"
                      height="100"
                      src={paypal}
                      alt="paypal"
                      className="w-36 h-10 object-contain"
                    />
                  </label>
                </li>
              </ul>
            </div>
            <span
              className={`ease-in-out duration-300 transition delay-150 ${
                paymentOption === "bank" ? "opacity-1" : "opacity-0 hidden"
              }`}
            >
              <PaymentVoucher
                setPicture={setPicture}
                picture={picture}
                paymentOption={paymentOption}
              />
            </span>
            <span
              className={`ease-in-out duration-300 transition delay-150 ${
                paymentOption === "paypal" ? "opacity-1" : "opacity-0 hidden"
              }`}
            >
              <Paypal />
            </span>

            <div className="flex flex-col relative">
              <span className="flex items-center space-x-5">
                <input
                  type="checkbox"
                  id="associated"
                  onChange={handleChange}
                  checked={checked}
                  className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                />
                <label htmlFor="associated" className="text-slate-400">
                  Already Associated before 2023
                </label>
              </span>
              <span
                className={`${
                  checked === false && "hidden"
                } my-4 flex flex-col md:flex-row md:space-x-5 md:w-1/2 duration-150 ease-in-out`}
              >
                <Controller
                  name="post"
                  defaultValue={
                    membershipForm?.payment?.post
                      ? membershipForm?.payment?.post
                      : ""
                  }
                  control={control}
                  render={({ field }) => (
                    <select
                      placeholder="Please select the post"
                      className="grow p-4 mb-5 md:mb-0 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0 capitalize"
                      {...field}
                    >
                      <option defaultValue="">Please Select the post</option>
                      {postIsSuccess &&
                        postData.data.map((item, i) => (
                          <option
                            key={i}
                            value={item.id}
                            className="capitalize"
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  )}
                />
                <Controller
                  name="committee"
                  defaultValue={
                    membershipForm?.payment?.committee
                      ? membershipForm?.payment?.committee
                      : ""
                  }
                  control={control}
                  render={({ field }) => (
                    <select
                      placeholder="Please select the post"
                      className="grow p-4 mb-5 md:mb-0 text-sm text-slate-400 border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0 capitalize"
                      {...field}
                    >
                      <option defaultValue="">
                        Please Select your committee
                      </option>
                      {committeeIsSuccess &&
                        committeeData.data.map((item, i) => (
                          <option
                            key={i}
                            value={item.id}
                            className="capitalize"
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  )}
                />
              </span>
            </div>
            <div className="md:flex md:space-x-12 md:justify-start w-full">
              <span className="flex items-center space-x-5">
                <Controller
                  name="info"
                  defaultValue={
                    membershipForm?.payment?.info
                      ? membershipForm?.payment?.info
                      : false
                  }
                  control={control}
                  rules={{
                    required: "Agree to valid information provided",
                  }}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      id="info"
                      checked={field.value}
                      className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                      {...field}
                    />
                  )}
                />
                <label htmlFor="info" className="text-slate-400">
                  All information I provided is true and correct.
                </label>
              </span>
              <span className="flex items-center space-x-5">
                <Controller
                  name="terms"
                  defaultValue={
                    membershipForm?.payment?.terms
                      ? membershipForm?.payment?.terms
                      : false
                  }
                  control={control}
                  rules={{
                    required: "Agree to Terms and Conditions",
                  }}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      id="terms"
                      checked={field.value}
                      className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                      {...field}
                    />
                  )}
                />
                <label htmlFor="terms" className="text-slate-400">
                  I agree all the&nbsp;
                  <Link href="" target="_blank" className="text-sky-600">
                    Terms and Conditions
                  </Link>
                </label>
              </span>
              <span className="flex items-center space-x-5">
                {errors.info && (
                  <p className="text-red-400 font-semibold">
                    {errors.info.message}
                  </p>
                )}
                {errors.terms && (
                  <p className="text-red-400 font-semibold">
                    {errors.terms.message}
                  </p>
                )}
              </span>
            </div>
            <div className="md:col-start-2 flex flex-col md:flex-row justify-end">
              <Btn title={"Next"} className={"bg-sky-600 active:bg-sky-700"} />
            </div>
          </form>
          <Registration />
        </>
      )}
    </UserLayout>
  );
};

const Registration = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const joined_date = new Date();
  const expiry_date = `${joined_date.getFullYear() + 2}-${
    joined_date.getMonth() + 1
  }-${joined_date.getDate()}`;
  const formData = new FormData();
  const { membershipForm } = useSelector(appSelector);
  const [memberRegister, { data, isSuccess, error, isLoading }] =
    useMemberRegisterMutation();
  console.log(membershipForm);

  useEffect(() => {
    if (
      membershipForm?.personalInfo &&
      membershipForm?.profAndInt &&
      membershipForm?.verification &&
      membershipForm?.payment?.terms === true &&
      membershipForm?.payment?.info === true
    ) {
      membershipForm?.personalInfo?.mobile &&
        formData.append(
          "mobile",
          `${membershipForm?.personalInfo?.code}-${membershipForm?.personalInfo?.mobile}`
        );
      membershipForm.verification.image &&
        formData.append(
          "image",
          dataURLtoFile(membershipForm.verification.image, "profile.jpg")
        );
      membershipForm?.payment?.paymentOption === "bank" &&
        membershipForm?.payment?.voucher &&
        formData.append(
          "voucher",
          dataURLtoFile(membershipForm.payment.voucher, "voucher.jpg")
        );
      membershipForm.verification.passport_expiry_date &&
        formData.append(
          "passport_expiry_date",
          formatDate(membershipForm.verification.passport_expiry_date)
        );
      membershipForm.payment.committee &&
        formData.append("committee[id]", membershipForm.payment.committee);
      membershipForm.payment.post &&
        formData.append("post[id]", membershipForm.payment.post);

      formData.append("joined_date", formatDate(joined_date));
      formData.append("expiry_date", expiry_date);

      Object.values(membershipForm).map((value) =>
        Object.entries(value).map((key) => {
          if (
            key[1] === "" ||
            key[1] === null ||
            key[1] === false ||
            key[0] === "passport_expiry_date" ||
            key[0] === "image" ||
            key[0] === "voucher" ||
            key[0] === "post" ||
            key[0] === "committee" ||
            key[0] === "mobile" ||
            key[0] === "code" ||
            key[0] === "info" ||
            key[0] === "terms"
          ) {
            // console.log(key, "not");
          } else {
            // Object.assign(registrationData, { [key[0]]: key[1] });
            formData.append(key[0], key[1]);
          }
        })
      );
      memberRegister(formData);
    }
  }, [membershipForm?.payment?.term, membershipForm?.payment?.info]);

  useEffect(() => {
    if (isSuccess) {
      // console.log(data);
      toast.success(data.message);
      dispatch(clearState());
      router.push("/membership_form/success");
    }
    if (error) {
      toast.error(error.data.message);
    }
  }, [isSuccess, error]);
};

export default Payment;
