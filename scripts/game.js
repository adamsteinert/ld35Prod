!function e(t,a,o){function r(i,l){if(!a[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(n)return n(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=a[i]={exports:{}};t[i][0].call(c.exports,function(e){var a=t[i][1][e];return r(a?a:e)},c,c.exports,e,t,a,o)}return a[i].exports}for(var n="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=[15820613];a.backgroundColors=o;var r=!0;a.EnableTracing=r},{}],2:[function(e,t,a){"use strict";function o(e){console.log(e)}function r(e,t){return Math.floor(Math.random()*(t-e+1))+e}Object.defineProperty(a,"__esModule",{value:!0}),a.trace=o,a.getRandomInt=r},{}],3:[function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},l=e("states/BootstrapState"),s=o(l),u=e("states/LoadingState"),c=o(u),d=e("states/TitleState"),p=o(d),f=e("states/GameState"),y=o(f),h=e("states/StageState"),m=o(h),g=function(e){function t(){r(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,1280,736,Phaser.AUTO,"content",null),this.state.add("BootstrapState",s["default"],!1),this.state.add("LoadingState",c["default"],!1),this.state.add("TitleState",p["default"],!1),this.state.add("GameState",y["default"],!1),this.state.add("StageState",m["default"],!1),this.state.start("BootstrapState")}return n(t,e),t}(Phaser.Game),v=new g;a.game=v},{"states/BootstrapState":4,"states/GameState":5,"states/LoadingState":6,"states/StageState":7,"states/TitleState":8}],4:[function(e,t,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},s=e("Utilities"),u=o(s),c=e("index"),d=function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){u.trace("BootstrapState::preload"),c.game.load.image("loading","assets/sprites/loading.png"),c.game.load.image("loadText","assets/GameLoading.png"),c.game.load.bitmapFont("littera","assets/fonts/litteraDefault.png","assets/fonts/litteraDefault.xml")}},{key:"create",value:function(){u.trace("BootstrapState::create"),c.game.load.onFileComplete.add(this.fileComplete,this),c.game.scale.pageAlignHorizontally=!0,c.game.scale.pageAlignVertically=!0,c.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.state.start("LoadingState")}},{key:"fileComplete",value:function(e,t,a,o,r){u.trace("BOOT| File Complete: "+e+"% - "+o+" out of "+r)}}]),t}(Phaser.State);a["default"]=d,t.exports=a["default"]},{Utilities:2,index:3}],5:[function(e,t,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},s=e("Utilities"),u=o(s),c=e("index"),d=(e("Constants"),0),p=void 0,f=void 0,y=void 0,h=0,m=[],g=[],v=void 0,b=32,O=32,w=void 0,S=[],x=!1,P=.005,_=!1,j={},T=!1,k=0,C=function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){}},{key:"onShapeShift",value:function(){var e=this.player;0===e.frame?(e.frame=6,e.body.setSize(26,61,0,0),e.angle-=90):6===e.frame?(e.frame=13,e.body.setSize(53,63,6,0),e.y-=39,e.angle+=90):(e.frame=0,e.body.setSize(61,24,2,0))}},{key:"createBullets",value:function(){f=c.game.add.group(),f.enableBody=!0,f.physicsBodyType=Phaser.Physics.ARCADE,f.createMultiple(30,"freezeBullet"),f.setAll("anchor.x",.5),f.setAll("anchor.y",1),f.setAll("outOfBoundsKill",!0),f.setAll("checkWorldBounds",!0)}},{key:"createNormalEnemies",value:function(){v=c.game.add.group(),v.enableBody=!0,v.physicsBodyType=Phaser.Physics.ARCADE}},{key:"createEnemy",value:function(e,t){var a=v.create(e,t,"enemy_normal");a.body.collideWorldBounds=!0,a.body.bounce.y=.8,a.body.gravity.y=500,a.anchor.setTo(.5,.5);var o=-1;Math.random()>.5&&(o=1),a.defaultX=150*o,a.body.velocity.x=a.defaultX}},{key:"createCrowns",value:function(){w=c.game.add.group(),w.enableBody=!0,w.physicsBodyType=Phaser.Physics.ARCADE,S.forEach(function(e){var t=w.create(e.worldX,e.worldY,"crown");t.body.allowGravity=!1})}},{key:"spawnEnemies",value:function(){var e=u.getRandomInt(0,m.length-1),t=m[e];t&&this.createEnemy(t.worldX,t.worldY)}},{key:"moveEnemies",value:function(e){var t=this;e.forEach(function(e){var a=Math.random(),o=t.map.getTileWorldXY(e.x,e.y,b,O,"hotspots",!0);if(o&&o.properties.teleport){var r=u.getRandomInt(0,m.length-1),n=m[r];e.x=n.worldX,e.y=n.worldY}x&&P>a&&(e.body.velocity.x=e.defaultX*=-1),(e.body.blocked.left||e.body.blocked.right)&&(e.body.velocity.x=e.defaultX*=-1)})}},{key:"loadSounds",value:function(){j.coin=c.game.add.audio("coin"),j.explode=c.game.add.audio("explode"),j.fire=c.game.add.audio("fire"),j.jump=c.game.add.audio("jump"),j.mutate=c.game.add.audio("mutate"),j.win=c.game.add.audio("win"),j.lose=c.game.add.audio("lose"),j.music=c.game.add.audio("music"),c.game.sound.setDecodedCallback(j,function(){T=!0,j.music.play("",0,1,!0,!0),u.trace("sounds loaded!")},this)}},{key:"playSound",value:function(e){var t=j[e];T&&t?t.play("",0,.5):u.trace("sound "+e+"not loaded")}},{key:"create",value:function(){this.touching=!1,c.game.time.advancedTiming=!0,u.trace("StageState::create"),this.loadSounds(),c.game.world.setBounds(0,0,4800,1856),this.stage.backgroundColor=2894635,c.game.physics.startSystem(Phaser.Physics.ARCADE),this.cursor=c.game.input.keyboard.createCursorKeys(),this.S=this.game.input.keyboard.addKey(Phaser.Keyboard.S),this.S.onDown.add(this.onShapeShift,this),y=c.game.input.keyboard.addKey(Phaser.Keyboard.F),this.map=this.game.add.tilemap("tileMap"),this.map.addTilesetImage("MasterTileset","tiles"),this.blockedLayer=this.map.createLayer("TileArea"),this.waterLayer=this.map.createLayer("WaterLayer"),this.hotspots=this.map.createLayer("hotspots"),this.waterLayer.alpha=.3,this.map.setCollisionBetween(15,20,!0,"TileArea"),this.map.setCollisionBetween(25,30,!0,"TileArea"),this.map.setCollision([2,5],!0,"TileArea");for(var e=0;e<this.map.width;++e)for(var t=0;t<this.map.height;++t){var a=this.map.getTile(e,t,"hotspots");a&&a.properties.spawner&&m.push(a),a&&a.properties.teleport&&g.push(a);var o=this.map.getTile(e,t,"crowns");o&&S.push(o)}this.createCrowns(),this.player=this.game.add.sprite(100,1440,"playerSpriteSheet"),this.player.anchor.setTo(.5,.5),c.game.physics.arcade.enable(this.player),this.player.body.collideWorldBounds=!0,this.player.body.bounce.y=.2,this.player.body.gravity.y=400,this.onShapeShift(),this.createBullets(),this.createNormalEnemies(),c.game.camera.follow(this.player),c.game.time.events.repeat(4*Phaser.Timer.SECOND,5e3,this.spawnEnemies,this);var r={font:"24px Arial",fill:"#e75f25",align:"center"};p=c.game.add.text(c.game.camera.x+20,c.game.camera.y,"Score: "+d,r)}},{key:"nextState",value:function(){c.game.paused=!1,this.state.start("GameState")}},{key:"updateScore",value:function(){p.setText("Score: "+d),p.x=c.game.camera.x+20,p.y=c.game.camera.y+20}},{key:"update",value:function(){var e=this.player,t=this.cursor;this.updateScore(),c.game.physics.arcade.collide(this.player,this.blockedLayer),c.game.physics.arcade.collide(v,this.blockedLayer),c.game.physics.arcade.collide(this.player,v,this.endGame,null,this),c.game.physics.arcade.collide(f,this.blockedLayer,this.bulletToTileCollision,null,this),c.game.physics.arcade.collide(this.player,w,this.playerToCrownCollision,null,this),c.game.physics.arcade.collide(f,v,this.bulletToEnemyCollision,null,this),e.isClimbing=!1,6===e.frame&&(e.body.blocked.left||e.body.blocked.right)?(e.body.allowGravity=!1,e.isClimbing=!0):(this.touching=!1,e.body.allowGravity=!0),e.body.velocity.x=0,e.isClimbing?t.up.isDown&&e.isClimbing?e.body.velocity.y=-150:t.down.isDown&&e.isClimbing&&(e.body.velocity.y=150):t.up.isDown&&e.body.blocked.down&&(c.game.time.now>k&&(k=c.game.time.now+200,this.playSound("jump")),e.body.velocity.y=-250),t.left.isDown?(e.body.velocity.x=-150,e.xMag=-1):t.right.isDown&&(e.body.velocity.x=150,e.xMag=1),e.yMag=-1,e.body.velocity.y>0&&(e.yMag=1),y.isDown&&this.fireBullet(),this.moveEnemies(v.children)}},{key:"fireBullet",value:function(){if(c.game.time.now>h){this.playSound("fire");var e=f.getFirstExists(!1),t=this.player;e&&(e.reset(t.x,t.y),t.isClimbing?(e.angle=90,e.body.velocity.y=400*t.yMag):(e.angle=0,e.body.velocity.x=400*t.xMag),h=c.game.time.now+200)}}},{key:"endGame",value:function(e,t){if(!_){j.music.stop(),this.playSound("lose");var a=c.game.camera;_=!0;var o={font:"32px Arial",fill:"#ff0044",align:"center"},r=c.game.add.text(a.x+200,a.y+200,"- She's dead, Jim. -\r\nRestarting...",o);r.anchor.set(.5),c.game.time.events.add(3*Phaser.Timer.SECOND,this.nextState,this)}}},{key:"bulletToTileCollision",value:function(e,t){e.kill()}},{key:"bulletToEnemyCollision",value:function(e,t){e.kill(),t.destroy(),d+=20}},{key:"playerToCrownCollision",value:function(e,t){this.playSound("coin"),t.destroy(),d+=100}},{key:"render",value:function(){}}]),t}(Phaser.State);a["default"]=C,t.exports=a["default"]},{Constants:1,Utilities:2,index:3}],6:[function(e,t,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},s=e("Utilities"),u=o(s),c=e("index"),d=function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"preload",value:function(){u.trace("LoadingState::preload"),this.stage.backgroundColor=2039583;var e=this.add.sprite(c.game.width/2,c.game.height/2,"loading");e.tint=13254711,e.anchor.setTo(.5);var t=this.add.sprite(c.game.width/2,c.game.height/2,"loadText");t.tint=6506910,t.y+=t.height,t.anchor.setTo(.5),c.game.load.setPreloadSprite(e),c.game.load.tilemap("tileMap","assets/tilemap/Tilemap_Master.json",null,Phaser.Tilemap.TILED_JSON),c.game.load.image("tiles","assets/tilemap/TileSet_Master.png"),c.game.load.spritesheet("playerSpriteSheet","assets/sprites/player_bounds.png",64,64),c.game.load.image("freezeBullet","assets/sprites/freeze_bullet.png",32,6),c.game.load.image("enemy_normal","assets/sprites/enemy_normal.png",32,32),c.game.load.image("crown","assets/sprites/crown.png"),c.game.load.audio("coin","assets/sound/fx/coin2.mp3"),c.game.load.audio("explode","assets/sound/fx/explosion1.mp3"),c.game.load.audio("fire","assets/sound/fx/fire2.mp3"),c.game.load.audio("jump","assets/sound/fx/jump1.mp3"),c.game.load.audio("mutate","assets/sound/fx/mutate3.mp3"),c.game.load.audio("win","assets/sound/fx/youWin.mp3"),c.game.load.audio("lose","assets/sound/fx/finalDead.mp3"),c.game.load.audio("lose","assets/sound/fx/finalDead.mp3"),c.game.load.audio("music","assets/sound/threeBody.mp3")}},{key:"create",value:function(){u.trace("LoadingState::create"),c.game.time.events.add(1*Phaser.Timer.SECOND,this.nextState,this)}},{key:"nextState",value:function(){this.state.start("GameState")}}]),t}(Phaser.State);a["default"]=d,t.exports=a["default"]},{Utilities:2,index:3}],7:[function(e,t,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},s=e("Utilities"),u=o(s),c=e("index"),d=(e("Constants"),function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"create",value:function(){u.trace("GameState::create"),this.stage.backgroundColor=2894635;var e={font:"32px Arial",fill:"#ff0044",align:"center"},t=c.game.add.text(c.game.width/2,c.game.height/2,"- your game goes here -",e);t.anchor.set(.5)}},{key:"update",value:function(){}}]),t}(Phaser.State));a["default"]=d,t.exports=a["default"]},{Constants:1,Utilities:2,index:3}],8:[function(e,t,a){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(e,t,a){for(var o=!0;o;){var r=e,n=t,i=a;o=!1,null===r&&(r=Function.prototype);var l=Object.getOwnPropertyDescriptor(r,n);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(i)}var u=Object.getPrototypeOf(r);if(null===u)return;e=u,t=n,a=i,o=!0,l=u=void 0}},s=e("Utilities"),u=o(s),c=e("index"),d=(e("Constants"),function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return n(t,e),i(t,[{key:"create",value:function(){u.trace("TitleState::create"),this.stage.backgroundColor=2894635;var e=c.game.add.bitmapText(c.game.width/2,205,"littera","Title Screen!",36);e.anchor.setTo(.5);var t=c.game.add.bitmapText(c.game.width/2,250,"littera","Click to start.",24);t.anchor.setTo(.5),t.inputEnabled=!0,t.events.onInputDown.add(this.startGame,this),t.events.onInputOver.add(this.startOver,this),t.events.onInputOut.add(this.startOut,this)}},{key:"startGame",value:function(){c.game.state.start("GameState")}},{key:"startOver",value:function(){u.trace("Over.")}},{key:"startOut",value:function(){u.trace("Out.")}}]),t}(Phaser.State));a["default"]=d,t.exports=a["default"]},{Constants:1,Utilities:2,index:3}]},{},[3]);