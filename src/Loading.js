import React from "react";
import { Backdrop, CircularProgress } from "@material-ui/core";

export const Loader = () => {
    return (
        <Backdrop open={true} >
            <CircularProgress color="inherit" />
        </ Backdrop>
    )
};
