import { Button, Rating, Stack, Typography } from "@mui/material";

const ThirdComponent = () => {
  return (
    <>
      <br />
      <br />
      <Stack
        spacing="10px"
        sx={{
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
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
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
            -CV or resume is an abbreviation of the Latin words `curriculum
            vitae`, which mean `life course`. A professional resume provides a
            summary and a good overview of someones life. Your resume includes
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
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
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
            employee living nearby. In case a drivers license is required for
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
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
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
            alignItems: {
              xs: "center",
              lg: "flex-start",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
          style={{
            margin: "10px auto",
          }}
        >
          <Typography variant="h6" gutterBottom>
            How to make your own resume (or application letter) ?
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
        <br />
      </Stack>
    </>
  );
};

export default ThirdComponent;
export const Content = () => {
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
