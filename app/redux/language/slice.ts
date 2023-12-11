import { createSlice } from '@reduxjs/toolkit';
import { ChangeLanguage } from './actions';

interface LanguageState {
  lang: string;
}

const initialState: LanguageState = {
  lang: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state) => {
      ChangeLanguage(state.lang);
    }
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
