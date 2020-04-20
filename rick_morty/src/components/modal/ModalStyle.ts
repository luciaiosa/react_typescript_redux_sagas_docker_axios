import { createStyles, makeStyles } from "@material-ui/core/styles";

export const modalStyles = makeStyles(() =>
    createStyles({
        modalContainer: {
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
          zIndex: 1000
        },
        modal: {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          fontSize: "1rem",
          width: "60%",
          height: "auto",
          padding: 30,
          paddingBottom: 20,
          margin: 0,
          position: "absolute",
          zIndex: 1001,
          textAlign: "left",
          background: "#fff",
          border: "none",
          boxShadow: "1px 3px 3px 0 rgba(0,0,0,.2), 1px 3px 15px 2px rgba(0,0,0,.2)",
          transformOrigin: "50% 25%",
          flex: "0 0 auto",
          borderRadius: ".28571429rem",
          willChange: "top,left,margin,transform,opacity",
          overflow: "hidden"
        },
        header: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"      
        },
        title: {
          fontSize: "large",
          fontWeight: 600
        },   
        content: {
          fontSize: "1em",
          margin: "1em",
          padding: "0.25em 1em",
          marginLeft: 0,
          paddingLeft: 0
        },
        actions: {
          display: "flex",
          justifyContent: "flex-end"
        }
    })
);
