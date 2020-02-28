/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "de9b8cc2c06df232291c42048e61e33b"
  },
  {
    "url": "assets/css/0.styles.5884c527.css",
    "revision": "11ae1b32d1765febe2c0a7234f323993"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1907d2aa.js",
    "revision": "73b1c50d1802a1c11e3e14785a6cd978"
  },
  {
    "url": "assets/js/11.a4c62866.js",
    "revision": "0269f447643398d60f4bc12bd12c3b7e"
  },
  {
    "url": "assets/js/12.495a0e5e.js",
    "revision": "459c4fb4006ee48cbbda112566d61acf"
  },
  {
    "url": "assets/js/13.f47f0ba1.js",
    "revision": "47d16b1a69d426fe603451f2a6e3ae83"
  },
  {
    "url": "assets/js/14.d59273f9.js",
    "revision": "4389225e2ad99d22006742460f00b4b3"
  },
  {
    "url": "assets/js/15.4c8793cb.js",
    "revision": "9cdbd561f72ac316c6a180beaf0c0329"
  },
  {
    "url": "assets/js/16.af14bd5f.js",
    "revision": "302f11ee98674529ae4ca46623a5a117"
  },
  {
    "url": "assets/js/17.5efbbf30.js",
    "revision": "421536ac725b9319f7b5cc7cb89532e7"
  },
  {
    "url": "assets/js/18.2676f03f.js",
    "revision": "dfbabf94d2cec8d3cb51940b3f4c0d25"
  },
  {
    "url": "assets/js/19.cb241d1c.js",
    "revision": "4a9345a7a25fad983f6660b3917a42a8"
  },
  {
    "url": "assets/js/2.6fbae5e3.js",
    "revision": "800c44fefb7e0216ac1aec64372cb5aa"
  },
  {
    "url": "assets/js/20.6b1aa8b8.js",
    "revision": "5fa2a649e98d93f0156c1ee54d193c1f"
  },
  {
    "url": "assets/js/21.272292e2.js",
    "revision": "6967cb8d6ffa3853a6105d64b4b7977f"
  },
  {
    "url": "assets/js/22.bda450c2.js",
    "revision": "f8795ac31b1f49caeeb66465f273ad5e"
  },
  {
    "url": "assets/js/23.1f0f336e.js",
    "revision": "f11eb3e50b1bd5ebb5e53029e1bcde16"
  },
  {
    "url": "assets/js/24.35b2568e.js",
    "revision": "d81ebf7b1e8a95d59552e5d50a328a62"
  },
  {
    "url": "assets/js/25.b620d0ab.js",
    "revision": "a741a42e83c69e0c4eea970d3b59fad0"
  },
  {
    "url": "assets/js/26.739a3abd.js",
    "revision": "3b358e8a3a0c5482038d711a8df25d41"
  },
  {
    "url": "assets/js/27.e5f06b72.js",
    "revision": "f4aec18689b5403d610b4a840ad3804c"
  },
  {
    "url": "assets/js/28.a53313ce.js",
    "revision": "403b047b7a6d4da9208350a3e2b4922e"
  },
  {
    "url": "assets/js/29.9469e540.js",
    "revision": "bd44027c3d3f539e6bcaa84bb17ff312"
  },
  {
    "url": "assets/js/3.2a75d181.js",
    "revision": "e37deb7fd8f06b1a4c46793716d4d780"
  },
  {
    "url": "assets/js/30.8476d7e0.js",
    "revision": "ee2549af59f9c3f0c864d016e83fbc76"
  },
  {
    "url": "assets/js/31.cfa94054.js",
    "revision": "70364e67baa09f30083592319932ede4"
  },
  {
    "url": "assets/js/32.854eb33c.js",
    "revision": "88ad6cf0be8abc4eb99fc5eb17df8054"
  },
  {
    "url": "assets/js/33.d6c26766.js",
    "revision": "1c8cfbb8efecf66b4ea9c513f46713fe"
  },
  {
    "url": "assets/js/34.0919884a.js",
    "revision": "a0e687b5e4eb084d160b4ef0f6d95e14"
  },
  {
    "url": "assets/js/35.82bf0135.js",
    "revision": "1d60a2997fff7682971d7f45498239d2"
  },
  {
    "url": "assets/js/36.6f1cd849.js",
    "revision": "976515563f4a66f462c1de160433da5d"
  },
  {
    "url": "assets/js/37.e625202d.js",
    "revision": "95b88cb100e75768280a511db10be91f"
  },
  {
    "url": "assets/js/38.078cb5ec.js",
    "revision": "3302d53c7874654b9cf8289f42e2d4d8"
  },
  {
    "url": "assets/js/39.3651a591.js",
    "revision": "4976e31c4348ea0b4afe7658efc2f6e7"
  },
  {
    "url": "assets/js/4.e8a12254.js",
    "revision": "42e9fe99dd4c9a95428822cda0afdaaa"
  },
  {
    "url": "assets/js/40.7ce6fbf3.js",
    "revision": "e754075478873bfcd63eee4c096c3497"
  },
  {
    "url": "assets/js/41.b42b0bb9.js",
    "revision": "791e14c197df8aec41202d0ab4b6393d"
  },
  {
    "url": "assets/js/42.98e08f23.js",
    "revision": "0b7300550fd6eaed4c750bc653c5b751"
  },
  {
    "url": "assets/js/43.5cb21c60.js",
    "revision": "fb72e48f74fe57fac3dbdcd3abf69a64"
  },
  {
    "url": "assets/js/44.096d8508.js",
    "revision": "efd438a24bd2212c854b085738273c77"
  },
  {
    "url": "assets/js/45.47cc34b2.js",
    "revision": "e69246c675684cb433ec8399b9b99a2e"
  },
  {
    "url": "assets/js/46.0ce29280.js",
    "revision": "65b1a4946d57fdb5b2fb2976da7f26df"
  },
  {
    "url": "assets/js/47.02d4fc25.js",
    "revision": "c8bb43681244d83661c3648712c29426"
  },
  {
    "url": "assets/js/48.447a8678.js",
    "revision": "bbfb7d32f3a51408debf7bd62b61dc2b"
  },
  {
    "url": "assets/js/5.1501dad8.js",
    "revision": "947f464bd69d9dd773ffee4186ac5fa8"
  },
  {
    "url": "assets/js/6.4e04b220.js",
    "revision": "7118a7bbcd646c67af98d978bb1847bc"
  },
  {
    "url": "assets/js/7.c263a2a8.js",
    "revision": "ab0e1975787a1aad9270b91a64ac50a6"
  },
  {
    "url": "assets/js/8.52093a0b.js",
    "revision": "be12878727f33180d0592de5530692ec"
  },
  {
    "url": "assets/js/9.5448aaae.js",
    "revision": "431d7a99f0a7b9d7436675a892a9d660"
  },
  {
    "url": "assets/js/app.8d2b138b.js",
    "revision": "8320f47731a4ecc6144f95c63075f057"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "850c383e371f3c7582bfd26f2bc31ddf"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "d1ab4e2ce75b29a9c3046977d23fff7e"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "70e70968e5bd1322e3335607b879ac1b"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "f14b93436143d83cf89f8e91b0cdded5"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "b81729cde4ca3d2a224a116fed906777"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "224280cb648477a8a45a39c512f877a2"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "a9c94ca8cb6003f66e33b362f455f767"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "e672251f4e589ada277b1ff291cb0d0b"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "c11d0b08e550d7dc9c6f562d8c9dff53"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "6ec73d3dd6a96d015cd5c1db971cbb80"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "63a57b9767c8c93b13a5ddd70f9d4c9d"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "06f4cccaf6906c1340d9696876907151"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "a12136e605c7c13d25af6125dc1fc910"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "96d156bf3033b3cda2541da5dce9973e"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "f1739846316a9b212472dab54c595918"
  },
  {
    "url": "content/index.html",
    "revision": "0c597ddf93ea13866186cfa891b45093"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "9aba36908708669e56fd1a5ae6fe85b6"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "58e91433b7bbbf8ff566dff6a0952a4f"
  },
  {
    "url": "LICENSE.html",
    "revision": "aacdf11d6430b27eb499ec4f92a5d333"
  },
  {
    "url": "tags.html",
    "revision": "fc0095af33b8b695a4aee2c15d18936c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "3d0bbfb0a55dc2843668415e9574551e"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "daab37a9b9c17362caa1d78bdaca1679"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "baa4bc307ad1fe1567b68db94ce67b36"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "719b196073a1b7dace571f72e0089be6"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "4e0d73d8e19cd5c3abcf8b5aabb612e6"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "6db3d220da671c21768926652abdc83b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "0c9c14916c008892213f350c743be2c0"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "4b315a98b6b4a81cb691ffb31dc44c62"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "4278d41ac05c3b9067efe4a35a42761c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "8ba42981d3d46576edd59fc832d61045"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "d3441535cfb4fb31aac1cc9e2f189aad"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "0e14a41e8666feb5af271f7257766a92"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "b580216e4cc9af53ba97306f7ea9f86b"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "6c3fcf90894d7ad8df34d53cf3c3301e"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "f5d120f14e2fa2adb66b383204759fc6"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "02c7abd285ea0a20bc046f6f53ed84da"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "3f42391950dde774a459dd0c1c20e557"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "35c7f957cc5eb6aa3ffd04b9031f273b"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "499db7b1597e600fd0e2ac16582cb99d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
