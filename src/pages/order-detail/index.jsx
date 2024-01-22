import React, { useState } from 'react'
import BackBtn from '../../components/buttons/backBtn'
import { Box, Checkbox, Grid, Paper, Typography, Modal,Button,TextField  } from '@mui/material'
import { ConfirmationModal, OrderCard, OrderDetailItem, OrderItemCard, PageHeader, Table, ViewModal } from '../../components'
import { suitImg } from '../../assets';
import { ODTableData } from '../../constant';
import { columns } from '../../columns/orderDetailsCols';
import StatusModal from '../../components/modals/StatusModal';


const CheckboxWithLabel = ({ label, isChecked, onChange }) => (
  <Box display="flex" alignItems="center">
    <Checkbox checked={isChecked} onChange={onChange} />
    <Typography sx={{ color: '#9E9EA4', fontSize: "12px" }}>{label}</Typography>
  </Box>
);


const OrderDetails = () => {
  const [enabledIndex, setEnabledIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalInput, setModalInput] = useState('');

  const [checkboxData, setCheckboxData] = useState(
    [
      { label: 'Scheduled', isChecked: false, value:"23/2023" },
      { label: 'Pickup up', isChecked: false, value:"23/2023" },
      { label: 'Washing', isChecked: false, value:"23/2023" },
      { label: 'Delivered', isChecked: false, value:"23/2023"  },
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
    if (index === enabledIndex) {
      setOpenModal(true);
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);

    // Update isChecked property for the checked checkbox
    setCheckboxData((prevCheckboxData) => {
      const updatedData = [...prevCheckboxData];
      updatedData[enabledIndex].isChecked = true;
      return updatedData;
    });

    // Enable the next checkbox
    setEnabledIndex((prevIndex) => prevIndex + 1);
  };
  return (
    <main className='main-container'>
      <BackBtn />

      <Box sx={{ display: "flex", justifyContent: { xs: "", md: "center" }, alignItems: { xs: "", md: "center" }, marginTop: "20px" }}>
        <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "20px", px: { xs: "4px", lg: "30px" } }}>
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
                            disabled={index !== enabledIndex}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </Grid>
                        <Grid alignItems="center" container item xs={6} lg={3}>
                          <Box display="flex" alignItems="center">
                            <Typography sx={{ color: "#E0E0E0" }}>{item.isChecked ? item.value : "-"}</Typography>
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

          {/* <Box sx={{border:"1px solid white", borderRadius:"6px"}}> */}
          <Table
            data={ODTableData}
            columns={columns()}
            isLoading={false}
            total={ODTableData.length}
          />
          {/* </Box> */}
          <StatusModal open={openModal} heading={"Update Status"} label={"Reason: (optional)"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Set"} onClose={handleModalClose}/>

          {/* <Modal open={openModal} onClose={handleModalClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: '#1D2634',
                // boxShadow: 24,
                p: 4,
              }}
            >
              <TextField
                label="Modal Input"
                value={modalInput}
                onChange={(e) => setModalInput(e.target.value)}
              />
              <Button onClick={handleModalClose}>OK</Button>
            </Box>
          </Modal> */}

        </Box>
      </Box>
      <ViewModal/>
    </main >
  )
}

export default OrderDetails