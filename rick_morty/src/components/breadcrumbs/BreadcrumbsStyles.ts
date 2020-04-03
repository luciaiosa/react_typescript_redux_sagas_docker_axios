import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        breadcrumbsContainer: {
            marginTop: 10,
            marginBottom: 20
        },
        breadcrumbsLinks: {
            display: "inline"
        },
        breadcrumbSpan: {
            // color: "#424548"
            color: "#808080"
        },
        breadcrumbLink: {
            textDecoration: "none",
            fontWeight: 400,
            color: "rgb(51, 51, 51)",
            alignSelf: "center",
            "&:hover": {
                color: "white"
                /* color: #1da2b3; */
            }
        }
    })
);
