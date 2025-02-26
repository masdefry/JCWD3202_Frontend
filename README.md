Hello, JCWD3202!

1.  How to Install NextJS Latest Version (> Version 13)

                npx create-next-app@latest project-name

                - Would you like to use TypeScript? No / Yes

                - Would you like to use ESLint? Yes

                - Would you like to use Tailwind CSS? Yes

                - Would you like to use `src/` directory? Yes

                - Would you like to use App Router? Yes

                - Would you like to customize the default import alias (@/*)? Yes

                - What import alias would you like configured? @/*

2.  How to Run NextJS Project?

                npm run dev

3.  Using JSON-SERVER as Fake API

        0. Install JSON-SERVER (Install on Global/System Computer)

                npm i -g json-server

        1. Create New Directory `db` and New File `db.json` Inside Your React Project

        2. Running JSON-SERVER on Your Terminal CMD. Makesure Your Terminal Already Inside `db` Directory

                json-server --watch db.json --port 5000
