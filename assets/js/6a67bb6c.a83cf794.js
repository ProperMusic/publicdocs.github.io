"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[4961],{8146:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var s=l(5893),r=l(1151);const n={title:"Cancel Order Lines Response",slug:"cancel-order-lines-resp",includeInPublic:!0},i=void 0,d={id:"fulfilment/messages/cancel-order-line-resp",title:"Cancel Order Lines Response",description:"`customerCancelOrderLines`",source:"@site/docs/fulfilment/messages/cancel-order-line-resp.md",sourceDirName:"fulfilment/messages",slug:"/fulfilment/messages/cancel-order-lines-resp",permalink:"/PublicDocs/docs/fulfilment/messages/cancel-order-lines-resp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Cancel Order Lines Response",slug:"cancel-order-lines-resp",includeInPublic:!0},sidebar:"tutorialSidebar",previous:{title:"XML Cancellation",permalink:"/PublicDocs/docs/fulfilment/cancellation"},next:{title:"Cancel Order Lines",permalink:"/PublicDocs/docs/fulfilment/messages/cancel-order-lines"}},c={},o=[{value:"<code>customerCancelOrderLines</code>",id:"customercancelorderlines",level:3},{value:"<code>item</code>",id:"item",level:3},{value:"<code>item.result</code> Possible Values",id:"itemresult-possible-values",level:4}];function x(e){const t={code:"code",h3:"h3",h4:"h4",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\r\n <customerCancelOrderLines>\r\n <storeOrderId>$$$$$</storeOrderId>\r\n <storeCustomerId>$$$$$</storeCustomerId>\r\n <storeId>#####</storeId>\r\n <properOrderId>#####</properOrderId>\r\n <properCustomerId>#####</properCustomerId>\r\n <message>$$$$$</message>\r\n  <orderItems>\r\n   <item>\r\n   <lineId>$$$$$</lineId>\r\n   <properLineId>#####</properLineId>\r\n   <result>success</result>\r\n   </item>\r\n   <item>\r\n   <lineId>$$$$$</lineId>\r\n   <properLineId>#####</properLineId>\r\n   <result>success</result>\r\n   </item>\r\n  </orderItems>\r\n </customerCancelOrderLines>\r\n\n'})}),"\n",(0,s.jsx)(t.h3,{id:"customercancelorderlines",children:(0,s.jsx)(t.code,{children:"customerCancelOrderLines"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeOrderId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The client's order identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeCustomerId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The client's customer identifier"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"storeId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The client identifier (assigned by Proper)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"properOrderId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"properCustomerId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"message"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string(100)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"orderItems"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"array[item]"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A list of the order lines to be cancelled"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"item",children:(0,s.jsx)(t.code,{children:"item"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Format"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lineId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"properlineId"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"integer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"result"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"string(32)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,s.jsxs)(t.h4,{id:"itemresult-possible-values",children:[(0,s.jsx)(t.code,{children:"item.result"})," Possible Values"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Value"})})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"success"})}),(0,s.jsx)(t.tr,{children:(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"failure"})})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>d,a:()=>i});var s=l(7294);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);