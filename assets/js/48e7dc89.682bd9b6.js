"use strict";(self.webpackChunkbasil_docs=self.webpackChunkbasil_docs||[]).push([[920],{8219:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(5893),i=r(1151);const s={includeInPublic:!0},a="Invoice v2.0 Sample",o={id:"customers/b2b/invoice-v2-sample",title:"Invoice v2.0 Sample",description:"",source:"@site/docs/customers/b2b/invoice-v2-sample.md",sourceDirName:"customers/b2b",slug:"/customers/b2b/invoice-v2-sample",permalink:"/PublicDocs/docs/customers/b2b/invoice-v2-sample",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{includeInPublic:!0},sidebar:"tutorialSidebar",previous:{title:"B2B Invoices Version 2",permalink:"/PublicDocs/docs/customers/b2b/b2b-invoices-2"},next:{title:"XML Cancellation",permalink:"/PublicDocs/docs/fulfilment/cancellation"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"invoice-v20-sample",children:"Invoice v2.0 Sample"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"date format: YYYY-MM-DD\r\ntime format: HH:MM:SS\r\ntimestamp format: YYYY-MM-DD HH:MM:SS.ssssss\r\nweight unit: grams\r\ndimension unit: millimetre\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",metastring:'title="invoicev2sample.xml"',children:'\r\n<?xml version="1.0" encoding="utf-8"?>\r\n<transmission>\r\n    <header>\r\n        <transmissionControlNum>integer</transmissionControlNum>     # identifies this file\r\n        <senderId>string</senderId>\r\n        <senderGLN>string</senderGLN>\r\n        <receiverId>string</receiverId>\r\n        <receiverGLN>string</receiverGLN>\r\n        <transmissionType>string</transmissionType>                 # value = INVOICES\r\n        <transmissionCreatedDate>date</transmissionCreatedDate>\r\n        <transmissionCreatedTime>time</transmissionCreatedTime>\r\n        <countOfMessages>integer</countOfMessages>\r\n        <customHeaders>\r\n            <customerEANLocation/>\r\n            <customerIdentityFromSupplier/>\r\n            <customerName/>\r\n            <supplierEANLocation/>\r\n            <supplierIdentityFromCustomer/>\r\n            <supplierName/>\r\n        </customHeaders>\r\n        <senderAddress>\r\n            <name>PROPER MUSIC DISTRIBUTION LTD</name>\r\n            <addressLine1>1-5 APPLEGARTH DRIVE</addressLine1>\r\n            <addressLine2>QUESTOR</addressLine2>\r\n            <addressLine3>DARTFORD</addressLine3>\r\n            <addressCity>KENT</addressCity>\r\n            <addressCountry>GB</addressCountry>\r\n            <addressPostCode>DA1 1JD</addressPostCode>\r\n            <vatRegistrationNum>GB627145936</vatRegistrationNum>\r\n        </senderAddress>\r\n    </header>\r\n    <messages>\r\n        <message>  # loop for each invoice included in the transmission\r\n            <messageType>string</messageType>                        # value=INVOICE\r\n            <messageControlNum>integer</messageControlNum>           # identifies this message\r\n            <messageSequence>integer</messageSequence>               # ascending for each message in the transmission\r\n            <invoiceNumber>string</invoiceNumber>\r\n            <accountCode>string</accountCode>\r\n            <shopNumber>integer</shopNumber>\r\n            <billTo>\r\n                <addressName>string</addressName>\r\n                <addressLine1>string</addressLine1>\r\n                <addressLine2>string</addressLine2>\r\n                <addressLine3>string</addressLine3>\r\n                <addressLine4>string</addressLine4>\r\n                <city>string</city>\r\n                <addressPostCode>string</addressPostCode>\r\n                <countryCode>string</countryCode>\r\n                <taxCode>string</taxCode>\r\n                <taxName>string</taxName>\r\n                <taxRate>decimal</taxRate>\r\n                <taxRegistrationNum>string</taxRegistrationNum>\r\n            </billTo>\r\n            <deliverTo>\r\n                <addressName>string</addressName>\r\n                <addressLine1>string</addressLine1>\r\n                <addressLine2>string</addressLine2>\r\n                <addressLine3>string</addressLine3>\r\n                <addressLine4>string</addressLine4>\r\n                <city>string</city>\r\n                <addressPostCode>string</addressPostCode>\r\n                <countryCode>string</countryCode>\r\n                <taxCode>string</taxCode>\r\n                <taxName>string</taxName>\r\n                <taxRate>decimal</taxRate>\r\n                <taxRegistrationNum>string</taxRegistrationNum>\r\n            </deliverTo>\r\n            <invoiceDate>date</invoiceDate>\r\n            <invoiceCreatedDate>date</invoiceCreatedDate>\r\n            <invoiceCreatedTime>time</invoiceCreatedTime>\r\n            <invoicedNetValue>decimal</invoicedNetValue>\r\n            <invoicedTaxValue>decimal</invoicedTaxValue>\r\n            <invoicedGrossValue>decimal</invoicedGrossValue>\r\n            <currencyCode>string</currencyCode>\r\n            <currencyName>string</currencyName>\r\n            <currencyISOCode>string</currencyISOCode>\r\n            <exchangeRate>decimal</exchangeRate>\r\n            <countOfLines>integer</countOfLines>                         # lines in this invoice\r\n            <sumOfUnits>integer</sumOfUnits>                             # total units in this invoice\r\n            <orders>\r\n                <order>         # loop for each order within this invoice (usually 1)\r\n                    <sequence>integer</sequence>\r\n                    <orderId>string</orderId>\r\n                    <orderDate>date</orderDate>\r\n                    <orderDocumentNo>string</orderDocumentNo>\r\n                    <basilOrderNumber>string</basilOrderNumber>\r\n                    <customerReferenceNo>string</customerReferenceNo>\r\n                    <countOfLines>integer</countOfLines>         # lines in this order\r\n                    <sumOfUnits>integer</sumOfUnits>             # total units in this order\r\n                    <fulfilment>                                 # only for fulfilment clients\r\n                        <clientId>integer</clientId>\r\n                        <clientOrderId>string</clientOrderId>\r\n                        <clientCustomerId>string</clientCustomerId>\r\n                        <properOrderId>integer</properOrderId>\r\n                        <properCustomerId>integer</properCustomerId>\r\n                    </fulfilment>\r\n                    // highlight-start\r\n                    <lines>         # only included if "Nested Lines" option set to true\r\n                        <line>      # loop for each line in this order\r\n                            <invoiceSequence>integer</invoiceSequence>   # ascending for each line within this invoice\r\n                            <orderSequence>integer</orderSequence>       # ascending for each line within this order\r\n                            <itemCode>string</itemCode>\r\n                            <lineTotalExTax>decimal</lineTotalExTax>\r\n                            <lineTaxValue>decimal</lineTaxValue>\r\n                            <lineTotalIncTax>decimal</lineTotalIncTax>\r\n                            <quantity>integer</quantity>\r\n                            <itemValueExTax>decimal</itemValueExTax>\r\n                            <itemTaxValue>decimal</itemTaxValue>\r\n                            <itemValueIncTax>decimal</itemValueIncTax>\r\n                            <taxCode>string</taxCode>\r\n                            <taxRate>decimal</taxRate>\r\n                        </line>\r\n                    </lines>\r\n                    // highlight-end\r\n                </order>\r\n            </orders>\r\n            // highlight-start\r\n            <lines> # only included if "Nested Lines" option set to false\r\n                <line> # loop for each line on this invoice\r\n                    <invoiceSequence>integer</invoiceSequence> # ascending for each line within this invoice\r\n                    <itemCode>string</itemCode>\r\n                    <lineTotalExTax>decimal</lineTotalExTax>\r\n                    <lineTaxValue>decimal</lineTaxValue>\r\n                    <lineTotalIncTax>decimal</lineTotalIncTax>\r\n                    <quantity>integer</quantity>\r\n                    <itemValueExTax>decimal</itemValueExTax>\r\n                    <itemTaxValue>decimal</itemTaxValue>\r\n                    <itemValueIncTax>decimal</itemValueIncTax>\r\n                    <taxCode>string</taxCode>\r\n                    <taxRate>decimal</taxRate>\r\n                    <orderId>string</orderId>\r\n                    <orderDate>date</orderDate>\r\n                    <orderDocumentNo>string</orderDocumentNo>\r\n                    <basilOrderNumber>string</basilOrderNumber>\r\n                    <customerReferenceNo>string</customerReferenceNo>\r\n                    <fulfilment> # only included for fulfilment clients\r\n                        <clientId>integer</clientId>\r\n                        <clientOrderId>string</clientOrderId>\r\n                        <clientCustomerId>string</clientCustomerId>\r\n                        <properOrderId>integer</properOrderId>\r\n                        <properCustomerId>integer</properCustomerId>\r\n                    </fulfilment>\r\n                </line>\r\n            </lines>     \r\n            // highlight-end      \r\n            <taxRates>\r\n                <taxRate> # loop for each tax rate on this invoice\r\n                    <sequence>integer</sequence> #ascending for each tax rate\r\n                    <code>string</code>\r\n                    <name>string</name>\r\n                    <rate>decimal</rate>\r\n                    <goodsValue>decimal<goodsValue>\r\n                    <taxValue>decimal</taxValue>\r\n                    <grossValue>decimal</grossValue>\r\n                    <countOfLines>integer</countOfLines>\r\n                    <sumOfUnits>integer</sumOfUnits>\r\n                </taxRate>\r\n            </taxRates>\r\n            <countOfTaxRates>integer</countOfTaxRates>\r\n            <invoiceTaxTotal>\r\n                <amountExTax>decimal</amountExTax>\r\n                <taxAmount>decimal</taxAmount>\r\n                <amountIncTax>decimal</amountIncTax>\r\n                <countOfLines>integer</countOfLines>\r\n                <sumOfUnits>integer</sumOfUnits>\r\n            </invoiceTaxTotal>\r\n        </message>\r\n    </messages>\r\n    <footer>\r\n        <taxRates> # all tax rates that appear in this transmission\r\n            <taxRate> # loop for each tax rate in this transmission\r\n                <sequence>integer</sequence>\r\n                <code>string</code>\r\n                <name>string</name>\r\n                <rate>decimal</rate>\r\n                <amountExTax>decimal</amountExTax>\r\n                <taxAmount>decimal</taxAmount>\r\n                <amountIncTax>decimal</amountIncTax>\r\n                <countOfLines>integer</countOfLines>\r\n                <sumOfUnits>integer</sumOfUnits>\r\n            </taxRate>\r\n        </taxRates>\r\n        <taxTotal>\r\n            <amountExTax>decimal</amountExTax>\r\n            <taxAmount>decimal</taxAmount>\r\n            <amountIncTax>decimal</amountIncTax>\r\n            <countOfLines>integer</countOfLines>\r\n            <sumOfUnits>integer</sumOfUnits>\r\n        </taxTotal>\r\n    </footer>\r\n</transmission>\r\n\r\n\r\n\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(7294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);