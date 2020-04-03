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
            flexDirection: "column"
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            border: "1px solid #1dc9dd",
            margin: 35
        },
        description: {
            fontSize: "1.3rem",
            marginTop: 10,
            marginBottom: 30
        },
        descriptionRow: {
            paddingTop: 10
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
        blankDiv: {
            height: 50
        },
        contentFollowLink: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        center: {
            margin: 0
        }
    })
);
