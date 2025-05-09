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
        },{id: "nav-people",
          title: "People",
          description: "Talented Lab Members of CompBioClub",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-hiring",
          title: "Hiring",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hiring/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-funding",
          title: "Funding",
          description: "",
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
        },{id: "projects-tavel-to-macau-2025",
          title: 'Tavel to Macau 2025',
          description: "A Full Day of City Walk 😉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Macau25/";
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
          window.open("https://github.com/thelingxichen", "_blank");
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
