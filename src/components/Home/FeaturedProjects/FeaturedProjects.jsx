import "./style.scss";
import { Stack, Typography } from "@mui/material";
import ImagesCarousel from "../../Common/ImagesCarousel/ImagesCarousel";

const projectsSectionCards = [
  {
    id: 1,
    source: "/images/Mockup1.png",
    title: "Lina",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 2,
    source: "/images/Mockup2.png",
    title: "Nissan",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 3,
    source: "/images/Mockup3.png",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 4,
    source: "/images/Mockup4.png",
    title: "Jeep KSA",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 5,
    source: "/images/Mockup5.png",
    title: "Telecom Egypt",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 6,
    source: "/images/Mockup6.png",
    title: "Baddel",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 7,
    source: "/images/Mockup7.png",
    title: "Baddel",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 8,
    source: "/images/Mockup8.png",
    title: "Baddel",
    subtitle: "Design, Mobile App, Web",
  },
];

const FeaturedProjects = () => {
  // TODO: Handle projects routing.
  // const router = useRouter();

  // const navigateToProjects = (sectionId) => {
  //   router.push({
  //     pathname: `/projects`,
  //     query: {
  //       id: sectionId,
  //     },
  //   });
  // };

  return (
    <Stack className="section-container" alignItems={"center"}>
      <Stack
        alignItems={"center"}
        spacing={{ xs: 5, lg: 6 }}
        className="section-content"
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          justifyContent="space-between"
        >
          <Typography
            fontSize="64px"
            fontWeight={700}
            lineHeight="80px"
            width="100%"
            maxWidth={{ xs: "100%", lg: "300px" }}
            className="values-title"
          >
            Featured CVs
          </Typography>

          <Typography
            maxWidth="700px"
            width="100%"
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
          >
            CV Creator delivers effective CV solutions. We have a proven track
            record of success with a diverse range of clients. Contact us to
            learn more.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent={{ sm: "center", md: "flex-start", lg: "center" }}
          flexWrap="wrap"
          useFlexGap
        >
          <ImagesCarousel carouselImages={projectsSectionCards} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturedProjects;
