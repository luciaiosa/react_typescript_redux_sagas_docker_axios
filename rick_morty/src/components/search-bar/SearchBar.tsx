import React, { FunctionComponent } from "react";
import { FaSearch } from "react-icons/fa";
import { styles } from "./SearchBarStyles";

interface SearchBarProps extends React.HTMLProps<{}> {
    searchTerm: string;
    onSubmitSearch(): void;
    onSearchValueChange(value: string): void;
}

const SearchBar: FunctionComponent<SearchBarProps> = (
    props: SearchBarProps
): JSX.Element => {
    const classes = styles();
    return (
        <div className={classes.searchBarContainer}>
            <FaSearch name="search" className={classes.searchIcon} />
            <input
                className={classes.searchBarInput}
                placeholder="Search"
                value={props.searchTerm}
                spellCheck={false}
                onBlur={() => props.onSubmitSearch()}
                onChange={e => props.onSearchValueChange(e.target.value)}
            />
            {/* <button
                onClick={() => props.onSubmitSearch()}
                className={classes.searchBarButton}
            >
                Send
            </button> */}
        </div>
    );
};

export default SearchBar;
