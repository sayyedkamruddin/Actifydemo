import { createSlice } from "@reduxjs/toolkit";
import accountsData from "../../components/data";

const initialState = {
  value: accountsData,
};
const AccountData = createSlice({
  name: "AccountData",
  initialState,
  reducers: {},
});
export default AccountData.reducer;
