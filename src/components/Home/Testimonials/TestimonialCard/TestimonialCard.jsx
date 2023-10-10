import "./style.scss";
import { Avatar, Paper, Stack, Typography } from "@mui/material";

const TestimonialCard = ({
  cardTitle,
  cardText,
  cardSubtitle,
  cardFooter,
  cardSubfooter,
}) => {
  return (
    <Paper
      sx={{
        padding: "40px",
        maxWidth: "888px",
        width: "100%",
        margin: "auto",
        borderRadius: "16px",
      }}
    >
      <Stack alignItems={"center"} spacing={{ xs: 6, sm: 4 }}>
        <Stack alignItems={"center"}>
          <Typography
            className="content-title"
            color="secondary.contrastText"
            fontWeight={500}
          >
            {cardTitle}
          </Typography>
          <Typography
            className="content-subTitle"
            color="secondary.contrastText"
          >
            {cardSubtitle}
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 4 }}
        >
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              transform: "translateY(-25%)",
              minWidth: "120px",
            }}
          >
            <Avatar src="" sx={{ width: "70px", height: "70px" }} />

            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography
                className="content-subTitle"
                color="primary.main"
                whiteSpace="nowrap"
                textAlign="center"
                fontWeight={700}
              >
                {cardFooter}
              </Typography>

              <Typography
                variant="caption"
                className="content-subTitle"
                color="secondary.contrastText"
                textAlign="center"
                fontWeight={500}
              >
                {cardSubfooter}
              </Typography>
            </Stack>
          </Stack>

          <Typography
            className="content-subTitle"
            color="secondary.contrastText"
          >
            {cardText}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default TestimonialCard;
