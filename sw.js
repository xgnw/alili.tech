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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "archive/Math/11.demo.js",
    "revision": "db38ed8eae59a815dba88a3da2ddbd20"
  },
  {
    "url": "archive/Math/12.数学篇 - 概率之随机变量与分布.js",
    "revision": "d42ac44d02aafcf6179fcf2b0b5cc204"
  },
  {
    "url": "css/style.css",
    "revision": "1ef00f927e5346e3924ce32a4a8c8379"
  },
  {
    "url": "js/av-min.js",
    "revision": "efe0dadd662922c8e1b2c9bb2a9fd03a"
  },
  {
    "url": "js/jquery.min.js",
    "revision": "32015dd42e9582a80a84736f5d9a44d7"
  },
  {
    "url": "js/lazyload.js",
    "revision": "5a0a087606ad5b73ad985db19a150220"
  },
  {
    "url": "js/main.js",
    "revision": "1ca059ffc779974d4c16e549da914a1a"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "38021bc5f4c004f5afbee38855ba260f"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "48ab1883875b3c7f06592dd04eb2c297"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "lib/highlight.min.js",
    "revision": "4e0da54bb1cb0511de5f7bbf12298aa9"
  },
  {
    "url": "lib/jquery/jquery.min.js",
    "revision": "32015dd42e9582a80a84736f5d9a44d7"
  },
  {
    "url": "lib/justified-gallery/jquery.justifiedGallery.min.js",
    "revision": "7b8f9e0d4b845e90381ae044b8b5e657"
  },
  {
    "url": "lib/justified-gallery/justifiedGallery.min.css",
    "revision": "9a5e8949e0c84f864668f0205c5fafbd"
  },
  {
    "url": "lib/meslo-LG/fonts/MesloLGS-Regular.woff",
    "revision": "c26c11f108b98536a374afb1337e156c"
  },
  {
    "url": "lib/meslo-LG/styles.css",
    "revision": "7a90741fcc29dc2ef0df90a00ceb7e31"
  },
  {
    "url": "lib/typed.js",
    "revision": "f6356fe249b7f46366f4202688a5488b"
  },
  {
    "url": "oss.js",
    "revision": "17b7a2e2c82a9db11b4e7b39cbd5796f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/.*\.css/, workbox.strategies.staleWhileRevalidate({ plugins: [{ cacheableResponse: { statuses: [ 0, 200 ] } }] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ plugins: [{ expiration: { maxEntries: 50 } }] }), 'GET');
workbox.routing.registerRoute(/.*\.html/, workbox.strategies.networkFirst(), 'GET');
