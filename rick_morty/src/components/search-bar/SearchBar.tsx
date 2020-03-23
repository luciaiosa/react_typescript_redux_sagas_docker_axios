import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { FaSearch } from "react-icons/fa";

const useStyles = makeStyles(() =>
    createStyles({
        searchBarContainer: {
            backgroundColor: '#F0EEEE',
            height: 50,
            borderRadius: 5,
            flexDirection: 'row',
            margin: 10
        },
        searchBarInput: {
            flex: 1,
            fontSize: 18
        }
    }),
);

interface SearchBarProps extends React.HTMLProps<{}> {
    searchTerm: string;
    onSubmitSearch(): void;
    onSearchValueChange(value: string): void;
}

const SearchBar: FunctionComponent<SearchBarProps> = (
    props: SearchBarProps
): JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.searchBarContainer}>
            <FaSearch
                name="search"
                style={{ fontSize: 35, alignSelf: "center", marginTop: 10, paddingLeft: 10 }}
            />
            <input className={classes.searchBarInput}
                placeholder="Search"
                value={props.searchTerm}
                spellCheck={false}
                onChange={e => props.onSearchValueChange(e.target.value)}
            />
            <button onClick={() => props.onSubmitSearch()}>Search</button>
        </div>
    );
};

export default SearchBar;