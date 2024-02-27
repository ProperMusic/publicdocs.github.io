"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[1889],{7328:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>m,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>x});var t=s(5893),r=s(1151);const l={includeInPublic:!0},m="Dispatched.xsd",c={id:"fulfilment/samples/dispatched",title:"Dispatched.xsd",description:"",source:"@site/docs/fulfilment/samples/dispatched.md",sourceDirName:"fulfilment/samples",slug:"/fulfilment/samples/dispatched",permalink:"/PublicDocs/docs/fulfilment/samples/dispatched",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{includeInPublic:!0},sidebar:"tutorialSidebar",previous:{title:"Order Status Response",permalink:"/PublicDocs/docs/fulfilment/messages/order-status-response"},next:{title:"OrderRequest.xsd",permalink:"/PublicDocs/docs/fulfilment/samples/orderRequest"}},i={},x=[];function o(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dispatchedxsd",children:"Dispatched.xsd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="dispatched.xsd"',children:'<?xml version="1.0" encoding="UTF-8"?>\r\n   <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" attributeFormDefault="unqualified">\r\n         \x3c!-- XML Schema Generated from XML Document on Mon Nov 28 2016 16:35:12 GMT+0000 (GMT Standard Time) --\x3e\r\n         \x3c!-- with XmlGrid.net Free Online Service http://xmlgrid.net --\x3e\r\n         <xs:element name="dispatchedRequest">\r\n               <xs:complexType>\r\n                     <xs:sequence>\r\n                           <xs:element name="dispatched" maxOccurs="unbounded">\r\n                                 <xs:complexType>\r\n                                       <xs:sequence>\r\n                                             <xs:element name="customerId" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderID" type="xs:int"></xs:element>\r\n                                             <xs:element name="storeCustomerId" type="xs:int"></xs:element>\r\n                                             <xs:element name="storeOrderID" type="xs:int"></xs:element>\r\n                                             <xs:element name="orderItems">\r\n                                                   <xs:complexType>\r\n                                                         <xs:sequence>\r\n                                                               <xs:element name="item">\r\n                                                                     <xs:complexType>\r\n                                                                           <xs:sequence>\r\n                                                                                 <xs:element name="lineID" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="storeLineId" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="storeProductCode" type="xs:string"></xs:element>\r\n                                                                                 <xs:element name="qtyOrdered" type="xs:int"></xs:element>\r\n                                                                                 <xs:element name="qtyDespatched" type="xs:int"></xs:element>\r\n                                                                           </xs:sequence>\r\n                                                                     </xs:complexType>\r\n                                                               </xs:element>\r\n                                                         </xs:sequence>\r\n                                                   </xs:complexType>\r\n                                             </xs:element>\r\n                                       </xs:sequence>\r\n                                 </xs:complexType>\r\n                           </xs:element>\r\n                     </xs:sequence>\r\n               </xs:complexType>\r\n         </xs:element>\r\n   </xs:schema>\n'})})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>m});var t=s(7294);const r={},l=t.createContext(r);function m(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:m(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);