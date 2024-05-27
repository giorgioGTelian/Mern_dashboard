import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import valid from 'card-validator';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Page from '../components/Page';

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .test(
      'test-number',
      'Il numero di carta di credito non è valido',
      (value) => valid.number(value).isValid,
    ),
  name: yup
    .string()
    .trim()
    .required('Specifica il tuo nome nella carta'),
  date: yup
    .string()
    .typeError('Formato data non valido: MM/AA')
    .max(5, 'Formato data non valido: MM/AA')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Formato data non valido: MM/AA',
    )
    .required('Data di scadenza richiesta'),
  zip: yup
    .string()
    .trim()
    .min(2, 'Inserisci un CAP valido')
    .max(8, 'Inserisci un CAP valido')
    .required('Inserisci un CAP '),
  cvv: yup
    .string()
    .trim()
    .matches(/^\d+$/, 'Inserisci un CVV valido. Deve contenere solo numeri')
    .min(3, 'Inserisci un CVV valido')
    .max(3, 'Inserisci un CVV valido')
    .required('Inserisci un CVV valido'),
});

const Billing = () => {
  const initialValues = {
    cardNumber: '',
    name: '',
    date: '',
    zip: '',
    cvv: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
      <Page>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Cambia i dati della tua carta
          </Typography>
          <Typography
            variant={'subtitle2'}
            color={'text.secondary'}
            gutterBottom
          >
            Noi non condividiamo i tuoi dati bancari con nessuno.
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Per favore leggi i nostri{' '}
            <Link color={'primary'} href={'/company-terms'} underline={'none'}>
              Termini d'uso
            </Link>{' '}
            Per essere informato di come gestiamo i tuoi dati
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    inserisci il tuo nbomero di carta
                  </Typography>
                  <TextField
                    label="Numero di carta *"
                    variant="outlined"
                    name={'cardNumber'}
                    fullWidth
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cardNumber &&
                      Boolean(formik.errors.cardNumber)
                    }
                    helperText={
                      formik.touched.cardNumber && formik.errors.cardNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Nome sulla carta
                  </Typography>
                  <TextField
                    label="Nome *"
                    variant="outlined"
                    name={'name'}
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Data di scadenza
                  </Typography>
                  <TextField
                    label="Data di scadenza *"
                    variant="outlined"
                    name={'date'}
                    fullWidth
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    CAP (Codice di avviamento postale)
                  </Typography>
                  <TextField
                    label="CAP *"
                    variant="outlined"
                    name={'zip'}
                    fullWidth
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    error={formik.touched.zip && Boolean(formik.errors.zip)}
                    helperText={formik.touched.zip && formik.errors.zip}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    CVV
                  </Typography>
                  <TextField
                    label="CVV *"
                    variant="outlined"
                    name={'cvv'}
                    fullWidth
                    value={formik.values.cvv}
                    onChange={formik.handleChange}
                    error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                    helperText={formik.touched.cvv && formik.errors.cvv}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
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
                          href={'/account-general'}
                          underline={'none'}
                        >
                          Informazioni Private
                        </Link>
                      </Typography>
                    </Box>
                    <Button
                      size={'large'}
                      variant={'contained'}
                      type={'submit'}
                    >
                      Salva
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Page>
  );
};

export default Billing;
