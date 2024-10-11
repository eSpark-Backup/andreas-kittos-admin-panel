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
import { useGetOrderDetailsQuery, useUpdateOrderStatusMutation } from '../../services/orders';
import { useParams } from 'react-router-dom';
import { DateConverter, DateMonthYear, TimeFetcher } from '../../utility/DateConverter';
import { toast } from 'react-toastify';
import { getLastKeyValue } from '../../utility/KeyValue';


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
  const [updateOrderStatus, { isLoading: isOrderStatusLoading, isSuccess, isError, error }] = useUpdateOrderStatusMutation()
  const [sr, setSR] = useState("")


  const [checkboxData, setCheckboxData] = useState([
    { label: 'Scheduled', isChecked: false, value: "", changedTo: "Scheduled", time: "3:00 PM", date: "23 December 2023", reason: "" },
    { label: 'Pickup up', isChecked: false, value: "", changedTo: "Pickup up", time: "3:00 PM,", date: "23 December 2023", reason: "" },
    { label: 'Washing', isChecked: false, value: "", changedTo: "Washing", time: "3:00 PM,", date: "23 December 2023", reason: "" },
    { label: 'Delivered', isChecked: false, value: "", changedTo: "Delivered", time: "3:00 PM,", date: "23 December 2023", reason: "" },
  ]);

  useEffect(() => {
    if (OdDATA?.data?.orderStatus) {
      setCheckboxData(prevCheckboxData => [
        {
          ...prevCheckboxData[0],
          isChecked: OdDATA?.data?.orderStatus?.scheduled || false,
          value: OdDATA?.data?.orderStatus?.scheduledDate ? TimeFetcher(OdDATA?.data?.orderStatus?.scheduledDate) : "",
          reason: OdDATA?.data?.orderStatus?.scheduledReason || "",
          time: OdDATA?.data?.orderStatus?.scheduledDate ? TimeFetcher(OdDATA?.data?.orderStatus?.scheduledDate) : "",
          date:OdDATA?.data?.orderStatus?.scheduledDate ? DateMonthYear(OdDATA?.data?.orderStatus?.scheduledDate) :""
        },
        {
          ...prevCheckboxData[1],
          isChecked: OdDATA?.data?.orderStatus?.picked || false,
          value: OdDATA?.data?.orderStatus?.pickedDate ? TimeFetcher(OdDATA?.data?.orderStatus?.pickedDate) : "",
          reason: OdDATA?.data?.orderStatus?.pickedReason || "",
          time: OdDATA?.data?.orderStatus?.pickedDate ? TimeFetcher(OdDATA?.data?.orderStatus?.pickedDate) : "",
          date:OdDATA?.data?.orderStatus?.pickedDate ? DateMonthYear(OdDATA?.data?.orderStatus?.pickedDate) :""
        },
        {
          ...prevCheckboxData[2],
          isChecked: OdDATA?.data?.orderStatus?.washing || false,
          value: OdDATA?.data?.orderStatus?.washingDate ? TimeFetcher(OdDATA?.data?.orderStatus?.washingDate) : "",
          reason: OdDATA?.data?.orderStatus?.washingReason || "",
          time:OdDATA?.data?.orderStatus?.washingDate ? TimeFetcher(OdDATA?.data?.orderStatus?.washingDate) : "",
          date:OdDATA?.data?.orderStatus?.washingDate ? DateMonthYear(OdDATA?.data?.orderStatus?.washingDate) :""
        },
        {
          ...prevCheckboxData[3],
          isChecked: OdDATA?.data?.orderStatus?.delivered || false,
          value: OdDATA?.data?.orderStatus?.deliveredDate ? TimeFetcher(OdDATA?.data?.orderStatus?.deliveredDate) : "",
          reason: OdDATA?.data?.orderStatus?.deliveredReason || "",
          time:OdDATA?.data?.orderStatus?.deliveredDate ? TimeFetcher(OdDATA?.data?.orderStatus?.deliveredDate) : "",
          date:OdDATA?.data?.orderStatus?.deliveredDate ? DateMonthYear(OdDATA?.data?.orderStatus?.deliveredDate) :""
        },
      ]);
    }
  }, [OdDATA]);
  
  

  useEffect(() => {
    if (OdDATA?.data?.orderStatus?.scheduled && !OdDATA?.data?.orderStatus?.picked) {
      setEnabledIndex(1)
    }
    else if (OdDATA?.data?.orderStatus?.scheduled && OdDATA?.data?.orderStatus?.picked && !OdDATA?.data?.orderStatus?.washing) {
      setEnabledIndex(2)
    }
    else if (OdDATA?.data?.orderStatus?.scheduled && OdDATA?.data?.orderStatus?.picked && OdDATA?.data?.orderStatus?.washing && !OdDATA?.data?.orderStatus?.delivered) {
      setEnabledIndex(3)
    }
    else if (OdDATA?.data?.orderStatus?.scheduled && OdDATA?.data?.orderStatus?.picked && OdDATA?.data?.orderStatus?.washing && OdDATA?.data?.orderStatus?.delivered) {
      setEnabledIndex(4)
    }

    setCheckboxData((prevCheckboxData) => {
      const updatedData = [...prevCheckboxData];
      updatedData[0].isChecked = OdDATA?.data?.orderStatus?.scheduled ? true : false;
      updatedData[0].value = OdDATA?.data?.orderStatus?.scheduledDate.split("-").length === 1?TimeFetcher(Number(OdDATA?.data?.orderStatus?.scheduledDate)):TimeFetcher(OdDATA?.data?.orderStatus?.scheduledDate);
      updatedData[1].isChecked = OdDATA?.data?.orderStatus?.picked ? true : false;
      updatedData[1].value = OdDATA?.data?.orderStatus?.pickedDate.split("-").length === 1?TimeFetcher(Number(OdDATA?.data?.orderStatus?.pickedDate)):TimeFetcher(OdDATA?.data?.orderStatus?.pickedDate);
      updatedData[2].isChecked = OdDATA?.data?.orderStatus?.washing ? true : false;
      updatedData[2].value = OdDATA?.data?.orderStatus?.washingDate.split("-").length === 1?TimeFetcher(Number(OdDATA?.data?.orderStatus?.washingDate)):TimeFetcher(OdDATA?.data?.orderStatus?.washingDate);
      updatedData[3].isChecked = OdDATA?.data?.orderStatus?.delivered ? true : false;
      updatedData[3].value = OdDATA?.data?.orderStatus?.deliveredDate.split("-").length === 1?TimeFetcher(Number(OdDATA?.data?.orderStatus?.deliveredDate)):TimeFetcher(OdDATA?.data?.orderStatus?.deliveredDate);
      return updatedData;
    });
  }, [OdDATA])


  useEffect(() => {
    if (isError && error) {
      // console.log(error)
      toast.error(error?.data?.message?.toLowerCase() === "order already cancelled, you can not update status" ? "Order already cancelled, you can not update status" : "Something went wrong")
      setOpenModal(false);
    }
  }, [isError, error])


  const orderDetailsData = [
    { label: 'Order#', value: OdDATA?.data?.orderNumber },
    // { label: 'Purchase date', value: DateConverter(Number(OdDATA?.data?.orderStatus?.scheduledDate))},
    { label: 'Purchase date', value: OdDATA?.data?.orderStatus?.scheduledDate.split("-").length>1?DateConverter(OdDATA?.data?.orderStatus?.scheduledDate):DateConverter(Number(OdDATA?.data?.orderStatus?.scheduledDate))},
    // { label: 'Coupon:', value: '' },
    { label: 'Payment method:', value: OdDATA?.data?.payment?.paymentType },
    { label: 'Shipping method:', value: OdDATA?.data?.shippingType },
    { label: 'Customer name:', value: OdDATA?.data?.shippingAddress?.name },
    { label: 'Customer email:', value: OdDATA?.data?.shippingAddress?.email },
    { label: 'Customer phone:', value: OdDATA?.data?.shippingAddress?.phoneNumber },
    { label: 'Customer country:', value: OdDATA?.data?.shippingAddress?.country },
    { label: 'Customer city:', value: OdDATA?.data?.shippingAddress?.city },
    { label: 'Customer address:', value: OdDATA?.data?.shippingAddress?.apartment + " " + OdDATA?.data?.shippingAddress?.block + " " + OdDATA?.data?.shippingAddress?.street + " " + OdDATA?.data?.shippingAddress?.state + " " + OdDATA?.data?.shippingAddress?.country + " " + OdDATA?.data?.shippingAddress?.zipCode },
  ];

  const orderSummaryData = [
    { label: 'Sub total:', value: "€"+OdDATA?.data?.subTotal, fontSize: '12px' },
    { label: 'Pickup & delivery:', value: "€"+OdDATA?.data?.deliveryCharges, fontSize: '12px' },
    // { label: 'Coupon discount:', value: '10%', fontSize: '12px' },
    { label: 'Total Amount:', value: "€"+OdDATA?.data?.total, fontSize: '14px', textDecoration: "underline" },
  ];


  const handleSaveStatus = () => {
    let payload = {
      "scheduled": enabledIndex >= 0,
      "picked": enabledIndex >= 1,
      "washing": enabledIndex >= 2,
      "delivered": enabledIndex >= 3
    };
    const lastKeyValue = getLastKeyValue(payload)
    const data = {...lastKeyValue,reason: Reason}   
    updateOrderStatus({ id: params?.id, ...data })
  };

  useEffect(()=>{
      if(isSuccess){
        setOpenModal(false)
        toast.success("Status Updated Successfully")
      }
  },[isSuccess])


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
    id: item?.product?.id,
    order: { name: item?.product?.name, imgName: item?.product?.productImage },
    quantity: item?.quantity,
    category: item?.product?.categoryProduct[0]?.category?.name,
    price: `${item?.product?.price1}${item?.product?.price2 ? ` - ${item?.product?.price2}` : ""}`
  }));


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
            data={tableData && tableData}
            columns={columns()}
            isLoading={false}
            total={tableData && tableData.length}
          />
          {/* </Box> */}

        </Box>
      </Box>

      <StatusModal onInputChange={(e)=>setReason(e.target.value)} onConfirm={handleSaveStatus} open={openModal} heading={"Update Status"} label1={"Reason: "} label2={"(optional)"} placeholder={"Enter here..."} cancelBtnText={"Cancel"} acceptBtnText={"Set"} onClose={handleModalClose} loading={isOrderStatusLoading} />

      <ViewModal data={currentItem} open={openViewModal} onClose={() => setOpenViewModal(false)} />
    </main >
  )
}

export default OrderDetails