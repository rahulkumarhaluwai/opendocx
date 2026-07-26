export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
        initialContent: "",
    },

    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>

            <h2>Project Overview</h2>
            <p>
                This proposal outlines the development of a software solution
                designed to address the client's business requirements and goals.
            </p>

            <h2>Objectives</h2>
            <ul>
                <li>Develop a reliable and scalable software solution.</li>
                <li>Provide a user-friendly and intuitive experience.</li>
                <li>Ensure security, performance, and maintainability.</li>
            </ul>

            <h2>Scope of Work</h2>
            <p>
                The project will include requirements analysis, UI/UX design,
                software development, testing, deployment, and maintenance.
            </p>

            <h2>Technology Stack</h2>
            <ul>
                <li>Frontend: React / Next.js</li>
                <li>Backend: Node.js / Express</li>
                <li>Database: PostgreSQL</li>
                <li>Deployment: Cloud Platform</li>
            </ul>

            <h2>Timeline</h2>
            <p>
                The estimated project timeline will be determined based on the
                final requirements and project scope.
            </p>

            <h2>Budget</h2>
            <p>
                The estimated project budget will be finalized after reviewing
                the complete project requirements.
            </p>

            <h2>Conclusion</h2>
            <p>
                We look forward to working with you and delivering a successful
                software solution that meets your business needs.
            </p>
        `,
    },

    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>

            <h2>Project Title</h2>
            <p>Enter your project title here.</p>

            <h2>Introduction</h2>
            <p>
                Provide a brief introduction to the project and explain why
                the project is important.
            </p>

            <h2>Problem Statement</h2>
            <p>
                Describe the problem or challenge that this project aims to solve.
            </p>

            <h2>Project Objectives</h2>
            <ul>
                <li>Define the primary objective of the project.</li>
                <li>Identify the expected outcomes.</li>
                <li>Deliver a reliable and effective solution.</li>
            </ul>

            <h2>Project Scope</h2>
            <p>
                Describe what is included in the project and clearly define
                the boundaries of the work.
            </p>

            <h2>Project Timeline</h2>
            <p>
                <strong>Start Date:</strong> ____________________
            </p>
            <p>
                <strong>End Date:</strong> ____________________
            </p>

            <h2>Budget</h2>
            <p>
                Estimated project budget: $____________________
            </p>

            <h2>Expected Outcomes</h2>
            <p>
                Describe the expected results and benefits of completing the project.
            </p>

            <h2>Conclusion</h2>
            <p>
                Summarize the proposal and explain why the project should be approved.
            </p>
        `,
    },

    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
            <p><strong>Date:</strong> ____________________</p>

            <p>
                <strong>Recipient Name</strong><br>
                Company Name<br>
                Address<br>
                City, State, ZIP Code
            </p>

            <p><strong>Subject: ______________________________</strong></p>

            <p>Dear ____________________,</p>

            <p>
                I am writing to you regarding ______________________________.
                The purpose of this letter is to provide information about
                the matter discussed below.
            </p>

            <p>
                Please provide the necessary details, background information,
                or additional context in this section.
            </p>

            <p>
                I would appreciate your consideration and look forward to
                hearing from you.
            </p>

            <p>Sincerely,</p>

            <p>
                <strong>Your Name</strong><br>
                Your Position<br>
                Company Name<br>
                Email Address<br>
                Phone Number
            </p>
        `,
    },

    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
            <h1>Your Name</h1>
            <p>
                Email: your.email@example.com |
                Phone: +1 (000) 000-0000 |
                Location: City, State
            </p>

            <h2>Professional Summary</h2>
            <p>
                Motivated and results-oriented professional with experience in
                ______________________________. Skilled in ____________________,
                ____________________, and ____________________.
            </p>

            <h2>Work Experience</h2>

            <h3>Job Title — Company Name</h3>
            <p><strong>Month Year – Present</strong></p>
            <ul>
                <li>Describe your primary responsibility or achievement.</li>
                <li>Describe a measurable result or contribution.</li>
                <li>Highlight an important skill or accomplishment.</li>
            </ul>

            <h3>Previous Job Title — Previous Company</h3>
            <p><strong>Month Year – Month Year</strong></p>
            <ul>
                <li>Describe your primary responsibility or achievement.</li>
                <li>Describe a measurable result or contribution.</li>
            </ul>

            <h2>Education</h2>
            <h3>Degree Name</h3>
            <p>
                University Name — Graduation Year
            </p>

            <h2>Skills</h2>
            <ul>
                <li>Skill One</li>
                <li>Skill Two</li>
                <li>Skill Three</li>
                <li>Skill Four</li>
            </ul>

            <h2>Projects</h2>
            <h3>Project Name</h3>
            <p>
                Briefly describe the project, your contribution,
                and the technologies or skills used.
            </p>

            <h2>Certifications</h2>
            <ul>
                <li>Certification Name — Issuing Organization</li>
                <li>Certification Name — Issuing Organization</li>
            </ul>
        `,
    },

    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
            <p><strong>Your Name</strong></p>
            <p>
                Your Address<br>
                City, State, ZIP Code<br>
                your.email@example.com<br>
                +1 (000) 000-0000
            </p>

            <p><strong>Date:</strong> ____________________</p>

            <p>
                <strong>Hiring Manager</strong><br>
                Company Name<br>
                Company Address
            </p>

            <p><strong>Subject: Application for ____________________</strong></p>

            <p>Dear Hiring Manager,</p>

            <p>
                I am writing to express my interest in the ____________________
                position at ____________________. With my background in
                ____________________, I am confident that I can contribute
                effectively to your team.
            </p>

            <p>
                In my previous experience, I have developed skills in
                ____________________, ____________________, and ____________________.
                I have also worked on ____________________, which helped me
                develop strong problem-solving and communication skills.
            </p>

            <p>
                I am particularly interested in joining your organization because
                ______________________________.
            </p>

            <p>
                Thank you for your time and consideration. I would welcome the
                opportunity to discuss how my skills and experience align with
                this position.
            </p>

            <p>Sincerely,</p>

            <p>
                <strong>Your Name</strong>
            </p>
        `,
    },

    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
            <p><strong>Date:</strong> ____________________</p>

            <p>Dear ____________________,</p>

            <p>
                I hope you are doing well. I am writing this letter to
                ______________________________.
            </p>

            <p>
                Please add the main message of your letter here. You can include
                any relevant details, information, or personal thoughts.
            </p>

            <p>
                Thank you for your time. I look forward to hearing from you.
            </p>

            <p>Best regards,</p>

            <p>
                <strong>Your Name</strong>
            </p>
        `,
    },
];