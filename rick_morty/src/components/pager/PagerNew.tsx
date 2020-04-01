import React, { FunctionComponent, useState } from "react";
import { PAGE_BOUND_NUMBER_PAGINATION } from "../../constants/AppLists";
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
    const [prevButtonDisabled, setPrevButtonDisabled] = useState<string>(
        "disabled"
    );
    const [nextButtonDisabled, setNextButtonDisabled] = useState<string>("");
    const [upperPagesNumber, setUpperPagesNumber] = useState<number>(10);
    const [lowerPagesNumber, setLowerPagesNumber] = useState<number>(0);

    const setPrevButtonClass = (selectedPage: number) => {
        if (
            props.pageNumbers.length === selectedPage &&
            props.pageNumbers.length > 1
        ) {
            setPrevButtonDisabled("");
        } else if (props.pageNumbers.length > 1) {
            setPrevButtonDisabled("");
        }
    };
    const setNextButtonClass = (selectedPage: number) => {
        if (selectedPage === 1 && props.pageNumbers.length > 1) {
            setNextButtonDisabled("");
        } else if (props.pageNumbers.length > 1) {
            setNextButtonDisabled("");
        }
    };

    const onPageSelect = (indexSelected: number): void => {
        setSelectedPage(indexSelected);
        props.pageSelected(indexSelected);
        setPrevButtonClass(indexSelected);
        setNextButtonClass(indexSelected);
    };

    const onUpperPageSelect = (): void => {
        setUpperPagesNumber(upperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION);
        setLowerPagesNumber(lowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION);
        let newIndexSelected = upperPagesNumber + 1;
        setSelectedPage(newIndexSelected);
        props.pageSelected(newIndexSelected);
        setPrevButtonClass(newIndexSelected);
        setNextButtonClass(newIndexSelected);
    };

    const onLowerPageSelect = (): void => {
        setUpperPagesNumber(upperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION);
        setLowerPagesNumber(lowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION);
        let newIndexSelected = upperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION;
        setSelectedPage(newIndexSelected);
        props.pageSelected(newIndexSelected);
        setPrevButtonClass(newIndexSelected);
        setNextButtonClass(newIndexSelected);
    };

    const goToNextPage = (): void => {
        if (selectedPage + 1 > upperPagesNumber) {
            setUpperPagesNumber(
                upperPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
            setLowerPagesNumber(
                lowerPagesNumber + PAGE_BOUND_NUMBER_PAGINATION
            );
        }
        let index = selectedPage + 1;
        setSelectedPage(index);
        setPrevButtonClass(index);
        setNextButtonClass(index);
    };

    const goToPrevPage = (): void => {
        if ((selectedPage - 1) % PAGE_BOUND_NUMBER_PAGINATION === 0) {
            setUpperPagesNumber(
                upperPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
            setLowerPagesNumber(
                lowerPagesNumber - PAGE_BOUND_NUMBER_PAGINATION
            );
        }

        let index = selectedPage - 1;
        setSelectedPage(index);
        setPrevButtonClass(index);
        setNextButtonClass(index);
    };

    const renderPageIncrementButton = () => {
        if (props.pageNumbers.length > upperPagesNumber) {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={onUpperPageSelect}
                >
                    &hellip;{" "}
                </li>
            );
        }
    };

    const renderPageDecrementButton = () => {
        if (lowerPagesNumber >= 1) {
            return (
                <li
                    className={classes.paginationListItem}
                    onClick={onLowerPageSelect}
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
                            onPageSelect(
                                Number((event.target as HTMLLIElement).value)
                            )
                        }
                        className={`${classes.active} ${classes.paginationListItem}`}
                    >
                        {number}
                    </li>
                );
            } else if (
                number < upperPagesNumber + 1 &&
                number > lowerPagesNumber
            ) {
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

export default Pager;
