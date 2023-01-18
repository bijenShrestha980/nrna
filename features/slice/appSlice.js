import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: {
      nrna_token: Cookies.get("nrna_token"),
      committee_id: Cookies.get("committee_id"),
    },
    membershipForm: {},
  },
  reducers: {
    clearState: (state) => {
      return {
        ...state,
      };
    },
    clearMembershipForm: (state) => {
      state.membershipForm = {};
    },
    login: (state, { payload }) => {
      Cookies.set("nrna_token", payload.token, { path: "/" });
      Cookies.set("committee_id", payload.committee_id, { path: "/" });
      state.token.nrna_token = payload.token;
      state.token.committee_id = payload.committee_id;
    },
    logout: (state) => {
      Cookies.remove("nrna_token");
      Cookies.remove("committee_id");
      state.token.nrna_token = null;
      state.token.committee_id = null;
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
  clearMembershipForm,
  login,
  logout,
  setPersonalInfo,
  setProfAndInt,
  setVerification,
  setPayment,
} = appSlice.actions;
export const appSelector = (state) => state.app;
