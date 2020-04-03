import React, { FunctionComponent } from "react";
import { styles } from "../../styles/DescriptionStyles";

interface ErrorProps {
    title: string;
}

const Error: FunctionComponent<ErrorProps> = (
    props: ErrorProps
): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.content}>
            <h2>{props.title}</h2>
            {/* <p className={classes.description}>
                Sorry, there was an error loading the data.
            </p> */}
        </div>
    );
};

export default Error;
