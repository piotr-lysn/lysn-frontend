import React from 'react';
import { SnackbarProvider as SnackbarProviderNotistack, useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function SnackbarCloseButton({ snackbarKey }: { snackbarKey: string }) {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton color={'inherit'} component={'div'} onClick={() => closeSnackbar(snackbarKey)}>
      <CloseIcon />
    </IconButton>
  );
}


const SnackbarProvider = ({ children }) => {
  return (
    <SnackbarProviderNotistack
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}
    >
      {children}
    </SnackbarProviderNotistack>
  );
};

export {
  SnackbarProvider,
  useSnackbar,
};