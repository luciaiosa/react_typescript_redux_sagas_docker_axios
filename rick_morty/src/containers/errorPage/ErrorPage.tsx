import React, { FunctionComponent } from "react";
import { styles } from "../../styles/DescriptionStyles";

const ErrorPage: FunctionComponent = (): JSX.Element => {
    const classes = styles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h2>Page not found</h2>
                    <p className={classes.description}>
                        Sorry, the requested page could not be found. Please,
                        check the spelling and try again.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
