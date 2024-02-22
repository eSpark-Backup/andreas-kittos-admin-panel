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
        width: { xs: '100%',sm:"90%", md: '80%'}, 
        height: '100vh',
        padding:{xs:"0px", sm:"20px", md:"0px"},
        justifyContent:"center"
      }}>
        <Box sx={{
          width:  { xs: '100%',sm:"47%", md: '55%'},
          backgroundImage: { xs: `url(${SignInBgSm})`, sm: `url(${SignInBg})`},
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',          
          minHeight: { xs: '50vh',sm:'70vh', md: '80vh'},
          display: { xs:"flex", sm: 'flex', md: 'flex'}, 
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop:{xs:"180px", sm:"0px"}
        }}>
        </Box>
           

        <Box sx={{
          width: { xs: '100%',sm:"47%", lg: '45%'},
          backgroundColor: 'white',
          minHeight: { xs: '75vh',sm:'70vh', md: '80vh'},
        }}>
          <SignInForm/>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
