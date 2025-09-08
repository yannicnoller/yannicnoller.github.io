// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-sq-rub",
          title: "SQ@RUB",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-symbolic-pathfinder-setup-gradle",
        
          title: "Symbolic PathFinder Setup (Gradle)",
        
        description: "This post includes some valuable hints for building SPF with Gradle and some helpful advice for using it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/spf-gradle/";
          
        },
      },{id: "post-symbolic-pathfinder-setup-ant",
        
          title: "Symbolic PathFinder Setup (Ant)",
        
        description: "This post includes some valuable hints for building SPF with Ant and some helpful advice for using it.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/spf-ant/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-article-about-fuzzing-symbolic-execution-and-expert-guidance-for-better-testing-has-been-accepted-for-publication-in-ieee-software",
          title: 'Our article about Fuzzing, Symbolic Execution, and Expert Guidance for Better Testing has...',
          description: "",
          section: "News",},{id: "news-our-most-recent-work-on-program-repair-cerberus-a-fully-agnostic-repair-platform-has-been-accepted-for-the-tool-demonstrations-track-at-icse-2023-cerberus-currently-integrates-20-program-repair-tools-and-9-repair-benchmarks-across-multiple-target-languages-and-application-domains",
          title: 'Our most recent work on program repair – Cerberus, a fully agnostic repair...',
          description: "",
          section: "News",},{id: "news-i-attended-the-dagstuhl-seminar-on-software-bug-detection-challenges-and-synergies-it-was-great-to-discuss-with-so-many-experts-in-bug-detection",
          title: 'I attended the Dagstuhl seminar on Software Bug Detection: Challenges and Synergies! It...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-on-the-program-committee-for-issta-2024-looking-forward-to-great-submissions-smile",
          title: 'I have been invited to serve on the Program Committee for ISSTA 2024!...',
          description: "",
          section: "News",},{id: "news-icse-2023-happened-in-melbourne-great-conference-and-we-had-a-full-day-at-the-main-conference-filled-with-discussions-and-talks-about-automated-program-repair",
          title: 'ICSE’2023 happened in Melbourne! Great conference, and we had a full day at...',
          description: "",
          section: "News",},{id: "news-registration-is-now-open-for-the-1st-international-competition-on-automated-program-repair-check-our-website-https-apr-comp-github-io-for-more-information",
          title: 'Registration is now open for the 1st International Competition on Automated Program Repair....',
          description: "",
          section: "News",},{id: "news-started-my-new-position-as-assistant-professor-at-sutd",
          title: 'Started my new position as Assistant Professor at SUTD.',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-on-the-program-committee-for-icse-2025-looking-forward-to-many-great-submissions",
          title: 'I have been invited to serve on the Program Committee for ICSE 2025!...',
          description: "",
          section: "News",},{id: "news-our-work-on-evolutionary-testing-for-program-repair-has-been-accepted-for-icst-2024-with-evorepair-we-explore-a-coevolution-approach-that-generates-tests-and-repairs-in-a-unified-workflow-using-evosuite-check-our-preprint",
          title: 'Our work on “Evolutionary Testing for Program Repair” has been accepted for ICST...',
          description: "",
          section: "News",},{id: "news-i-had-fun-participating-in-steamxd-sutd-and-teaching-singapore-s-bright-jc-students-about-basic-principles-in-machine-learning",
          title: 'I had fun participating in STEAMxD @ SUTD and teaching Singapore’s bright JC...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-our-poster-about-exploring-complexity-estimation-with-symbolic-execution-and-large-language-models-has-been-accepted-for-the-klee-workshop-2024",
          title: 'Happy to share that our poster about “Exploring Complexity Estimation with Symbolic Execution...',
          description: "",
          section: "News",},{id: "news-our-report-about-the-apr-competition-will-be-presented-at-international-workshop-on-automated-program-repair-apr-2024-which-is-co-located-with-icse-2024-check-our-preprint",
          title: 'Our report about the APR competition will be presented at International Workshop on...',
          description: "",
          section: "News",},{id: "news-happy-to-be-the-publicity-co-chair-for-issta-2025-if-you-also-want-to-contribute-here-is-your-chance-issta-is-looking-for-competent-and-motivated-reviewers-for-its-2025-edition-nominate-yourself-deadline-feb-20-using-this-form-https-t-co-baxk2wn1v9",
          title: 'Happy to be the Publicity Co-Chair for ISSTA 2025!🇳🇴🥳 If you also want...',
          description: "",
          section: "News",},{id: "news-our-work-on-timing-side-channel-mitigation-via-automated-program-repair-has-been-accepted-to-be-published-in-tosem-read-the-preprint",
          title: 'Our work on “Timing Side-Channel Mitigation via Automated Program Repair” has been accepted...',
          description: "",
          section: "News",},{id: "news-after-almost-4-years-in-singapore-i-returned-to-germany-and-joined-the-ruhr-university-bochum-as-professor-in-the-faculty-of-computer-science",
          title: 'After almost 4 years in Singapore 🇸🇬, I returned to Germany 🇩🇪 and...',
          description: "",
          section: "News",},{id: "news-our-experience-report-about-the-steamxd-workshop-with-singapore-s-junior-college-students-will-be-presented-at-the-international-conference-on-engineering-and-product-design-education-e-amp-amp-pde-2024-check-our-preprint",
          title: 'Our experience report about the STEAMxD workshop with Singapore’s Junior College students will...',
          description: "",
          section: "News",},{id: "news-happy-to-be-the-proceedings-co-chair-for-ase-2025-looking-forward-to-an-excellent-conference",
          title: 'Happy to be the Proceedings Co-Chair for ASE 2025! 🇰🇷 🥳 Looking forward...',
          description: "",
          section: "News",},{id: "news-our-work-on-vulnerability-repair-via-concolic-execution-and-code-mutations-has-been-accepted-to-be-published-at-tosem-check-our-preprint",
          title: 'Our work on “Vulnerability Repair via Concolic Execution and Code Mutations” has been...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-on-the-fse-2025-tools-demonstrations-track-program-committee-looking-forward-to-many-great-submissions",
          title: 'I have been invited to serve on the FSE 2025 Tools Demonstrations track...',
          description: "",
          section: "News",},{id: "news-our-experience-report-about-how-to-build-an-intelligent-tutoring-system-as-part-of-a-software-engineering-course-has-been-accepted-at-the-ieee-conference-on-software-engineering-education-and-training-csee-amp-amp-t-2024-which-is-co-located-with-icse-25-check-our-preprint",
          title: 'Our experience report about how to build an Intelligent Tutoring System as part...',
          description: "",
          section: "News",},{id: "news-this-week-i-attended-the-shonan-meeting-217-on-trusted-automatic-programming-it-was-a-great-place-to-be-and-meet-colleagues-and-friends-i-presented-our-ongoing-work-on-developing-ai-based-assistance-in-debugging-education-check-my-slides",
          title: 'This week I attended the Shonan Meeting 217 on Trusted Automatic Programming! It...',
          description: "",
          section: "News",},{id: "news-happy-to-share-that-our-proposal-for-the-international-fuzzing-workshop-fuzzing-2025-has-been-accepted-for-issta-2025-see-you-all-in-trondheim-norway-and-stay-tuned-for-our-cfp",
          title: 'Happy to share that our proposal for the International Fuzzing Workshop (FUZZING) 2025...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-on-the-program-committee-for-ase-2025-looking-forward-to-many-great-submissions",
          title: 'I have been invited to serve on the Program Committee for ASE 2025!...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-on-the-program-committee-for-fse-2026-looking-forward-to-many-great-submissions",
          title: 'I have been invited to serve on the Program Committee for FSE 2026!...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-talk-about-my-postdoctoral-research-experience-in-singapore-as-part-of-the-workshop-and-networking-event-doing-research-in-greater-china-for-stem-early-career-researchers-organized-by-the-china-competence-network-ruhr-niederrhein-c-net-rnr-you-find-my-slides-here",
          title: 'I have been invited to talk about my (postdoctoral) research experience in Singapore...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-serve-as-the-artifact-evaluation-chair-for-fase-2026-looking-forward-to-many-great-research-artifacts",
          title: 'I have been invited to serve as the Artifact Evaluation Chair for FASE...',
          description: "",
          section: "News",},{id: "news-enjoyed-the-fuzzing-25-workshop-with-great-participants-and-keynote-speakers-miryung-kim-ucla-and-amazon-web-services-talked-about-here-research-on-constraining-fuzzing-and-will-wilson-antithesis-provided-interesting-insights-into-career-paths-in-fuzzing-outside-academia-check-our-program-and-watch-the-keynote-recordings",
          title: 'Enjoyed the FUZZING’25 workshop with great participants and keynote speakers! Miryung Kim (UCLA...',
          description: "",
          section: "News",},{id: "news-had-a-great-time-at-the-summer-school-on-security-testing-and-verification-2025-organized-by-the-ku-leuven-and-vub-it-was-great-to-engage-with-the-participants-and-present-our-research-in-fuzzing-for-more-info-check-the-website-or-this-linkedin-post",
          title: 'Had a great time at the Summer School on Security Testing and Verification...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.uni-trier.de/pers/hd/n/Noller:Yannic", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%6E%69%63.%6E%6F%6C%6C%65%72@%61%63%6D.%6F%72%67", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yannic-noller-0b80b179", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FPtbo2oAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://informatik.rub.de/ac-personen/yannic-noller/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
