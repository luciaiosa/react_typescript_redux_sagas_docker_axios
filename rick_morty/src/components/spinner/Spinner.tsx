import React, { FunctionComponent } from "react";
import {spinnerStyles, StyledSpinner} from './SpinnerStyle';

interface SpinnerProps {
    message: String;
}

const Spinner: FunctionComponent<SpinnerProps> = (props: SpinnerProps) => {
    const classes = spinnerStyles()
    return (
        <div className={classes.spinnerContainer}>
            <StyledSpinner viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx={25}
                    cy={25}
                    r={20}
                    fill="none"
                    strokeWidth={4}
                />
            </StyledSpinner>
            <div>{props.message}</div>
        </div>
    );
};

export default Spinner;
