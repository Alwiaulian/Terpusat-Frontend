import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    height: "100%",
  },
  content: {
    padding: 0,
  },
  image: {
    height: 48,
    width: 48,
  },
  actions: {
    justifyContent: "flex-end",
  },
}));
