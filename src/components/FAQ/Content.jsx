import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Content = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#34a8ff4f",
        height: "100%",
      }}
    >
      <Stack>
        <img
          style={{
            width: "10%",
            margin: "1px auto",
          }}
          src="/assets/FAQ .gif"
          alt=""
        />
      </Stack>
      <Stack
        sx={{
          margin: "0px auto",
          textAlign: "center",
          width: "70%",
        }}
      >
        <Typography variant="h4" gutterBottom>
          FAQ
        </Typography>

        <Typography
          style={{
            color: "gray",
          }}
          variant="subtitle1"
          gutterBottom
        >
          Do you have a question? Please view the frequently asked questions.
          Please contact us if you cannot find your answer.
        </Typography>
      </Stack>

      <Stack
        sx={{
          width: "70%",
          margin: "0px auto",
        }}
      >
        <Accordion
          sx={{
            marginBottom: "20px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can I add a picture to my Resume?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In the first step of our CV creator entitled ‘Personal Details’,
              you can add a photo to your CV. Simply click on the photo icon
              next to the entry fields. You can then upload, edit, and then add
              your photo to your Resume.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Is my Resume also available for download in Word?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Due to the complexity of our templates, it is unfortunately not
              possible to download the Resume in Word. But do not worry: you can
              always edit your Resume via your account.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can I edit my Resume?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              After downloading your Resume, you will automatically receive an
              email with log-in details to be able to continuously edit it.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I sort the items?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can sort the items, with the arrows next to the relevant item.
              The added items within a component can also be sorted separately
              by pressing the 3 bars next to the item and then dragging the item
              to the desired position.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Are the items sorted chronologically?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The items are not automatically sorted chronologically. If you
              want the items to be sorted chronologically, click on the 3 dots
              next to the item and choose "sort chronologically". The items are
              then sorted immediately.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I hide an item on my Resume?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can hide items on your Resume by clicking on the 3 dots next
              to the item you want to hide and then clicking "Hide component".
              When you want to add or show the item again, you can select it
              from the selection bar at the bottom of step 2 of our CV creator.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Does it cost money to use CV-Creator.com?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can try the CV-Creator service and premium templates for $1
              .Or You can try the CV-Creator service and Normal templates for
              $0.5
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Can I download my Resume in another language (e.g. French)?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can choose to download your Resume in different languages
              while making your Resume. You can select this while filling in
              your personal details. Currently we offer the following languages:
              English, French, Italian, Spanish, German and Polish.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            marginBottom: "25px",
            background: "linear-gradient(to left bottom, #074c88, #577a9e)",
            color: "white",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "white",
                }}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I also create a cover letter?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Right now no but we are on our way to provide the service to make
              cover letter as soon as possible
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
      </Stack>
    </Stack>
  );
};

export default Content;
