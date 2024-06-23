'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "88429e7378cb882fb1c1a30c81273162",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b4fed7980f5fb3fcaaaf3f638094d70",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e73cd74cc3fdb81916b1e01123d13041",
".git/logs/refs/heads/main": "d819b8c23190ac737bee9d88a55faa30",
".git/logs/refs/remotes/origin/main": "32f80d890ba2f6a84b39e5c2a92d3fef",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/4dfc75467bb548bb111a971309adc13a8f6164": "8c13d8810db669a0b47ff81b2fbcfe61",
".git/objects/12/2d89d9c55e3487233f34fec474102b8026040a": "2841a210e3fa1c487ef1e1c15735c3d6",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1d/55e10e637a98bb4169b985b94eaa3b94fc05d6": "98c29f4b4f78f63180f83657047653d3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/72fe6fd99e22ecf229fdf699e8c728f1356ccc": "498163174d5ca6a2e1cff24595f6ac6c",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e031c86df297fa2b09d592b91c3379dd7df84f": "b5532ba4e23bfaf0d33fa873fef3ce39",
".git/objects/27/1c39aa2705a24851250b6cc7b8a49f43656d0f": "3a67093751a83610ebdedc7e8f564222",
".git/objects/29/3b13f8720030e92402a2dbb7651054d03890a1": "a482dc94b2f3472c3f7ad1632b6beba0",
".git/objects/31/7a97d5eca0f5552f6752a4eb96c764bf7d5057": "03cf367cf59cd64b702a34006dde6b53",
".git/objects/37/e02d1c7da68bc41552f28b2e67d17039e80916": "5fc50528ea8b648c9e661ad494fd10f9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/56/7b8bc43a63873569dd825f1e8cf2b4ec227854": "3e16c999ee25c5423d3d45470ce08ce3",
".git/objects/58/18c234bb9bcb8dcb2ff67bf3007c912e0ee5ba": "354ec5a4e0b63c3e11bc2af23f3f4564",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/5dc71e12698701b4c74f06d40bf37c9da20892": "30ed990546a5188e93ad846bc2306268",
".git/objects/6a/670de59fe014b007f24f5fe419c892dc0d45c7": "b17357635486c7517c7b50f8014433cb",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/d53c67532f9550109f0ffc4ea9ec604b310648": "bbdf67042f52075ad8fa85cefba54e31",
".git/objects/78/6c631155b2bdb58b4d480b2a4084572203b256": "5c4e4565d89f415471d3a48daa6eaf1e",
".git/objects/79/1de764d86577d4abce847cee4d6e9c4f8c903e": "f6b70a5a4e29ee4865f1f1080a327c10",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/94/b99ce8b9e069e581c565f3bda9edf5bbe216a5": "2ee28b9ea03f0454a02fb163cdf40856",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/ffad042f72713f817937424dbdc4415ab33523": "49e7a82612debe5b54e06ec6de9bdcec",
".git/objects/9f/7c88f0192745818e001d98abe4974e55c6a806": "d2a4bef292c13629c724d616aadf87f1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/515c35a2df37e8446f8ff2ff73453334fb8cd7": "749f67c13391d50ea37b8b17aee8a512",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/1c1450ba5b72d73a7d451ec83248e90cbe4491": "837d13ce106831c90aeed5af0ea85212",
".git/objects/c3/a1df175eb6e57f416a481d02090cac866c9746": "ef11cb6366421669983075f7cf1ef99f",
".git/objects/c5/2cf09e3163633e71d4b30dedc626e721f9c00e": "c7dbe199f7851c5f56ea23959ae03d74",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d0/09b5b1bb7c848dccd775648502385fd82b5211": "67fc902d86b6d64ebcdd8ee0160e1624",
".git/objects/d0/da53efd34cca0325bd3cc89bed267e4a32b373": "a4c65ecb5234aa6eed9874714ccbbf21",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/96412f998b1134fe0f555c76dfcec9262f03e5": "05b8b4d21df37359bfecdb8a65bc9a93",
".git/objects/dc/097d4c4682175c1f9cc4ba3bb1aee98ca03a98": "75e0c91b47102034a028f21c09f2a0f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/ef0e022ca42d0d94d7ca8dd4ce66c2ba526a93": "179d62cf56faf774e291bc81afdee26b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/2a63353e90f967c8191efc150dcc453f9a4baa": "803bcd8015166cd5fea306a99b94af4e",
".git/refs/heads/main": "674982b2300fd2ec36514147c989de8a",
".git/refs/remotes/origin/main": "674982b2300fd2ec36514147c989de8a",
"assets/AssetManifest.bin": "6c85283d927ac8085061603e25660ff0",
"assets/AssetManifest.bin.json": "30931b0d8215253e99ebcd1836e71915",
"assets/AssetManifest.json": "3ac27815ba10074a4264d82c1057c877",
"assets/assets/Bloc_logo.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/Bootstrap_logo.png": "831389a34b31d95055cc3be9d4a33211",
"assets/assets/CSS_logo.png": "8fce7d9aad9e016d15f0d1e65c3fede0",
"assets/assets/Dart_logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/dash.png": "5b56869b25707b990a1aec93bf375412",
"assets/assets/firebase_logo.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/Flutter_logo.png": "ec6e293684befb25e0f4d3a2dc2a29e5",
"assets/assets/Github_logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/HTML5_logo.png": "be70fc049a1192b07d6150c27ffe99d1",
"assets/assets/Instagram_logo.png": "6711f95d86ef83a8b53ebe6a4375edc5",
"assets/assets/Kotlin_Icon.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/LinkedIn_logo.png": "02bff898877bd500613a0f9e123e6bfe",
"assets/assets/Mobile_develop.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/Python_logo.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/Web_logo.png": "6a1ba0fa8ff9641f7220ba8a8f68f4f6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "570e7d032050bfb5dc3e6f5b7787e9c7",
"assets/NOTICES": "82d05ea2f040d4c9adace6749fadf8ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "c806e0c1fc6c84f56008a0cbde5e9918",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5152aa100927a8742153a2fc7498141",
"/": "f5152aa100927a8742153a2fc7498141",
"main.dart.js": "6e59983aa3d4346a62f5ae6d7a1cf831",
"manifest.json": "8a55a5abec7b3c49b6afe89b3d742116",
"version.json": "4d889d3dda40291dec7557a2f2f87793"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
