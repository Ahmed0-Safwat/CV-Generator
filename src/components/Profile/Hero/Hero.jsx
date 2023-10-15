import "./style.scss";
import { Stack, Typography, Avatar, Box } from "@mui/material";

const Hero = () => {
  return (
    <Stack
      sx={{
        backgroundImage: "url(/images/hero-image.png)",
        height: { xs: "250px ", sm: "350px", md: "600px" },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: {
          xs: "0px 0px 40px 40px",
          sm: "0px 0px 80px 80px",
          lg: "0px 0px 100px 100px",
        },
      }}
    >
      <Stack
        sx={{
          height: "100%",
          transform: "translateY(90px)",
          alignItems: "center",
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Stack
          height="100%"
          gap={2}
          sx={{
            transform: "translateY(-70px)",
            alignItems: { xs: "center", lg: "center " },
            textAlign: "center",
            justifyContent: "center",
            m: 2,
          }}
        >
          <Avatar
            alt=""
            src=""
            sx={{
              width: { xs: "64px", sm: "108px", md: "144px" },
              height: { xs: "64px", sm: "108px", md: "144px" },
            }}
          />

          <Box>
            <Typography
              align="center"
              fontWeight={600}
              className="how-it-works-title"
              sx={{
                color: "white",
                fontSize: { xs: "14px", md: "24px", lg: "32px" },
                lineHeight: { xs: "30px", md: "45px", lg: "50px" },
              }}
            >
              Ahmed Safwat
            </Typography>

            <Typography
              align="center"
              fontWeight={200}
              className="how-it-works-title"
              sx={{
                color: "white",
                fontSize: { xs: "10px", md: "24px", lg: "30px" },
              }}
            >
              ahmedsafwat11@yahoo.com
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
