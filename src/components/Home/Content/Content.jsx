import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

const Content = () => {
  return (
    <Stack>
      <Stack
        // spacing="5px"
        sx={{
          alignItems: "center",
          backgroundColor: "#A7DFFF",
          height: "385px",
        }}
      >
        <img
          src="/assets/newenter.gif"
          alt=""
          srcset=""
          style={{
            width: "270px",
            height: "170x",
          }}
        />
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
            marginTop: "30px",
          }}
          variant="contained"
        >
          Create Cv
        </Button>
      </Stack>

      <Stack
        sx={{
          backgroundColor: "#8080801a",
          boxShadow: "0px 3px 8px #00000014",
        }}
      >
        <Stack
          spacing="20px"
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            margin: "-25px auto ",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "white",
              width: "235px",
            }}
          >
            <img
              src="/assets/Badge1.png  "
              alt=""
              style={{
                width: "80px",
                height: "80x",
                margin: "25px auto",
              }}
            />
          </Stack>
          <Stack
            sx={{
              marginLeft: "20px",
            }}
          >
            <Typography variant="h6">Quick and easy resume builder</Typography>

            <Typography
              sx={{
                color: "gray",
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
        <br />
        <br />
        <Stack
          spacing="20px"
          sx={{
            backgroundColor: "blue",
            width: "80%",
            display: "flex",
            flexDirection: "row",
            margin: "0px auto ",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "white",
              width: "160px",
            }}
          >
            <img
              src="/assets/Badge2.png  "
              alt=""
              style={{
                width: "80px",
                height: "80x",
                margin: "25px auto",
              }}
            />
          </Stack>
          <Stack
            sx={{
              marginLeft: "20px",
            }}
          >
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
        <br />
        <Stack
          spacing="20px"
          sx={{
            backgroundColor: "blue",
            width: "80%",
            display: "flex",
            flexDirection: "row",
            margin: "0px auto ",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 10px gray",
            borderRadius: "10px",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "white",
              width: "235px",
            }}
          >
            <img
              src="/assets/Badge3.png  "
              alt=""
              style={{
                width: "80px",
                height: "80x",
                margin: "25px auto",
              }}
            />
          </Stack>
          <Stack
            sx={{
              marginLeft: "20px",
            }}
          >
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
        <br />
      </Stack>
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
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              organization's success.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              impression that they are the catalyst for the company's triumph
              and innovation.
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
                height: "85%",
                borderRadius: "10px",
                marginTop: "11%",
              }}
              src="/assets/New Searching Zoom GIF.gif"
              alt=""
              srcset=""
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
                margin: "30px",
              }}
              src="/assets/important.gif"
              alt=""
              srcset=""
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
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              summary of an individual's abilities and qualifications.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              individual's abilities, matching job requirements, and setting
              them apart from other candidates, making them an essential
              component of an effective CV.
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
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              it's [specific skills], I am confident in my ability to contribute
              effectively and make a significant impact.
            </Typography>
          </Stack>
          <Stack
            style={{
              background: "linear-gradient(to left bottom, purple, #246cb6)",
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
              }}
              src="/assets/selector.gif"
              alt=""
              srcset=""
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack
        spacing="10px"
        sx={{
          height: "1770px",
          backgroundColor: "#f7f7f7",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              marginTop: "20px",
            }}
            variant="h4"
            gutterBottom
          >
            CV (Curriculum Vitae)
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            Information, Frequently Asked Questions, and Tips on Your resume.
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "80%",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px gray",
            padding: "24px",
            borderRadius: "5px",
          }}
          style={{
            margin: "10px auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            What is a CV or resume?
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -CV or resume is an abbreviation of the Latin words 'curriculum
            vitae', which mean 'life course'. A professional resume provides a
            summary and a good overview of someone's life. Your resume includes
            your education(s) and qualifications, work experience, skills, and
            important qualities. By means of your resume, your potential
            employer will be able to get a good picture of your skills, work
            experience, and knowledge quickly, to assess whether or not you fit
            the job, and therefore whether to offer you a job interview.
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "80%",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px gray",
            padding: "24px",
            borderRadius: "5px",
          }}
          style={{
            margin: "10px auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            What should I include in my curriculum vitae?
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -Your resume should only contain information relevant to your
            potential employer. So that means, what should be in your resume can
            differ per application. However, the bare minimum of details on your
            resume should at least include;
          </Typography>

          <Typography variant="h6" gutterBottom>
            Personal details
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -Of course, your new employers should be able to contact you for a
            job interview. Therefore, you always start by mentioning your full
            name and email address and (mobile) phone number. Also mention your
            place of residence and address, as an employer might prefer an
            employee living nearby. In case a driver's license is required for
            the role, also mention it. In case you have a representative
            LinkedIn profile or personal website, you can include a link to it
            in the personal details section.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Work experience
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -In an a-chronological order, list your latest work experience.
            Start with your latest job and continue with the jobs you worked at
            before. Per job, give a short clear summary of your tasks,
            responsibilities and skills. Tip: try and list skills and
            responsibilities most relevant to the role you’re applying for!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -ust like the previous overview of work experience, start of with
            your last study or highest level of education. Also name the school
            or institution where you studied, the starting date and date of
            graduation.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Personal statement or resume profile
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -Most modern resumes include a short introductory paragraph called
            personal statement or profile. In this paragraph, which is read by
            most recruiters, you will get the chance to sell yourself in a few
            sentences; the kind of role you are looking for, your qualities and
            ambitions. .
          </Typography>
          <Typography variant="h6" gutterBottom>
            Competencies and skills
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -All jobs are different of course. However, during your career, you
            gain competencies and skills which are transferable. These strong
            personal traits are gained through experience and will help you
            execute any other job more efficiently.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Courses and work-related trainings
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -Some employers offer courses or trainings to improve certain skills
            of their employees. If you have followed any and they’ve improved
            skills or competencies that are relevant for your new job, make sure
            to include them. Make sure to mention whether you earned a diploma
            or certificate!
          </Typography>
          <Typography variant="h6" gutterBottom>
            Activities
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -You can also gain certain skills and competencies in a
            non-professional setting. For instance by doing voluntary work as a
            coach, trainer or accountant for a club or organization. If you have
            done these activities during your study, they are refered to as an
            extracurricular activity. Make sure to list them including the
            skills you gained.
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: "80%",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px gray",
            padding: "24px",
            borderRadius: "5px",
          }}
          style={{
            margin: "10px auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            What is a chronological resume, and what order should it be in?
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -he most widely used resume is known as the Chronological resume.
            This means that time-dependent components, such as education and
            work experience, are represented in a reverse-chronological
            structure. Your last (most recent) job should be first (top), and
            your first job should be last (bottom). This also applies to all
            other experiences that you mention on your resume that took place
            within a certain period, such as study programs, courses,
            internships, and ancillary activities. The order of your resume is
            then as follows: personal and contact details, followed by a concise
            personal profile about yourself. Hereafter, state your training,
            followed by any work experience, languages, skills, characteristics,
            and interests.
          </Typography>
        </Stack>

        <Stack
          sx={{
            width: "80%",
            backgroundColor: "white",
            boxShadow: "0px 0px 6px gray",
            padding: "24px",
            borderRadius: "5px",
          }}
          style={{
            margin: "10px auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            How to make your own resume (or application letter)
          </Typography>
          <Typography
            style={{
              color: "gray",
            }}
            variant="subtitle1"
            gutterBottom
          >
            -You can create a resume with your own word processing program such
            as Microsoft Word, and then convert it to PDF format. Search the
            Internet for a free resume example or resume template and see if you
            can replicate it. Or, use our CV Creator where you can simply enter
            your data and your perfect resume will be available for download in
            just 15 minutes. Of course, the same can be done to create an
            accompanying application letter, too!
          </Typography>
        </Stack>
      </Stack>
      <br />
      <Stack
        sx={{
          width: "95%",
          textAlign: "center",
          background: "linear-gradient(to left bottom, purple, #246cb6)",
          borderRadius: "12px",
          boxShadow: "0px 0px 20px gray",
          margin: "10px auto",
        }}
      >
        <Stack>
          <Stack>
            <Typography style={{ marginTop: "10px" }} variant="h5" gutterBottom>
              Some of Customer's Reviews
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          sx={{
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(to left bottom, purple, #246cb6)",
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
