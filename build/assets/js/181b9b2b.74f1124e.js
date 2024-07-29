"use strict";(self.webpackChunkjet_docs=self.webpackChunkjet_docs||[]).push([[476],{1196:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var d=s(4848),r=s(8453);const t={sidebar_position:6},c="Scheduled Jobs",i={id:"scheduled-job",title:"Scheduled Jobs",description:"-------------------------",source:"@site/docs/scheduled-job.mdx",sourceDirName:".",slug:"/scheduled-job",permalink:"/docs/scheduled-job",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scheduled-job.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Graphs",permalink:"/docs/graph"},next:{title:"App constants",permalink:"/docs/app-constant"}},h={},l=[{value:"Cron Syntax Quick Reference",id:"cron-syntax-quick-reference",level:2},{value:"Fields",id:"fields",level:2},{value:"Special Characters",id:"special-characters",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"scheduled-jobs",children:"Scheduled Jobs"}),"\n",(0,d.jsx)(n.hr,{}),"\n",(0,d.jsx)(n.p,{children:"These are background jobs scheduled with cron expressions to execute predefined Query objects."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{alt:"jobs",src:s(6004).A+"",width:"927",height:"388"})}),"\n",(0,d.jsx)(n.h2,{id:"cron-syntax-quick-reference",children:"Cron Syntax Quick Reference"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Schedule"}),(0,d.jsx)(n.th,{children:"Cron Expression"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Daily at Midnight"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 0 * * *"})}),(0,d.jsx)(n.td,{children:"Runs the command every day at midnight (12:00 AM)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Every Hour"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 * * * *"})}),(0,d.jsx)(n.td,{children:"Runs the command at the beginning of every hour."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Monday at 3 PM"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 15 * * 1"})}),(0,d.jsx)(n.td,{children:"Runs the command every Monday at 3:00 PM."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Every 15 Minutes"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"*/15 * * * *"})}),(0,d.jsx)(n.td,{children:"Runs the command every 15 minutes."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"First Day of Every Month at 5 AM"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 5 1 * *"})}),(0,d.jsx)(n.td,{children:"Runs the command on the 1st of every month at 5:00 AM."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Every Weekday at 9 AM"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 9 * * 1-5"})}),(0,d.jsx)(n.td,{children:"Runs the command every weekday (Monday to Friday) at 9:00 AM."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Every 5 Minutes from 9 AM to 5 PM"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"*/5 9-17 * * *"})}),(0,d.jsx)(n.td,{children:"Runs the command every 5 minutes between 9:00 AM and 5:00 PM."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On the 15th of Each Month at Noon"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"0 12 15 * *"})}),(0,d.jsx)(n.td,{children:"Runs the command on the 15th of every month at noon (12:00 PM)."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Minute"}),": ",(0,d.jsx)(n.code,{children:"0-59"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Hour"}),": ",(0,d.jsx)(n.code,{children:"0-23"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Day"}),": ",(0,d.jsx)(n.code,{children:"1-31"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Month"}),": ",(0,d.jsx)(n.code,{children:"1-12"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Day of Week"}),": ",(0,d.jsx)(n.code,{children:"0-7"})," (0 & 7 are Sunday)"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"special-characters",children:"Special Characters"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"*"})}),": Every"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:","})}),": Multiple"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"-"})}),": Range"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:(0,d.jsx)(n.code,{children:"/"})}),": Increment"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},6004:(e,n,s)=>{s.d(n,{A:()=>d});const d=s.p+"assets/images/jobs-2211b6c65cf2693e134954252c57d428.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var d=s(6540);const r={},t=d.createContext(r);function c(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);