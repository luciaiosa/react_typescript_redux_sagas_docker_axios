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
            height: "auto",
            display: "flex",
            justifyContent: "space-evenly",
            margin: "0 !important"
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
        historyDescriptionRow: {
            backgroundColor: "lightgrey",
            height: 40,
            paddingLeft: 20,
            paddingRight: 20,
            marginBottom: 10,
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
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
            paddingLeft: 35,
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
        },
        contentFollowLink: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            border: "1px solid #1dc9dd",
            marginLeft: 35,
            marginBottom: 35,
            marginRight: 35
        },
        subMenu: {
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "40px",
            border: "1px solid #1dc9dd",
            marginLeft: 35,
            marginBottom: 35,
            marginRight: 35
        },
        center: {
            margin: 0
        },
        characterItem: {
            backgroundColor: "#F0EEEE",
            margin: 5,
            width: "48% !important",
            height: 250,
            padding: 10
        }
    })
);
