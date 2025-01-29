import { configureStore } from "@reduxjs/toolkit";
import AccountData from "../slice/AccountData";

const store = configureStore({
    reducer: {
        AccountData: AccountData
    }
});

export default store;