"use strict";(self.webpackChunkjet_docs=self.webpackChunkjet_docs||[]).push([[488],{597:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var s=t(4848),n=t(8453);const r={sidebar_position:10},c="PostgreSQL Data Types",i={id:"database-concepts/data-types",title:"PostgreSQL Data Types",description:"PostgreSQL offers a wide range of data types to accommodate various data storage needs. Here's a breakdown of some common types:",source:"@site/docs/database-concepts/data-types.mdx",sourceDirName:"database-concepts",slug:"/database-concepts/data-types",permalink:"/documentation/docs/database-concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/jet-labs/documentation/tree/main/docs/database-concepts/data-types.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Database concepts",permalink:"/documentation/docs/category/database-concepts"},next:{title:"Database constraints",permalink:"/documentation/docs/database-concepts/constraints"}},l={},h=[];function o(e){const d={a:"a",code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"postgresql-data-types",children:"PostgreSQL Data Types"}),"\n",(0,s.jsx)(d.p,{children:"PostgreSQL offers a wide range of data types to accommodate various data storage needs. Here's a breakdown of some common types:"}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"Name"}),(0,s.jsx)(d.th,{children:"Aliases"}),(0,s.jsx)(d.th,{children:"Description"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bigint"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int8"})}),(0,s.jsx)(d.td,{children:"Signed eight-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bigserial"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"serial8"})}),(0,s.jsx)(d.td,{children:"Autoincrementing eight-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bit [ (n) ]"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Fixed-length bit string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bit varying [ (n) ]"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"varbit [ (n) ]"})}),(0,s.jsx)(d.td,{children:"Variable-length bit string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"boolean"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:"Logical Boolean (true/false)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"box"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Rectangular box on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bytea"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Binary data (\u201cbyte array\u201d)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"character [ (n) ]"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"char [ (n) ]"})}),(0,s.jsx)(d.td,{children:"Fixed-length character string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"character varying [ (n) ]"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"varchar [ (n) ]"})}),(0,s.jsx)(d.td,{children:"Variable-length character string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"cidr"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"IPv4 or IPv6 network address"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"circle"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Circle on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"date"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Calendar date (year, month, day)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"double precision"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float8"})}),(0,s.jsx)(d.td,{children:"Double precision floating-point number (8 bytes)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"inet"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"IPv4 or IPv6 host address"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"integer"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"int"}),", ",(0,s.jsx)(d.code,{children:"int4"})]}),(0,s.jsx)(d.td,{children:"Signed four-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"interval [ fields ] [ (p) ]"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Time span"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"json"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Textual JSON data"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"jsonb"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Binary JSON data, decomposed"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"line"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Infinite line on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"lseg"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Line segment on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"macaddr"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"MAC (Media Access Control) address"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"macaddr8"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"MAC (Media Access Control) address (EUI-64 format)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"money"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Currency amount"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"numeric [ (p, s) ]"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"decimal [ (p, s) ]"})}),(0,s.jsx)(d.td,{children:"Exact numeric of selectable precision"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"path"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Geometric path on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"pg_lsn"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"PostgreSQL Log Sequence Number"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"pg_snapshot"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"User-level transaction ID snapshot"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"point"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Geometric point on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"polygon"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Closed geometric path on a plane"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"real"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float4"})}),(0,s.jsx)(d.td,{children:"Single precision floating-point number (4 bytes)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"smallint"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"int2"})}),(0,s.jsx)(d.td,{children:"Signed two-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"smallserial"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"serial2"})}),(0,s.jsx)(d.td,{children:"Autoincrementing two-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"serial"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"serial4"})}),(0,s.jsx)(d.td,{children:"Autoincrementing four-byte integer"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"text"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Variable-length character string"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"time [ (p) ] [ without time zone ]"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Time of day (no time zone)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"time [ (p) ] with time zone"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"timetz"})}),(0,s.jsx)(d.td,{children:"Time of day, including time zone"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"timestamp [ (p) ] [ without time zone ]"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Date and time (no time zone)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"timestamp [ (p) ] with time zone"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"timestamptz"})}),(0,s.jsx)(d.td,{children:"Date and time, including time zone"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tsquery"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Text search query"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"tsvector"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Text search document"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"txid_snapshot"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["User-level transaction ID snapshot (deprecated; see ",(0,s.jsx)(d.code,{children:"pg_snapshot"}),")"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uuid"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Universally unique identifier"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"xml"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"XML data"})]})]})]}),"\n",(0,s.jsxs)(d.p,{children:["For more details on PostgreSQL data types, refer to the ",(0,s.jsx)(d.a,{href:"https://www.postgresql.org/docs/current/datatype.html",children:"official PostgreSQL documentation"}),"."]})]})}function x(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,d,t)=>{t.d(d,{R:()=>c,x:()=>i});var s=t(6540);const n={},r=s.createContext(n);function c(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);