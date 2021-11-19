import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)(({ theme, font, variant }) => ({
  ...theme.typography[variant],
  fontFamily: font === 'secondary' ? theme.typography.secondaryFontFamily : theme.typography.fontFamily,
}));


const Text = ({
  children,
  variant,
  component,
  font = 'primary',
  fontWeight,
  textAlign,
}: {
  children,
  variant?: string,
  component?: Object,
  font?: 'primary' | 'secondary',
  fontWeight?: 'light' | 'regular'| 'medium' | 'bold',
  textAlign?: string,
}) => {

  return (
    <StyledTypography
      variant={variant}
      component={component}
      font={font}
      sx={{
        fontWeight,
        textAlign,
      }}
    >
      {children}
    </StyledTypography>
  )
}

export default Text;