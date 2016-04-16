!function e(t,r,a){function o(i,l){if(!r[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(n)return n(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};t[i][0].call(c.exports,function(e){var r=t[i][1][e];return o(r?r:e)},c,c.exports,e,t,r,a)}return r[i].exports}for(var n="function"==typeof require&&require,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=[15820613];r.backgroundColors=a;var o=!0;r.EnableTracing=o},{}],2:[function(e,t,r){"use strict";function a(e){console.log(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.trace=a},{}],3:[function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},l=e("states/BootstrapState"),s=a(l),u=e("states/LoadingState"),c=a(u),f=e("states/TitleState"),p=a(f),d=e("states/GameState"),y=a(d),h=e("states/StageState"),v=a(h),g=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,1280,736,Phaser.AUTO,"content",null),this.state.add("BootstrapState",s["default"],!1),this.state.add("LoadingState",c["default"],!1),this.state.add("TitleState",p["default"],!1),this.state.add("GameState",y["default"],!1),this.state.add("StageState",v["default"],!1),this.state.start("BootstrapState")}return n(t,e),t}(Phaser.Game),m=new g;r.game=m},{"states/BootstrapState":4,"states/GameState":5,"states/LoadingState":6,"states/StageState":7,"states/TitleState":8}],4:[function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},s=e("Utilities"),u=a(s),c=e("index"),f=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){u.trace("BootstrapState::preload"),c.game.load.image("loading","assets/sprites/loading.png"),c.game.load.image("loadText","assets/GameLoading.png"),c.game.load.bitmapFont("littera","assets/fonts/litteraDefault.png","assets/fonts/litteraDefault.xml")}},{key:"create",value:function(){u.trace("BootstrapState::create"),c.game.load.onFileComplete.add(this.fileComplete,this),c.game.scale.pageAlignHorizontally=!0,c.game.scale.pageAlignVertically=!0,c.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.state.start("LoadingState")}},{key:"fileComplete",value:function(e,t,r,a,o){u.trace("BOOT| File Complete: "+e+"% - "+a+" out of "+o)}}]),t}(Phaser.State);r["default"]=f,t.exports=r["default"]},{Utilities:2,index:3}],5:[function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},s=e("Utilities"),u=a(s),c=e("index"),f=(e("Constants"),0),p=void 0,d=void 0,y=void 0,h=0,v=[],g=void 0,m=!1,b=.005,O=!1,S=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){}},{key:"onShapeShift",value:function(){var e=this.player;0===e.frame?(e.frame=6,e.body.setSize(26,61,0,0),e.angle-=90):6===e.frame?(e.frame=13,e.body.setSize(53,63,6,0),e.y-=39,e.angle+=90):(e.frame=0,e.body.setSize(61,24,2,0))}},{key:"createBullets",value:function(){d=c.game.add.group(),d.enableBody=!0,d.physicsBodyType=Phaser.Physics.ARCADE,d.createMultiple(30,"freezeBullet"),d.setAll("anchor.x",.5),d.setAll("anchor.y",1),d.setAll("outOfBoundsKill",!0),d.setAll("checkWorldBounds",!0)}},{key:"createNormalEnemies",value:function(){g=c.game.add.group(),g.enableBody=!0,g.physicsBodyType=Phaser.Physics.ARCADE}},{key:"createEnemy",value:function(e,t){var r=g.create(e,t,"enemy_normal");r.body.collideWorldBounds=!0,r.body.bounce.y=0,r.body.gravity.y=400;var a=-1;Math.random()>.5&&(a=1),r.defaultX=150*a,r.body.velocity.x=r.defaultX}},{key:"spawnEnemies",value:function(){var e=v[0];this.createEnemy(e.worldX,e.worldY)}},{key:"moveEnemies",value:function(e){e.forEach(function(e){var t=Math.random();m&&b>t&&(e.body.velocity.x=e.defaultX*=-1),(e.body.blocked.left||e.body.blocked.right)&&(e.body.velocity.x=e.defaultX*=-1)})}},{key:"create",value:function(){this.touching=!1,c.game.time.advancedTiming=!0,u.trace("StageState::create"),c.game.world.setBounds(0,0,4800,1600),this.stage.backgroundColor=2894635,c.game.physics.startSystem(Phaser.Physics.ARCADE),this.cursor=c.game.input.keyboard.createCursorKeys(),this.S=this.game.input.keyboard.addKey(Phaser.Keyboard.S),this.S.onDown.add(this.onShapeShift,this),y=c.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),c.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR),this.map=this.game.add.tilemap("tileMap"),this.map.addTilesetImage("MasterTileset","tiles"),this.blockedLayer=this.map.createLayer("TileArea"),this.map.setCollisionBetween(0,20,!0,"TileArea");for(var e=0;e<this.map.width;++e)for(var t=0;t<this.map.height;++t){var r=this.map.getTile(e,t,"TileArea");r&&r.properties.spawner&&v.push(r)}this.player=this.game.add.sprite(100,1440,"playerSpriteSheet"),this.player.anchor.setTo(.5,.5),c.game.physics.arcade.enable(this.player),this.player.body.collideWorldBounds=!0,this.player.body.bounce.y=.2,this.player.body.gravity.y=400,this.onShapeShift(),this.createBullets(),this.createNormalEnemies(),this.createEnemy(836,1440),c.game.camera.follow(this.player),c.game.time.events.repeat(2*Phaser.Timer.SECOND,20,this.spawnEnemies,this);var a={font:"24px Arial",fill:"#e75f25",align:"center"};p=c.game.add.text(c.game.camera.x+20,c.game.camera.y,"Score: "+f,a)}},{key:"endGame",value:function(e,t){if(!O){var r=c.game.camera;O=!0;var a={font:"32px Arial",fill:"#ff0044",align:"center"},o=c.game.add.text(r.x+200,r.y+200,"- She's dead, Jim. -\r\nRestarting...",a);o.anchor.set(.5),c.game.time.events.add(3*Phaser.Timer.SECOND,this.nextState,this)}}},{key:"nextState",value:function(){c.game.paused=!1,this.state.start("GameState")}},{key:"updateScore",value:function(){p.setText("Score: "+f),p.x=c.game.camera.x+20,p.y=c.game.camera.y+20}},{key:"update",value:function(){var e=this.player,t=this.cursor;this.updateScore(),c.game.physics.arcade.collide(this.player,this.blockedLayer),c.game.physics.arcade.collide(g,this.blockedLayer),c.game.physics.arcade.collide(this.player,g,this.endGame,null,this),c.game.physics.arcade.collide(d,this.blockedLayer,this.bulletToTileCollision,null,this),c.game.physics.arcade.collide(d,g,this.bulletToEnemyCollision,null,this),e.isClimbing=!1,6===e.frame&&(e.body.blocked.left||e.body.blocked.right)?(e.body.allowGravity=!1,e.isClimbing=!0):(this.touching=!1,e.body.allowGravity=!0),e.body.velocity.x=0,e.isClimbing?t.up.isDown&&e.isClimbing?e.body.velocity.y=-150:t.down.isDown&&e.isClimbing&&(e.body.velocity.y=150):t.up.isDown&&e.body.blocked.down&&(e.body.velocity.y=-250),t.left.isDown?(e.body.velocity.x=-150,e.xMag=-1):t.right.isDown&&(e.body.velocity.x=150,e.xMag=1),e.yMag=-1,e.body.velocity.y>0&&(e.yMag=1),y.isDown&&this.fireBullet(),this.moveEnemies(g.children)}},{key:"fireBullet",value:function(){if(c.game.time.now>h){var e=d.getFirstExists(!1),t=this.player;e&&(e.reset(t.x,t.y),t.isClimbing?(e.angle=90,e.body.velocity.y=400*t.yMag):(e.angle=0,e.body.velocity.x=400*t.xMag),h=c.game.time.now+200)}}},{key:"bulletToTileCollision",value:function(e,t){e.kill()}},{key:"bulletToEnemyCollision",value:function(e,t){e.kill(),t.destroy(),f+=20}},{key:"render",value:function(){}}]),t}(Phaser.State);r["default"]=S,t.exports=r["default"]},{Constants:1,Utilities:2,index:3}],6:[function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},s=e("Utilities"),u=a(s),c=e("index"),f=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){u.trace("LoadingState::preload"),this.stage.backgroundColor=2039583;var e=this.add.sprite(c.game.width/2,c.game.height/2,"loading");e.tint=13254711,e.anchor.setTo(.5);var t=this.add.sprite(c.game.width/2,c.game.height/2,"loadText");t.tint=6506910,t.y+=t.height,t.anchor.setTo(.5),c.game.load.setPreloadSprite(e),c.game.load.tilemap("tileMap","assets/tilemap/Tilemap_Master.json",null,Phaser.Tilemap.TILED_JSON),c.game.load.image("tiles","assets/tilemap/TileSet_Master.png"),c.game.load.spritesheet("playerSpriteSheet","assets/sprites/player_bounds.png",64,64),c.game.load.image("freezeBullet","assets/sprites/freeze_bullet.png",32,6),c.game.load.image("enemy_normal","assets/sprites/enemy_normal.png",64,64)}},{key:"create",value:function(){u.trace("LoadingState::create"),c.game.time.events.add(1*Phaser.Timer.SECOND,this.nextState,this)}},{key:"nextState",value:function(){this.state.start("GameState")}}]),t}(Phaser.State);r["default"]=f,t.exports=r["default"]},{Utilities:2,index:3}],7:[function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},s=e("Utilities"),u=a(s),c=e("index"),f=(e("Constants"),function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"create",value:function(){u.trace("GameState::create"),this.stage.backgroundColor=2894635;var e={font:"32px Arial",fill:"#ff0044",align:"center"},t=c.game.add.text(c.game.width/2,c.game.height/2,"- your game goes here -",e);t.anchor.set(.5)}},{key:"update",value:function(){}}]),t}(Phaser.State));r["default"]=f,t.exports=r["default"]},{Constants:1,Utilities:2,index:3}],8:[function(e,t,r){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(e,t,r){for(var a=!0;a;){var o=e,n=t,i=r;a=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(o);if(null===u)return;e=u,t=n,r=i,a=!0,l=u=void 0}},s=e("Utilities"),u=a(s),c=e("index"),f=(e("Constants"),function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"create",value:function(){u.trace("TitleState::create"),this.stage.backgroundColor=2894635;var e=c.game.add.bitmapText(c.game.width/2,205,"littera","Title Screen!",36);e.anchor.setTo(.5);var t=c.game.add.bitmapText(c.game.width/2,250,"littera","Click to start.",24);t.anchor.setTo(.5),t.inputEnabled=!0,t.events.onInputDown.add(this.startGame,this),t.events.onInputOver.add(this.startOver,this),t.events.onInputOut.add(this.startOut,this)}},{key:"startGame",value:function(){c.game.state.start("GameState")}},{key:"startOver",value:function(){u.trace("Over.")}},{key:"startOut",value:function(){u.trace("Out.")}}]),t}(Phaser.State));r["default"]=f,t.exports=r["default"]},{Constants:1,Utilities:2,index:3}]},{},[3]);