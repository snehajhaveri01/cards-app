'use client'

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/themeSlice';

const lightTheme = {
  backgroundColor: '#E1EAFB',
  textColor: '#202630',
};

const darkTheme = {
  backgroundColor: '#131C2E',
  textColor: '#FFFFFF',
};

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme) as unknown as string;

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <button
      className="rounded-md bg-amber-800 px-5 py-2.5 text-sm font-medium text-white shadow"
      style={{ backgroundColor: themeStyles.backgroundColor, color: themeStyles.textColor }}
      onClick={handleToggle}
    >
      Theme
    </button>
  );
};

export default ThemeToggle;



