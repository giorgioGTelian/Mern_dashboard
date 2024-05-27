import { Typography, Box, Container } from "@mui/material";


const Header = ({ title, subtitle }) => {

    return (
        <Box bgcolor={'primary.main'} paddingY={8} paddingX={8}>
        <Container>
            <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: 'common.white' }}
        >
            {title}
        </Typography>
        <Typography variant="h6" sx={{ color: 'common.white' }}>
        {subtitle}
        </Typography>
        </Container>
        </Box>
    );
};

export default Header;