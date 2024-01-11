import React from 'react';
import {
    Box,
    LinearProgress,
    Table as MUITable,
    Pagination,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { getValue } from '../../pages/utils/helpers';

const DynamicTable = ({
    data,
    columns,
    isLoading,
    handlePageChange,
    total,
    ...rest
}) => {
    const extendedColumns = columns?.map((column) => {
        return { ...column, key: column.key.split(".") };
    });

    const generateCell = (
        column,
        item
    ) => {
        console.log(column, "column")
        const cell = column.component
            ? column.component(item)
            : getValue(item, column.key);
            return cell;
    };

    return (
        <>

            {data.length === 0 && !isLoading ?
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <img src={""} width="300px" height="300px" alt="no-data" />
                </Stack>
                :
                <TableContainer {...rest} className="table">
                    <MUITable >
                        <TableHead>
                            <TableRow>
                                {extendedColumns?.map((column, index) => (
                                    <TableCell
                                        key={`${index}`}
                                    >
                                        <Stack
                                            direction={"row"}
                                            alignItems={"center"}
                                            justifyContent={
                                                column.key[0] === "action"
                                                    ? "flex-end"
                                                    : "space-between"
                                            }
                                        >
                                            <Stack direction="row" alignItems={"center"}>
                                                {column.name}
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        {!isLoading && (
                            <TableBody>
                                {data?.map((item, index) => (
                                    <TableRow

                                        key={item.id}>
                                        {extendedColumns?.map((column) => (
                                            <TableCell key={column.key.join(".")}>
                                                {generateCell(column, item)}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </MUITable>
                    {isLoading && (
                        <Box >
                            <LinearProgress />
                        </Box>
                    )}
                </TableContainer>
            }
            <Stack mt={0.5} p={{ xs: 0, sm: 2 }} alignItems="center">
                <Pagination   variant="outlined" shape="rounded" onChange={handlePageChange ? (_, page) => handlePageChange(page) : () => { }} count={(total || 1) / 10}  />
            </Stack>
        </>
    );
};

export default DynamicTable;
