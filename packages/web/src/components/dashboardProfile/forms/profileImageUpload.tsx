import { Button } from '@mui/material';
import React, { ChangeEventHandler } from 'react';
import { MeDocument, useUpdateProfilePictureMutation } from '../../../graphql/__generated__';
import { StyledProfilePic } from '../styles';

type Props = {
  pictureUrl: string;
};

export const ProfileImageUpload = ({ pictureUrl }: Props) => {
  const [updateProfilePic] = useUpdateProfilePictureMutation({
    refetchQueries: [{ query: MeDocument }],
    awaitRefetchQueries: true,
  });

  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (e.target.files.length) {
      await updateProfilePic({ variables: { image: e.currentTarget.files[0] } });
    }
  };

  return (
    <div>
      <StyledProfilePic alt="Profile Picture" src={pictureUrl || '/testProfilePic.jpg'} />
      <Button component="label" color="secondary" variant="contained" size="medium" fullWidth>
        <input type="file" hidden onChange={handleImageUpload} />
        Change Picture
      </Button>
    </div>
  );
};
