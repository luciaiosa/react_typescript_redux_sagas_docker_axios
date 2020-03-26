import { createStyles, makeStyles } from "@material-ui/core/styles";

export const spinnerStyles = makeStyles(() =>
    createStyles({
        spinnerContainer: {
            display: "flex",
            opacity: 1,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            textAlign: "center",
            verticalAlign: "middle",
            padding: "1em",
            backgroundColor: "rgba(0,0,0,.85)",
            lineHeight: 1,
            animationFillMode: "both",
            animationDuration: ".5s",
            transition: "background-color .5s linear",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            willChange: "opacity",
            zIndex: 1000,
            "&::before": {
                borderColor: "rgba(255, 255, 255, 0.15)",
                width: "2.28571429rem",
                height: "2.28571429rem",
                margin: "0 0 0 -1.14285714rem",
                position: "absolute",
                content: "",
                top: 0,
                left: "50%",
                borderRadius: "500rem",
                border: "0.2em solid rgba(0, 0, 0, 0.1)",
                boxSizing: "inherit"
            }
        },
        textLoader: {
            minWidth: "3.71428571rem",
            paddingTop: "4.5rem",
            color: "rgba(255,255,255,.9)",

            fontSize: "1em",
            width: "auto",
            height: "auto",
            textAlign: "center",
            fontStyle: "normal",

            display: "block",
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: 0,
            zIndex: 1000,
            transform: "translateX(-50%) translateY(-50%)",
            "&::before": {
                borderColor: "rgba(255, 255, 255, 0.15)",
                width: "2.28571429rem",
                height: "2.28571429rem",
                margin: "0 0 0 -1.14285714rem",
                position: "absolute",
                content: "",
                top: 0,
                left: "50%",
                // width: "100%",
                // height: "100%",
                borderRadius: "500rem",
                border: "0.2em solid rgba(0, 0, 0, 0.1)",
                boxSizing: "inherit"
            }
        }
    })
);
