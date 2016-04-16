!function t(e,r,o){function a(i,u){if(!r[i]){if(!e[i]){var l="function"==typeof require&&require;if(!u&&l)return l(i,!0);if(n)return n(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var c=r[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return a(r?r:t)},c,c.exports,t,e,r,o)}return r[i].exports}for(var n="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(t,e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=[15820613];r.backgroundColors=o;var a=!0;r.EnableTracing=a},{}],2:[function(t,e,r){"use strict";function o(t){console.log(t)}Object.defineProperty(r,"__esModule",{value:!0}),r.trace=o},{}],3:[function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},u=t("states/BootstrapState"),l=o(u),s=t("states/LoadingState"),c=o(s),f=t("states/TitleState"),p=o(f),d=t("states/GameState"),y=o(d),v=t("states/StageState"),h=o(v),g=function(t){function e(){a(this,e),i(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,1280,736,Phaser.AUTO,"content",null),this.state.add("BootstrapState",l["default"],!1),this.state.add("LoadingState",c["default"],!1),this.state.add("TitleState",p["default"],!1),this.state.add("GameState",y["default"],!1),this.state.add("StageState",h["default"],!1),this.state.start("BootstrapState")}return n(e,t),e}(Phaser.Game),b=new g;r.game=b},{"states/BootstrapState":4,"states/GameState":5,"states/LoadingState":6,"states/StageState":7,"states/TitleState":8}],4:[function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},l=t("Utilities"),s=o(l),c=t("index"),f=function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),i(e,[{key:"preload",value:function(){s.trace("BootstrapState::preload"),c.game.load.image("loading","assets/sprites/loading.png"),c.game.load.image("loadText","assets/GameLoading.png"),c.game.load.bitmapFont("littera","assets/fonts/litteraDefault.png","assets/fonts/litteraDefault.xml")}},{key:"create",value:function(){s.trace("BootstrapState::create"),c.game.load.onFileComplete.add(this.fileComplete,this),c.game.scale.pageAlignHorizontally=!0,c.game.scale.pageAlignVertically=!0,c.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.state.start("LoadingState")}},{key:"fileComplete",value:function(t,e,r,o,a){s.trace("BOOT| File Complete: "+t+"% - "+o+" out of "+a)}}]),e}(Phaser.State);r["default"]=f,e.exports=r["default"]},{Utilities:2,index:3}],5:[function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},l=t("Utilities"),s=o(l),c=t("index"),f=(t("Constants"),function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),i(e,[{key:"create",value:function(){s.trace("GameState::create"),this.stage.backgroundColor=2894635;var t={font:"32px Arial",fill:"#ff0044",align:"center"},e=c.game.add.text(c.game.width/2,c.game.height/2,"- your game goes here -",t);e.anchor.set(.5)}},{key:"update",value:function(){}}]),e}(Phaser.State));r["default"]=f,e.exports=r["default"]},{Constants:1,Utilities:2,index:3}],6:[function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},l=t("Utilities"),s=o(l),c=t("index"),f=function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),i(e,[{key:"preload",value:function(){s.trace("LoadingState::preload"),this.stage.backgroundColor=2039583;var t=this.add.sprite(c.game.width/2,c.game.height/2,"loading");t.tint=13254711,t.anchor.setTo(.5);var e=this.add.sprite(c.game.width/2,c.game.height/2,"loadText");e.tint=6506910,e.y+=e.height,e.anchor.setTo(.5),c.game.load.setPreloadSprite(t)}},{key:"create",value:function(){s.trace("LoadingState::create"),c.game.time.events.add(1*Phaser.Timer.SECOND,this.nextState,this)}},{key:"nextState",value:function(){this.state.start("TitleState")}}]),e}(Phaser.State);r["default"]=f,e.exports=r["default"]},{Utilities:2,index:3}],7:[function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},l=t("Utilities"),s=o(l),c=t("index"),f=(t("Constants"),function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),i(e,[{key:"preload",value:function(){c.game.load.tilemap("tileMap","assets/tilemap/Tilemap_Master.json",null,Phaser.Tilemap.TILED_JSON),c.game.load.image("tiles","assets/tilemap/TileSet_Master.png")}},{key:"create",value:function(){c.game.time.advancedTiming=!0,s.trace("StageState::create"),c.game.world.setBounds(0,0,4800,1600),this.game.physics.startSystem(Phaser.Physics.ARCADE),this.cursor=c.game.input.keyboard.createCursorKeys(),this.stage.backgroundColor=2894635,this.map=this.game.add.tilemap("tileMap"),this.map.addTilesetImage("MasterTileset","tiles"),this.blockedLayer=this.map.createLayer("TileArea"),this.testLayer=this.map.createLayer("Foo"),this.map.setCollisionBetween(1,5,!0,"TileArea"),this.map.setCollisionBetween(3,5,!0,"Foo"),this.player=this.game.add.sprite(100,1500,"player"),c.game.physics.arcade.enable(this.player),this.player.body.bounce.y=.2,this.player.body.gravity.y=300,this.player.body.collideWorldBounds=!0,c.game.camera.follow(this.player)}},{key:"update",value:function(){var t=this.player,e=this.cursor;c.game.physics.arcade.collide(this.player,this.blockedLayer),c.game.physics.arcade.collide(this.player,this.testLayer),t.body.velocity.x=0,e.up.isDown?t.body.velocity.y=-150:e.down.isUp&&(t.body.velocity.y=150),e.left.isDown?t.body.velocity.x=-150:e.right.isDown&&(t.body.velocity.x=150)}},{key:"render",value:function(){c.game.debug.text(c.game.time.fps||"--",2,32,"#00ff00"),c.game.debug.cameraInfo(c.game.camera,32,32),c.game.debug.spriteCoords(this.player,32,150)}}]),e}(Phaser.State));r["default"]=f,e.exports=r["default"]},{Constants:1,Utilities:2,index:3}],8:[function(t,e,r){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e["default"]=t,e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),u=function(t,e,r){for(var o=!0;o;){var a=t,n=e,i=r;o=!1,null===a&&(a=Function.prototype);var u=Object.getOwnPropertyDescriptor(a,n);if(void 0!==u){if("value"in u)return u.value;var l=u.get;if(void 0===l)return;return l.call(i)}var s=Object.getPrototypeOf(a);if(null===s)return;t=s,e=n,r=i,o=!0,u=s=void 0}},l=t("Utilities"),s=o(l),c=t("index"),f=(t("Constants"),function(t){function e(){a(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).apply(this,arguments)}return n(e,t),i(e,[{key:"create",value:function(){s.trace("TitleState::create"),this.stage.backgroundColor=2894635;var t=c.game.add.bitmapText(c.game.width/2,205,"littera","Title Screen!",36);t.anchor.setTo(.5);var e=c.game.add.bitmapText(c.game.width/2,250,"littera","Click to start.",24);e.anchor.setTo(.5),e.inputEnabled=!0,e.events.onInputDown.add(this.startGame,this),e.events.onInputOver.add(this.startOver,this),e.events.onInputOut.add(this.startOut,this)}},{key:"startGame",value:function(){c.game.state.start("StageState")}},{key:"startOver",value:function(){s.trace("Over.")}},{key:"startOut",value:function(){s.trace("Out.")}}]),e}(Phaser.State));r["default"]=f,e.exports=r["default"]},{Constants:1,Utilities:2,index:3}]},{},[3]);