# Group Project Two: Exposition Inn - Who Goes There?
A collaborative project using Express and Sequelize to create a website where users can create a secure account and login to create a DnD character, ready to use in your next campaign! This work was completed by Jonathan Grommesh, Tanner Johnson, Nash Peterson, &amp; Tim Scallon.

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  Dungeons and Dragons turns 50! In honor of one of the greatest things to come from our great state of Minnesota (fun fact!), we've been diving into designing programs related to the game. For our group project, we built a character creator website, from which a user with a secure login can design the DnD character (or characters) of their dreams!
  ![image](./assets/war-mockup.png)
  ![image](./assets/war-mockup.png)
  ![image](./assets/war-mockup.png)

  ## Installation
  To install this project after copying down the repo, you will first need to run `npm install` (-y for default settings) on the project root, which should grant you access to the necessary libraries listed in the package-lock.json file. You'll need a tool to call api routes.

  ## Usage
  1. To use this project, ensure you have [Postgres](https://www.postgresql.org/download/) and the node packages installed as specified in the Installation section above.
  2. Open a terminal on the db folder and run psql postgres.
  3. Rename the `.env` file and fill in the appropriate info, keeping the db as dungeon_db.
  3. In Postgres, run `\i schema.db` to build the db.
  4. Open a separate terminal on the project root and run `node ./seed/seedData.js` to seed the db.
  5. On that same node terminal, run `nodemon server.js` - the server will boot and the routes can be hit via Postman or Insomnia!

  [You can also run from our deployed application on Render!](https://dashboard.render.com/web/srv-cqvaj6tds78s739g1lig)

  ## Contributing
  If you want to contribute to this project - particularly if you want to work with us on expanding our database, normalizing it more, or getting our equipment setup more game-accurate for interface with a future game engine, see our contact info in the Questions section below (Jonathan owns the repo, but all four of the devs have essentially admin access to it). Don’t hesitate to reach out!

  ## Tests
  This project can and should be tested using localhost and nodemon for the simplest way to both work with and visualize the data and its relationships. Pgadmin4 would also work well to see the tabluation, but it cannot call routes - only can use sql. The site itself also works and can be used from the link above.
  
  ## Credits
  - Shoutout to Gary Almes and Katy for helping us with our routing.
  - Background images were produced using OpenAI's ChatGPT4, via the CoPilot iOS mobile app.
  - Background song [Cobblestone Village](https://www.youtube.com/watch?v=jZ7a1yPaJh0) © 2014 Brandon Fiechter; All Rights Reserved. Retrieved with [Y2Mate](https://en.y2mate.is/v84/youtube-to-mp3.html).

  ## Questions
  ### For Jonathan:
  - [My Github!](https://github.com/JonGrom)
  - [Email Me](mailto:grommeshjonathan@gmail.com?subject=Hello!)
  ### For Tanner:
  - [My Github!](https://github.com/tjjohnson76)
  - [Email Me](mailto:tannerjohnson08@gmail.com?subject=Hello!)
  ### For Nash:
  - [My Github!](https://github.com/TeutonicTed)
  - [Email Me](mailto:npeters021@gmail.com?subject=Hello!)
  ### For Tim:
  - [My Github!](https://www.github.com/floatingpoint-exaflop)
  - [Email Me](mailto:timscallon1@gmail.com?subject=Hello!)

  ## License
  [![Image showing badge for MIT License.](https://img.shields.io/badge/License-MIT_License-blue)](https://mit-license.org/)
  
  This project is using the MIT License. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.