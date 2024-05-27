import React, { useState, useEffect } from "react";
import { Box, useTheme, Container, Typography, Card, Grid, List, ListItem} from "@mui/material";
import Header from "../../../components/Headers";

const pages = [
  {
    id: 'usersList',
    href: '/Users_list',
    title: 'Lista utenti',
  },
  {
    id: 'addUsers',
    href: '/Add_users',
    title: 'Aggiungi account',
  },
];

const AdministratorOverview = ({ children }) => {
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : '');
  }, []);
  const theme = useTheme();


  return (
    <Box>
      <Header paddingY={4} title="Lista utenti e statistiche" subtitle="Lista utenti del Sistema" />
      <Container paddingTop={'0 !important'} marginTop={-10}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Card sx={{ boxShadow: 3 }}>
              <List
                disablePadding
                sx={{
                  display: { xs: 'inline-flex', md: 'flex' },
                  flexDirection: { xs: 'row', md: 'column' },
                  overflow: 'auto',
                  flexWrap: 'nowrap',
                  width: '100%',
                  paddingY: { xs: 3, md: 4 },
                  paddingX: { xs: 4, md: 0 },
                }}
              >
                {pages.map((item) => (
                  <ListItem
                    key={item.id}
                    component={'a'}
                    href={item.href}
                    disableGutters
                    sx={{
                      marginRight: { xs: 2, md: 0 },
                      flex: 0,
                      paddingX: { xs: 0, md: 3 },
                      borderLeft: {
                        xs: 'none',
                        md: '2px solid transparent',
                      },
                      borderLeftColor: {
                        md:
                          activeLink === item.href
                            ? theme.palette.primary.main
                            : 'transparent',
                      },
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      color={
                        activeLink === item.href
                          ? 'text.primary'
                          : 'text.secondary'
                      }
                    >
                      {item.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ boxShadow: 3, padding: 4 }}>{children}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdministratorOverview;