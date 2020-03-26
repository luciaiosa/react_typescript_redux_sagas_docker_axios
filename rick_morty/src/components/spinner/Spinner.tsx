import React, { FunctionComponent } from "react";

interface SpinnerProps {
    message: String;
}

const Spinner: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    return (
        <div className="ui active dimmer">
            <div className="ui medium text loader">{props.message}</div>
        </div>
    );
};

export default Spinner;
