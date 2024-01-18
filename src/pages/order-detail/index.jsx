import React, { useState } from 'react'
import BackBtn from '../../components/buttons/backBtn'
import { Box, Checkbox, Grid, Paper, Typography } from '@mui/material'
import { OrderCard, OrderDetailItem, OrderItemCard, PageHeader } from '../../components'
import { suitImg } from '../../assets';


const CheckboxWithLabel = ({ label, isChecked, onChange }) => (
  <Box display="flex" alignItems="center">
    <Checkbox checked={isChecked} onChange={onChange} />
    <Typography sx={{ color: '#9E9EA4' }}>{label}</Typography>
  </Box>
);


const OrderDetails = () => {
  const [checkboxData, setCheckboxData] = useState(
    [
      { label: 'Scheduled', isChecked: false },
      { label: 'Pickup up', isChecked: false },
      { label: 'Washing', isChecked: false },
      { label: 'Delivered', isChecked: false },
    ]
  );


  const orderDetailsData = [
    { label: 'Order#', value: '123456' },
    { label: 'Purchase date', value: 'September 23, 2023' },
    { label: 'Coupon:', value: 'Java' },
    { label: 'Payment method:', value: 'Cash or Card on delivery' },
    { label: 'Shipping method:', value: 'Pickup & delivery' },
    { label: 'Customer name:', value: 'Carlo James' },
    { label: 'Customer email:', value: 'carlo.james@123.com' },
    { label: 'Customer phone:', value: '123456789' },
    { label: 'Customer country:', value: 'CY' },
    { label: 'Customer city:', value: 'Limmasol' },
    { label: 'Customer address:', value: 'Zephyr Residences Georgious A' },
  ];

  const orderSummaryData = [
    { label: 'Sub total:', value: '€14.00', fontSize: '12px' },
    { label: 'Pickup & delivery:', value: '€14.00', fontSize: '12px' },
    { label: 'Coupon discount:', value: '€14.00', fontSize: '12px' },
    { label: 'Total Amount:', value: '€90.00' },
  ];



  const handleCheckboxChange = (index) => {
    setCheckboxData((prevCheckboxData) => {
      const updatedData = [...prevCheckboxData];
      updatedData[index].isChecked = !updatedData[index].isChecked;
      return updatedData;
    });
  };

  return (
    <main className='main-container'>
      <BackBtn />

      <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { xs: "", md: "center" }, marginTop: "20px" }}>
        <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "20px", lg: "30px" } }}>
          <PageHeader title="Order Details" />

          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            p: "20px 0px",
            gap: "20px",
          }}>
            <Box
              sx={{
                width: { xs: "100%", lg: "70%" },
              }}
            >

              <Grid container rowGap={2}>
                {orderDetailsData.map(({ label, value }, index) => (
                  <OrderDetailItem key={index} label={label} value={value} />
                ))}
              </Grid>

            </Box>
            <Box
              rowGap={2}
              sx={{
                width: { xs: "100%", lg: "30%" },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <OrderCard heading={"Status"}>
                <Box>
                  <Grid container rowGap={0.5}>
                    {checkboxData.map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid alignItems="center" container item xs={6} lg={9}>
                          <CheckboxWithLabel
                            label={item.label}
                            isChecked={item.isChecked}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </Grid>
                        <Grid alignItems="center" container item xs={6} lg={3}>
                          <Box display="flex" alignItems="center">
                            <Typography sx={{ color: "#E0E0E0" }}>-</Typography>
                          </Box>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Box>
              </OrderCard>



              <OrderCard heading={"Order summary"}>
                <Box>
                  <Grid container rowGap={2}>
                    {orderSummaryData.map((item, index) => (
                      <React.Fragment key={index}>
                        <Grid item xs={6} md={8}>
                          <Typography sx={{ color: '#FFFFFF', fontSize: item.fontSize }}>{item.label}</Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <Typography sx={{ color: '#FFFFFF', fontSize: item.fontSize }}>{item.value}</Typography>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Box>
              </OrderCard>
            </Box>


          </Box>

          <Box  
          
          >
            <OrderItemCard>



              <Box >
                <Grid container p={"0px 30px"} rowGap={2}>
                  <Grid item xs={4} lg={4}>
                    <Box sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <Box>
                        <Paper
                          sx={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            backgroundColor: "#263043",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {/* Your image goes here */}
                          <img src={suitImg} alt="Suit Iron" style={{ width: "80%", height: "80%", borderRadius: "50%" }} />
                        </Paper>
                      </Box>
                      <Typography sx={{ color: '#FFFFFF' }}>{"2 Piece Suit - Iron"}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} lg={3}>
                    <Typography sx={{ color: '#FFFFFF' }}>{"2"}</Typography>
                  </Grid>
                  <Grid item xs={3} lg={3}>
                    <Typography sx={{ color: '#FFFFFF' }}>{"Laundry"}</Typography>
                  </Grid>
                  <Grid item xs={2} lg={2}>
                    <Typography sx={{ color: '#FFFFFF' }}>{"€7.00"}</Typography>
                  </Grid>
                </Grid>
              </Box>
            </OrderItemCard>
          </Box>
        </Box>
      </Box>
    </main >
  )
}

export default OrderDetails