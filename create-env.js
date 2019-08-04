const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `
BASE_URL=${process.env.BASE_URL}\n
PROJECTS_URL=${process.env.PROJECTS_URL}\n
MINIPROJECTS_URL=${process.env.MINIPROJECTS_URL}\n
SOCIAL_URL=${process.env.SOCIAL_URL}\n

HOME_URL=${process.env.HOME_URL}\n
ABOUT_URL=${process.env.ABOUT_URL}\n
PROJECT_PAGE_URL=${process.env.PROJECT_PAGE_URL}\n
DEMO_URL=${process.env.DEMO_URL}
`
);
