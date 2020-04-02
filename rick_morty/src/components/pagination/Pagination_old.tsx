import React, { FunctionComponent, useState } from "react";
import { styles } from "./PagerStyles";

interface PagerProps {
    pageNumbers: Array<number>;
    currentPage: number;
    pageSelected(value: number): void;
}
const Pager: FunctionComponent<PagerProps> = (
    props: PagerProps
): JSX.Element => {
    const classes = styles();
    const [selectedPage, setSelectedPage] = useState<number>(1);

    const onPageSelect = (indexSelected: number): void => {
        setSelectedPage(indexSelected);
        props.pageSelected(indexSelected);
    };

    const goToPrevPage = (): void => {
        if (selectedPage > 1) {
            setSelectedPage(selectedPage - 1);
            props.pageSelected(selectedPage - 1);
        }
    };

    const goToNextPage = (): void => {
        if (selectedPage < props.pageNumbers.length) {
            setSelectedPage(selectedPage + 1);
            props.pageSelected(selectedPage + 1);
        }
    };

    const renderPageNumbers = () => {
        return props.pageNumbers.map((number: number) => {
            if (number === props.currentPage) {
                return (
                    <li
                        key={number}
                        value={number}
                        onClick={event =>
                            onPageSelect(
                                Number((event.target as HTMLLIElement).value)
                            )
                        }
                        className={`${classes.active} ${classes.paginationListItem}`}
                    >
                        {number}
                    </li>
                );
            }
            return (
                <li
                    key={number}
                    value={number}
                    onClick={event =>
                        onPageSelect(
                            Number((event.target as HTMLLIElement).value)
                        )
                    }
                    className={classes.paginationListItem}
                >
                    {number}
                </li>
            );
        });
    };
    return (
        <div className={classes.center}>
            <ul className={classes.paginationList}>
                <li
                    onClick={goToPrevPage}
                    title="Go to previous page"
                    className={classes.paginationListItem}
                >
                    &laquo;
                </li>
                {renderPageNumbers()}
                <li
                    onClick={goToNextPage}
                    title="Go to next page"
                    className={classes.paginationListItem}
                >
                    &raquo;
                </li>
            </ul>
        </div>
    );
};

export default Pager;
