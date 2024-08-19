import { Box, Button, FormControl, Grid, Input, InputLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { LoginInputs } from '../../constant'
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useFormik } from 'formik';
import { signinSchema } from '../../schema';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../buttons/customButton';
import { useLoginMutation } from '../../services/auth';
import { toast } from 'react-toastify';

const SignInForm = () => {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()
  const [login,{data, isLoading, isError, isSuccess}] = useLoginMutation();

  const initialValues = {
    userCred: "",
    password: ""
  }

  useEffect(() => {
    if(isSuccess) {
      if(data?.data?.userObject) {
        toast.success("Login has been Successful");
        localStorage.setItem('token', data?.data?.userObject?.token)
        navigate("/dashboard")
      }
      else {
        toast.error("Email or password is Incorrect");
      }
    }
    if(isError) {
      toast.error("Internal Server Error, Please try again later");
    }
  }, [isSuccess, isError])
  
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      login(values)
    }
  })
  return (
    <Box
      sx={{
        padding: { xs: "2rem 1.5rem", md: "2rem 3.5rem" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
        <Box>
          <Typography sx={{ color: "#1D2634", fontSize: "30px", fontWeight: "600" }}>Sign In</Typography>
          <Box sx={{ height: "4px", width: "65px", backgroundColor: "#1D2634", borderRadius: "5px" }}></Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#333333", fontSize: { xs: "14px", sm: "16px" }, fontWeight: "500" }}>Please enter credentials to login!</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container gap={2}>
            <Grid item xs={12}>
              <Stack direction={"column"} gap={1} className='signin-input'>
                <InputLabel sx={{ color: "#424755", fontSize: { xs: "12px", sm: "14px" }, fontWeight: "500" }}>Email</InputLabel>
                <TextField
                  name='userCred'
                  id="filled-hidden-label-normal"
                  placeholder="Enter email"
                  fullWidth
                  type='userCred'
                  value={values.userCred}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.userCred && errors.userCred ? true : false}
                  helperText={touched.userCred && errors.userCred ? errors.userCred : null}
                  InputProps={{
                    style: { color: 'black' } // Change the color to your desired color
                  }}
                  
                />
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack direction={"column"} gap={1}>
                <InputLabel sx={{ color: "#424755", fontSize: "14px", fontWeight: "500" }}>Password</InputLabel>
                <TextField
                  name='password'
                  id="filled-hidden-label-normal"
                  placeholder="Enter password"
                  fullWidth
                  InputProps={{
                    style: { color: 'black' },
                    endAdornment: !showPass ? <VisibilityOffOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} /> : <VisibilityOutlinedIcon sx={{ cursor: "pointer", color: "#9E9EA4" }} onClick={() => setShowPass(!showPass)} />
                  }}
                  type={showPass ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password ? true : false}
                  helperText={touched.password && errors.password ? errors.password : null}
                />
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: "70px" }}>
            {/* <Button type='submit' sx={{ width: "100%", height: "40px", fontWeight: "500", fontSize: "18px", backgroundColor: "#263043", borderRadius: "5px", color: "white", ":hover": { backgroundColor: "#263043" } }}>
              Sign in</Button> */}
            <CustomButton isLoading={isLoading}  type={"submit"} sx={{ width: "100%", fontWeight: "500", fontSize: "18px", borderRadius: "5px", color: "white", 
           }}>Sign in</CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default SignInForm