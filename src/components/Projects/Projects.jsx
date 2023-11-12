import React from "react";
import "./style.scss";
import { Stack, Typography } from "@mui/material";

const projectsCards = [
  {
    id: 2,
    isReversed: false,
    cardIcon: "/images/projects1.png",
    cardTitle: "Chronological CV",
    cardSecondaryTitle: "Structure",
    cardTertiaryTitle: "Suitable For",
    cardBackground: "#c79e82d1",
    cardSecondaryText: `It's straightforward with sections for a professional summary, work experience, education, and skills.`,
    cardTertiaryText:
      "Ideal for those with a consistent work history, emphasizing career growth.",
    cardText: `The chronological CV, also known as a reverse-chronological CV, is the most common type. It lists your work experiences in reverse chronological order, starting with your most recent job and working backward.`,
    innerText: "Lists work history.",
  },
  {
    id: 3,
    isReversed: true,
    cardIcon: "/images/projects2.png",
    cardTitle: "Functional CV",
    cardSecondaryTitle: "Structure",
    cardTertiaryTitle: "Suitable For",
    cardBackground: "#d1c5c5c7",
    cardSecondaryText:
      "It starts with a skills summary followed by work experience, education, and additional sections for achievements or certifications.",
    cardTertiaryText:
      "Ideal for career changers, recent graduates, or those with employment gaps.",
    cardText: `The functional CV focuses on skills and qualifications rather than your work history. It's ideal for individuals with employment gaps or changing careers.`,
    innerText: "Focuses on skills.",
  },
  {
    id: 1,
    isReversed: false,
    cardIcon: "/images/projects3.png",
    cardTitle: "Combination CV",
    cardSecondaryTitle: "Structure",
    cardTertiaryTitle: "Suitable For",
    cardBackground: "#737373ad",
    cardSecondaryText:
      "It combines the skills summary, work experience, and other sections like education or certifications.",
    cardTertiaryText:
      "Great for those wanting to emphasize both skills and work experience without gaps.",
    cardText:
      "The combination CV, as the name suggests, blends elements of both chronological and functional CVs. It features a skills section upfront and follows with work history in reverse chronological order.",
    innerText: "Blends skills and work history.",
  },
  {
    id: 4,
    isReversed: true,
    cardIcon: "/images/projects4.png",
    cardTitle: "Targeted CV",
    cardSecondaryTitle: "Structure",
    cardTertiaryTitle: "Suitable For",
    cardBackground: "#04979e8c",
    cardSecondaryText:
      "Adapts to job requirements, usually starting with a tailored career summary followed by key qualifications and experiences.",
    cardTertiaryText: `Ideal for job applicants seeking to strongly align their CV with specific job requirements.`,
    cardText: `A targeted CV is customized for a specific job or company. It emphasizes the skills and experiences most relevant to that particular position.`,
    innerText: "Customized zed for specific jobs.",
  },
  {
    id: 5,
    isReversed: false,
    cardIcon: "/images/projects5.png",
    cardTitle: "Creative CV",
    cardSecondaryTitle: "Structure",
    cardTertiaryTitle: "Suitable For",
    cardBackground: "#485f7c9e",
    cardSecondaryText:
      "It can be highly personalized but typically includes sections like a bio, work history, skills, and a portfolio section.",
    cardTertiaryText:
      "Perfect for individuals in creative industries like graphic design or advertising, where creativity is highly valued.",
    cardText:
      "A creative CV allows you to showcase your personality and creativity. It often includes unique visuals, infographics, or unconventional layouts to stand out.",
    innerText: "Visually engaging for creatives.",
  },
];

const ProjectsCards = () => {
  const innerBackgroundImageUrl = "/images/projects-card-inner-bg.png";

  return (
    <Stack className="section-container">
      <Stack className="section-content" spacing={7}>
        <Stack maxWidth="1200px" width="100%" className="projects-text-wrapper">
          <Typography fontSize="24px" fontWeight={400} lineHeight="46px">
            Our diverse CV portfolio demonstrates our proficiency in a wide
            range of fields, emphasizing our dedication to producing outstanding
            CVs that cater to individuals of all backgrounds and aspirations.
            Discover our exceptional CV examples to witness how we've translated
            unique stories into compelling professional profiles.
          </Typography>
        </Stack>

        <Stack
          className="projects-cards-wrapper"
          maxWidth="1200px"
          width="100%"
          spacing={9}
        >
          {projectsCards.map((card) => (
            <Stack
              key={card.id}
              sx={{
                borderRadius: "20px",
                maxWidth: "1200px",
                width: "100%",
                padding: "32px",
                backgroundColor: `${card.cardBackground}`,
                justifyContent: "space-between",
              }}
              id={card.id}
              direction={{
                xs: "column-reverse",
                lg: card.isReversed ? "row" : "row-reverse",
              }}
              spacing={3}
            >
              <Stack
                sx={{ width: "100%", maxWidth: { xs: "100%", lg: "760px" } }}
                spacing={3}
              >
                <img
                  alt="image"
                  src={card.cardIcon}
                  width={750}
                  height={488}
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Stack maxWidth={{ xs: "100%", lg: "352px" }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: "", lg: "76px" } }}
                    >
                      {card.cardSecondaryTitle}
                    </Typography>

                    <Typography
                      fontSize="20px"
                      fontWeight={400}
                      lineHeight="38px"
                    >
                      {card.cardSecondaryText}
                    </Typography>
                  </Stack>

                  <Stack maxWidth={{ xs: "100%", lg: "380px" }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: "", lg: "76px" } }}
                    >
                      {card.cardTertiaryTitle}
                    </Typography>

                    <Typography
                      fontSize="20px"
                      fontWeight={400}
                      lineHeight="38px"
                    >
                      {card.cardTertiaryText}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                maxWidth={{ xs: "100%", lg: "368px" }}
                width="100%"
                spacing={8}
                justifyContent="flex-start"
              >
                <Stack spacing={2}>
                  <Typography
                    fontWeight={700}
                    fontSize="40px"
                    lineHeight="38px"
                  >
                    {card.cardTitle}
                  </Typography>

                  <Typography
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight="38px"
                  >
                    {card.cardText}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundImage: `url(${innerBackgroundImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    alignItems: "center",
                    height: 364,
                    justifyContent: "center",
                    borderRadius: "20px",
                    padding: "24px",
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  <Typography
                    fontSize="56px"
                    fontWeight={300}
                    lineHeight="64px"
                  >
                    <i>{card.innerText}</i>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectsCards;
