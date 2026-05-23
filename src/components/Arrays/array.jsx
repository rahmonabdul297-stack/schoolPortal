import { FaHome } from "react-icons/fa";
import { FaFile, FaRegAddressCard } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";


export const navbar=[
           
  {id:1,nav:"home",url:"/homepage", icon:   <FaHome />,target:""},
  {id:2,nav:"about us",url:"/about", icon:    <FaFile />,target:""},
  {id:3,nav:"admission",url:"/addmission", icon:<FaRegAddressCard />,target:""},
  {id:4,nav:"result portal",url:"/result-portal", icon:"",target:""},
  {id:5,nav:"contact us",url:"/contact", icon:   <IoIosContacts />,target:""},
  {id:6,nav:"scholarship",url:"/scholarship", icon:"",target:""},
  {id:7,nav:"FAQs",url:"/faq", icon:"",target:""},

]

export const scholarshipPillars = [
  {
    id: 1,
    title: "Rewarding Excellence",
    text: "Scholarships are awarded to high‑achieving students who demonstrate outstanding academic performance and leadership qualities.",
  },
  {
    id: 2,
    title: "Empowering the Underprivileged",
    text: "Special grants are allocated to students from economically disadvantaged backgrounds, ensuring they can afford tuition, learning materials, and other essentials.",
  },
  {
    id: 3,
    title: "Holistic Development",
    text: "Beyond fees, scholars benefit from career counseling, internship placements, and participation in conferences to nurture their overall growth.",
  },
];

export const scholarshipLegacyPoints = [
  {
    id: 1,
    title: "Alumni Impact",
    text: "Many past beneficiaries have gone on to excel in medicine, engineering, business, and public service, crediting the scholarship for laying the foundation of their success.",
  },
  {
    id: 2,
    title: "Continuous Support",
    text: "The scheme remains vibrant, with current cohorts receiving timely financial aid, mentorship, and access to exclusive workshops and networking events.",
  },
];
export const schoolQualifications =[
  {id:1, qua:"Qualified Teachers", note:"Our experienced and dedicated teachers are committed to helping every student learn, grow, and succeed academically."},

    {id:2, qua:"Good Learning Environment", note:"We provide a safe, friendly, and supportive environment where students can study comfortably and confidently."},


      {id:3, qua:"Modern Facilities", note:"Our school is equipped with modern classrooms, laboratories, computers, and learning tools to improve education."},

        {id:4, qua:"Academic Excellence", note:"We focus on high academic standards and excellent performance, helping students achieve success in their studies and future careers."},
]

export const homeStats = [
  { id: 1, value: "20+", label: "Years of excellence" },
  { id: 2, value: "2006", label: "College section founded" },
  { id: 3, value: "2", label: "Primary & secondary" },
  { id: 4, value: "∞", label: "Dreams nurtured" },
];

export const homePrograms = [
  {
    id: 1,
    title: "Primary admission",
    description:
      "Foundation years focused on literacy, numeracy, and character building.",
    url: "/addmission",
    cta: "View requirements",
  },
  {
    id: 2,
    title: "Scholarship scheme",
    description:
      "Merit and need-based support for deserving learners across our community.",
    url: "/scholarship",
    cta: "Learn more",
  },
  {
    id: 3,
    title: "Result portal",
    description:
      "Staff and students access reports, grades, and academic records online.",
    url: "/result-portal",
    cta: "Open portal",
  },
  {
    id: 4,
    title: "Contact & visit",
    description:
      "Book a campus tour, ask about fees, or speak with our admissions team.",
    url: "/contact",
    cta: "Get in touch",
  },
];

export const EventsArr = [
  { id: 1, Events: "Culture Day", EventsImg: "/images/culture day.webp" },
  { id: 2, Events: "Award Ceremony", EventsImg: "/images/cert 1.webp" },
  { id: 3, Events: "Graduation Ceremony", EventsImg: "/images/cert 2.webp" },
  { id: 4, Events: "Certificate Presentation", EventsImg: "/images/cert 3.webp" },
  { id: 5, Events: "School Team", EventsImg: "/images/school team.webp" },
];

