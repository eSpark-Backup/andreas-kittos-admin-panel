import React, { useEffect, useState } from 'react'
import BackBtn from '../../components/buttons/backBtn'
import { Box, Checkbox, Grid, Paper, Typography, Modal, Button, TextField } from '@mui/material'
import { ConfirmationModal, OrderCard, OrderDetailItem, OrderItemCard, PageHeader, Table, ViewModal } from '../../components'
import { suitImg, viewEye } from '../../assets';
import { ODTableData } from '../../constant';
import { columns } from '../../columns/orderDetailsCols';
import StatusModal from '../../components/modals/StatusModal';
import checked from "../../assets/icons/checkedWhite.svg"
import notChecked from "../../assets/icons/notCheckedWhite.svg"
import { useGetOrderDetailsQuery } from '../../services/orders';
import { useParams } from 'react-router-dom';
import { DateConverter, TimeFetcher } from '../../utility/DateConverter';


const CheckboxWithLabel = ({ label, isChecked, onChange }) => (
  <Box display="flex" alignItems="center">
    <Checkbox checked={isChecked} onChange={onChange}
      icon={<img src={notChecked} alt='Checked' style={{ width: "16px", height: "16px" }} />}
      checkedIcon={<img src={checked} alt='Box' style={{ width: "16px", height: "16px" }} />}
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
  const params = useParams()
  const { data: OdDATA, isLoading } = useGetOrderDetailsQuery(params?.id)

  // useEffect(()=>{
  //   if(OdDATA?.data?.orderStatus?.scheduled && !OdDATA?.data?.orderStatus?.picked){
  //     setEnabledIndex(1)
  //     console.log("Hello1")
  //     console.log(enabledIndex)
  //   }
  //   else if(OdDATA?.data?.orderStatus?.scheduled && OdDATA?.data?.orderStatus?.picked && !OdDATA?.data?.orderStatus?.washing){
  //     setEnabledIndex(2)
  //     console.log("Hello2")
  //     console.log(enabledIndex)
  //   }
  //   else if(OdDATA?.data?.orderStatus?.scheduled && OdDATA?.data?.orderStatus?.picked && OdDATA?.data?.orderStatus?.washing){
  //     console.log("Hello3")
  //     setEnabledIndex(3)
  //   }
  // },[])

  const [checkboxData, setCheckboxData] = useState(
    [
      { label: 'Scheduled', isChecked: OdDATA?.data?.orderStatus?.scheduled?true:false, value: TimeFetcher(Number(OdDATA?.data?.orderStatus?.scheduledDate)), changedTo: "Washing", time: "3:00 PM", date: "23 December 2023", reason: "The order was picked up." },

      { label: 'Pickup up', isChecked: OdDATA?.data?.orderStatus?.picked?true:false, value: TimeFetcher(Number(OdDATA?.data?.orderStatus?.pickedDate)), changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },

      { label: 'Washing', isChecked: OdDATA?.data?.orderStatus?.washing?true:false, value: TimeFetcher(Number(OdDATA?.data?.orderStatus?.washingDate)), changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },

      { label: 'Delivered', isChecked: OdDATA?.data?.orderStatus?.delivered?true:false, value: TimeFetcher(Number(OdDATA?.data?.orderStatus?.deliveredDate)), changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "The order was picked up." },
    ]
  );


  const orderDetailsData = [
    { label: 'Order#', value: OdDATA?.data?.orderNumber },
    { label: 'Purchase date', value: DateConverter(Number(OdDATA?.data?.orderStatus?.scheduledDate))},
    // { label: 'Coupon:', value: '' },
    { label: 'Payment method:', value: OdDATA?.data?.payment?.paymentType },
    { label: 'Shipping method:', value: OdDATA?.data?.shippingType },
    { label: 'Customer name:', value: OdDATA?.data?.user?.firstName + " " + OdDATA?.data?.user?.lastName },
    { label: 'Customer email:', value: OdDATA?.data?.user?.email },
    { label: 'Customer phone:', value: OdDATA?.data?.user?.phoneNumber },
    { label: 'Customer country:', value: OdDATA?.data?.shippingAddress?.country },
    { label: 'Customer city:', value: OdDATA?.data?.shippingAddress?.city },
    { label: 'Customer address:', value: OdDATA?.data?.shippingAddress?.apartment+" "+ OdDATA?.data?.shippingAddress?.block+" "+OdDATA?.data?.shippingAddress?.street+" "+OdDATA?.data?.shippingAddress?.state+" "+OdDATA?.data?.shippingAddress?.country+" "+OdDATA?.data?.shippingAddress?.zipCode},
  ];

  const orderSummaryData = [
    { label: 'Sub total:', value: '€14.00', fontSize: '12px' },
    { label: 'Pickup & delivery:', value: '€14.00', fontSize: '12px' },
    // { label: 'Coupon discount:', value: '10%', fontSize: '12px' },
    { label: 'Total Amount:', value: '€90.00', fontSize: '14px', textDecoration: "underline" },
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
  if (isLoading) {
    return (
      <Box sx={{ width: "80vw", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="loader"></div>
      </Box>
    )
  }
  const tableData = OdDATA?.data?.orderDetail?.map((item) => ({
    id:item?.product?.id,
    order:{name:item?.product?.name, imgName: item?.product?.productImage},
    quantity:item?.quantity,
    category:"",
    price:item?.product?.price
  }));
  // [{
  //   id: OdDATA?.data?.orderDetail[0].product?.id,
  //   order: { name: OdDATA?.data?.orderDetail[0].product?.name, imgName: OdDATA?.data?.orderDetail[0].product?.productImage },
  //   quantity: OdDATA?.data?.orderDetail[0].product?.quantity,
  //   category: "",
  //   price: OdDATA?.data?.orderDetail[0].product?.price
  // }]


  return (
    <main className='main-container'>
      <BackBtn />

      <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "center" }, alignItems: { xs: "", md: "center" }, marginTop: "30px" }}>
        <Box sx={{ width: { xs: "100%", md: "100%", lg: "90%", xl: "70%" }, border: "1px solid #424755", height: "100%", borderRadius: "10px", py: "25px", px: { xs: "4px", lg: "30px" } }}>
          <PageHeader title="Order Details" sx={{ textTransform: "capatilize", paddingLeft: { xs: "10px", lg: "0px" } }} />

          <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            p: "30px 0px",
            gap: "20px",
          }}>
            <Box
              sx={{
                width: { xs: "100%", lg: "70%" },
              }}
            >

              <Grid container rowGap={2} sx={{ padding: { xs: "0px 10px", lg: "0px" } }}>
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
                        <Grid alignItems="center" container item xs={6} lg={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          <Box>
                            {item.isChecked ?
                              <Box sx={{ display: "flex" }}>
                                <Box sx={{ marginRight: "10px" }}>
                                  <Typography sx={{ color: "#FFFFFF", fontSize: "10px" }}>{item.value}</Typography>
                                </Box>
                                <Box sx={{ cursor: "pointer" }} onClick={() => handleViewData(item)} >
                                  <img src={viewEye} alt="suit" />
                                </Box>
                              </Box> :
                              <Typography sx={{ color: "#9E9EA4" }}>-</Typography>}
                          </Box>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Box>
              </OrderCard>



              <OrderCard heading={"Order summary"}>
                <Box>
                  <Box sx={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
                    {orderSummaryData.map((item, index) => (
                      <Box key={index} sx={{ display: "flex", justifyContent: "space-between", width: { xs: "90%", md: "80%" } }}>
                        <>
                          <Typography sx={{ color: '#FFFFFF', fontSize: item.fontSize }}>{item.label}</Typography>
                        </>
                        <>
                          <Typography sx={{ color: '#FFFFFF', fontSize: item.fontSize, textDecoration: item.textDecoration }}>{item.value}</Typography>
                        </>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </OrderCard>
            </Box>


          </Box>

          {/* <Box sx={{border:"1px solid white", borderRadius:"6px"}}> */}
          <Table
            data={tableData &&tableData}
            columns={columns()}
            isLoading={false}
            total={tableData &&tableData.length}
          />
          {/* </Box> */}

        </Box>
      </Box>

      <StatusModal onConfirm={handleSaveStatus} open={openModal} heading={"Update Status"} label1={"Reason: "} label2={"(optional)"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Set"} onClose={handleModalClose} />

      <ViewModal data={currentItem} open={openViewModal} onClose={() => setOpenViewModal(false)} />
    </main >
  )
}

export default OrderDetails