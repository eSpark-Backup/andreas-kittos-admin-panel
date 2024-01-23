import React, { useState } from 'react'
import BackBtn from '../../components/buttons/backBtn'
import { Box, Checkbox, Grid, Paper, Typography, Modal, Button, TextField } from '@mui/material'
import { ConfirmationModal, OrderCard, OrderDetailItem, OrderItemCard, PageHeader, Table, ViewModal } from '../../components'
import { suitImg, viewEye } from '../../assets';
import { ODTableData } from '../../constant';
import { columns } from '../../columns/orderDetailsCols';
import StatusModal from '../../components/modals/StatusModal';
import checked from "../../assets/icons/checkedWhite.svg"
import notChecked from "../../assets/icons/notCheckedWhite.svg"


const CheckboxWithLabel = ({ label, isChecked, onChange }) => (
  <Box display="flex" alignItems="center">
    <Checkbox checked={isChecked} onChange={onChange}
      icon={<img src={notChecked} alt='Checked' style={{width:"16px", height:"16px"}} />}
      checkedIcon={<img src={checked} alt='Box' style={{width:"16px", height:"16px"}} />}
    />
    <Typography sx={{ color: '#9E9EA4', fontSize: "12px" }}>{label}</Typography>
  </Box>
);


const OrderDetails = () => {
  const [enabledIndex, setEnabledIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [modalInput, setModalInput] = useState('');
  const [Reason, setReason] = useState('');
  const [openViewModal, setOpenViewModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});

  const [checkboxData, setCheckboxData] = useState(
    [
      { label: 'Scheduled', isChecked: false, value: "12 Dec ,23", changedTo: "Washing", time: "3:00 PM", date: "23 December 2023", reason: "The order was picked up." },
      { label: 'Pickup up', isChecked: false, value: "15 Dec ,23", changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },
      { label: 'Washing', isChecked: false, value: "20 Dec ,23", changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },
      { label: 'Delivered', isChecked: false, value: "21 Dec ,23", changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },
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


  const handleSaveStatus = () => {
    setCheckboxData((prevCheckboxData) => {
      const updatedData = [...prevCheckboxData];
      updatedData[enabledIndex].isChecked = true;
      return updatedData;
    });

    setEnabledIndex((prevIndex) => prevIndex + 1);
    setOpenModal(false);
  };

  const handleCheckboxChange = (index) => {
    if (index === enabledIndex) {
      setOpenModal(true);
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleViewData = (item) => {
    setCurrentItem(item);
    setOpenViewModal(true);
  }


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
                        <Grid alignItems="center" container item xs={6} lg={8}>
                          <CheckboxWithLabel
                            label={item.label}
                            isChecked={item.isChecked}
                            disabled={index !== enabledIndex}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </Grid>
                        <Grid alignItems="center" container item xs={6} lg={4}>
                          <Box display="flex" alignItems="center">
                            {item.isChecked ?
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ marginRight: "10px" }}>
                                  <Typography sx={{ color: "#E0E0E0", fontSize: "12px" }}>{item.value}</Typography>
                                </Box>
                                <Box sx={{ cursor: "pointer" }} onClick={() => handleViewData(item)} >
                                  <img src={viewEye} alt="suit" />
                                </Box>
                              </Box> :
                              "-"}
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

        </Box>
      </Box>

      <StatusModal onConfirm={handleSaveStatus} open={openModal} heading={"Update Status"} label={"Reason: (optional)"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Set"} onClose={handleModalClose} />

      <ViewModal data={currentItem} open={openViewModal} onClose={() => setOpenViewModal(false)} />
    </main >
  )
}

export default OrderDetails