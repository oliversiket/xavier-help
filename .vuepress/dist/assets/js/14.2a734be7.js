(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{274:function(e,t,r){e.exports=r.p+"assets/img/xero-no-organisation.c9d49ae9.png"},295:function(e,t,r){"use strict";r.r(t);var o=r(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("h2",{attrs:{id:"xero-access-permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xero-access-permissions"}},[e._v("#")]),e._v(" Xero Access Permissions")]),e._v(" "),o("p",[e._v("When trying to add a client to Xavier, or re-connecting an existing client,\nyou're redirected to Xero to give your approval. In some situations you may be presented with this:")]),e._v(" "),o("p",[o("img",{attrs:{src:r(274),alt:"No Xero Organisation"}})]),e._v(" "),o("p",[e._v("There are a few reasons why you may be seeing this:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("You don't have a Xero account")]),e._v(": Not to worry, you can "),o("a",{attrs:{href:"https://www.xero.com/signup/?xtid=x30xavier",target:"_blank",rel:"noopener noreferrer"}},[e._v("try Xero for free!"),o("OutboundLink")],1)])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("You are logged into Xero as a different user")]),e._v(": you may be logged in to Xero as a user you were not intending to use with Xavier.\nTry "),o("a",{attrs:{href:"https://go.xero.com/Dashboard/default.aspx/?xtid=x30xavier",target:"_blank",rel:"noopener noreferrer"}},[e._v("heading over to Xero"),o("OutboundLink")],1),e._v(" and logging out before trying to add a client in\nXavier again. This time you'll be asked to log into Xero, so you can log in as the user you intended.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("You do not have the permissions in Xero")]),e._v(": each Xero user account has a\n"),o("a",{attrs:{href:"https://central.xero.com/s/article/User-roles-and-permissions-in-Xero-Business-edition",target:"_blank",rel:"noopener noreferrer"}},[e._v("role assigned"),o("OutboundLink")],1),e._v("\nto it for a Xero organisation.\nYou need to have either an "),o("em",[e._v("Advisor")]),e._v(" or a "),o("em",[e._v("Standard")]),e._v(" role to add a client in Xavier. This gives you access to an organisation's Xero settings,\nincluding the ability to "),o("a",{attrs:{href:"https://central.xero.com/s/article/User-role-access-to-settings-in-Xero",target:"_blank",rel:"noopener noreferrer"}},[e._v("set up or disconnect connected apps"),o("OutboundLink")],1)])])]),e._v(" "),o("p",[e._v("Still stuck? "),o("router-link",{attrs:{to:"/contact-us.html"}},[e._v("Get in touch")]),e._v(", we're here to help.")],1),e._v(" "),o("h2",{attrs:{id:"slow-client-syncing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slow-client-syncing"}},[e._v("#")]),e._v(" Slow Client Syncing")]),e._v(" "),o("p",[e._v("We wish it wasn't so, but sometimes "),o("a",{attrs:{href:"https://youtu.be/qcILD9OJ2wg",target:"_blank",rel:"noopener noreferrer"}},[e._v("good things take time"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("You're most likely encounter a bit of a wait when first adding a client to Xavier, during the initial sync with Xero. We import\nas much data as we can from Xero into Xavier - the more we bring in, the more powerful and flexible your reporting can be.")]),e._v(" "),o("p",[e._v("We cover the types of data imported from Xero in our "),o("router-link",{attrs:{to:"/xero-integration.html"}},[e._v("Xero Integration")]),e._v(" guide.")],1),e._v(" "),o("p",[e._v("Syncing of a new client can take up to 45 minutes for clients with a long history in Xero where hundreds of thousands of\njournals entries, invoices and bank transactions are in play.")]),e._v(" "),o("p",[e._v("Rest assured that we've optimised this process to be as fast as possible - the primary limiting factor here is Xero's API:\neven as certified partners we still have restrictions on how fast we can pull data out of Xero. If you're interested in the\ntech side of things, you can read about Xero's API rate limits "),o("a",{attrs:{href:"https://developer.xero.com/documentation/auth-and-limits/xero-api-limits",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Subsequent syncs, either manual or automated overnight, only retrieve the Xero records that have changed since the last sync,\nso should be substantially faster in comparison.")]),e._v(" "),o("p",[e._v("Think your import is taking too long or has failed? See next section for synch failures or "),o("router-link",{attrs:{to:"/contact-us.html"}},[e._v("Get in touch")]),e._v(", we're here to help.")],1),e._v(" "),o("h2",{attrs:{id:"initial-sync-failures"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initial-sync-failures"}},[e._v("#")]),e._v(" Initial Sync Failures")]),e._v(" "),o("p",[e._v("Errors could occur when data is synchronized for the first time from Xero to Xavier.")]),e._v(" "),o("p",[e._v("This section provides an overview of different types of sync errors, some of the possible scenarios that cause those errors and potential ways to fix the errors.")]),e._v(" "),o("p",[e._v("This section includes the common error types and may not cover all the possible errors.")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Xero auth failed. Could not sync client")]),e._v(": Check that you are using the correct Xero account credentials, and have the required access rights to the client in Xero, before trying again. Please see "),o("router-link",{attrs:{to:"/troubleshooting.html#xero-access-permissions"}},[e._v("Permissions")]),e._v(" above for more information.")],1)]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Daily Xero Rate limit exceeded")]),e._v(": Rate Limiter is a service that controls the amount of incoming and outgoing traffic to or from Xero.  If a User exceeds the rate limit, then any further requests will be denied until the rate limit timeframe resets. We are always working to improve and expand at our side, however, we don't have control over Xero's daily limit. The most common error occurs due to a large amount of data that needs to be fetched from Xero, which can lead to exceeding this daily limit and generate an error.\nPlease try again after the cooling period (24 hours). For further information please click "),o("a",{attrs:{href:"https://developer.xero.com/documentation/auth-and-limits/xero-api-limits",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Could not sync client")]),e._v(": Something has failed during the sync process please "),o("router-link",{attrs:{to:"/contact-us.html"}},[e._v("get in touch")]),e._v(".")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);