import { createStyles, makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(() =>
    createStyles({
        searchBarContainer: {
            display: "flex",
            backgroundColor: "#F0EEEE",
            height: 50,
            borderRadius: 5,
            flexDirection: "row",
            marginTop: 10,
            marginBottom: 20,
            width: "50%",
            alignSelf: "flex-end"
        },
        searchBarInput: {
            flex: 1,
            fontSize: 18,
            paddingLeft: 10,
            margin: 5
        },
        searchIcon: {
            fontSize: 35,
            alignSelf: "center",
            marginRight: 5,
            paddingLeft: 10
        },
        searchBarButton: {
            fontSize: 18,
            borderRadius: 5,
            marginLeft: 5,
            width: 100,
            fontWeight: 600,
            color: "#424548"
        }
    })
);
