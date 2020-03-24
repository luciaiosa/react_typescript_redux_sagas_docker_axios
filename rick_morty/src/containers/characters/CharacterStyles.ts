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
            flexDirection: "column"
        },
        gridList: {
            width: "100%",
            height: "auto"
        },
        pageHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    })
);
