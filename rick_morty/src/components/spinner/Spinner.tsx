import React, { FunctionComponent } from "react";
import { spinnerStyles } from "./SpinnerStyle";

interface SpinnerProps {
    message: String;
}

const Spinner: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    const classes = spinnerStyles();
    return (
        <div className="ui active dimmer">
            <div className="ui medium text loader">{props.message}</div>
        </div>
    );
};

export default Spinner;
