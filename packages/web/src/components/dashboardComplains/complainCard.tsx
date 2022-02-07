import { Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { ComplainPaper } from './complainCardStyles';

type Complain = {
  __typename?: 'RenterComplainResponse';
  city: string;
  street: string;
  createdAt: string;
  description: string;
  pictureUrl?: string;
};

type Props = {
  complain: Complain;
};

export const ComplainCard = ({ complain }: Props) => (
  <ComplainPaper>
    <Typography variant="subtitle2">
      {moment(+complain.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')} at {complain.city}{' '}
      {complain.street}
    </Typography>

    <Typography variant="h6">{complain.description}</Typography>
  </ComplainPaper>
);
