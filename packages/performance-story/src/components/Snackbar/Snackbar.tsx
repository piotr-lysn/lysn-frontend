import React from 'react';
import { SnackbarProvider as SnackbarProviderNotistack, useSnackbar } from 'notistack';

const SnackbarProvider = ({ children }: { children: Node }) => {
  return (
    <SnackbarProviderNotistack
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      {children}
    </SnackbarProviderNotistack>
  );
};

export {
  SnackbarProvider,
  useSnackbar,
};