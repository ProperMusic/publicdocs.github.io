"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[9841],{3834:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=t(5893),n=t(1151);const r={sidebar_position:7,public:!0},d="Files & Folders",l={id:"rich-feeds-2/Files and Folders",title:"Files & Folders",description:"When you are given the Rich Feed 2.0 connection details, it will connect you to a root folder.",source:"@site/docs/rich-feeds-2/Files and Folders.md",sourceDirName:"rich-feeds-2",slug:"/rich-feeds-2/Files and Folders",permalink:"/PublicDocs/docs/rich-feeds-2/Files and Folders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,public:!0},sidebar:"tutorialSidebar",previous:{title:"OrderResponse.xsd",permalink:"/PublicDocs/docs/fulfilment/samples/orderResponse"},next:{title:"Data Fields",permalink:"/PublicDocs/docs/rich-feeds-2/Data Fields"}},c={},h=[{value:"1.\tCost",id:"1cost",level:3},{value:"2.\tProduct",id:"2product",level:3},{value:"3.\tStock",id:"3stock",level:3},{value:"Feeds",id:"feeds",level:2},{value:"Files",id:"files",level:2},{value:"Header",id:"header",level:3}];function o(e){const s={em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"files--folders",children:"Files & Folders"}),"\n",(0,i.jsx)(s.p,{children:"When you are given the Rich Feed 2.0 connection details, it will connect you to a root folder.\r\nDepending on your business relationship with Proper Music, you will then see a maximum of three sub folders:"}),"\n",(0,i.jsx)(s.h3,{id:"1cost",children:"1.\tCost"}),"\n",(0,i.jsx)(s.p,{children:"This folder contains the cost feeds, if applicable for you, this will contain your Proper Music Dealer price and Net price.\r\nAvailable in XML, JSON & CSV format."}),"\n",(0,i.jsx)(s.h3,{id:"2product",children:"2.\tProduct"}),"\n",(0,i.jsx)(s.p,{children:"This folder contains the product feeds, with description of each product\r\nAvailable in XML & JSON format."}),"\n",(0,i.jsx)(s.h3,{id:"3stock",children:"3.\tStock"}),"\n",(0,i.jsx)(s.p,{children:"This folder contains the stock feed, which shows the stock available to order from Proper Music.\r\nThe feeds available vary depending on the destination of the feed, Proper Music will configure the feeds as required.\r\nAvailable in XML, JSON & CSV format."}),"\n",(0,i.jsx)(s.h2,{id:"feeds",children:"Feeds"}),"\n",(0,i.jsx)(s.p,{children:"Each Rich Feed will thew following file types:"}),"\n",(0,i.jsx)(s.p,{children:"Full- The weekly full feed of all available products."}),"\n",(0,i.jsxs)(s.p,{children:["Inc-new -    Containing records that were not in the last feed update.\r\nInc-update - Containing records that have been changed since the last feed update.\r\n",(0,i.jsx)(s.em,{children:"NB. This does not include products where only the stock level has changed."})]}),"\n",(0,i.jsx)(s.p,{children:"On the product feed there is an additional file\r\nInc-remove - Containing products that have been removed since the last full feed."}),"\n",(0,i.jsx)("div",{style:{color:"red"},children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Bold now works"})})}),"\n",(0,i.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,i.jsx)(s.p,{children:"The feeds are split into data chunks, to avoid the files being too large to transfer/read. A standard naming convention is used for all files:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Position"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Content"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Example"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Start"}),(0,i.jsxs)(s.td,{children:["Feed number ",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"internal ID remains static for a feed"})]}),(0,i.jsx)(s.td,{children:"12"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2nd"}),(0,i.jsxs)(s.td,{children:["full or inc ",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Identifies if feed is full or incremental"})]}),(0,i.jsx)(s.td,{children:"inc"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"3rd"}),(0,i.jsxs)(s.td,{children:["Date or Date & Time ",(0,i.jsx)("br",{}),"_Full feed has date in format yymmdd ",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Incremental has date+time in format yymmddhhmmss"})]}),(0,i.jsx)(s.td,{children:"230531150620"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"4th"}),(0,i.jsxs)(s.td,{children:["File Data chunk ",(0,i.jsx)("br",{}),(0,i.jsx)(s.em,{children:"Numeric value 001-999 identifying data chunk"})]}),(0,i.jsx)(s.td,{children:"{001}"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Extension"}),(0,i.jsx)(s.td,{children:"File Format  .json or .xml or .csv"}),(0,i.jsx)(s.td,{children:".xml"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"Example:"}),(0,i.jsxs)(s.td,{children:["12-inc-230531150620","{001}"," .xml"]})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"\u2003"}),"\n",(0,i.jsx)(s.h3,{id:"header",children:"Header"}),"\n",(0,i.jsx)(s.p,{children:'Each file has a "header" section which confirms the files content:'}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Field"})}),(0,i.jsx)(s.th,{style:{textAlign:"right"},children:(0,i.jsx)(s.strong,{children:"JSON"})}),(0,i.jsx)(s.th,{style:{textAlign:"center"},children:(0,i.jsx)(s.strong,{children:"XML"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Description"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"version"}),(0,i.jsx)(s.td,{style:{textAlign:"right"},children:"String"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(s.td,{children:"Feed Version"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"file_name"}),(0,i.jsx)(s.td,{style:{textAlign:"right"},children:"String"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(s.td,{children:"File Name\\Type"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"weightUnits"}),(0,i.jsx)(s.td,{style:{textAlign:"right"},children:"String"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(s.td,{children:"Units used for weights"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"4dimensionUnits"}),(0,i.jsx)(s.td,{style:{textAlign:"right"},children:"String"}),(0,i.jsx)(s.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(s.td,{children:"Units used for measurements"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);