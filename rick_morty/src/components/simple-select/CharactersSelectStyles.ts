import { createStyles, makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles(() =>
    createStyles({
        selectContainer: {
            display: "flex",
            backgroundColor: "#F0EEEE",
            height: 50,
            borderRadius: 5,
            flexDirection: "row",
            width: "50%",
            marginRight: 10
        },
        select: {
            flex: 1,
            fontSize: 18,
            paddingLeft: 10,
            margin: 5
        }
    })
);
