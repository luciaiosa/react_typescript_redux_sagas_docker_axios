import React, { FunctionComponent, useState } from "react";
import { PAGE_BOUND_NUMBER_PAGINATION } from "../../constants/AppLists";
import { styles } from "./PagerStyles";

interface PagerProps {
    pageNumbers: Array<number>;
    currentPage: number;
    pageSelected(value: number): void;
}

const Pagination: FunctionComponent<PagerProps> = (
    props: PagerProps
): JSX.Element => {
    const classes = styles();
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [prevButtonDisabled, setPrevButtonDisabled] = useState<string>(
        "disabled"
    );
    const [nextButtonDisabled, setNextButtonDisabled] = useState<string>("");
    const [ellipseUpperPagesNumber, setEllipseUpperPagesNumber] = useState<
        number
    >(10);
    const [ellipseLowerPagesNumber, setEllipseLowerPagesNumber] = useState<
        number
    >(0);

    const setPrevButtonClass = (selectedPage: number) => {
        if (selectedPage === 1) {
            setPrevButtonDisabled("disabled");
        } else {
            setPrevButtonDisabled("");
        }
    };
    const setNextButtonClass = (selectedPage: number) => {
        if (selectedPage === props.pageNumbers.length) {
            setNextButtonDisabled("disabled");
        } else {
            setNextButtonDisabled("");
        }
    };

    const changeSelectedPage = (indexSelected: number): void => {
        setSelectedPage(indexSelected);
        props.pageSelected(indexSelected);
        setPrevButtonClass(indexSelected);
        setNextButtonClass(indexSelected);
    };

    const onUpperEllipseSelect = (): void => {
        setEllipseUpperPagesNumber(
            ellipseUpperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
        );
        setEllipseLowerPagesNumber(
            ellipseLowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
        );
        let newIndexSelected = ellipseUpperPagesNumber + 1;
        changeSelectedPage(newIndexSelected);
    };

    const onLowerEllipseSelect = (): void => {
        setEllipseUpperPagesNumber(
            ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
        );
        setEllipseLowerPagesNumber(
            ellipseLowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
        );
        let newIndexSelected =
            ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION;
        changeSelectedPage(newIndexSelected);
    };

    const goToNextPage = (): void => {
        console.log(selectedPage);
        console.log(ellipseUpperPagesNumber);
        if (selectedPage + 1 > ellipseUpperPagesNumber) {
            setEllipseUpperPagesNumber(
                ellipseUpperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
            setEllipseLowerPagesNumber(
                ellipseLowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
        }
        let index = selectedPage + 1;
        changeSelectedPage(index);
    };

    const goToPrevPage = (): void => {
        if ((selectedPage - 1) % PAGE_BOUND_NUMBER_PAGINATION === 0) {
            setEllipseUpperPagesNumber(
                ellipseUpperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
            setEllipseLowerPagesNumber(
                ellipseLowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
        }

        let index = selectedPage - 1;
        changeSelectedPage(index);
    };

    const renderPageIncrementButton = () => {
        if (props.pageNumbers.length > ellipseUpperPagesNumber) {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={onUpperEllipseSelect}
                >
                    &hellip;{" "}
                </li>
            );
        }
    };

    const renderPageDecrementButton = () => {
        if (ellipseLowerPagesNumber >= 1) {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={onLowerEllipseSelect}
                >
                    &hellip;{" "}
                </li>
            );
        }
    };

    const renderPrevButton = () => {
        if (prevButtonDisabled === "disabled") {
            return (
                <li
                    className={`${classes.disabled} ${classes.paginationListItem}`}
                >
                    &laquo;
                </li>
            );
        } else {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={() => goToPrevPage()}
                >
                    &laquo;
                </li>
            );
        }
    };

    const renderNextButton = () => {
        if (nextButtonDisabled === "disabled") {
            return (
                <li
                    className={`${classes.disabled} ${classes.paginationListItem}`}
                >
                    &raquo;
                </li>
            );
        } else {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={() => goToNextPage()}
                >
                    &raquo;
                </li>
            );
        }
    };

    const renderPageNumbers = () => {
        return props.pageNumbers.map((number: number) => {
            if (
                (number === 1 && selectedPage === 1) ||
                number === props.currentPage
            ) {
                return (
                    <li
                        key={number}
                        value={number}
                        onClick={event =>
                            changeSelectedPage(
                                Number((event.target as HTMLLIElement).value)
                            )
                        }
                        className={`${classes.active} ${classes.paginationListItem}`}
                    >
                        {number}
                    </li>
                );
            } else if (
                number < ellipseUpperPagesNumber + 1 &&
                number > ellipseLowerPagesNumber
            ) {
                return (
                    <li
                        key={number}
                        value={number}
                        onClick={event =>
                            changeSelectedPage(
                                Number((event.target as HTMLLIElement).value)
                            )
                        }
                        className={classes.paginationListItem}
                    >
                        {number}
                    </li>
                );
            }
        });
    };

    return (
        <div className={classes.center}>
            <ul className={classes.paginationList}>
                {renderPrevButton()}
                {renderPageDecrementButton()}
                {renderPageNumbers()}
                {renderPageIncrementButton()}
                {renderNextButton()}
            </ul>
        </div>
    );
};

export default Pagination;
