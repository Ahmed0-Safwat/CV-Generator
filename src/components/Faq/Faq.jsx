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
    accordionQuestion: "What services do you provide for CV creation?",
    accordionAnswer: `CV Creator can craft various CV styles, including Chronological, Functional, Combination, Targeted, and Creative CVs. These styles cater to diverse career backgrounds and goals, ensuring that you receive a CV that matches your specific needs.`,
  },
  {
    id: 2,
    accordionQuestion:
      "Can you create custom CV features and sections tailored to my career goals?",
    accordionAnswer: `At CV Creator, we offer flexibility in creating custom CV features and sections tailored to your unique career goals. This includes personalized sections, content tailoring, design elements, keyword optimization, and integration with online profiles. Our aim is to help you craft a CV that perfectly aligns with your aspirations, regardless of your industry or sector.`,
  },
  {
    id: 3,
    accordionQuestion: "What is your process for developing a CV?",
    accordionAnswer: `CV Creator streamlines the CV creation process for efficiency and effectiveness. It involves an exploration of your background and career goals, user-friendly design, content development with writing tips, customization for a unique CV, secure storage, easy sharing, and ongoing support. This process caters to various professionals, whether you're a recent graduate or an experienced career changer.`,
  },
  {
    id: 4,
    accordionQuestion: "How long does it typically take to create a CV?",
    accordionAnswer: `Creating a CV on CV Creator is a quick process, taking just a matter of minutes. Factors affecting the time include existing materials, customization, review, and familiarity with the platform. It can take as little as a few hours or more, depending on personal preferences and requirements.`,
  },
  {
    id: 5,
    accordionQuestion: "How much does it cost to create a CV?",
    accordionAnswer: `Creating a CV on CV Creator offers both free and premium features. Free services include basic template choices and formatting. Premium features provide advanced options like multiple formats, grammar help, and more templates for a one-time or subscription fee. Optional services, such as professional review, are also available for an extra cost, catering to various budget preferences.`,
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
    accordionQuestion: "How do you ensure the quality of your CVs?",
    accordionAnswer: `CV Creator is dedicated to producing high-quality CVs. Our quality assurance process incorporates professional templates, built-in spell-check and grammar tools, easy formatting, and guidance for compelling content. Users can review, edit, and seek feedback. For added assurance, we offer an optional expert review service. These elements ensure CVs reflect individuals' skills and experiences effectively.`,
  },
  {
    id: 8,
    accordionQuestion: "How do I get started with WeXcute?",
    accordionAnswer: `To get started, simply reach out to us through our contact form, email, or phone. Our team will schedule an initial
    consultation to discuss your project requirements, goals, and expectations, and we'll guide you through the next steps.`,
  },
  {
    id: 9,
    accordionQuestion: "Do you offer support after the CV is completed?",
    accordionAnswer: `CV Creator offers continuous support beyond CV creation. You can edit and update your CV, access technical support, receive content advice, and opt for expert services if needed. Our FAQs and resources are available to assist you at every career stage, ensuring your CV remains a valuable tool as your professional journey evolves.`,
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
    accordionQuestion: "How do I get started with CV Creator?",
    accordionAnswer: `CV Creator makes CV creation simple and efficient. Sign up, choose a template, enter your information, customize the layout and design, preview, and edit. Download your CV in various formats and share it. Optional expert services are available for professional guidance. Our user-friendly platform ensures your CV represents your skills and experience effectively.`,
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
      "Can your team assist in tailoring the CV to my specific career goals?",
    accordionAnswer: `At CV Creator, we help tailor your CV for your specific career goals. Choose from various templates, personalize sections, customize content, design, and layout. Optional expert services are available for professional guidance. We ensure your CV aligns with your career aspirations, whether it's for a specific job, industry, or career change. Your success is our priority.`,
  },
  {
    id: 14,
    accordionQuestion: "How do you ensure my CV project stays on schedule?",
    accordionAnswer: `At CV Creator, we prioritize staying on schedule for your CV project with a structured process and various tools. Our approach includes project management tools, timely communication, clear deadlines, streamlined processes, customer collaboration, expert assistance, and quality assurance to ensure your CV is delivered on time without compromising quality. Your project's timely completion is our commitment.`,
  },
  {
    id: 15,
    accordionQuestion: "Will I have ownership of the CV?",
    accordionAnswer: `At CV Creator, you have full ownership of the CV we create for you. Your CV is your personal and professional document. Once it's completed, it's entirely yours to use, share, or modify as you see fit. We respect your ownership rights and ensure you have complete control over the final document.`,
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
