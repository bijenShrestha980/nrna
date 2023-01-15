import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: {
      nrna_token: Cookies.get("nrna_token"),
    },
    membershipForm: {},
  },
  reducers: {
    clearState: (state) => {
      return {
        ...state,
      };
    },
    login: (state, { payload }) => {
      Cookies.set("nrna_token", payload.token.token, { path: "/" });
      state.token.nrna_token = payload.token.token;
    },
    logout: (state) => {
      Cookies.remove("nrna_token");
      state.token.nrna_token = null;
    },
    setPersonalInfo: (state, { payload }) => {
      state.membershipForm.personalInfo = payload;
    },
    setProfAndInt: (state, { payload }) => {
      state.membershipForm.profAndInt = payload;
    },
    setVerification: (state, { payload }) => {
      state.membershipForm.verification = payload;
    },
    setVerification: (state, { payload }) => {
      state.membershipForm.verification = payload;
    },
    setPayment: (state, { payload }) => {
      state.membershipForm.payment = payload;
    },
  },
});

export const {
  clearState,
  login,
  logout,
  setPersonalInfo,
  setProfAndInt,
  setVerification,
  setPayment,
} = appSlice.actions;
export const appSelector = (state) => state.app;
