import { Button, Stack, Typography } from "@mui/material";

const SecondComponent = () => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "gray",
          height: "500px",
        }}
      >
        <Stack
          spacing="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Stack>
            <Typography
              style={{
                marginLeft: "20px",
                marginTop: "20px",
              }}
              variant="h4"
              gutterBottom
            >
              Why CV is important ?
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "20px",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} A journey to join a company begins with a well-crafted CV,
              where every detail is thoughtfully arranged, and every piece of
              information is strategically presented. It is through this
              document that their capabilities and potential are showcased,
              leaving no doubt that they are the perfect fit for the
              organizations success.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "20px",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Embarking on the path to joining a company as an engineer
              requires more than just technical prowess. It starts with a
              meticulously constructed CV, where each aspect is thoughtfully
              arranged and every morsel of information is strategically
              conveyed. This document becomes a powerful testament to their
              skills, expertise, and unwavering commitment, leaving an indelible
              impression that they are the catalyst for the companys triumph and
              innovation.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: "45%",
          }}
        >
          <Stack>
            <img
              style={{
                width: "90%",
                height: "85%",
                borderRadius: "10px",
                margin: "20% auto",
              }}
              src="/assets/New Searching Zoom GIF.gif"
              alt=""
              srcSet=""
            />
          </Stack>
        </Stack>
      </Stack>
      <br />
      <br />
      <br />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "gray",
          height: "450px",
        }}
      >
        <Stack
          sx={{
            width: "45%",
            display: "flex",
          }}
        >
          <Stack>
            <img
              style={{
                width: "90%",
                height: "60%",
                borderRadius: "10px",
                margin: "60px",
              }}
              src="/assets/Red Girl No Background.gif"
              alt=""
            />
          </Stack>
        </Stack>
        <Stack
          spacing="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Stack>
            <Typography
              style={{
                marginLeft: "10%",
                marginTop: "5%",
              }}
              variant="h4"
              gutterBottom
            >
              Why Skills is important in CV?
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "10%",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Skills are crucial in a CV because they provide a concise
              summary of an individuals abilities and qualifications.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "10%",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Overall, skills play a pivotal role in communicating an
              individuals abilities, matching job requirements, and setting them
              apart from other candidates, making them an essential component of
              an effective CV.
            </Typography>
          </Stack>
          <Stack>
            <Button
              style={{
                width: "115px",
                margin: "20px auto",
              }}
              variant="contained"
            >
              create CV
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          // backgroundColor: "gray",
          height: "600px",
        }}
      >
        <Stack
          spacing="10px"
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
          }}
        >
          <Stack>
            <Typography
              style={{
                marginLeft: "20px",
              }}
              variant="h4"
              gutterBottom
            >
              Why the Interviewer Should Select You in The Interview?
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "20px",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Expertise: I bring a wealth of knowledge and expertise in
              [relevant field/industry]. With [number] years of experience, I
              have developed a deep understanding of industry trends, best
              practices, and innovative solutions.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "20px",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Versatility: I possess a versatile skill set that allows me
              to adapt and excel in various roles and responsibilities. Whether
              its [specific skills], I am confident in my ability to contribute
              effectively and make a significant impact.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
              color: "white",
              width: "85%",
              borderRadius: "10px",
              marginLeft: "20px",
              padding: "16px",
              boxShadow: "10px 10px 10px gray",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {">>"} Strong Work Ethic: I am highly motivated and dedicated to
              achieving excellence in everything I do. I take pride in my work
              and consistently strive for continuous improvement. I am known for
              my reliability, attention to detail, and ability to meet deadlines
              under pressure.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: "45%",
          }}
        >
          <Stack>
            <img
              style={{
                width: "100%",
                height: "90%",
                borderRadius: "10px",
                margin: "20px auto",
              }}
              src="/assets/selector.gif"
              alt=""
              srcSet=""
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default SecondComponent;
