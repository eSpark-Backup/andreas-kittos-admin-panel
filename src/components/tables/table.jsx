import React from 'react';
import {
    Box,
    Button,
    LinearProgress,
    Table as MUITable,
    Pagination,
    Stack,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { getValue } from '../../pages/utils/helpers';
import { eye, edit, trash } from "../../assets";

const DynamicTable = ({
    handleView,
    handleEdit,
    handleDelete,
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
        const cell = column.component
            ? column.component(item)
            : getValue(item, column.key);
        return column.key[0] === "action" ? (
            <Stack
                direction="row"
                justifyContent={"center"}
                justifyItems="center"
                alignItems="center"
                spacing={1}
            >
                {column.component ? (
                    cell
                ) : (
                    <>
                        {!column.hideView && (
                            <Button
                                variant="contained"
                                sx={{ minWidth: "initial", p: 1, background: "#263043 !important", borderRadius: "50%" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleView?.(item);
                                }}
                            >
                                <img src={eye} alt="" width="16px" />
                            </Button>
                        )}
                        {!column.hideEdit && (
                            <Button
                                variant="contained"
                                sx={{ minWidth: "initial", p: 1, background: "#263043 !important", borderRadius: "50%" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEdit?.(item)
                                }}
                            >
                                <img src={edit} alt="" width="16px" />
                            </Button>
                        )}
                        {!column.hideDelete && (
                            <Button
                                variant="contained"
                                sx={{ minWidth: "initial", p: 1, background: "#263043 !important", borderRadius: "50%" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete?.(item);
                                }}
                            >
                                <img src={trash} alt="" width="16px" />
                            </Button>
                        )}
                    </>
                )}
            </Stack>
        ) : (
            cell
        );
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
                                                    : "center"
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
                                            <TableCell sx={{ textAlign: "center" }} key={column.key.join(".")}>
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
