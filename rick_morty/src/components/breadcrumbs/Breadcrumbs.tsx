import React from "react";
import { BreadCrumb } from "../../store/app/AppStore";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";

interface BreadcrumbsProps {
    items: BreadCrumb[];
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
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
                <div className="breadcrumbs-links">
                    <Link
                        key={breadcrumb.key}
                        to={breadcrumb.link!}
                        className="breadcrumb-link"
                    >
                        {breadcrumb.label}
                    </Link>
                    <span> / </span>
                </div>

            );
        }
        return <span key={breadcrumb.key}>{breadcrumb.label}</span>;
    };

    return <div>{renderItems()}</div>;
};
export default Breadcrumbs;
