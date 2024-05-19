import { Box, Button, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, Divider } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useGetUserQuery } from 'state/api';
import { useSelector } from 'react-redux';

const Profile = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const userId = useSelector((state) => state?.global.userId);
    const { data } = useGetUserQuery(userId); 
    const user = data || {};

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
        <h2><strong>Modifica profilo</strong></h2>

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
        >
            {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            }) => (
            <form onSubmit={handleSubmit}>
                <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
                >
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">ID e ruolo</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">{user._id}</InputAdornment>}
                    label="Amount"
                />
                <br/>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">{user.role}</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                <h4><strong>Nome e cognome</strong></h4>
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={user.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    startAdornment={<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>}
                />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                <h4><strong>Email</strong></h4>
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={user.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                <h4><strong>Numero di telefono</strong></h4>
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={user.phoneNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contact}
                    name="contact"
                    error={!!touched.contact && !!errors.contact}
                    helperText={touched.contact && errors.contact}
                    sx={{ gridColumn: "span 4" }}
                />
                </FormControl>
                <Divider> <h4><strong>Altre informazioni</strong></h4> </Divider>
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={"Indirizzo: " +user.city + " " + user.country}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address1}
                    name="address1"
                    error={!!touched.address1 && !!errors.address1}
                    helperText={touched.address1 && errors.address1}
                    sx={{ gridColumn: "span 4" }}
                />
                <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label={"Note: " + user.occupation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address2}
                    name="address2"
                    error={!!touched.address2 && !!errors.address2}
                    helperText={touched.address2 && errors.address2}
                    sx={{ gridColumn: "span 4" }}
                />
                
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                    Modifica utente
                </Button>
                </Box>
            </form>
            )}
        </Formik>
        </Box>
    );
};

const phoneRegExp =
/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("Richiesto Nome"),
    lastName: yup.string(),
    email: yup.string().email("email invalida").required("Richiesto Email"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Numero di telefono non valido"),
    address1: yup.string(),
    address2: yup.string(),
    });
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

export default Profile;
