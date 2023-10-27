import React from "react";
import "./style.scss";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const accordionItems = [
  {
    id: 1,
    accordionQuestion: "What types of businesses do you work with?",
    accordionAnswer: `WeXcute works with a diverse range of businesses, from start-ups and small to medium-sized companies to large corporations.
    Our expertise spans various sectors, and we tailor our services to meet the unique needs of each client, ensuring successful
    digital product development.`,
  },
  {
    id: 2,
    accordionQuestion: "What services do you offer?",
    accordionAnswer: `We offer a comprehensive suite of services, including Web design, Web Applications, Mobile Applications, Modules/Addons, Web
    Games, VR Solutions, as well as Consulting & Advisory services to help you make informed decisions about your digital product
    development. Check them out here..`,
  },
  {
    id: 3,
    accordionQuestion: "What is your process for developing a digital product?",
    accordionAnswer: `We are very proud of our 4D development process, but you can find a full explanation of all the steps here.`,
  },
  {
    id: 4,
    accordionQuestion:
      "How long does it typically take to develop a digital product?",
    accordionAnswer: `The timeline for developing a digital product depends on the project's complexity and requirements. On average, a project may
    take anywhere from a few weeks to several months. We'll provide you with a clear timeline during the project proposal and
    agreement phase.`,
  },
  {
    id: 5,
    accordionQuestion: "How much does it cost to develop a digital product?",
    accordionAnswer: `The cost of developing a digital product varies depending on the project's scope, complexity, and specific requirements. We
    provide a detailed cost estimate in our project proposal after our initial consultation.`,
  },
  {
    id: 6,
    accordionQuestion: "How do you ensure the quality of your work?",
    accordionAnswer: `We have a rigorous quality assurance process in place, which includes functionality, usability, and compatibility testing
    before launching any digital product. We also follow software engineering best practices and use the latest technologies to
    guarantee top-notch performance and user experience.`,
  },
  {
    id: 7,
    accordionQuestion:
      "Do you offer ongoing support and maintenance after the product is launched?",
    accordionAnswer: `Yes, we offer ongoing support and maintenance services to ensure your digital solution stays up-to-date, secure, and optimised
    for peak performance. Our commitment to your long-term success means we're here to assist you as your business grows and`,
  },
  {
    id: 8,
    accordionQuestion: "How do I get started with WeXcute?",
    accordionAnswer: `To get started, simply reach out to us through our contact form, email, or phone. Our team will schedule an initial
    consultation to discuss your project requirements, goals, and expectations, and we'll guide you through the next steps.`,
  },
  {
    id: 9,
    accordionQuestion:
      "Can your team of engineers integrate my digital product with existing systems and software?",
    accordionAnswer: `Yes, our team of experienced engineers can integrate your digital product with your existing systems and software, ensuring
    seamless connectivity and interoperability. We work with you to understand your current infrastructure and create a tailored
    solution that aligns with your business needs.`,
  },
  {
    id: 10,
    accordionQuestion:
      "How do you ensure my digital product development project stays on budget and on time?",
    accordionAnswer: ` We follow a structured project management approach, with clear milestones and regular progress updates to ensure your digital
    product/software development project stays on track. Our team maintains open communication with you throughout the development
    process, addressing any concerns or changes promptly to minimise delays and avoid exceeding the agreed-upon budget..`,
  },
  {
    id: 11,
    accordionQuestion:
      "Will I own the intellectual property rights to my project?",
    accordionAnswer: `Yes, upon completion of the project and receipt of final payment, you will own the intellectual property rights to your
    digital product/software engineering project, including source code, design assets, and any other materials created
    specifically for your project.`,
  },
  {
    id: 12,
    accordionQuestion:
      "Do you provide training and documentation for the digital products you develop, such as mobile app development projects?",
    accordionAnswer: `Yes, we offer training and comprehensive documentation to help you and your team effectively use and manage your new digital
    product, including mobile app development projects. Our support extends beyond product launch, and we're always available to
    answer any questions and provide additional guidance as needed.`,
  },
  {
    id: 13,
    accordionQuestion:
      "Can you help with the marketing and promotion of my digital product development project?",
    accordionAnswer: `While our primary focus is on software and app development, we can provide guidance and recommendations for marketing and
    promoting your digital product development project. Our expertise in the industry and understanding of your target audience
    enables us to offer valuable insights and suggest effective marketing strategies.`,
  },
  {
    id: 14,
    accordionQuestion:
      "How do you handle data security and user privacy in your smart IT solutions?",
    accordionAnswer: `We take data security and user privacy very seriously. Our team adheres to industry best practices and follows relevant data
    protection regulations to ensure your smart IT solutions comply with the required standards. We implement robust security
    measures and conduct thorough testing to minimise potential vulnerabilities.`,
  },
  {
    id: 15,
    accordionQuestion:
      "Can you develop custom features and functionalities for my digital product development stages?",
    accordionAnswer: `Absolutely! Our team specialises in creating tailored digital solutions with custom features and functionalities that cater to
    your specific business needs and objectives during the digital product development stages. We work closely with you to
    understand your requirements and develop a solution that sets your product apart.`,
  },
];

const Faq = () => {
  return (
    <Stack
      id="faq-content"
      className="section-content"
      alignItems={"center"}
      gap={3}
    >
      {accordionItems.map((accordion) => (
        <Accordion
          disableGutters
          key={accordion.id}
          variant="outlined"
          sx={{ border: `1px solid #DFE6F0` }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMore
                sx={{ color: "#E41469", width: "32px", hei: "32px" }}
              />
            }
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ fontSize: "20px" }}
            >
              {accordion.accordionQuestion}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{accordion.accordionAnswer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};

export default Faq;
