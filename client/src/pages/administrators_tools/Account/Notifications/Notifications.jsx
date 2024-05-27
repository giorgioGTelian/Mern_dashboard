import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';

import Page from '../components/Page';

const Notifications = () => {
  return (
      <Page>
        <Box>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={'space-between'}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography variant="h6" fontWeight={700}>
              Aggiorna il modo in cui ricevi notifiche
            </Typography>
            <Button
              size={'large'}
              variant={'outlined'}
              sx={{ marginTop: { xs: 2, md: 0 } }}
            >
              Cancella tutto
            </Button>
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Impostazioni di applicazione</Typography>
                <Typography variant="caption">
                  Riceverai mail e messaggi alla tua email che hai inserito
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="E-mail"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Notifiche Push"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Messaggi SMS"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Impostazioni Applicazione</Typography>
                <Typography variant="caption">
                  Riceverai mail e messaggi alla tua email che hai inserito
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={false} color="primary" />
                      }
                      label="E-mail"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Notifiche Push"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      Considera anche di aggiornare le tue{' '}
                      <Link
                        color={'primary'}
                        href={'/account-notifications'}
                        underline={'none'}
                      >
                        Impostazioni di notifica
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Salva
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
  );
};

export default Notifications;
