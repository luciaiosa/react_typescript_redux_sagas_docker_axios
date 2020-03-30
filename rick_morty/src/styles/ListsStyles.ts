import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            overflow: "hidden",
            backgroundColor: theme.palette.background.paper,
            flexDirection: "column",
            minHeight: "75vh"
        },
        container: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignContent: "center",
            overflow: "hidden",
            flexDirection: "column",
            minHeight: "75vh"
        },
        gridList: {
            width: "100%",
            height: "auto"
        },
        pageHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 90,
            width: "100%"
        },
        pageHeaderTitle: {
            margin: 0,
            paddingLeft: 20
        },
        description: {
            fontSize: "1.3rem",
            marginTop: 10,
            marginBottom: 30
        },
        descriptionRow: {
            paddingTop: 10,
            display: "flex",
            justifyContent: "space-between"
        },
        listTileContainer: {
            paddingLeft: 25,
            paddingRight: 10
        },
        message: {
            height: 70,
            fontSize: 18,
            lineHeight: "1.4285em",
            margin: 5,
            paddingLeft: 15,
            marginTop: 15,
            marginBottom: 15
        },
        errorMessage: {
            color: "red",
            height: 50,
            fontSize: 18,
            lineHeight: "1.4285em",
            margin: 5,
            paddingLeft: 15,
            marginTop: 15,
            marginBottom: 20
        },
        blankDiv: {
            height: 50
        },
        pageCompareCharacters: {
            paddingLeft: 20,
            paddingRight: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 90,
            width: "100%"
        }
    })
);
