/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _videoplayer = __webpack_require__(2);

	var _videoplayer2 = _interopRequireDefault(_videoplayer);

	var _header = __webpack_require__(7);

	var _header2 = _interopRequireDefault(_header);

	var _comment = __webpack_require__(13);

	var _comment2 = _interopRequireDefault(_comment);

	var _favoriate = __webpack_require__(17);

	var _favoriate2 = _interopRequireDefault(_favoriate);

	var _commentsender = __webpack_require__(21);

	var _commentsender2 = _interopRequireDefault(_commentsender);

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _layout = __webpack_require__(24);

	var _layout2 = _interopRequireDefault(_layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(25);
	var comment, favoriate, header;
	$(function () {
	         var player = new _videoplayer2.default({
	                  id: 'J_prismPlayer',
	                  autoplay: true,
	                  isLive: true,
	                  height: "100%",
	                  width: "100%",
	                  playsinline: true,
	                  source: "https://common.qupai.me/player/big_buck_bunny.mp4",
	                  useH5Prism: true,
	                  useFlashPrism: false,
	                  cover: 'http://cdnoss.youkouyang.com/cover.png',
	                  //prismplayer 2.0.1版本支持的属性，主要用户实现在android 微信上的同层播放
	                  x5_type: 'h5', //通过 video 属性 “x5-video-player-type” 声明启用同层H5播放器，支持的值：h5 https://x5.tencent.com/tbs/guide/video.html
	                  x5_fullscreen: true, //通过 video 属性 “x5-video-player-fullscreen” 声明视频播放时是否进入到 TBS 的全屏模式，支持的值：true
	                  x5_orientation: 1,
	                  skinLayout: [{ name: "bigPlayButton", align: "blabs", x: "70", y: "150" }]
	         });
	         _commentsender2.default.setup();
	         comment = new _comment2.default();
	         favoriate = new _favoriate2.default();
	         header = new _header2.default();
	         header.setup({
	                  nickName: '小鱼儿',
	                  avatar: './images/avatar.jpg',
	                  likeNum: 2346,
	                  viewerNum: 12390
	         });

	         _layout2.default.adjustLayout();
	});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(3);

	var VideoPlayer = function () {
					function VideoPlayer(props) {
									_classCallCheck(this, VideoPlayer);

									this.player;
									this.props = props;
									this.props.isLive = true;
									this._setup();
									this._bindEvent();
					}

					_createClass(VideoPlayer, [{
									key: 'loadByUrl',
									value: function loadByUrl(url) {
													if (this.player) this.player.loadByUrl(url);
									}
					}, {
									key: 'dispose',
									value: function dispose() {
													if (this.player) {
																	this.player.dispose();
																	Zepto('#' + this.props.id).empty();
													}
									}
					}, {
									key: '_setup',
									value: function _setup() {
													this.player = new prismplayer(this.props);
									}
					}, {
									key: '_bindEvent',
									value: function _bindEvent() {
													var that = this;
													this.player.on('ready', function (e) {
																	// 解决ios不自动播放的问题
																	// alert($.os);
																	// alert($.os.ios);
																	// if($.os.ios)
																	// 	that._autoPlay();
																	console.log('ready');
													});

													this.player.on('play', function (e) {
																	console.log('play');
													});

													this.player.on('ended', function (e) {
																	console.log('ended');
													});
													this.player.on('pause', function (e) {
																	console.log('pause');
													});
									}
					}, {
									key: '_unbindEvent',
									value: function _unbindEvent() {
													this.player.off('ready', function (e) {
																	console.log('ready');
													});

													this.player.off('play', function (e) {
																	console.log('play');
													});

													this.player.off('ended', function (e) {
																	console.log('ended');
													});
													this.player.off('pause', function (e) {
																	console.log('pause');
													});
									}
					}, {
									key: '_autoPlay',
									value: function _autoPlay() {
													var that = this;
													wx.config({
																	// 配置信息, 即使不正确也能使用 wx.ready
																	debug: false,
																	appId: '',
																	timestamp: 1,
																	nonceStr: '',
																	signature: '',
																	jsApiList: []
													});
													wx.ready(function () {
																	var video = $(that.el()).find('video')[0];
																	video.play();
													});
									}
					}]);

					return VideoPlayer;
	}();

	exports.default = VideoPlayer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".prism-player .prism-ErrorMessage\n{\n  top:20%;\n}\n\n.prism-player .prism-big-play-btn\n{\n\ttop:50%!important;\n\tleft:50%!important;\n\t-webkit-transform:translate(-50%, -50%);\n\t    -ms-transform:translate(-50%, -50%);\n\t        transform:translate(-50%, -50%);\n}", ""]);

	// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(8);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(9);

	var Header = function () {
		function Header() {
			_classCallCheck(this, Header);

			this.backup = [];
			this.max_count = 5;
		}

		_createClass(Header, [{
			key: 'setup',
			value: function setup(data) {
				var header = $('.video-header');
				header.find('.user-name').text(data.nickName);
				header.find('.user-head-img').attr('src', data.avatar);
				this._updateLikeNumber(data.likeNum);
				this._updateViewNumber(data.viewerNum);
				this._getAudiences();
				var that = this;
				_events2.default.on(_events2.default.EventConstant.Favoriation_Sended, function () {
					that._updateLikeNumber(1);
				});
				_events2.default.on(_events2.default.EventConstant.Viwer_Added, function () {
					that._updateViewNumber(1);
				});
			}
		}, {
			key: '_updateLikeNumber',
			value: function _updateLikeNumber(number) {
				var ele = $('.video-header .user-favorite');
				var count = parseInt(ele.text());
				ele.text(count + number);
			}
		}, {
			key: '_updateViewNumber',
			value: function _updateViewNumber(number, userInfo) {
				if (number != null) {
					var ele = $('.video-header span.audience-count');
					var count = parseInt(ele.text());
					ele.text(count + number + '\u4EBA');
				}
				var wrapper = $('.audience-detail');
				Header.computeLeft($('.video-header .author'), wrapper);
				if (userInfo) {
					if (userInfo.type === 0) {
						if (!this.isFullHeaders) {
							Header._createImgHeader(wrapper, userInfo.avatar, userInfo.uid);
							this.isFullHeaders = wrapper.find('.audience-header').length == this.max_count;
						} else {
							$('.audience-detail .ellipsis').addClass('show');
							this.backup.push(userInfo);
						}
					} else {
						if (this.backup.length > 0) {
							var user = this.backup.pop(),
							    imgEle = wrapper.find('img[data-uid="' + userInfo.uid + '"]');
							imgEle.attr('src', user.avatar);
							imgEle.attr('data-uid', user.uid);
						} else {
							wrapper.find('img[data-uid="' + userInfo.uid + '"]').remove();
							$('.audience-detail .ellipsis').addClass('hide');
							this.isFullHeaders = false;
						}
					}
				}
			}
		}, {
			key: '_getAudiences',
			value: function _getAudiences(liveId, url) {
				for (var i = 1; i < 10; i++) {
					Header._createImgHeader($('.audience-detail'), "http://avatar.test.qupai.me/20160519/a61738ec-1cd3-47ff-a6f3-c303660cccf2.jpg", i);
				}
			}
		}], [{
			key: '_createImgHeader',
			value: function _createImgHeader(wrapper, avatar, uid) {
				var img = $('<img  class="audience-header">');
				img.attr('src', avatar);
				img.attr('data-uid', uid);
				wrapper.prepend(img);
			}
		}, {
			key: 'computeLeft',
			value: function computeLeft(audient, detail) {
				var w = audient.width() + 20 / 68 * window.rem;
				detail.css('left', w);
			}
		}]);

		return Header;
	}();

	exports.default = Header;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventConstant = {
		Comments_Sended: 'commentSended',
		Favoriation_Sended: 'FavoriationSended',
		Viwer_Added: "viwerAdded"
	};

	var Event = function () {
		function Event() {
			_classCallCheck(this, Event);
		}

		_createClass(Event, null, [{
			key: 'on',
			value: function on(eventName, func) {
				$(document).on(eventName, func);
			}
		}, {
			key: 'trigger',
			value: function trigger(eventName, data) {
				$(document).trigger(eventName, data);
			}
		}, {
			key: 'off',
			value: function off(eventName, func) {
				$(document).off(eventName, func);
			}
		}, {
			key: 'EventConstant',
			get: function get() {
				return EventConstant;
			}
		}]);

		return Event;
	}();

	exports.default = Event;
	;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".author-round{\n\t/*padding: 0.044118rem 0 0.014706rem 0.014706rem;*/\n\tborder-radius: 1.333333rem;\n\tbackground-color: rgba(0,0,0,0.4);\n  z-index:100;\n}\n\n.video-header\n{\n\ttop:0px;\n}\n\n.author\n{\n  position:absolute;\n  margin-left: 0.266667rem;\n  top: 0.24rem;\n  height: 0.92rem;\n  padding-right: 0.2rem;\n}\n\n.author .user-head-img{\n\twidth:0.92rem;\n\theight:0.92rem;\n\tfloat:left;\n\tborder-radius: 50%;\n\tvertical-align:middle;\n  border:0.030667rem solid #ffffff;\n}\n.author .user-info\n{\n\tfloat:left;\n  margin-left:0.08rem;\n  margin-right:0.266667rem;\n  /*padding: 0.147059rem 0;*/\n}\n.author .user-name{\n\tcolor:#ffffff;\n  line-height: 0.533333rem;\n/*\ttext-overflow : ellipsis;\n  white-space : nowrap;\n  overflow : hidden;\n  max-width:2.941176rem;*/\n}\n\n\n\nhtml[data-dpr=\"1\"] .author .user-name\n{\n  font-size: 14px;\n}\nhtml[data-dpr=\"2\"] .author .user-name\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .author .user-name {\n  font-size: 42px;\n}\n\n@media all and (min-device-width:980px)\n{\n  .author .user-name\n  {\n    font-size: 28px;\n  }\n}\n\n{\n}\n\n.audience .audience-img{\n    background: url(" + __webpack_require__(11) + ") no-repeat 0 0/0.32rem 100%;\n    height:0.32rem;\n}\n\n.audience .audience-count\n{\n  margin-left:0.4rem;\n  line-height:0.333333rem;\n  color:#ffffff;\n  display: block;\n}\n\nhtml[data-dpr=\"1\"] .audience .audience-count\n{\n  font-size:9px;\n}\n\nhtml[data-dpr=\"2\"] .audience .audience-count\n{\n   font-size: 18px;\n}\nhtml[data-dpr=\"3\"] .audience .audience-count{\n  font-size: 27px;\n}\n\n@media all and (min-width:980px)\n{\n  .audience .audience-count\n  {\n    font-size: 18px;\n  }\n}\n\n.audience-detail\n{\n  overflow: hidden;\n  top: 0.293333rem;\n  margin-left:0.146667rem;\n  position:absolute;\n  height: 0.85rem;\n  z-index: 100;\n  clear:both;\n}\n\n.audience-detail .audience-header\n{\n  width:0.8rem;\n  height:0.8rem;\n  border-radius: 50%;\n  vertical-align:middle;\n  margin-left:0.133333rem;\n  border:0.030667rem solid #ffffff;\n}\n\n.audience-detail .ellipsis\n{\n  vertical-align: middle;\n  width:0.8rem;\n  height:0.8rem;\n}\n\n.favorite-info\n{\n  top:1.453333rem;\n  position:absolute;\n\tmargin-left: 0.266667rem;\n  background:rgba(0, 0, 0, 0.3);\n  height:0.64rem;\n  border-radius:0.6rem;\n  z-index: 100;\n}\n\n.favorite-info .favorite-img{\n/*  margin-top:0.08rem;*/\n  margin-left: 0.066667rem;\n  background: url(" + __webpack_require__(12) + ") no-repeat 0 0/0.64rem 100%;\n  height:0.64rem;\n}\n\n.favorite-info .user-favorite{\n  color:#ffffff;\n  margin-left:0.693333rem;\n  margin-right:0.226667rem;\n  line-height: 0.64rem;\n}\n\nhtml[data-dpr=\"1\"] .favorite-info .user-favorite\n{\n  font-size:14px;\n}\n\nhtml[data-dpr=\"2\"] .favorite-info .user-favorite\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .favorite-info .user-favorite {\n  font-size: 42px;\n}\n\n@media all and (min-width:980px)\n{\n  .favorite-info .user-favorite\n  {\n    font-size: 28px;\n  }\n}\n", ""]);

	// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABTUlEQVR4Ae3VJXADQRTG8b2YMqvzAVVGFz/1KrHr5Xld9n6i48pkyq5clZgyq6p/8ObNbWenzP3Jg2/p7a76Tf7hMMAwU+xwyy07TDHMAI4ST6MSjyxCZPGoVM9DQkIsYQn1FGpJIWbRxKillhiaWUSKWmVHhH18h8SVgTiH+PaJ2GLaOMG3TJO8ETSxjO+ENvUY3VxJbySGQc65ZxWNU46SXl3RbcbEOEMEBoUHAMzhlgcozogpgUsGMasCaME3V+7VLCKDq0qoYQsQ2ghyzXdoQGxRo5QiRJqgWGluZGiI1fJEBKUJKSYwFSuEczxacPF4QNwX39VhmrAH3YN4Osg+tFUQTw/NOtloxNOTbV9+HOYQTy+/vSBxJeqJgnxqi+CgWeXe2CJH5hZ5/037zsfIOx1sguSTR23yEw9/8zqaZpc77thlWq6jf79FDn/foMvFIpGIAAAAAElFTkSuQmCC"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _videocomments = __webpack_require__(14);

	var _videocomments2 = _interopRequireDefault(_videocomments);

	var _events = __webpack_require__(8);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(15);

	var CommentBuffer = function () {
		function CommentBuffer(wrapper, player) {
			var _this = this;

			_classCallCheck(this, CommentBuffer);

			this.comments = [];
			this.liveComment = new _videocomments2.default(wrapper, player);
			var that = this;
			_events2.default.on(_events2.default.EventConstant.Comments_Sended, function (e, data) {
				_this.add(data);
			});
		}

		_createClass(CommentBuffer, [{
			key: 'clear',
			value: function clear() {
				this.stop();
				this.liveComment.clear();
			}
		}, {
			key: 'add',
			value: function add(comment) {
				if (this.isStop) return;
				this.comments.push(comment);
				if (!this.isWorking) {
					this._wake();
				}
			}
		}, {
			key: 'stop',
			value: function stop() {
				this.comments = [];
				this.isWorking = false;
				this.isStop = true;
				clearInterval(this.interval);
			}
		}, {
			key: 'start',
			value: function start() {
				this.isStop = false;
			}
		}, {
			key: '_wake',
			value: function _wake() {
				this.isWorking = true;
				this.interval = setInterval(this._handle(), 500);
			}
		}, {
			key: '_handle',
			value: function _handle() {
				var that = this;
				return function () {
					if (that.comments.length > 0) {
						if (that.liveComment.isFull()) {
							that.liveComment.send("");
						}
						var comment = that.comments.shift();
						that.liveComment.send(comment);
					} else {
						that.isWorking = false;
						clearInterval(that.interval);
					}
				};
			}
		}]);

		return CommentBuffer;
	}();

	exports.default = CommentBuffer;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var comment_row_template = '<div class="comment-row"><span class="comment-left"></span><span class="comment-right"></div>';
	var comment_step = 25;
	var container_max_rows = 20;
	var comment_name_colors = {
		'1': 'rgba(219,124,80,0.3)',
		'2': 'rgba(139,156,80,0.3)',
		'3': 'rgba(40,180,187,0.3)'
	};

	var VideoComments = function () {
		function VideoComments(wrapper) {
			_classCallCheck(this, VideoComments);

			this.createEl();
			this._setupComment();
			this.maxTopRow = null;
			this.colorIndex = 1;
		}

		_createClass(VideoComments, [{
			key: 'createEl',
			value: function createEl(wrapper) {
				this.comments = $('.comment-list');
				this.container = this.comments.find('.comment-container');
			}
		}, {
			key: 'clear',
			value: function clear() {
				this.comments.empty();
			}
		}, {
			key: 'isFull',
			value: function isFull() {
				return this.comments.find('.empty-comment-row').length == 0;
			}
		}, {
			key: 'send',
			value: function send(comment) {
				var emptyRows = this.comments.children('.comment-row'),
				    firstEmptyRow = void 0;

				if (!comment) {
					return;
				}

				if (emptyRows.length > 0) firstEmptyRow = $(emptyRows[0]);else firstEmptyRow = this._createEmptyRow();

				this._assignValues(firstEmptyRow, comment);

				this._move(firstEmptyRow);
			}
		}, {
			key: '_move',
			value: function _move(currentRow) {
				currentRow.show();
				var that = this,
				    commentsHeight = this.comments.height(),
				    containerHeight = this.container.height(),
				    step = currentRow.height();
				this.container.append(currentRow);
				var row = this.container.children().first();
				if (containerHeight - commentsHeight > row.height()) {
					this._removeClass(row.find('.comment-right'));
					row.hide();
					this.comments.append(row);
				}
			}
		}, {
			key: '_assignValues',
			value: function _assignValues(row, comment) {
				var name = row.find('.comment-left');
				name.text(comment.name);
				var commentRight = row.find('.comment-right');
				commentRight.html(comment.comment);
				commentRight.addClass(this._getClass());
			}
		}, {
			key: '_createEmptyRow',
			value: function _createEmptyRow() {
				var row = $(comment_row_template);
				row.hide();
				this.comments.append(row);
				return row;
			}
		}, {
			key: '_setupComment',
			value: function _setupComment() {
				for (var i = 0; i < container_max_rows; i++) {
					this._createEmptyRow();
				}
			}
		}, {
			key: '_getClass',
			value: function _getClass(type) {
				if (this.colorIndex > 4) {
					this.colorIndex = 1;
				}
				var className = 'comment-color' + this.colorIndex;
				this.colorIndex++;
				return className;
			}
		}, {
			key: '_removeClass',
			value: function _removeClass(ele) {
				ele.removeClass('comment-color1');
				ele.removeClass('comment-color2');
				ele.removeClass('comment-color3');
				ele.removeClass('comment-color4');
			}
		}]);

		return VideoComments;
	}();

	exports.default = VideoComments;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".comment-list {\n    position: absolute;\n    height: 4.266667rem;\n    width:6.533333rem;\n    // bottom: 0.933333rem;\n    overflow: hidden;\n    margin-left:0.133333rem;\n    clear: both;\n    z-index: 500;\n}\n\n.comment-list .comment-container {\n    position: absolute;\n    height: auto;\n    width:6.466667rem;\n    bottom:0px;\n}\n\n.comment-container .comment-row\n{\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 0.106667rem;\n  position: relative;\n  text-shadow: 0 0.013333rem 0.013333rem #000000;\n  -webkit-filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\n          filter:shadow(Color=rgba(0, 0, 0, 0.5),Direction=0.026667rem,Strength=0);\n  margin-bottom:0.053333rem;\n  float: left;\n  clear: both;\n  padding-left: 0.133333rem;\n  padding-right: 0.133333rem;\n  margin-left: 0.133333rem;\n  margin-right: 0.133333rem;\n}\n\n.comment-row .comment-left\n{\n  color:#DBDBDB;\n  line-height: 0.6rem;\n  vertical-align: top;\n}\n\nhtml[data-dpr=\"1\"] .comment-row .comment-left\n{\n  font-size:14px;\n}\n\nhtml[data-dpr=\"2\"] .comment-row .comment-left\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .comment-row .comment-left{\n  font-size: 42px;\n}\n\n@media all and (min-device-width:980px)\n{\n  .comment-row .comment-left\n  {\n    font-size: 28px;\n  }\n}\n\n\n\n.comment-row .comment-right\n{\n  line-height: 0.6rem;\n  margin-left:0.133333rem;\n}\n\n\nhtml[data-dpr=\"1\"] .comment-row .comment-right\n{\n  font-size:14px;\n}\n\nhtml[data-dpr=\"2\"] .comment-row .comment-right\n{\n   font-size: 28px;\n}\nhtml[data-dpr=\"3\"] .comment-row .comment-right{\n  font-size: 42px;\n}\n\n@media all and (min-device-width:980px)\n{\n  .comment-row .comment-right\n  {\n    font-size: 28px;\n  }\n}\n\n.comment-color1\n{\n  color: rgba(255, 216, 142, 1);\n}\n\n.comment-color2\n{\n  color: rgba(205, 243, 249, 1);\n}\n\n.comment-color3\n{\n  color: rgba(182, 159, 255, 1);\n}\n\n.comment-color4\n{\n  color: rgba(255, 255, 255, 1);\n}", ""]);

	// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	var _events = __webpack_require__(8);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(19);

	var Favoriate = function () {
		function Favoriate() {
			var images = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png', 'xin.png'];

			_classCallCheck(this, Favoriate);

			this.animateContainer = $('.favorite-animation-container');
			this.imgNames = images;
			this.index = 0;
			var that = this;
			_events2.default.on(_events2.default.EventConstant.Favoriation_Sended, function () {
				that.favoriate();
			});
		}

		_createClass(Favoriate, [{
			key: 'favoriate',
			value: function favoriate() {
				var length = this.imgNames.length;
				this.index = this.index < length ? this.index : 0;
				name = this.imgNames[this.index];
				var $img = $('<img src="./images/' + name + '" class="favorite-animation">');
				this.animateContainer.append($img);
				this.index++;
				_util2.default.prefixedEvent($img[0], 'animationend', function () {
					$img.remove();
				});
			}
		}]);

		return Favoriate;
	}();

	exports.default = Favoriate;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Util = function () {
		function Util() {
			_classCallCheck(this, Util);
		}

		_createClass(Util, null, [{
			key: "prefixedEvent",
			value: function prefixedEvent(element, type, callback) {
				var pfx = ["webkit", "moz", "MS", "o", ""];
				for (var p = 0; p < pfx.length; p++) {
					if (!pfx[p]) type = type.toLowerCase();
					Util.addEvent(element, pfx[p] + type, callback);
				}
			}
		}, {
			key: "addEvent",
			value: function addEvent(ele, type, hander) {
				if (ele.addEventListener) {
					ele.addEventListener(type, hander, false);
				}
				if (ele.attachEvent) {
					ele.attachEvent('on' + type, hander);
				}
			}
		}, {
			key: "screenHeight",
			value: function screenHeight() {
				return document.body.clientHeight || document.documentElement.clientHeight || window.screen.height || window.innerHeight;
			}
		}, {
			key: "isX5",
			value: function isX5() {
				var agent = navigator.userAgent;
				return (/micromessenger/i.test(agent) || /qqbrowser/i.test(agent)
				);
			}
		}]);

		return Util;
	}();

	exports.default = Util;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".favorite-animation-container\n{\n\tleft:7.066667rem;\n  /*202*/\n  // bottom: 0.933333rem;\n  height:5.6rem;\n  width:2.4rem;\n  margin-left: 0.133333rem;\n  position:absolute;\n}\n\n\n.favorite-animation-container img\n{\n\tposition:absolute;\n\tbottom:0px;\n  left:45%;\n}\n\n.favorite-animation\n{\n  -webkit-animation-name: appear-from-bottom;\n          animation-name: appear-from-bottom;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-fill-mode:forwards;\n          animation-fill-mode:forwards;\n  -webkit-animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n          animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);\n}\n/*easeInSine: cubic-bezier(0.47, 0, 0.745, 0.715);*/\n\n@-webkit-keyframes appear-from-bottom {\n  0% {\n    opacity: 0.5;\n    width:0.56rem;\n    height:0.533333rem;\n    display:block;\n  }\n  10% {\n    opacity: 1;\n  }\n  20%{\n    width:1.12rem;\n    height:1.066667rem;\n  }\n  66% {\n    opacity: 1;\n  }\n  100% {\n  \t/*900*/\n    -webkit-transform: translateY(-5.6rem);\n            transform: translateY(-5.6rem);\n    opacity: 0;\n    width:0.56rem;\n    height:0.533333rem;\n    display:none;\n  }\n}\n\n@keyframes appear-from-bottom {\n  0% {\n    opacity: 0.5;\n    width:0.56rem;\n    height:0.533333rem;\n    display:block;\n  }\n  10% {\n    opacity: 1;\n  }\n  20%{\n    width:1.12rem;\n    height:1.066667rem;\n  }\n  66% {\n    opacity: 1;\n  }\n  100% {\n  \t/*900*/\n    -webkit-transform: translateY(-5.6rem);\n            transform: translateY(-5.6rem);\n    opacity: 0;\n    width:0.56rem;\n    height:0.533333rem;\n    display:none;\n  }\n}\n", ""]);

	// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(8);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(22);

	var CommentSender = function () {
		function CommentSender() {
			_classCallCheck(this, CommentSender);
		}

		_createClass(CommentSender, null, [{
			key: 'setup',
			value: function setup() {
				$('.comment-textbox .send-btn').click(function () {
					var $text = $('.comment-textbox .send-txt');
					var msg = $text.val();
					_events2.default.trigger(_events2.default.EventConstant.Comments_Sended, {
						name: '小鱼儿',
						comment: msg
					});
					$text.val("");
				});
				$('.comment-textbox .favoriate-send').click(function () {
					_events2.default.trigger(_events2.default.EventConstant.Favoriation_Sended);
				});
			}
		}]);

		return CommentSender;
	}();

	exports.default = CommentSender;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".comment-textbox{\n    height:0.666667rem;\n    position: absolute;\n    // bottom: 0px;\n    margin-left: 0.133333rem;\n    margin-right:0.133333rem;\n    margin-bottom: 0.066667rem;\n    width: 100%;\n }\n\n .comment-textbox .send-container{\n      position: relative;\n      width: 100%;\n }\n\n.send-container .send-txt{\n\t    float:right;\n      width:68%;\n      height:0.933333rem;\n      line-height: 0.933333rem;\n      background:#fff;\n      border:0;\n      border-radius: 0.133333rem 0 0 0.133333rem;\n      resize : none;\n      color:#000;\n}\n\n.send-container .send-btn{\n      float:right;\n      width:15%;\n      height:0.933333rem;\n      background: #343B59;\n      line-height: 0.933333rem;\n      text-align: center;\n      border-radius: 0 0.133333rem 0.133333rem 0;\n      cursor: pointer;\n      color: #ffffff;\n      padding-right: 0.133333rem;\n      padding-left: 0.133333rem;\n}\n\n.send-container .send-btn:hover\n{\n    background: #343445;\n}\n\n.send-container .favoriate-send\n{\n  float:right;\n  width:1rem;\n  height:1rem;\n  margin-left: 0.133333rem;\n  margin-right: 0.266667rem;\n}\n\n.send-container .favoriate-send:hover\n{\n  opacity: 0.8;\n  cursor:pointer;\n}\n\n", ""]);

	// exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(18);

	var _util2 = _interopRequireDefault(_util);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Layout = function () {
		function Layout() {
			_classCallCheck(this, Layout);
		}

		_createClass(Layout, null, [{
			key: 'adjustLayout',
			value: function adjustLayout() {
				var height = _util2.default.screenHeight(),
				    commentTextbox = $('.comment-textbox'),
				    inputHeight = commentTextbox.height() + 18;
				commentTextbox.css('top', height - inputHeight);
				var commentList = $('.comment-list'),
				    commentListHeight = commentList.height();
				commentList.css('top', height - commentListHeight - inputHeight);
				var favorioate = $('.favorite-animation-container'),
				    favoritateHeight = favorioate.height();
				favorioate.css('top', height - favoritateHeight - inputHeight);
			}
		}]);

		return Layout;
	}();

	exports.default = Layout;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!../../node_modules/_css-loader@0.26.4@css-loader/index.js!../../node_modules/_postcss-loader@1.3.3@postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html,\nbody\n{\n  height: 100%;\n\tmargin:0;\n\tpadding:0;\n}\n\nbody\n{\n  font-size:16px !important;\n}\n\nul\n{\n\tpadding:0px;\n\tmargin:0px;\n}\n\nul li\n{\n    list-style-type:none;\n}\n\n.player-area\n{\n}\n\n.hide()\n{\n  display:none!important;\n}\n\n.show()\n{\n  display:block!important;\n}\n\n.content-container\n{\n}\n", ""]);

	// exports


/***/ })
/******/ ]);