import React from 'react'
import { PageHeader, Table } from '../../components'
import { Box } from '@mui/material'
import { columns } from '../../columns/orders'
import { ordersTableData } from '../../constant'

const Orders = () => {

  return (
    <main className='main-container'>
      <PageHeader title="Orders" />

      <Box>
        <Table
          data={ordersTableData}
          columns={columns()}
          isLoading={false}
          total={50}
        />
      </Box>

    </main>
  )
}

export default Orders