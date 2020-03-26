import React, { FunctionComponent, useState } from "react";
import "./Pager.css";

interface PagerProps {
    pageNumbers: Array<number>;
    currentPage: number;
    pageSelected(value: number): void;
}
const Pager: FunctionComponent<PagerProps> = (
    props: PagerProps
): JSX.Element => {
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

    const renderPageNumbers = (): JSX.Element[] => {
        return props.pageNumbers.map((number: number) => {
            return (
                <li
                    key={number}
                    value={number}
                    onClick={event =>
                        onPageSelect(
                            Number((event.target as HTMLLIElement).value)
                        )
                    }
                    className={number === props.currentPage ? "active" : ""}
                >
                    {number}
                </li>
            );
        });
    };
    return (
        <div className="center">
            <ul className="pagination">
                <li onClick={goToPrevPage} title="Go to previous page">
                    &laquo;
                </li>
                {renderPageNumbers()}
                <li onClick={goToNextPage} title="Go to next page">
                    &raquo;
                </li>
            </ul>
        </div>
    );
};

export default Pager;
