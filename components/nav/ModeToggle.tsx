import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useTheme } from 'next-themes';
import { UseThemeProps } from 'next-themes/dist/types';
import { FormControlLabel, Switch, Tooltip } from '@mui/material';

export default function ModeToggle() {
  const { theme, setTheme }: UseThemeProps = useTheme();

  function handleToggle(_e: React.ChangeEvent<HTMLInputElement>) {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="flex flex-row items-center">
      <Tooltip title={theme === 'dark' ? 'Dark mode' : 'Light mode'} arrow>
        <FormControlLabel
          control={
            <Switch checked={theme === 'dark'} onChange={handleToggle} />
          }
          label={
            theme === 'dark' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )
          }
        />
      </Tooltip>
    </div>
  );
}
