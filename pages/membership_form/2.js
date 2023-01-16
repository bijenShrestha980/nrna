import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
// ASSETS
import professions from "../../assets/data/professions.json";
// COMPONENTS
import Btn from "@/components/Button/Btn";
// REDUCERS
import { appSelector, setProfAndInt } from "../../features/slice/appSlice";
import UserLayout from "@/layout/UserLayout";

const Profession = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { membershipForm } = useSelector(appSelector);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setProfAndInt(data));
    router.push("/membership_form/3");
  };

  return (
    <UserLayout>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <span className="flex flex-col">
            <label htmlFor="profession" className="text-slate-400">
              Profession
            </label>
            <Controller
              name="profession"
              defaultValue={
                membershipForm?.profAndInt?.profession
                  ? membershipForm?.profAndInt?.profession
                  : ""
              }
              control={control}
              render={({ field }) => (
                <select
                  id="profession"
                  placeholder="Select ypur profession"
                  className="my-4 p-4 text-sm text-slate-400 capitalize border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                >
                  <option defaultValue="">None</option>
                  {professions.map((item, i) => {
                    return (
                      <option value={item} key={i}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              )}
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="interest" className="text-slate-400">
              Interest
            </label>
            <Controller
              name="interest"
              defaultValue={
                membershipForm?.profAndInt?.interest
                  ? membershipForm?.profAndInt?.interest
                  : ""
              }
              control={control}
              render={({ field }) => (
                <select
                  id="interest"
                  placeholder="Select your interest"
                  className="my-4 p-4 text-sm text-slate-400 capitalize  border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                >
                  <option defaultValue="">None</option>
                  <option value="1">One</option>
                </select>
              )}
            />
          </span>
          <span className="flex flex-col">
            <label htmlFor="qualification" className="text-slate-400">
              Qualification
            </label>
            <Controller
              name="qualification"
              defaultValue={
                membershipForm?.profAndInt?.qualification
                  ? membershipForm?.profAndInt?.qualification
                  : ""
              }
              control={control}
              render={({ field }) => (
                <select
                  id="qualification"
                  placeholder="Select your qualification"
                  className="my-4 p-4 text-sm text-slate-400 capitalize  border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                  {...field}
                >
                  <option defaultValue="">None</option>
                  <option value="1">One</option>
                </select>
              )}
            />
          </span>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-around">
            <span className="flex flex-col">
              <label htmlFor="project_notification" className="text-slate-400">
                Project Notification
              </label>
              <Controller
                name="project_notification"
                defaultValue={
                  membershipForm?.profAndInt?.project_notification
                    ? membershipForm?.profAndInt?.project_notification
                    : false
                }
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    id="project_notification"
                    checked={field.value}
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  />
                )}
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="news_letter" className="text-slate-400">
                Newsletter
              </label>
              <Controller
                name="news_letter"
                defaultValue={
                  membershipForm?.profAndInt?.news_letter
                    ? membershipForm?.profAndInt?.news_letter
                    : false
                }
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    id="news_letter"
                    checked={field.value}
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  />
                )}
              />
            </span>
            <span className="flex flex-col">
              <label htmlFor="vounteer" className="text-slate-400">
                Volunteer
              </label>
              <Controller
                name="volunteer"
                defaultValue={
                  membershipForm?.profAndInt?.vounteer
                    ? membershipForm?.profAndInt?.vounteer
                    : false
                }
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    id="volunteer"
                    checked={field.value}
                    className="my-7 p-4 h-9 w-9 text-sm border-solid border-2 border-slate-400 duration-500 ease-in-out focus:border-slate-600 focus-visible:outline-0"
                    {...field}
                  />
                )}
              />
            </span>
          </div>
        </div>
        <div className="md:col-start-2 flex flex-col md:flex-row justify-end mt-3 md:space-x-2 space-y-2 md:space-y-0">
          <div
            onClick={() => router.push("/membership_form/3")}
            className="flex flex-col md:flex-row justify-end"
          >
            <Btn title={"Skip"} className={"bg-sky-600 active:bg-sky-700"} />
          </div>
          <div className="flex flex-col md:flex-row justify-end">
            <Btn title={"Next"} className={"bg-sky-600 active:bg-sky-700"} />
          </div>
        </div>
      </form>
    </UserLayout>
  );
};

export default Profession;
