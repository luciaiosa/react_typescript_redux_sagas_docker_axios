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
            justifyContent: "center",
            alignContent: "center",
            overflow: "hidden",
            flexDirection: "column"
        },
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px"
        },
        description: {
            fontSize: "1.3rem",
            marginTop: 10,
            marginBottom: 30
        },
        gridList: {
            width: "100%",
            height: "auto"
        }
    })
);
