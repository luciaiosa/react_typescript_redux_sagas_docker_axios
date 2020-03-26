import React from "react";
import { BreadCrumb } from "../../store/app/AppStore";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import "./Breadcrumbs.css";

const useStyles = makeStyles(() =>
    createStyles({
        breadcrumbsContainer: {
            marginTop: 10,
            marginBottom: 20
        },
        breadcrumbsLinks: {
            display: "inline"
        },
        breadcrumbSpan: {
            // color: "#424548"
            color: "#808080"
        }
    })
);

interface BreadcrumbsProps {
    items: BreadCrumb[];
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const classes = useStyles();
    const { items } = props;

    const renderItems = (): JSX.Element => {
        if (items && items.length > 0) {
            const breadcrumbsItems = items.map(breadcrumb => {
                return renderLink(breadcrumb);
            });
            return <div>{breadcrumbsItems}</div>;
        }
        return <div></div>;
    };

    const renderLink = (breadcrumb: BreadCrumb): JSX.Element => {
        if (breadcrumb.link !== null) {
            return (
                <div className={classes.breadcrumbsLinks} key={breadcrumb.key}>
                    <Link
                        to={breadcrumb.link!}
                        className="breadcrumb-link"
                        key={breadcrumb.link}
                    >
                        {breadcrumb.label}
                    </Link>
                    <span
                        key={breadcrumb.label}
                        className={classes.breadcrumbSpan}
                    >
                        {" "}
                        /{" "}
                    </span>
                </div>
            );
        }
        return (
            <span key={breadcrumb.key} className={classes.breadcrumbSpan}>
                {breadcrumb.label}
            </span>
        );
    };

    return <div className={classes.breadcrumbsContainer}>{renderItems()}</div>;
};
export default Breadcrumbs;
