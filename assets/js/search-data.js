// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-manuscripts",
              title: "Manuscripts",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/manuscripts/";
              },
            },{id: "nav-people",
          title: "People",
          description: "Only CompBioClub-affiliated publications in high-impact journals are counted here. For complete lists, see the members&#39; scholar pages.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "dropdown-mentoring-phd",
              title: "Mentoring PhD",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mentoring_phd/";
              },
            },{id: "dropdown-mentoring-postdoc",
              title: "Mentoring PostDoc",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mentoring_postdoc/";
              },
            },{id: "dropdown-mentoring-ra",
              title: "Mentoring RA",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mentoring_ra/";
              },
            },{id: "dropdown-mentoring-ug",
              title: "Mentoring UG",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mentoring_ug/";
              },
            },{id: "dropdown-mentoring-msc",
              title: "Mentoring MSc",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/mentoring_msc/";
              },
            },{id: "nav-funding",
          title: "Funding",
          description: "We gratefully acknowledge the support of all research institutes and funding agencies.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/funding/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-events",
          title: "Events",
          description: "A growing collection of lab events and gatherings.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/events/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-tavel-to-macau-2025",
          title: 'Tavel to Macau 2025',
          description: "A Full Day of City Walk 😉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Macau25/";
            },},{id: "projects-cityuhk-bms-sysy-bme-joint-research-gala-2025",
          title: 'CityUHK BMS-SYSY BME Joint Research Gala 2025',
          description: "A Summary of Phd Student Research Works in 2024-2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ResearchGala25/";
            },},{id: "projects-group-dinner-in-shenzhen-2025",
          title: 'Group dinner in Shenzhen 2025',
          description: "Delicious Coconut Chicken Hotpot 🍲",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Shenzhen25/";
            },},{id: "projects-chrismas-retreat-2024",
          title: 'Chrismas Retreat 2024',
          description: "Cheer up with cheese and tiramisu 😋",
          section: "Projects",handler: () => {
              window.location.href = "/projects/XmasRetreat24/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%6E%67%78%69.%63%68%65%6E@%63%69%74%79%75.%65%64%75.%68%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/compbioclub", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=V6Ubb-oAAAAJ", "_blank");
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
