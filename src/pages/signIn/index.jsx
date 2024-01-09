import React from 'react';
import { Box } from '@mui/material';
import { SignInBg, SignInBgSm } from '../../assets'; // Update the path to your image
import { SignInForm } from '../../components';

const SignIn = () => {
  return (
    <Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: {  xs: 'column', sm: 'row'  },
        margin: 'auto',
        width: { xs: '100%', md: '80%'}, 
        height: '100vh',
      }}>
        <Box sx={{
          width:  { xs: '100%', md: '55%'},
          backgroundImage: { xs: `url(${SignInBgSm})`, sm: `url(${SignInBg})`},
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: { xs: '50vh', md: '80vh'},
          display: { xs:"flex", sm: 'none', md: 'flex'}, 
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        </Box>
           

        <Box sx={{
          width: { xs: '100%', lg: '45%'},
          backgroundColor: 'white',
          height: { xs: '80vh', sm:'100vh', md: '80vh'},
        }}>
          <SignInForm/>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
