"use strict";(self.webpackChunkjet_docs=self.webpackChunkjet_docs||[]).push([[8696],{2895:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(4848),t=s(8453);const r={sidebar_position:2},d="Backend setup",l={id:"setup/setup-backend",title:"Backend setup",description:"This is the backend component of the project.",source:"@site/docs/setup/setup-backend.md",sourceDirName:"setup",slug:"/setup/setup-backend",permalink:"/documentation/docs/setup/setup-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/jet-labs/documentation/tree/main/docs/setup/setup-backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/documentation/docs/category/setup"},next:{title:"Frontend setup",permalink:"/documentation/docs/setup/setup-frontend"}},a={},o=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Environment Setup",id:"environment-setup",level:2},{value:"Pull Database Schema",id:"pull-database-schema",level:2},{value:"Initial Database Setup",id:"initial-database-setup",level:2},{value:"Generate Prisma Client",id:"generate-prisma-client",level:2},{value:"Start Prisma Studio (Optional)",id:"start-prisma-studio-optional",level:2},{value:"Additional Considerations",id:"additional-considerations",level:2},{value:"Scripts",id:"scripts",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"backend-setup",children:"Backend setup"}),"\n",(0,i.jsx)(n.p,{children:"This is the backend component of the project."}),"\n",(0,i.jsx)(n.h2,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Navigate to your project's root directory in your terminal."}),"\n",(0,i.jsxs)(n.li,{children:["Run the following command to install required packages:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create or edit ",(0,i.jsx)(n.code,{children:".env"})," files:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create ",(0,i.jsx)(n.code,{children:"development.env"})," and ",(0,i.jsx)(n.code,{children:"production.env"})," files in your project's root directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Add the following environment variables to both files, replacing placeholder values with your actual credentials:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'DATABASE_URL="postgresql://your_database_url"\nJWT_ACCESS_TOKEN_SECRET="your_secret_key"\nJWT_REFRESH_TOKEN_SECRET="your_secret_key"\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"DATABASE_URL"})," value to the ",(0,i.jsx)(n.code,{children:"package.json"})," file under the ",(0,i.jsx)(n.code,{children:"env"})," object."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pull-database-schema",children:"Pull Database Schema"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the appropriate command based on your operating system:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run prisma-pull-db-dev-w\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Linux:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run prisma-pull-db-dev\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.code,{children:"schema"})," folder will be created if the database connection is successful."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initial-database-setup",children:"Initial Database Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create necessary tables and records:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run db-setup-w\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Linux:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run db-setup\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generate-prisma-client",children:"Generate Prisma Client"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Generate TypeScript types for your database models:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npx prisma generate\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-prisma-studio-optional",children:"Start Prisma Studio (Optional)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["View and manage your database visually:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Windows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run prisma-studio-dev-w\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Linux:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run prisma-studio-dev\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["Replace the placeholder values in the ",(0,i.jsx)(n.code,{children:".env"})," files with your actual database URL and secret keys."]})]}),"\n",(0,i.jsx)(n.h2,{id:"additional-considerations",children:"Additional Considerations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Consider using a ",(0,i.jsx)(n.code,{children:".gitignore"})," file to prevent sensitive information like secret keys from being committed to version control."]}),"\n",(0,i.jsx)(n.li,{children:"For production environments, use environment variables or a secrets manager to securely store sensitive information."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By following these steps, you should have a working backend environment ready for development."}),"\n",(0,i.jsx)(n.h2,{id:"scripts",children:"Scripts"}),"\n",(0,i.jsx)(n.p,{children:"The following npm scripts are available for managing the backend:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["start: Starts the backend server in production mode using ",(0,i.jsx)(n.code,{children:"nodemon"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["dev: Starts the backend server in development mode using ",(0,i.jsx)(n.code,{children:"nodemon"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["db-setup: Sets up the database for development environment using ",(0,i.jsx)(n.code,{children:"node"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["serve: Starts the backend server without ",(0,i.jsx)(n.code,{children:"nodemon"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["migrate: Runs database migrations using ",(0,i.jsx)(n.code,{children:"knex"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["rollback: Rolls back the latest database migration using ",(0,i.jsx)(n.code,{children:"knex"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["pm2: Starts the backend server in production mode using ",(0,i.jsx)(n.code,{children:"pm2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["pm2-restart: Restarts the backend server using ",(0,i.jsx)(n.code,{children:"pm2"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"prisma-studio: Starts Prisma Studio to interact with the database in production mode."}),"\n",(0,i.jsx)(n.li,{children:"prisma-studio-dev: Starts Prisma Studio to interact with the database in development mode."}),"\n",(0,i.jsx)(n.li,{children:"prisma-db-pull: Pulls the database schema from the production database using Prisma."}),"\n",(0,i.jsx)(n.li,{children:"prisma-db-pull-dev: Pulls the database schema from the development database using Prisma."}),"\n",(0,i.jsx)(n.li,{children:"prisma-migrate-dev: Applies database migrations in development environment using Prisma."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);