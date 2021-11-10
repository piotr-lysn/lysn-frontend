import React from 'react';
import { styled } from '@mui/system';
import Text from '../Text';

const StyledUl = styled('ul')(({ theme }) => ({
  '& li::marker': {
    color: theme.palette.primary.main,
  },
}));

const UnorderedList = ({ items }: { items: string[] }) => {
  return (
    <StyledUl>
      {items.map(item => (
        <li key={item}>
          <Text variant={'body2'}>
            {item}
          </Text>
        </li>
      ))}
    </StyledUl>
  )
};



export default UnorderedList;