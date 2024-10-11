"use strict";(self.webpackChunkjet_docs=self.webpackChunkjet_docs||[]).push([[7520],{6123:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=i(4848),r=i(8453);const t={sidebar_position:4},c="Queries",d={id:"query",title:"Queries",description:"-------------------------",source:"@site/docs/query.mdx",sourceDirName:".",slug:"/query",permalink:"/documentation/docs/query",draft:!1,unlisted:!1,editUrl:"https://github.com/jet-labs/documentation/tree/main/docs/query.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Frontend setup",permalink:"/documentation/docs/setup/setup-frontend"},next:{title:"Graphs",permalink:"/documentation/docs/graph"}},o={},l=[{value:"<strong>Using queries variables</strong>",id:"using-queries-variables",level:4}];function u(e){const n={code:"code",h1:"h1",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"queries",children:"Queries"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Postgres queries can be saved as variables which when used will be executed in run-time. Output can be checked by testing the query"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Query",src:i(9506).A+"",width:"1446",height:"628"})}),"\n",(0,s.jsx)(n.h4,{id:"using-queries-variables",children:(0,s.jsx)(n.strong,{children:"Using queries variables"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Referencing queries inside other queries:"})," Query values can be used in run-time inside another query by utilizing the syntax below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from city where city_id={{[pm_query_id:21][0].city_id]};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{{}}"})," is used to utilize the variable"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"[]"})," is used to define the ",(0,s.jsx)(n.code,{children:"pm_query_id"})," of desired query"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using app constants inside query"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from city where city_id={{[pm_query_id:22][[pm_query_id:35][0].city_id].city_id}}\nor city_id={{[pm_app_constant_id:4].value}};\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Using arguments inside query"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from city where city_id={{arg1}} or city_id={{arg2}};\n"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9506:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/query-2429042e31a3bc22f55a457e23726c9c.png"},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(6540);const r={},t=s.createContext(r);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);