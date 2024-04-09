import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Email: "",
  Password: "",
  Name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    clearForm: (state) => {
      state.Email = "";
      state.Name = "";
      state.Password = "";
    },
  },
});

export const { setEmail, setName, setPassword, clearForm } = userSlice.actions;

export default userSlice.reducer;
