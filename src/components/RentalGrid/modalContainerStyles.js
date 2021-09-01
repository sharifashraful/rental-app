import { makeStyles } from "@material-ui/core/styles";

export const modalContainerStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

export const useModalContainerStyles = makeStyles((theme) => ({
  buttonColor: {
    color: "white",
    borderColor: "white",
    marginRight: 10,
  },
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
