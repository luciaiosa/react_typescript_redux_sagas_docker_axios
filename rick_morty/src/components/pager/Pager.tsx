import React, { FunctionComponent } from "react";

interface PagerProps {
    pageNumbers: Array<number>;
    pageSelected(value: number): void;
}
const Pager: FunctionComponent<PagerProps> = (
    props: PagerProps
): JSX.Element => {
    const renderPageNumbers = (): JSX.Element[] => {
        return props.pageNumbers.map((number: number) => {
            return (
                <li
                    key={number}
                    value={number}
                    onClick={e =>
                        props.pageSelected(
                            Number((e.target as HTMLLIElement).value)
                        )
                    }
                >
                    {number}
                </li>
            );
        });
    };
    return (
        <div>
            <ul>{renderPageNumbers()}</ul>
        </div>
    );
};

export default Pager;
