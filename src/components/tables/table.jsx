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
import nodata from "../../assets/images/nodata.svg"

const DynamicTable = ({
    handleView,
    handleEdit,
    handleDelete,
    data,
    columns,
    isLoading,
    page,
    handlePageChange,
    total,
    ...rest
}) => {
    // console.log(data)
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
                justifyContent={"flex-start"}
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

            {(data?.length === 0) && !isLoading ?
                <Stack direction="row" justifyContent="center" alignItems="center">
                    <img src={nodata} width="300px" height="300px" alt="no-data" />
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
                                                    : column.left ?
                                                     "flex-start"
                                                    : "center"
                                            }
                                        >
                                            <Stack direction="row" >
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
                                            <TableCell sx={{ textAlign: column.left ? "left" : "center",pl:column.left?"20px":"20px" }} key={column.key.join(".")}>
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
            {data?.length >= 7 ?
                <Stack sx={{ marginTop: { xs: "20px", sm: "10px" } }} p={{ xs: 0, sm: 2 }} alignItems="center">
                    <Pagination
                    page={page}
                    variant="outlined" shape="rounded" onChange={handlePageChange ? (_, page) => handlePageChange(page) : () => { }} count={Math.ceil((total || 1) / 7)} />
                </Stack>
                : null}
        </>
    );
};

export default DynamicTable;
