import React from 'react';
import MuiButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Button = ({
  onClick,
  children,
  isLoading,
  type,
  color,
  size,
  fullWidth,
}: {
  onClick: (ev: React.ClickEvent<HTMLInputElement>) => void,
  children: Node,
  isLoading: boolean,
  type: string,
  color: string,
  size: string,
  fullWidth: boolean,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      type={type}
      color={color}
      size={size}
      fullWidth={fullWidth}
      variant={'contained'}
      disabled={isLoading}
    >
      {isLoading
        ? <CircularProgress color={'inherit'} />
        : children
      }
    </MuiButton>
  )
}

export default Button;