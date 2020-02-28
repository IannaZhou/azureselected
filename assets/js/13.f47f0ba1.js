(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{256:function(a,e,r){"use strict";r.r(e);var t=r(2),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"部属-java-ee-应用到-azure-第-1-部分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部属-java-ee-应用到-azure-第-1-部分"}},[a._v("#")]),a._v(" 部属 Java EE 应用到 Azure: 第 1 部分")]),a._v(" "),r("ContentMeta"),a._v(" "),r("p",[a._v("基于云的应用程序开发有多种选择，包括传统的 "),r("code",[a._v("IaaS")]),a._v("（基础架构即服务）， "),r("code",[a._v("PaaS")]),a._v("（平台即服务）和 "),r("code",[a._v("CaaS")]),a._v("（ 容器即服务）一直到 "),r("a",{attrs:{href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kubernetes"),r("OutboundLink")],1),a._v(" 和 "),r("code",[a._v("Serverless")]),a._v(' （无服务器）（也许还有更多我未提及！）。思考实际应用范围，而不是 “一种适合所有模型的方法” ，每种选择都有其优缺点。 最终, 每个场景都是唯一的，最终选择取决于需求 — 但是有很多 "选择" 总是好的!')]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/60/0*v9YZMVTbaw9xoV70.png?q=20",alt:"img"}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://miro.medium.com/max/980/0*v9YZMVTbaw9xoV70.png",alt:"img"}})]),a._v(" "),r("p",[a._v("这是系列博客的第一篇，它将带您逐步了解其中一种在 Azure 中运行 Java EE 应用的方法。 我们将采用最基本的方法将 Java EE 应用部署在一个 "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("Azure 虚拟机"),r("OutboundLink")],1),a._v(" 以及 "),r("a",{attrs:{href:"https://azure.microsoft.com/services/postgresql/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("Azure PostgreSQL 数据库"),r("OutboundLink")],1),a._v(" 服务作为后端数据库。本质上, 这是结合 "),r("code",[a._v("IaaS")]),a._v(" (Azure 虚拟机) 与 "),r("code",[a._v("PaaS")]),a._v(" ( Azure 中托管的 PostgreSQL )")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("其他选项（例如容器和Kubernetes）将在以后的文章中介绍")])])]),a._v(" "),r("p",[a._v("本文中使用的示例是一个简单的三层应用程序，该应用使用Java EE 8规范，例如JAX-RS，EJB，CDI，JPA，JSF，Bean验证。 我们将使用 "),r("a",{attrs:{href:"https://www.payara.fish/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Payara服务器"),r("OutboundLink")],1),a._v(" 部署应用程序，并使用 "),r("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PostgreSQL"),r("OutboundLink")],1),a._v(" 用作关系数据库。")]),a._v(" "),r("p",[a._v("在本教程中，我们将介绍:")]),a._v(" "),r("ul",[r("li",[a._v("Azure 中 Postgres 和虚拟机设置")]),a._v(" "),r("li",[a._v("在虚拟机中设置 Payara 服务器")]),a._v(" "),r("li",[a._v("配置和安装 Java EE 应用")]),a._v(" "),r("li",[a._v("探索其功能")])]),a._v(" "),r("p",[a._v("除某些微小改动外, 本教程中使用的应用来自  "),r("a",{attrs:{href:"https://twitter.com/reza_rahman",target:"_blank",rel:"noopener noreferrer"}},[a._v("Reza Rahman"),r("OutboundLink")],1),a._v(" 的 "),r("a",{attrs:{href:"https://github.com/m-reza-rahman/javaee-azure/tree/master/javaee",target:"_blank",rel:"noopener noreferrer"}},[a._v("此项目"),r("OutboundLink")],1),a._v("。")]),a._v(" "),r("h1",{attrs:{id:"先决条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[a._v("#")]),a._v(" 先决条件")]),a._v(" "),r("p",[a._v("你将需要 "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("微软 Azure 账号"),r("OutboundLink")],1),a._v(" 和 "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?view=azure-cli-latest&WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("Azure CLI"),r("OutboundLink")],1),a._v(" 来完成本教程。")]),a._v(" "),r("p",[a._v("如果没有微软账户, 在此 "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("免费注册"),r("OutboundLink")],1),a._v(" 。Azure CLI 是一个成熟的管理 Azure 资源跨平台命令行 — 请使用 "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest&WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("这些指示"),r("OutboundLink")],1),a._v(" 安装。")]),a._v(" "),r("h1",{attrs:{id:"第一件事情"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一件事情"}},[a._v("#")]),a._v(" 第一件事情")]),a._v(" "),r("p",[a._v("使用 Azure CLI 设置本教程的 Azure 订阅ID。")]),a._v(" "),r("p",[a._v("设置您的Azure订阅ID：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export AZURE_SUBSCRIPTION_ID=[to be filled]az account set --subscription $AZURE_SUBSCRIPTION_ID\n")])])]),r("p",[a._v("创建一个资源组，其中将包含您将在本教程中创建的所有服务（资源）。 资源组就像一个逻辑容器，其中包含用于Azure解决方案的相关资源。 资源组包括您要作为组管理的那些资源。")]),a._v(" "),r("p",[a._v("创建资源组：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export AZURE_RESOURCE_GROUP_NAME=[to be filled]\nexport AZURE_LOCATION=[to be filled]az group create --name $AZURE_RESOURCE_GROUP_NAME --location $AZURE_LOCATION\n")])])]),r("h1",{attrs:{id:"在-azure-中安装-postgresql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-azure-中安装-postgresql"}},[a._v("#")]),a._v(" 在 Azure 中安装 PostgreSQL")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/postgresql/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("用于PostgreSQL的Azure数据库"),r("OutboundLink")],1),a._v(" 是一个基于开源 "),r("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Postgres 数据库引擎"),r("OutboundLink")],1),a._v(" 关系数据库服务.这是一种完全托管的数据库即服务产品，有两个部署选项可用，作为 "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/postgresql/concepts-servers?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("单一服务器"),r("OutboundLink")],1),a._v(", 和作为 "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/postgresql/concepts-hyperscale-nodes?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("和超大型 (Citus) 集群"),r("OutboundLink")],1),a._v("。")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("在本教程中，我们将使用单服务器选项")])])]),a._v(" "),r("p",[a._v("我们将使用 "),r("code",[a._v("az postgres server create")]),a._v(" 命令在 Azure 中创建 Postgres 服务器实例。 首先, 设置一些服务器属性，例如名称，管理员用户等。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export AZURE_POSTGRES_SERVER_NAME=[to be filled]\nexport AZURE_POSTGRES_ADMIN_USER=[to be filled]\nexport AZURE_POSTGRES_ADMIN_PASSWORD=[to be filled]\nexport SKU=B_Gen5_1\nexport STORAGE=5120\n")])])]),r("blockquote",[r("p",[r("em",[a._v("对于存储和 SKU 选项, 请参考  "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/postgresql/concepts-pricing-tiers?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("该文档"),r("OutboundLink")],1),a._v("。")])])]),a._v(" "),r("p",[a._v("然后, 使用此命令创建并初始化数据库实例：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az postgres server create --resource-group $AZURE_RESOURCE_GROUP_NAME --name $AZURE_POSTGRES_SERVER_NAME  --location $AZURE_LOCATION --admin-user $AZURE_POSTGRES_ADMIN_USER --admin-password $AZURE_POSTGRES_ADMIN_PASSWORD --storage-size $STORAGE --sku-name $SKU\n")])])]),r("p",[a._v("设置过程将花费几分钟。")]),a._v(" "),r("p",[a._v("使用 "),r("code",[a._v("az postgres server show")]),a._v(" 命令，检查刚刚配置的 Postgres 数据库实例的详细信息。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az postgres server show --resource-group $AZURE_RESOURCE_GROUP_NAME --name $AZURE_POSTGRES_SERVER_NAME\n")])])]),r("p",[a._v("此时应该得到 JSON 格式响应。请记下 "),r("code",[a._v("fullyQualifiedDomainName")]),a._v(" 属性的值，因为稍后将使用它来连接到 Postgres实例。")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("其格式应该是:")]),a._v(" "),r("code",[a._v("*[AZURE_POSTGRES_DB_NAME].postgres.database.azure.com*")])])]),a._v(" "),r("h1",{attrs:{id:"在azure中安装虚拟机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在azure中安装虚拟机"}},[a._v("#")]),a._v(" 在Azure中安装虚拟机")]),a._v(" "),r("p",[a._v("我们将使用 Azure "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/?WT.mc_id=medium-blog-abhishgu",target:"_blank",rel:"noopener noreferrer"}},[a._v("虚拟机"),r("OutboundLink")],1),a._v(" 托管 Payara JavaEE 应用程序服务器。具体来说，这将是基于 Ubuntu 的 Linux 虚拟机。")]),a._v(" "),r("p",[a._v("首先，设置虚拟机所需的信息：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export AZURE_VM_NAME=[to be filled]\nexport AZURE_VM_USER=[to be filled]\nexport AZURE_VM_PASSWORD=[to be filled]\nexport VM_IMAGE=UbuntuLTS\n")])])]),r("p",[a._v("我们将使用 "),r("code",[a._v("az vm create")]),a._v(" 命令创建虚拟机实例：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az vm create --resource-group $AZURE_RESOURCE_GROUP_NAME --name $AZURE_VM_NAME --image $VM_IMAGE --admin-username $AZURE_VM_USER --admin-password $AZURE_VM_PASSWORD\n")])])]),r("p",[a._v("此虚拟机配置将花费几分钟。")]),a._v(" "),r("p",[a._v("使用 "),r("code",[a._v("az vm list-ip-addresses")]),a._v(" 命令，获取虚拟机的公共IP地址。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az vm list-ip-addresses --resource-group $AZURE_RESOURCE_GROUP_NAME --name $AZURE_VM_NAME\n")])])]),r("p",[a._v("查看 JSON 格式响应 — 检查 "),r("code",[a._v("publicIpAddresses")]),a._v(" 部分，并记下 "),r("code",[a._v("ipAddress")]),a._v(" 属性的值。 将其配置为环境变量，因为您将在后续步骤中使用它。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export VM_IP=[to be filled]\n")])])]),r("h2",{attrs:{id:"允许虚拟机访问-postgres-数据库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#允许虚拟机访问-postgres-数据库"}},[a._v("#")]),a._v(" 允许虚拟机访问 Postgres 数据库")]),a._v(" "),r("p",[a._v("默认情况下无法访问 Postgres 数据库。 使用 "),r("code",[a._v("az postgres server firewall-rule create")]),a._v(" 命令创建防火墙规则，明确允许虚拟机访问 Postgres 实例。这将允许虚拟机内部署的 JavaEE 应用程序与 Postgres 通信。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export FIREWALL_RULE_NAME=AllowJavaEECafeAppOnVMaz postgres server firewall-rule create --resource-group $AZURE_RESOURCE_GROUP_NAME --server $AZURE_POSTGRES_SERVER_NAME --name $FIREWALL_RULE_NAME --start-ip-address $VM_IP --end-ip-address $VM_IP\n")])])]),r("h1",{attrs:{id:"在虚拟机中安装-payara-服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在虚拟机中安装-payara-服务器"}},[a._v("#")]),a._v(" 在虚拟机中安装 Payara 服务器")]),a._v(" "),r("p",[r("a",{attrs:{href:"http://www.payara.fish/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Payara 服务器"),r("OutboundLink")],1),a._v(" 是派生自 "),r("a",{attrs:{href:"https://javaee.github.io/glassfish/",target:"_blank",rel:"noopener noreferrer"}},[a._v("GlassFish"),r("OutboundLink")],1),a._v(" 开源应用程序服务器，它支持Java EE的可靠和安全部署。 ("),r("a",{attrs:{href:"https://jakarta.ee/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jakarta EE"),r("OutboundLink")],1),a._v(") 和 "),r("a",{attrs:{href:"https://microprofile.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MicroProfile"),r("OutboundLink")],1),a._v(" 应用程序可在任何环境中使用：本地，云中或混合环境中。")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("在")]),a._v(" "),r("a",{attrs:{href:"https://github.com/payara/Payara",target:"_blank",rel:"noopener noreferrer"}},[r("em",[a._v("GitHub")]),r("OutboundLink")],1),a._v(" "),r("em",[a._v("检出（git checkout命令）此项目，或在")]),a._v(" "),r("a",{attrs:{href:"https://docs.payara.fish/",target:"_blank",rel:"noopener noreferrer"}},[r("em",[a._v("文档")]),r("OutboundLink")],1),a._v(" "),r("em",[a._v("了解更多!")])])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("ssh $AZURE_VM_USER@$VM_IP\n")])])]),r("p",[a._v("提示时输入密码。 登录虚拟机后，请继续以下步骤。")]),a._v(" "),r("h2",{attrs:{id:"安装所需工具集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装所需工具集"}},[a._v("#")]),a._v(" 安装所需工具集")]),a._v(" "),r("p",[a._v("在安装Payara服务器之前，我们需要预安装某些配置，例如JDK等。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("sudo apt-get update\nsudo apt install openjdk-8-jdk\nsudo apt install maven\n")])])]),r("h2",{attrs:{id:"安装-payara-服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-payara-服务器"}},[a._v("#")]),a._v(" 安装 Payara 服务器")]),a._v(" "),r("p",[a._v("我们使用 Payara 服务器 "),r("code",[a._v("5.193.1")]),a._v(" 版本，这是撰写本教程时的最新版本。 该设置仅涉及下载和提取服务器 zip 文件。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export PAYARA_VERSION=5.193.1wget https://s3-eu-west-1.amazonaws.com/payara.fish/Payara+Downloads/$PAYARA_VERSION/payara-$PAYARA_VERSION.zipsudo apt install unzip\nunzip payara-$PAYARA_VERSION.zip\n")])])]),r("p",[a._v("运行 "),r("code",[a._v("ls ~/payara5/")]),a._v(" 进行验证。")]),a._v(" "),r("p",[a._v("使用 "),r("code",[a._v("asadmin")]),a._v(" 启动服务器。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("~/payara5/bin/asadmin start-domain\n")])])]),r("p",[a._v("服务器启动将需要一些时间。 您应该看到以下日志：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Waiting for domain1 to start ..................\nSuccessfully started the domain : domain1\ndomain  Location: /home/abhishgu/payara5/glassfish/domains/domain1\nLog File: /home/abhishgu/payara5/glassfish/domains/domain1/logs/server.log\nAdmin Port: 4848\nCommand start-domain executed successfully.\n")])])]),r("h1",{attrs:{id:"设置和部署应用程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置和部署应用程序"}},[a._v("#")]),a._v(" 设置和部署应用程序")]),a._v(" "),r("p",[a._v("此时我们已经启动并运行了虚拟机和 Payara 服务器，现在可以部署应用程序了。")]),a._v(" "),r("p",[a._v("首先克隆Git存储库：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("git clone https://github.com/abhirockzz/javaee-on-azure-iaasexport APP_FOLDER_NAME=javaee-on-azure-iaas\n")])])]),r("p",[a._v("需要使用 Azure 中 Postgres 数据库的 JDBC URL 更新 "),r("code",[a._v("web.xml")]),a._v(" 文件（在 "),r("code",[a._v("javaee-on-azure-iaas/src/main/webapp/WEB-INF")]),a._v(" 下）。 它出现在部分 ``属性` 中，其格式如下：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("jdbc:postgresql://POSTGRES_FQDN:5432/postgres?user=AZURE_POSTGRES_ADMIN_USER@=AZURE_POSTGRES_SERVER_NAME&amp;password=AZURE_POSTGRES_ADMIN_PASSWORD&amp;sslmode=require\n")])])]),r("p",[a._v("这是构成JDBC URL一部分的占位符列表:")]),a._v(" "),r("ul",[r("li",[a._v("Postgres 实例 "),r("code",[a._v("POSTGRES_FQDN")]),a._v(" 和 "),r("code",[a._v("fullyQualifiedDomainName")]),a._v(" 的值")]),a._v(" "),r("li",[r("code",[a._v("AZURE_POSTGRES_ADMIN_USER")]),a._v(" 和管理员用户名用于配置 PG (Postgres)")]),a._v(" "),r("li",[r("code",[a._v("AZURE_POSTGRES_SERVER_NAME")]),a._v(" 和服务器名称用于配置 PG")]),a._v(" "),r("li",[r("code",[a._v("AZURE_POSTGRES_ADMIN_PASSWORD")]),a._v(" 和管理员密码用于配置 PG")])]),a._v(" "),r("p",[a._v("设置所需的值：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export POSTGRES_FQDN=[to be filled]\nexport AZURE_POSTGRES_ADMIN_USER=[to be filled]\nexport AZURE_POSTGRES_SERVER_NAME=[to be filled]\nexport AZURE_POSTGRES_ADMIN_PASSWORD=[to be filled]\n")])])]),r("p",[a._v("只需使用这些命令即可替换：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export FILE_NAME=javaee-on-azure-iaas/src/main/webapp/WEB-INF/web.xmlsed -i 's/POSTGRES_FQDN/'\"$POSTGRES_FQDN\"'/g' $FILE_NAMEsed -i 's/AZURE_POSTGRES_SERVER_NAME/'\"$AZURE_POSTGRES_SERVER_NAME\"'/g' $FILE_NAMEsed -i 's/AZURE_POSTGRES_ADMIN_USER/'\"$AZURE_POSTGRES_ADMIN_USER\"'/g' $FILE_NAMEsed -i 's/AZURE_POSTGRES_ADMIN_PASSWORD/'\"$AZURE_POSTGRES_ADMIN_PASSWORD\"'/g' $FILE_NAME\n")])])]),r("p",[a._v("如下是 `` 部分的示例：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("<data-source>\n    <name>java:global/JavaEECafeDB</name>\n    <class-name>org.postgresql.ds.PGPoolingDataSource</class-name>\n    <url>jdbc:postgresql://foobar-pg.postgres.database.azure.com:5432/postgres?user=foobar@foobar-pg&amp;password=foobarbaz&amp;sslmode=require</url>\n</data-source>\n")])])]),r("p",[a._v("运行环境已设置完成。 开始构建程序吧！")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("mvn clean install -f $APP_FOLDER_NAME/pom.xml\n")])])]),r("p",[a._v("我们开始确认是否有可用的 WAR 文件：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("ls -lrt $APP_FOLDER_NAME/target | grep javaee-cafe.war\n")])])]),r("p",[a._v("作为应用程序设置过程的最后一步, 下载 "),r("a",{attrs:{href:"https://jdbc.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Postgres JDBC 驱动程序"),r("OutboundLink")],1),a._v(" 并将其添加到 Payara 服务器。")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("当前使用驱动版本号")]),a._v(" "),r("code",[a._v("*42.2.8*")])])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export PG_DRIVER_JAR=postgresql-42.2.8.jarwget https://jdbc.postgresql.org/download/$PG_DRIVER_JAR\n")])])]),r("p",[a._v("调用  "),r("code",[a._v("asadmin add-library")]),a._v(" ， 将JAR添加到Payara：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("~/payara5/glassfish/bin/asadmin add-library $PG_DRIVER_JAR\n")])])]),r("p",[a._v("最后，开始部署WAR文件，将其复制到域 "),r("code",[a._v("autodeploy")]),a._v(" 文件夹中：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("cp $APP_FOLDER_NAME/target/javaee-cafe.war ~/payara5/glassfish/domains/domain1/autodeploy\n")])])]),r("p",[a._v("部署将需要一些时间。 同时，您可以使用以下方法跟踪日志：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("tail -f ~/payara5/glassfish/domains/domain1/logs/server.log\n")])])]),r("p",[a._v("您应该会看到 "),r("code",[a._v("javaee-cafe")]),a._v(" 应用程序的日志消息，提示成功部署：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[2019-11-18T13:34:21.317+0000] [Payara 5.193] [INFO] [NCLS-DEPLOYMENT-02035] [javax.enterprise.system.tools.deployment.autodeploy] [tid: _ThreadID=104 _ThreadName=payara-executor-service-scheduled-task] [timeMillis: 1574084061317] [levelValue: 800] [[\n[AutoDeploy] Successfully autodeployed : /home/abhishgu/payara5/glassfish/domains/domain1/autodeploy/javaee-cafe.war.]]\n")])])]),r("h1",{attrs:{id:"探索应用程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#探索应用程序"}},[a._v("#")]),a._v(" 探索应用程序")]),a._v(" "),r("p",[a._v("现在该测试 JavaEE应用了！ 首先，我们可以使用网络浏览器访问该应用程序。 但是，就像 Postgres 实例一样，默认情况下，托管 Payara 服务器和应用程序的虚拟机也受到保护，即您无法从公共 Internet 访问它。")]),a._v(" "),r("p",[a._v("我们需要使用 "),r("code",[a._v("az vm open-port")]),a._v(" 创建防火墙规则，使本地计算机可以访问它。 我们只需要公开端口 "),r("code",[a._v("8080")]),a._v(" ，因为这是 Payara 服务器使用的默认 HTTP 端口")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az vm open-port --port 8080 --resource-group $AZURE_RESOURCE_GROUP_NAME --name $AZURE_VM_NAME\n")])])]),r("h2",{attrs:{id:"访问jsf前端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#访问jsf前端"}},[a._v("#")]),a._v(" 访问JSF前端")]),a._v(" "),r("p",[a._v("使用浏览器打开 "),r("code",[a._v("http://[ENTER_VM_IP]:8080/javaee-cafe")]),a._v(". 你可以使用此图形交换系统创建、删除和列出咖啡（coffees）。")]),a._v(" "),r("h2",{attrs:{id:"使用-rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-rest-api"}},[a._v("#")]),a._v(" 使用 REST API")]),a._v(" "),r("p",[a._v("该应用使用 REST API 同样用于创建、删除和列出咖啡（coffees）。")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("export VM_IP=[to be filled]\n")])])]),r("p",[a._v("创建咖啡：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('curl -X POST $VM_IP:8080/javaee-cafe/rest/coffees -d \'{"name":"cappuccino","price":"10"}\' -H "Content-Type: application/json"\ncurl -X POST $VM_IP:8080/javaee-cafe/rest/coffees -d \'{"name":"caffe-latte","price":"15"}\' -H "Content-Type: application/json"\n')])])]),r("p",[a._v("获取全部咖啡：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('curl -H "Accept: application/json" $VM_IP:8080/javaee-cafe/rest/coffees\n')])])]),r("p",[a._v("此时应会看到 JSON 格式的响应，列出刚才添加的所有咖啡")]),a._v(" "),r("p",[a._v("通过 ID 获取咖啡：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('curl -H "Accept: application/json" $VM_IP:8080/javaee-cafe/rest/coffees/1\n')])])]),r("p",[a._v("通过 ID 删除咖啡：")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('curl -X DELETE $VM_IP:8080/javaee-cafe/rest/coffees/1\ncurl -H "Accept: application/json" $VM_IP:8080/javaee-cafe/rest/coffees\n')])])]),r("p",[a._v("注意 "),r("code",[a._v("cappuccino")]),a._v(" 已删除。")]),a._v(" "),r("h1",{attrs:{id:"清理资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#清理资源"}},[a._v("#")]),a._v(" 清理资源")]),a._v(" "),r("p",[a._v("探索完应用程序后，您可以删除资源。 由于我们使用了资源组，因此执行单个命令很容易。")]),a._v(" "),r("blockquote",[r("p",[r("em",[a._v("请注意，这将删除该组中的所有资源，包括您在教程中创建的资源（虚拟机，Postgres等），如果资源组是")]),a._v(" 之前创建 "),r("em",[a._v("，资源组中的其他服务实例也会删除")])])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("az group delete --name $AZURE_RESOURCE_GROUP_NAME\n")])])]),r("h1",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),r("p",[a._v("您已通过学习如何在 Azure 中部署 Java EE 应用程序，掌握了使用虚拟机和托管数据库部属应用服务器，提供长期持久性支持。")]),a._v(" "),r("p",[a._v("如前所述，每个选项都有其优缺点。 在这种情况下，您可以完全控制应用程序，部署基础结构，扩展方式等。另一方面，请记住，管理基础结构、调整应用大小、安全防护等应用程序功能，是同交付核心业务价值一样，必须承担的一系列责任。")]),a._v(" "),r("p",[a._v("下一部分将深入探讨如何使用Docker容器平台来部署Java EE应用程序。 敬请关注！")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);