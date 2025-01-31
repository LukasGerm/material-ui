import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslate } from 'docs/src/modules/utils/i18n';

function layouts(t) {
  return [
    {
      title: t('dashboardTitle'),
      description: t('dashboardDescr'),
      src: '/static/images/templates/dashboard.png',
      href: '/getting-started/templates/dashboard/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/dashboard',
    },
    {
      title: t('signInTitle'),
      description: t('signInDescr'),
      src: '/static/images/templates/sign-in.png',
      href: '/getting-started/templates/sign-in/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/sign-in',
    },
    {
      title: t('signInSideTitle'),
      description: t('signInSideDescr'),
      src: '/static/images/templates/sign-in-side.png',
      href: '/getting-started/templates/sign-in-side/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/sign-in-side',
    },
    {
      title: t('signUpTitle'),
      description: t('signUpDescr'),
      src: '/static/images/templates/sign-up.png',
      href: '/getting-started/templates/sign-up/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/sign-up',
    },
    {
      title: t('blogTitle'),
      description: t('blogDescr'),
      src: '/static/images/templates/blog.png',
      href: '/getting-started/templates/blog/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/blog',
    },
    {
      title: t('checkoutTitle'),
      description: t('checkoutDescr'),
      src: '/static/images/templates/checkout.png',
      href: '/getting-started/templates/checkout/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/checkout',
    },
    {
      title: t('albumTitle'),
      description: t('albumDescr'),
      src: '/static/images/templates/album.png',
      href: '/getting-started/templates/album/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/album',
    },
    {
      title: t('pricingTitle'),
      description: t('pricingDescr'),
      src: '/static/images/templates/pricing.png',
      href: '/getting-started/templates/pricing/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/pricing',
    },
    {
      title: t('stickyFooterTitle'),
      description: t('stickyFooterDescr'),
      src: '/static/images/templates/sticky-footer.png',
      href: '/getting-started/templates/sticky-footer/',
      source:
        // #default-branch-switch
        'https://github.com/mui/material-ui/tree/master/docs/data/material/getting-started/templates/sticky-footer',
    },
  ];
}

function Templates() {
  const t = useTranslate();

  return (
    <Grid container spacing={2}>
      {layouts(t).map((layout) => (
        <Grid item sm={6} md={4} sx={{ flexGrow: 1 }} key={layout.title}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <CardMedia
              component="a"
              href={layout.href}
              sx={{ height: 0, pt: '65%' }}
              image={layout.src}
              title={layout.title}
              rel="nofollow"
              target="_blank"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" align="left" component="h2">
                {layout.title}
              </Typography>
              <Typography component="p">{layout.description}</Typography>
            </CardContent>
            <CardActions>
              <Button component="a" href={layout.source} size="small">
                {t('sourceCode')}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Templates;
