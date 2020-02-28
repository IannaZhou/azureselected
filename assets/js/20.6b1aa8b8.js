(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{266:function(e,t,r){"use strict";r.r(t);var o=r(2),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"managing-security-with-azure-lighthouse-and-azure-arc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#managing-security-with-azure-lighthouse-and-azure-arc"}},[e._v("#")]),e._v(" Managing security with Azure Lighthouse and Azure Arc")]),e._v(" "),r("ContentMeta"),e._v(" "),r("p",[e._v("I've previously blogged about Azure Lighthouse, for "),r("a",{attrs:{href:"https://techcommunity.microsoft.com/t5/ITOps-Talk-Blog/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse/ba-p/833928?WT.mc_id=itopstalk-blog-socuff",target:"_blank",rel:"noopener noreferrer"}},[e._v("managing multiple difference Azure tenancies"),r("OutboundLink")],1),e._v(". This capability is useful for both Managed Service Providers, with support arrangements for multiple customers, and for large or complex Enterprise organizations (for example, if there are sub-brands or franchisees). Onboarding is done via deploying an Azure Resource Manager template or publishing an Azure Marketplace offer (public or private), which enables delegated administration into the other tenancies.")]),e._v(" "),r("p",[e._v("This allows service providers, from the account in their own primary Azure tenancy, to have visibility of all of their customer's Azure resources and to be able to act on them, from the Azure Portal, CLI or APIs.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/158921iA45A705D8E928742/image-size/large?v=1.0&px=999",alt:"ResourceGroups-AllCustomers"}})]),e._v(" "),r("p",[r("em",[e._v("Resources from multiple Azure tenancies, visible via the Azure Portal.")])]),e._v(" "),r("p",[r("strong",[e._v("The best way to unlock the power of this tool is to first decide what you're going to manage")]),e._v(" - and security is always a good place to start.")]),e._v(" "),r("p",[e._v("First, we want to make sure that all of the resources across our customers are compliance to the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/security-center/security-center-policy-definitions?WT.mc_id=itopstalk-blog-socuff",target:"_blank",rel:"noopener noreferrer"}},[e._v("default set of security policies"),r("OutboundLink")],1),e._v(" that the Azure Security Center monitors by default. In this picture, you can see that one of our customer subscriptions has 4 non-compliant resources against that policy initiative, totally 21 policies that are non-compliant.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/158922iFF489F98E014166F/image-size/large?v=1.0&px=999",alt:"AzurePolicyCompliance-All customers"}})]),e._v(" "),r("p",[e._v("From here, we can drill down into those 4 resources and see what needs remediation in each, without having to switch logins into a different tenancy.")]),e._v(" "),r("p",[e._v("Next, we'll take a look at the Azure Security Center, and see not only an overall secure score but also recommended security hygiene measures, regulatory compliance and security alerts, aggregated across all of the tenancies we have access in to. For partners providing Security-as-a-Service offers, this provides you with a great task list, and large Enterprises can now get a single picture of their security risk across their multiple environments.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/158923i2EBD45FCEF944ABD/image-size/large?v=1.0&px=999",alt:"SecurityCenter-Overview"}})]),e._v(" "),r("p",[e._v("And if we want a more granular level of detail, we can bring up the Secure Score details for each individual tenancy:")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/158924i65981E3540B38001/image-size/large?v=1.0&px=999",alt:"SecureScore"}})]),e._v(" "),r("p",[r("strong",[e._v("But wait, there's more!")])]),e._v(" "),r("p",[e._v("With the recently announced "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-arc/servers/overview?WT.mc_id=itopstalk-blog-socuff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Arc (preview)"),r("OutboundLink")],1),e._v(", non-Azure Windows and Linux Servers can now be onboarded into Azure as connected machines, allowing you to query Azure Policies inside the VMs (guest configuration) and ingest log data into Log Analytics. It's early days for Azure Arc, with support for more services coming soon, but now those connected machines can be queried for their operating system-level security settings via Azure Policy. You've now just unlocked the full breadth of your customer's server environment, whether their servers are in Azure, in a data center, on premises or even in someone else's Cloud!")]),e._v(" "),r("p",[e._v("As the capabilities of both "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/lighthouse/concepts/cross-tenant-management-experience?WT.mc_id=itopstalk-blog-socuff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Lighthouse"),r("OutboundLink")],1),e._v(" and Azure Arc grow, this tool will become even more powerful as a centralized management capability for partners and large Enterprises. And remember, if the Azure Portal isn't your thing, you can automate those tasks through the CLI or APIs at scale now, across multiple tenancies. I just wish I could share what's on the roadmap next!")]),e._v(" "),r("p",[e._v("For more information on Azure Lighthouse, including onboarding options, visit: "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/lighthouse/?WT.mc_id=itopstalk-blog-socuff",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/azure/lighthouse/?WT.mc_id=itopstalk-blog-socuff"),r("OutboundLink")],1)])],1)}),[],!1,null,null,null);t.default=i.exports}}]);