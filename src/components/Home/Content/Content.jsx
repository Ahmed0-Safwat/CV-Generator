import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import HeroContent from "./HeroContent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

const Content = () => {
  return (
    <Stack>
      <HeroContent />
      <SecondComponent />
      <ThirdComponent />
      <Stack
        sx={{
          width: "95%",
          textAlign: "center",
          background: "linear-gradient(to left bottom, #074c88, #577a9e)",
          borderRadius: "12px",
          boxShadow: "0px 0px 20px gray",
          margin: "10px auto",
        }}
      >
        <Stack>
          <Stack>
            <Typography
              style={{ marginTop: "10px", color: "#ffffffdb" }}
              variant="h5"
              gutterBottom
            >
              Reviews
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          sx={{
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            borderRadius: "0px",
            color: "white",
            margin: "10px auto",
          }}
        >
          <Stack
            sx={{
              width: "30%",
            }}
          >
            <Stack>
              <img src="/assets/random1.jpg" alt="" />
            </Stack>
            <Stack>
              <Typography
                style={{ marginTop: "10px" }}
                variant="h6"
                gutterBottom
              >
                Steven Rafual
              </Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Typography variant="subtitle2" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                sunt asperiores unde iste? Sequi nihil id deserunt repellat!
                Quibusdam similique, dolores eveniet suscipit iste reiciendis
                amet maiores corporis doloribus error?
              </Typography>
            </Stack>
            <Stack>
              <Rating
                style={{ margin: "0px auto" }}
                name="read-only"
                value={4}
                readOnly
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "30%",
            }}
          >
            <Stack>
              <img src="/assets/random2.jpeg" alt="" />
            </Stack>
            <Stack>
              <Typography
                style={{ marginTop: "10px" }}
                variant="h6"
                gutterBottom
              >
                Scott Smith
              </Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Typography variant="subtitle2" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                sunt asperiores unde iste? Sequi nihil id deserunt repellat!
                Quibusdam similique, dolores eveniet suscipit iste reiciendis
                amet maiores corporis doloribus error?
              </Typography>
            </Stack>
            <Stack>
              <Rating
                style={{
                  margin: "0px auto",
                }}
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "30%",
            }}
          >
            <Stack>
              <img src="/assets/random3.jpg" alt="" />
            </Stack>
            <Stack>
              <Typography
                style={{ marginTop: "10px" }}
                variant="h6"
                gutterBottom
              >
                Marlyn Jackob
              </Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Typography variant="subtitle2" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                sunt asperiores unde iste? Sequi nihil id deserunt repellat!
                Quibusdam similique, dolores eveniet suscipit iste reiciendis
                amet maiores corporis doloribus error?
              </Typography>
            </Stack>
            <Stack>
              <Rating
                style={{ margin: "0px auto" }}
                name="read-only"
                value={5}
                readOnly
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Content;
