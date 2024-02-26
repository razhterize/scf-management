'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eff2384610c54c5541cdcc4efaa5d8be",
".git/config": "00ca9a86b6ed24912bbb1dc27b880e56",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "edbd3bb14e40e579d5cded53a40c5451",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ba2eacf600abd310a93fa161d599b71",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6a56e74ef799ee057f937ddb8d39422b",
".git/logs/refs/heads/main": "6a56e74ef799ee057f937ddb8d39422b",
".git/logs/refs/remotes/origin/main": "998d0464d0252f5c661de85f67f4dc3c",
".git/objects/02/c33702b5c0163af193412f153a5cac8fec8ef7": "ab8caa5ec05acdc5cffcf9af6828b5f0",
".git/objects/03/76964c3d3073470b0b87d447831d3b4439b133": "1c15fb05e1f175037da73df01883b8dc",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/09/9d3aad10dea5e44fad6c44033105e3626dd539": "2c97ca84b2b90bfe7228349118abb802",
".git/objects/09/cfd35ab88a8e9e346137071064e5669e5b2366": "7495f2a0686fe8bb50b1e0546e2b5be0",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/9e6815331af8c1b9ed37ed86d32a1ae7c0e9fe": "f0c373d6839c61c56c10d0e7cd5a22a5",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/be0f92c99bf556c720d9832e97768bf099b2e1": "e95e3f5863d2101d2837fd4ae5358f1f",
".git/objects/11/1bad7715d87f66a2478d5b03aecc748323b3d1": "eb508e66d2364c124fceffcc499d4c89",
".git/objects/12/12429de542c34b66cb07679317edd8003da986": "fca5cd42a237f7a49a10ddf6d40d2a58",
".git/objects/12/624e088b92c57b27c746aa810daf3e5a98314b": "1e54f787359732667671b0c6d28eb988",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1a/9835475a3aa5b1c6e73583bc96985c77e3338e": "0f8051783f9c0fe2950a2253a34ae60e",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/1fbd2bd170d88649eb4c819735eb43a33a123b": "a07da749183d7a79e2ec3b5a93ad4083",
".git/objects/1d/080888380bcd7ad16f8260290dfe49f1073036": "0218a773f3df71b73c1277b59978f7ac",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1e/c14930c753e9e24ac0e815a457e465056351e5": "1260c5deca485f956aca9f02965af6cf",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/887d1f4aaddd6d640d7cedd370b05090f7e3dd": "d44da067f218f16cfdd69e16700b3f6f",
".git/objects/23/251a85a35e643d388802cd9cc5236436919347": "4b881ac56ed37b7760c282a214a5c7ad",
".git/objects/24/11d93997fadfe2f9436d2c2068395b344b7d13": "1c995fa1cf03a407ed69ec22d119117e",
".git/objects/24/35a4fb466fc3f33e23f34ab3110e651928c991": "6a22195fb56cb00f4a88132f49f8f980",
".git/objects/27/92eba5e72e1380f234ed84b8ff7d329453e77c": "489a58c90fa612421d458e4b3a4567ff",
".git/objects/28/b7b869bfd69fa9a047d1c675fc056163d378f6": "1fa280d717aa1d0d85d7abf9c010a1b7",
".git/objects/2b/735c4f5bd37b2fc571b944b499f5f3b926855c": "c0d83ca8923b8bdb947ad17ffcd083c0",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/79f7c0db08ed3c98c1779c0a36c038ae6da2ce": "772e9d1a6647a0c9a93daa1c09dac4b1",
".git/objects/2e/82dfc2e17b92573e07fbea9c4232a302701485": "d7a699445d90fa326fc22e6bddc33b44",
".git/objects/2e/b655ac3104ade421d9daccfee4cb7b827a6bc5": "32f4be8dabf4ddf8d2a55081d9e324ba",
".git/objects/35/d17f433a57e4e9363600fd3830a3e9d9eeaf92": "f512c81a96a0010cd3c31a3dd03ff7e6",
".git/objects/38/599c3e1b093ce17d7ba3642038c769b70ad052": "abca859d52cbdcfaaacf5492d2497e28",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/39/c70e5be8289cdd210313b1b0f047d7833286bc": "b150cc1683f3d411ac3dff38374d8902",
".git/objects/39/e5a56083e82f70b50cfff54abe23c91052f466": "9bf5e8b7fc77f2a5314554aa350c7cb5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/fb95a77f063dce17791afba5a0a479557768d2": "eb2ee6e650753fe64f6704af1c1af78f",
".git/objects/3c/7c7b111ee52ee85beb92df147d8f11c203c2d1": "39a4860c6d5a1c4a4bb1e95238e05510",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3e/772a18022eb1c8177a7b54386132111e25fd19": "650e9de5b5b192906ec5518c3b2e7d88",
".git/objects/3e/fd8244b3c95f320eaff4614d58a6a7636cba4c": "ae12ad99e656693958317a0966b22c3e",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/69baa712823db56c45465fd70efcdc40d69cbe": "a0ecedc6e70c42d330f7f8daaefb130a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/e0824c898ccca64650baa0cd0e9cd9b2b7f34f": "0b5648e913ac38e2cd7a5a85827f23c9",
".git/objects/4c/9a54063cd989311d6ae5e02ae77601f3231b67": "bcd8af6f8002af4c3b07e27b821967d6",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/93feb7041945b9267a46dc1e3442988d4ce099": "8afc69595fd24a4385b70405a61faea7",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/28db44293a31372653a917bb00667c412eeee1": "9e28d5ed0dfbc03b257dee6c98fd86e7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/8fcec118e4894107f0f43cd0f2c007e7f11c46": "beeaa420b660203beb599e88a2f8e1cf",
".git/objects/57/4045b1c7e1df30e6cea2f348fa1fc81b31b2cb": "a6b49bd9c836c150910ae002e8fa410f",
".git/objects/58/e6463a33f606448b796a2a0c06cc75218408e9": "d3a751f4404404589ba94567aaf4becb",
".git/objects/5a/383e62e237074f2ccfdbba0ff6bb0694617cf1": "e723a63ca0c9640a1e830fd907bfd85f",
".git/objects/5b/e42c2acf8fe68f391071eb843de4caf981df2e": "98ee67d3a3f456e6ea077b01734e1039",
".git/objects/63/65ccf3c111143827296015203e00b282348caa": "160fb0e4a68b736fc3086c5746c20b40",
".git/objects/67/1999f7f76b67bc72e700cb1e22f189134f7c8a": "8ce615abe8d11a92b3e20a0eb0074706",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/67/b2472fae36b952f2930749975703e59804778e": "bf61688f87303dc61c130d1fef8b213f",
".git/objects/68/4049716e1449dd6e7150e500a3fe39b5072344": "4e7a06835e279d9a4b99f2fda30eef8a",
".git/objects/6f/c5f375755715c4645c9b9f83b0202c6c8c9b77": "df44da854716df0c8afaf8ed6a1a67bd",
".git/objects/71/2e6ae45ee3f96a7dfd802b181cc993469890a7": "d9d815e29801e26514973cdfdf53ace5",
".git/objects/72/5a5691475ae4c5d3702d5285887a6ae432ee15": "3adf437ce22accf6a48b7fbde49db00f",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/7b/9603abaf592dfea2cc5a4534960c2d2b1a52da": "ed614548c611bc0773b389abcb529e69",
".git/objects/7c/71bbff998f53f7a175e6bcf0e969952e712445": "f592d75a0e1d5c99d59a8f0eee15fdd8",
".git/objects/87/da59934e5410aa7acee00eb40cf62051e66de6": "6b13c688eeae7860fc4cd25e31436587",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/3faef7c2b5273fa489aa50977316c2390c2e56": "a6e7e5d9412cb797cd201ec339a5fe84",
".git/objects/92/557cc2b18af43d86e1439703dbc84fa0d4ce38": "d24c9c1d0de36b3533d836a11140fc43",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/cb13ef2b2ff73c3277e6b21896100af0713f13": "b9b2d883900f09a81ba344938880fd4b",
".git/objects/97/ead9cac86cf6be3ffff34129c11313f450abfe": "d07b5d7085e98b29f3b9ddae35f52ae9",
".git/objects/99/5bcb9f603f3329283ab671cc635a11c71cd7bd": "b3b31045ca8ba45e77133cad739b7c73",
".git/objects/a2/36c7ef7778c27f9d275e3a3c1a84bd64e508f5": "e181c11ec2a5792719b0d9f0e24f519b",
".git/objects/a6/00b71b2e8195d0158990b6fb396311af282abb": "98eadf9aa745c10cd1a43856907ce6ff",
".git/objects/a8/cb89d4e6b23fab364645e6ebad0c1696353610": "d7f0f91afb4c26dd2ab71b98436e76fd",
".git/objects/a9/a6247b2d4499b91415dc7f76a9ab2ca9f9cc3b": "002b73c0b0fef37de860e816cba8e409",
".git/objects/b4/a8e25de3a005049bf85dc8ae4b9d2c25d815b0": "fe95338b639d674a43edecbfd30175e9",
".git/objects/b5/d78a43fa71a5de3805183ca0bbee3fb487df3e": "53558a8cb1d1fac96e2572eeacbed792",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d4dfcaef346b8e1915db16a04c919772ead7b2": "bcf37fbaeb3b65eb78b39960ab25a5d5",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/0c8f82c466957b6644fc1609c248448adfe81b": "01ea990fb9d6c6ee17f1c73939db6132",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/f5063356efa125a1abb0c76b87656c2b1c4da3": "7a1ea64cb18b769e2c89d918e24b74a9",
".git/objects/c0/627f2d8d23f6e5083f225443755709d6210276": "5b6e8b8f3d89da758953df657437a62c",
".git/objects/c2/29e8f489687347c751c57104aa8698de83ae2c": "2687a190e3e54549e21b9188de98957b",
".git/objects/c4/b42b570123c99e8c3a4c5d4641bd3c1118a981": "5e7431df6ba9738d763cd2511b46492b",
".git/objects/c6/e183c03c90bbeabe810b6938546a4e90343998": "d4f865007736da3acce9bc9af8b53003",
".git/objects/c6/e4b27248ed85f3d0cc4aaa7345775316e1344f": "023384f2db77a2c62b14878e143a75ca",
".git/objects/cf/e80143fd241e4d4c217b53476c5130847b1647": "a6803df288a682553569695fd07ecef2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/0aadabee2b0e1aa0c14eb7a71a2547d3e832a7": "3892c478d40cf96961ef8b192a932e89",
".git/objects/e4/70d627ded4cc162fc607f43335154fd01ef1d6": "9d3da6840fad58f7abbcb01381fb6be0",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1824adca5559aa3579ddf4ec67afcf0093375a": "725316f26c904cce5f0464013fa8318b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/834e0346aeb5eaaf7d9628abc6c281cbcd9e69": "539011c99e7465d81544003012a38ee7",
".git/objects/ff/44fec48f1b6aa6a297b7e06ca39126af724530": "18a556cf04c7db114f7bb80864917f26",
".git/ORIG_HEAD": "bc7f144ee19f98293eb7447fd837ebed",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "bc7f144ee19f98293eb7447fd837ebed",
".git/refs/remotes/origin/main": "e9e6aecae03937230830605bab9d33be",
"assets/AssetManifest.bin": "0e31cf89c4faa190890d7e72bfe57850",
"assets/AssetManifest.bin.json": "ad960d76b1e2c48a5a04bed0bb54c46a",
"assets/AssetManifest.json": "19d25ece7d8e32bb19558f38e236ed22",
"assets/assets/discord.png": "88520dd63d1451bf60f33b8e2e6db730",
"assets/assets/env": "d15ae233bd3a5ef740beabda3f769c9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9a2318fdf7b8cf6b35e2681e85125d90",
"assets/NOTICES": "75ba97f642f26647e2c417ac06a66447",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f5f243c61af6bfa74e4fbc6f0f38ad7",
"/": "0f5f243c61af6bfa74e4fbc6f0f38ad7",
"main.dart.js": "9d975550fb49b8c909a5e58126d3d371",
"manifest.json": "88fe356fc01189380700906dff6c2fa3",
"version.json": "64255fa38a95669ccf1b4a8f5e25ceec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
