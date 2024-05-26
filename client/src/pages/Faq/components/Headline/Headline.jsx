import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        F.A.Q.s
      </Typography>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        Hai una domanda?
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Guarda le nostre domande frequenti o contattaci direttamente
      </Typography>
    </Box>
  );
};

export default Headline;
