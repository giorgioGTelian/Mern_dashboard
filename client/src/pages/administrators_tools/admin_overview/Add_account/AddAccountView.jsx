import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AdministratorOverview from '../administratorOverview';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(2, 'Inserisci un nome valido')
    .max(50, 'Inserisci un nome valido')
    .required('Per favore specifica un nome valido'),
  email: yup
    .string()
    .trim()
    .email('Inserisci un indirizzo email valido')
    .required('La tua email è richiesta'),
  bio: yup
    .string()
    .trim()
    .max(500, 'meno di 500 caratteri'),
  country: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name'),
  city: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name'),
  address: yup
    .string()
    .min(2, 'Please enter a valid address')
    .max(200, 'Please enter a valid address'),
});

const AddAccountView = () => {
  const initialValues = {
    fullName: '',
    bio: '',
    email: '',
    country: '',
    city: '',
    address: '',
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
      <AdministratorOverview>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Aggiungi un nuovo account
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Per favore leggi{' '}
            <Link color={'primary'} href={'/company-terms'} underline={'none'}>
              i termini di utilizzo
            </Link>{' '}
            Per essere informato su come gestiamo i tuoi dati.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Nome utente
                </Typography>
                <TextField
                  label="Nome e cognome *"
                  variant="outlined"
                  name={'fullName'}
                  fullWidth
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Email
                </Typography>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Note
                </Typography>
                <TextField
                  label="Note e informazioni personali"
                  variant="outlined"
                  name={'bio'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Nazionalità
                </Typography>
                <TextField
                  label="Nazionalità "
                  variant="outlined"
                  name={'country'}
                  fullWidth
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Città
                </Typography>
                <TextField
                  label="Città "
                  variant="outlined"
                  name={'city'}
                  fullWidth
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Inserisci l'indirizzo
                </Typography>
                <TextField
                  label="Indirizzo "
                  variant="outlined"
                  name={'address'}
                  fullWidth
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
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
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Aggiungi Account
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </AdministratorOverview>
  );
};

export default AddAccountView;
