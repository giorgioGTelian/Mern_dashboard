import React from 'react';
import Box from '@mui/material/Box';

import Container from 'components/Container';
import { Content, Headline } from './components';
import Footer from '../layout/Fluid/components/Footer/Footer';

const Faq = () => {
  return (
      <Box>
        <Box
          sx={{
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content />
        </Container>
        <Box >
          <Container>
            <Footer />
          </Container>
        </Box>
      </Box>
  );
};

export default Faq;