export const faqsArr = [
  {
    id: 1,
    question: "When was Ayodele Schools established?",
    answer:
      "Ayodele Schools has been in existence for over three decades. The Primary School section started first, and the College section was established in 2006.",
  },
  {
    id: 2,
    question: "Who founded Ayodele Schools?",
    answer:
      "The school was founded by the Late Mrs Ajike Olanike Omobo, whose vision was to provide quality education where every pupil and student can find an avenue for success.",
  },
  {
    id: 3,
    question: "What sections does Ayodele Schools offer?",
    answer:
      "We run both Primary and Secondary sections. The Primary section builds literacy, numeracy, and foundational skills, while the Secondary section offers a more specialized curriculum to prepare students for higher education and careers.",
  },
  {
    id: 4,
    question: "Where is Ayodele Schools located?",
    answer:
      "Ayodele Schools is located in Sagamu and serves learners across Sagamu and surrounding communities. For directions or a campus visit, please use our Contact page.",
  },
  {
    id: 5,
    question: "How can I apply for admission?",
    answer:
      "Admissions are open for new pupils and students. Visit our Admission page or contact the school office for application forms, requirements, and the current admission schedule.",
  },
  {
    id: 6,
    question: "Does the school offer scholarships or placement support?",
    answer:
      "Yes. Ayodele Schools has strong placement and scholarship programmes that have benefited many students and continue to support learners who meet the school's criteria.",
  },
  {
    id: 7,
    question: "What programmes are available beyond academics?",
    answer:
      "In addition to strong academics, we offer vocational training, athletics, performing arts, and academic intervention programmes so every learner can grow in their area of strength.",
  },
  {
    id: 8,
    question: "How can parents check their child's results?",
    answer:
      "Results are available through our online Result Portal. Go to Result Portal in the navigation, then choose Staff or Student to sign in and view results.",
  },
  {
    id: 9,
    question: "What makes Ayodele Schools different?",
    answer:
      "We combine qualified teachers, modern facilities, a culture of excellence, and a supportive learning environment. Our goal is to help every child get the right footing in education and reach their full potential.",
  },
  {
    id: 10,
    question: "How can I contact the school?",
    answer:
      "You can reach us through the Contact page on this website, email us at ayodelecollege247@gmail.com, or send a message via our contact form. Our team will respond as soon as possible.",
  },
];

export const SCHOOL_EMAIL = "ayodelecollege247@gmail.com";
export const SCHOOL_EMAIL2 = "ayodelecollegeofexcellence85@yahoo.com";

export const RESULT_PORTAL_URL =
  "https://result-management-kappa.vercel.app/";
  export const RESULT_PORTAL_CHECK_URL =
  "  https://result-management-kappa.vercel.app/checkResult";


export const primaryAdmissionRequirements = [
  {
    id: 1,
    title: "Completed application form",
    description:
      "Obtain and fill the official Ayodele Schools admission form from the school office or download it when available online.",
    icon: "form",
  },
  {
    id: 2,
    title: "Birth certificate",
    description:
      "Provide a valid birth certificate or sworn age declaration from a recognised authority for age verification.",
    icon: "birth",
  },
  {
    id: 3,
    title: "Passport photographs",
    description:
      "Submit recent passport-sized photographs of the child (usually two to four copies, as specified by the school).",
    icon: "photo",
  },
  {
    id: 4,
    title: "Immunization record",
    description:
      "Present an up-to-date immunization card showing vaccinations such as BCG, OPV, DPT, measles, and yellow fever where applicable.",
    icon: "health",
  },
  {
    id: 5,
    title: "Previous school report",
    description:
      "For pupils transferring from another school, bring the last report card or transfer certificate from the previous institution.",
    icon: "report",
  },
  {
    id: 6,
    title: "Parent or guardian ID",
    description:
      "A valid means of identification for the parent or legal guardian (national ID, driver's licence, or international passport).",
    icon: "id",
  },
  {
    id: 7,
    title: "Entrance assessment",
    description:
      "The child may sit a short placement or entrance assessment so we can place them in the appropriate class level.",
    icon: "assessment",
  },
  {
    id: 8,
    title: "Application & registration fees",
    description:
      "Pay the required non-refundable application fee and registration deposit as advised by the admissions office.",
    icon: "payment",
  },
];

export const admissionSteps = [
  {
    id: 1,
    step: "Visit or contact the school",
    detail: "Call, email, or visit our campus in Sagamu to request admission information.",
  },
  {
    id: 2,
    step: "Submit required documents",
    detail: "Bring all documents listed below for verification by the admissions team.",
  },
  {
    id: 3,
    step: "Assessment & interview",
    detail: "Your child completes a brief assessment; parents may attend a short interview.",
  },
  {
    id: 4,
    step: "Receive admission letter",
    detail: "Successful candidates receive an offer letter and fee payment schedule.",
  },
  {
    id: 5,
    step: "Complete enrolment",
    detail: "Pay fees, collect uniform list, and receive resumption details for the new session.",
  },
];

export const contactSchoolInfo = [
  {
    id: 1,
    title: "Who We Are",
    text: "Ayodele Schools was founded by the Late Mrs Ajike Olanike Omobo and has served learners in Sagamu for over three decades, with our College section established in 2006.",
  },
  {
    id: 2,
    title: "Sections We Run",
    text: "We offer both Primary and Secondary education, with strong academic, vocational, athletic, and performing arts programmes.",
  },
  {
    id: 3,
    title: "Admissions",
    text: "Admissions are open for new pupils and students. Contact us for application requirements, dates, and enrolment guidance.",
  },
  {
    id: 4,
    title: "Results & Support",
    text: "Parents can access student results through our online Result Portal. For enquiries about fees, transfers, or welfare, reach out via this form or email.",
  },
];








