import { Button, Stack, Typography } from "@mui/material";

const HeroContent = () => {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          backgroundColor: "#A7DFFF",
          height: "385px",
        }}
      >
        <img
          src="/assets/newenter.gif"
          alt=""
          srcSet=""
          style={{
            width: "270px",
            height: "170x",
          }}
        />

        <Stack spacing={4} alignItems="center">
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Create your very own professional Resume and download it within 15
            minutes.
          </Typography>

          <Button
            sx={{
              width: "fit-content",
            }}
            variant="contained"
          >
            Create Cv
          </Button>
        </Stack>
      </Stack>

      <Stack
        spacing={2}
        alignItems="center"
        sx={{
          backgroundColor: "#8080801a",
          boxShadow: "0px 3px 8px #00000014",
          transform: "translateY(-25px)",
        }}
      >
        <Stack
          gap={3}
          p={2}
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/Badge1.png  "
            alt=""
            style={{
              width: "80px",
              height: "80x",
            }}
          />

          <Stack>
            <Typography
              variant="h6"
              sx={{ textAlign: { xs: "center", lg: "start" } }}
            >
              Quick and easy resume builder
            </Typography>

            <Typography
              sx={{
                color: "gray",
                textAlign: { xs: "center", lg: "start" },
              }}
              variant="subtitle1"
              gutterBottom
            >
              With our online CV maker, it is simple for anyone to quickly
              create a professional resume. Enter your personal details and
              begin filling out your resume content. Finally, choose one of our
              36 available resume layouts , and download your resume.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          gap={3}
          p={2}
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/Badge2.png  "
            alt=""
            style={{
              width: "80px",
              height: "80x",
            }}
          />

          <Stack>
            <Typography variant="h6">More likely to land a job</Typography>

            <Typography
              sx={{
                color: "gray",
              }}
              variant="subtitle1"
              gutterBottom
            >
              With a representative and professional resume, you will stand out
              amongst all other applicants. You are probably more likely to be
              invited to an interview with an professional Resume.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          gap={3}
          p={2}
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <img
            src="/assets/Badge3.png  "
            alt=""
            style={{
              width: "80px",
              height: "80x",
            }}
          />

          <Stack>
            <Typography variant="h6">Organize your applications</Typography>

            <Typography
              sx={{
                color: "gray",
              }}
              variant="subtitle1"
              gutterBottom
            >
              Often, it is important to be able to tailor your resume based on
              the job you wish to apply for. With CV maker, you can create and
              manage several different resumes in an organised way through your
              own personal account hub.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default HeroContent;
