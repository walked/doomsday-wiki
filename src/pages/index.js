import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Articles from '../components/Articles';
import Welcome from '../components/Welcome';

export default function PageHome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);
  const [ t ] = useTranslation('index');
  return (
    <>
      <Grid container spacing={isMobile ? 2 : 3}>
        <Grid item lg={6} xs={12}>
          <Typography color="textSecondary" component={Box} mb={1} ml={1} variant="subtitle1">
            {t('welcome')}
          </Typography>
          <Box><Welcome /></Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography color="textSecondary" component={Box} mb={1} ml={1} variant="subtitle1">
            {t('articles')}
          </Typography>
          <Box><Articles top /></Box>
        </Grid>
      </Grid>
    </>
  );
}
