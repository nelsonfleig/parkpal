import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react';
import Image from 'next/image';
import { ComplainButton, ComplainPaper } from './complainCardStyles';
import {
  ParkingSpotComplainsDocument,
  useDeleteComplainMutation,
} from '../../graphql/__generated__';

type Complain = {
  __typename?: 'RenterComplainResponse';
  id: number;
  city: string;
  street: string;
  createdAt: string;
  description: string;
  pictureUrl?: string;
};

type Props = {
  complain: Complain;
};

export const ComplainCard = ({ complain }: Props) => {
  const [deleteComplain] = useDeleteComplainMutation({
    refetchQueries: [ParkingSpotComplainsDocument],
    awaitRefetchQueries: true,
  });

  const HandleDelete = (id: number) => {
    deleteComplain({
      variables: {
        input: `${id}`,
      },
    });
  };

  return (
    <ComplainPaper>
      <Box>
        <Typography variant="caption">
          {moment(+complain.createdAt).format('dddd, MMMM Do, h:mm:ss a')}
        </Typography>
        <Typography variant="body2">
          at {complain.city} {complain.street}
        </Typography>
      </Box>
      {complain.pictureUrl ? (
        <Image
          src={complain.pictureUrl}
          alt="Complaint Proof"
          width={400}
          height={240}
          objectFit="contain"
        />
      ) : null}
      <Typography variant="h6" style={{ marginBottom: '3rem' }}>
        {complain.description}
      </Typography>
      <ComplainButton onClick={() => HandleDelete(complain.id)}>Noted</ComplainButton>
    </ComplainPaper>
  );
};
