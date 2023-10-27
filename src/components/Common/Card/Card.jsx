import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./styles.scss";

const Card = ({ icon, title, body, align = "center", width, height }) => {
  return (
    <Stack
      className="card-container"
      style={{
        border: "1px solid #DFE6F0",
        width: width || "284px",
        height: height || "fit-content",
        maxWidth: "384px",
        minHeight: "274px",
      }}
    >
      <Stack
        alignItems={align}
        justifyContent={{ xs: "center", md: "flex-start" }}
        spacing={2}
        className="card-content"
      >
        <img src={icon} alt={"icon"} width="64" height="66" />
        <Typography className="card-title" textAlign={align}>
          {title}
        </Typography>
        <Typography className="card-body" textAlign={align}>
          {body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Card;
