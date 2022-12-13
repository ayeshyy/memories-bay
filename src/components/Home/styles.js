import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: 'column-reverse'
        },
        heading: {
          fontSize: '1.75rem',
          fontWeight: '500',
        }
      }
}));