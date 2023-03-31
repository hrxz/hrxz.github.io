! function(e) {
	var n = !1;
	if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports =
			e(), n = !0), !n) {
		var o = window.Cookies,
			t = window.Cookies = e();
		t.noConflict = function() {
			return window.Cookies = o, t
		}
	}
}(function() {
	function e() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var o = arguments[e];
			for (var t in o) n[t] = o[t]
		}
		return n
	}

	function n(o) {
		function t(n, r, i) {
			var c;
			if ("undefined" != typeof document) {
				if (arguments.length > 1) {
					if ("number" == typeof(i = e({
							path: "/"
						}, t.defaults, i)).expires) {
						var a = new Date;
						a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
					}
					i.expires = i.expires ? i.expires.toUTCString() : "";
					try {
						c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
					} catch (e) {}
					r = o.write ? o.write(r, n) : encodeURIComponent(r + "").replace(
						/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n =
						encodeURIComponent(n + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
					var s = "";
					for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
					return document.cookie = n + "=" + r + s
				}
				n || (c = {});
				for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
					var l = p[u].split("="),
						C = l.slice(1).join("=");
					this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
					try {
						var m = l[0].replace(d, decodeURIComponent);
						if (C = o.read ? o.read(C, m) : o(C, m) || C.replace(d, decodeURIComponent), this.json) try {
							C = JSON.parse(C)
						} catch (e) {}
						if (n === m) {
							c = C;
							break
						}
						n || (c[m] = C)
					} catch (e) {}
				}
				return c
			}
		}
		return t.set = t, t.get = function(e) {
			return t.call(t, e)
		}, t.getJSON = function() {
			return t.apply({
				json: !0
			}, [].slice.call(arguments))
		}, t.defaults = {}, t.remove = function(n, o) {
			t(n, "", e(o, {
				expires: -1
			}))
		}, t.withConverter = n, t
	}
	return n(function() {})
});

var comm_list = [{

		slug: "common",
		list: [{
			tag: "热门",
			link: [{
				name: "常用软件",
				url: "https://app.hrxz.net/",
			}, {
				name: "电视直播",
				url: "https://a.hrxz.net/live.html",
			}, {
				name: "Alist",
				url: "http://192.168.1.99:5244/",
			}, {
				name: "必应",
				url: "https://cn.bing.com/"
			}, {
				name: "今日头条",
				url: "https://www.toutiao.com/"

			}, {
				name: "数字尾巴",
				url: "http://www.dgtle.com/"
			}]
		}, {
			tag: "社交",
			link: [{
				name: "微博",
				url: "https://www.weibo.com/"
			}, {
				name: "贴吧",
				url: "https://tieba.baidu.com/"
			}, {
				name: "知乎",
				url: "https://www.zhihu.com/"
			}, {
				name: "豆瓣",
				url: "https://www.douban.com/"
			}, {
				name: "V2EX",
				url: "https://www.v2ex.com/"
			}, {
				name: "简书",
				url: "https://www.jianshu.com/"
			}, {
				name: "Twitter",
				url: "https://twitter.com/"
			}]
		}, {
			tag: "资讯",
			link: [{
				name: "网易",
				url: "https://www.163.com/"
			}, {
				name: "腾讯",
				url: "http://www.qq.com/"
			}, {
				name: "新浪",
				url: "http://www.sina.com.cn/"
			}, {
				name: "搜狐",
				url: "http://www.sohu.com/"
			}, {
				name: "凤凰网",
				url: "http://www.ifeng.com/"
			}, {
				name: "人民网",
				url: "http://www.people.com.cn/"
			}, {
				name: "新华网",
				url: "http://xinhuanet.com/"
			}]
		}, {
			tag: "购物",
			link: [{
				name: "淘宝",
				url: "https://www.taobao.com/"
			}, {
				name: "京东",
				url: "https://www.jd.com/"
			}, {
				name: "亚马逊",
				url: "https://www.amazon.cn/"
			}, {
				name: "苏宁易购",
				url: "https://www.suning.com/"
			}, {
				name: "网易严选",
				url: "https://you.163.com/"
			}, {
				name: "小米商城",
				url: "https://www.mi.com/"
			}, {
				name: "什么值得买",
				url: "https://www.smzdm.com/"
			}]
		}, {

			tag: "电影",
			link: [{
				name: "66影视",
				url: "http://www.hao6v.tv/"
			}, {
				name: "电影天堂",
				url: "http://www.dygod.net/"
			}, {
				name: "中国纪录片网",
				url: "http://www.docuchina.cn/"
			}, {
				name: "66电影",
				url: "http://www.66ys.cc/"
			}, {
			
					name: "555电影网",
				url: "https://www.5ying.fun/"
						}, {
				name: "bt美剧",
				url: "http://www.btmeiju.com/movie.html"
							}, {
							name: "蓝光影视",
				url: "https://www.lgyy.cc/"
					}, {	
				name: "智能电视网",
				url: "https://www.znds.com/"
					}, {
							name: "auete影视",
				url: "https://auete.com/"
					}, {
							name: "omofun动漫",
				url: "https://omofun.tv/"
					}, {
							name: "星空影视",
				url: "https://xkys.tv/"
			}, {
				name: "直播源搜索引擎",
				url: "http://tonkiang.us/"
			}]
		}, {
			tag: "工作",
			link: [{
				name: "领英",
				url: "https://cn.linkedin.com/"
			}, {
				name: "拉勾网",
				url: "https://www.lagou.com/"
			}, {
				name: "智联招聘",
				url: "https://www.zhaopin.com/"
			}, {
				name: "前程无忧",
				url: "https://www.51job.com/"
			}, {
				name: "应届生",
				url: "http://www.yingjiesheng.com/"
			}, {
				name: "脉脉",
				url: "https://maimai.cn/"
			}, {
				name: "酷工作",
				url: "https://www.v2ex.com/?tab=jobs"
			}]
		}, {
			tag: "生活",
			link: [{
				name: "美团",
				url: "https://www.meituan.com/"
			}, {
				name: "大众点评",
				url: "https://www.dianping.com/"
			}, {
				name: "携程",
				url: "https://www.ctrip.com/"
			}, {
				name: "去哪儿",
				url: "https://www.qunar.com/"
			}, {
				name: "飞猪",
				url: "https://www.alitrip.com/"
			}, {
				name: "12306",
				url: "https://kyfw.12306.cn/otn/index/init"
			}, {
				name: "马蜂窝",
				url: "https://www.mafengwo.cn/"
			}]
		}, {
			tag: "便捷",
			link: [{
				name: "词典翻译",
				url: "https://fanyi.baidu.com/"
			}, {
				name: "天气预报",
				url: "http://www.weather.com.cn/live/"
			}, {
				name: "快递查询",
				url: "https://www.kuaidi100.com/"
			}, {
				name: "在线转换",
				url: "https://cn.office-converter.com/"
			}, {
				name: "网页微信",
				url: "https://wx.qq.com/"
			}, {
				name: "微信公众号",
				url: "https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN"
			}, {
				name: "QQ邮箱",
				url: "https://mail.qq.com/"
			}]
		}]
	}, {
		
		slug: "amuse",
		list: [{
			tag: "影视",
			link: [{
				name: "优酷",
				url: "https://www.youku.com/"
			}, {
				name: "爱奇艺",
				url: "https://www.iqiyi.com/"
			}, {
				name: "腾讯视频",
				url: "https://v.qq.com/"
			}, {
				name: "乐视视频",
				url: "http://www.le.com/"
			}, {
				name: "芒果TV",
				url: "https://www.mgtv.com/"
			}, {
				name: "央视网",
				url: "http://tv.cctv.com/"
			}, {
				name: "YouTube",
				url: "https://www.youtube.com/"
			}]
		}, {
				tag: "音乐",
			link: [{
				name: "网易云音乐",
				url: "https://music.163.com/"
			}, {
				name: "虾米音乐",
				url: "https://www.xiami.com/"
			}, {
				name: "QQ音乐",
				url: "https://y.qq.com/"
			}, {
				name: "豆瓣FM",
				url: "https://douban.fm/"
			}, {
				name: "喜马拉雅FM",
				url: "https://www.ximalaya.com/"
			}, {
				name: "音悦Tai",
				url: "http://www.yinyuetai.com/"
			}, {
				name: "5sing原创",
				url: "http://5sing.kugou.com/"
			}]
		}, {
			tag: "直播",
			link: [{
				name: "斗鱼直播",
				url: "https://www.douyu.com/"
			}, {
				name: "YY直播",
				url: "https://www.yy.com/"
			}, {
				name: "虎牙直播",
				url: "https://www.huya.com/"
			}, {
				name: "花椒直播",
				url: "http://www.huajiao.com/"
			}, {
				name: "企鹅电竞",
				url: "https://egame.qq.com/"
			}, {
				name: "一直播",
				url: "https://www.yizhibo.com/"
	
			}]
		}, {
			tag: "发现",
			link: [{
				name: "煎蛋",
				url: "https://jandan.net/"
			}, {
				name: "果壳网",
				url: "https://www.guokr.com/"
			}, {
				name: "堆糖",
				url: "https://www.duitang.com/"
			}, {
				name: "糗事百科",
				url: "https://www.qiushibaike.com/"

			}, {
				name: "好奇心日报",
				url: "http://www.qdaily.com/"
			}]
		}, {
			
			
			tag: "动漫",
			link: [{
				name: "哔哩哔哩",
				url: "https://www.bilibili.com/"
			}, {
				name: "AcFun",
				url: "http://www.acfun.cn/"
			}, {
				name: "半次元",
				url: "https://bcy.net/"
			}, {
				name: "网易漫画",
				url: "https://manhua.163.com/"
			}, {
				name: "有妖气",
				url: "http://u17.com/"
			}, {
				name: "萌娘百科",
				url: "https://zh.moegirl.org/"
			}]
		}, {
			tag: "游戏",
			link: [{
				name: "Steam",
				url: "https://store.steampowered.com/"
			}, {
				name: "游民星空",
				url: "http://www.gamersky.com/"
			}, {
				name: "口袋巴士",
				url: "http://www.tgbus.com/"
			}, {
				name: "17173",
				url: "https://www.17173.com/"
			}, {
				name: "多玩游戏",
				url: "http://www.duowan.com/"
			}, {
				name: "3DMGAME",
				url: "https://www.3dmgame.com/"
			}, {
				name: "橙光游戏",
				url: "http://www.66rpg.com/"
			}]
		}, {
		
			tag: "体育",
			link: [{
				name: "腾讯体育",
				url: "http://sports.qq.com/"
			}, {
				name: "网易体育",
				url: "http://sports.163.com/"
			}, {
				name: "新浪体育",
				url: "http://sports.sina.com.cn/"
			}, {
				name: "央视体育",
				url: "http://sports.cctv.com/"
			}, {
		
				name: "直播吧",
				url: "https://www.zhibo8.cc/"
			}, {
				name: "虎扑",
				url: "https://www.hupu.com/"
			}]
		}, {
			tag: "小说",
			link: [{
				name: "起点中文网",
				url: "https://www.qidian.com/"
			}, {
				name: "纵横中文网",
				url: "http://www.zongheng.com/"
			}, {
				name: "红袖添香",
				url: "https://www.hongxiu.com/"
			}, {
				name: "豆瓣阅读",
				url: "https://read.douban.com/"
			}, {
				name: "网易云阅读",
				url: "http://yuedu.163.com/"
			}, {
				name: "鲸鱼阅读",
				url: "http://www.jingyu.com/"
			}, {
				name: "片刻",
				url: "http://pianke.me/"
			}]
		}]
	}, {
		slug: "study",
		list: [{
			tag: "课程",
			link: [{
				name: "网易公开课",
				url: "https://open.163.com/"
			}, {
				name: "国家中小学",
				url: "https://h5.zxx.edu.cn/"
			}, {
				name: "腾讯课堂",
				url: "https://ke.qq.com/"
			}, {
				name: "中国大学MOOC",
				url: "https://www.icourse163.org/"
			}, {
				name: "慕课网",
				url: "https://www.imooc.com/"
			}, {
				name: "极客学院",
				url: "http://www.jikexueyuan.com/"
			}, {
				name: "菜鸟教程",
				url: "https://www.runoob.com/"
			}, {
				name: "w3school",
				url: "https://www.w3school.com.cn/"	
				}, {
				name: "爱课程",
				url: "http://www.icourses.cn/"
			}]
		}, {
			tag: "文库",
			link: [{
				name: "百度文库",
				url: "https://wenku.baidu.com/"
			}, {
				name: "道客巴巴",
				url: "http://www.doc88.com/"
			}, {
				name: "豆丁网",
				url: "http://www.docin.com/"
			}, {
				name: "爱问共享资料",
				url: "http://ishare.iask.sina.com.cn/"
			}, {
				name: "360doc",
				url: "http://www.360doc.com/"
			}, {
				name: "凌风云文库",
				url: "https://wenku.lingfengyun.com/"
			}, {
				name: "MBA智库",
				url: "http://www.mbalib.com/"
			}]
		}, {
			tag: "学术",
			link: [{
				name: "谷歌学术",
				url: "https://scholar.google.com/"
			}, {
				name: "百度学术",
				url: "http://xueshu.baidu.com/"
			}, {
				name: "必应学术",
				url: "https://cn.bing.com/academic"
			}, {
				name: "中国知网",
				url: "http://www.cnki.net/"
			}, {
				name: "万方数据",
				url: "http://www.wanfangdata.com.cn/"
			}, {
				name: "维普网",
				url: "http://www.cqvip.com/"
			}, {
				name: "OALib",
				url: "http://www.oalib.com/"
			}]
		}, {
			tag: "词典",
			link: [{
				name: "汉语词典",
				url: "http://hd.cnki.net/kxhd"
			}, {
				name: "剑桥词典",
				url: "https://dictionary.cambridge.org/zhs/"
			}, {
				name: "柯林斯词典",
				url: "https://www.collinsdictionary.com/zh/"
			}, {
				name: "有道词典",
				url: "https://www.youdao.com/"
			}, {
				name: "汉典",
				url: "http://www.zdic.net/"
			}, {
				name: "日中辞典",
				url: "https://cjjc.weblio.jp/"
			}, {
				name: "韩中词典",
				url: "https://zh.dict.naver.com/"
			}]
		}, {
			tag: "资讯",
			link: [{
				name: "腾讯教育",
				url: "http://edu.qq.com/"
			}, {
				name: "搜狐教育",
				url: "http://learning.sohu.com/"
			}, {
				name: "新浪教育",
				url: "http://www.163.com/"
			}, {
				name: "中国教育在线",
				url: "http://www.eol.cn/"
			}, {
				name: "新东方",
				url: "http://www.xdf.cn/"
			}, {
				name: "沪江英语",
				url: "http://www.hjenglish.com/"
			}, {
				name: "无忧考网",
				url: "https://www.51test.net/"
			}]
		}, {
			tag: "模考",
			link: [{
				name: "我要模考",
				url: "http://www.51mokao.com/"
			}, {
				name: "考满分留学",
				url: "http://www.kmf.com/"
			}, {
				name: "LeetCode",
				url: "https://leetcode-cn.com/"
			}, {
				name: "中华会计网校",
				url: "http://www.chinaacc.com/tiku/"
			}, {
				name: "打字练习",
				url: "https://www.typing.com/student"
			}, {
				name: "驾校一点通",
				url: "http://www.jxedt.com/"
			}, {
				name: "驾考宝典",
				url: "http://www.jiakaobaodian.com/"
			}]
		}, {
			tag: "便捷",
			link: [{
				name: "多邻国",
				url: "http://www.duolingo.cn/"
			}, {
				name: "扇贝",
				url: "https://www.shanbay.com/"
			}, {
				name: "百词斩",
				url: "http://www.baicizhan.com/"
			}, {
				name: "51VOA",
				url: "http://www.51voa.com/"
			}, {
				name: "在线PDF",
				url: "https://smallpdf.com/cn"
			}, {
				name: "公式字符",
				url: "http://webdemo.myscript.com/"
			}, {
				name: "Wolfram Alpha",
				url: "https://www.wolframalpha.com/"
			}]
		}, {
			tag: "成绩",
			link: [{
				name: "英语四六级",
				url: "https://www.chsi.com.cn/cet/"
			}, {
				name: "普通话水平",
				url: "http://hainan.cltt.org/web/login/pscp01001.aspx"
			}, {
				name: "会计从业资格",
				url: "http://60.208.116.167:81/pas/querycert.jsp"
			}, {
				name: "教师资格",
				url: "http://ntce.neea.edu.cn/html1/folder/1508/211-1.htm?sid=660"
			}, {
				name: "计算机等级",
				url: "http://zscx.neea.edu.cn/html1/folder/1508/211-1.htm?sid=300"
			}, {
				name: "雅思",
				url: "http://ielts.etest.edu.cn/"
			}, {
				name: "托福",
				url: "https://toefl.neea.cn/"
			}]
		}]
	}, {
		slug: "life",
		list: [{
			tag: "出行",
			link: [{
				name: "美团",
				url: "https://www.meituan.com/"
			}, {
				name: "携程",
				url: "https://www.ctrip.com/"
			}, {
				name: "去哪儿",
				url: "https://www.qunar.com/"
			}, {
				name: "飞猪",
				url: "https://www.alitrip.com/"
			}, {
				name: "途牛",
				url: "http://www.tuniu.com/"
			}, {
				name: "12306",
				url: "https://kyfw.12306.cn/otn/index/init"
			}, {
				name: "马蜂窝",
				url: "https://www.mafengwo.cn/"
			}]
		}, {
			tag: "美食",
			link: [{
				name: "下厨房",
				url: "http://www.xiachufang.com/"
			}, {
				name: "美食天下",
				url: "https://www.meishichina.com/"
			}, {
				name: "豆果美食",
				url: "https://www.douguo.com/"
			}, {
				name: "搜狐美食",
				url: "http://chihe.sohu.com/"
			}, {
				name: "心食谱",
				url: "https://www.xinshipu.com/"
			}, {
				name: "中华菜谱网",
				url: "http://www.chinacaipu.com/"
			}, {
				name: "美食杰",
				url: "http://www.meishij.net/"
			}]
		}, {
			tag: "房产",
			link: [{
				name: "房天下",
				url: "http://www.fang.com/"
			}, {
				name: "链家",
				url: "http://www.lianjia.com/"
			}, {
				name: "房多多",
				url: "http://www.fangdd.com/"
			}, {
				name: "安居客",
				url: "http://www.anjuke.com/"
			}, {
				name: "腾讯房产",
				url: "http://house.qq.com/"
			}, {
				name: "搜狐焦点",
				url: "https://house.focus.cn/"
			}, {
				name: "乐居",
				url: "http://www.leju.com/"
			}]
		}, {
			tag: "汽车",
			link: [{
				name: "汽车之家",
				url: "http://www.autohome.com.cn/"
			}, {
				name: "太平洋汽车",
				url: "http://www.pcauto.com.cn/"
			}, {
				name: "易车网",
				url: "http://www.bitauto.com/"
			}, {
				name: "爱卡汽车",
				url: "http://www.xcar.com.cn/"
			}, {
				name: "网易汽车",
				url: "http://auto.163.com/"
			}, {
				name: "新浪汽车",
				url: "http://auto.sina.com.cn/"
			}, {
				name: "搜狐汽车",
				url: "http://auto.sohu.com/"
			}]
		}, {
			tag: "财经",
			link: [{
				name: "东方财富",
				url: "http://www.eastmoney.com/"
			}, {
				name: "第一财经",
				url: "http://www.yicai.com/"
			}, {
				name: "凤凰财经",
				url: "http://finance.ifeng.com/"
			}, {
				name: "网易财经",
				url: "http://money.163.com/"
			}, {
				name: "和讯财经",
				url: "http://www.hexun.com/"
			}, {
				name: "雪球",
				url: "https://xueqiu.com/"
			}, {
				name: "股吧",
				url: "http://guba.eastmoney.com/"
			}]
		}, {
			tag: "时尚",
			link: [{
				name: "太平洋时尚",
				url: "https://www.pclady.com.cn/"
			}, {
				name: "瑞丽网",
				url: "http://www.rayli.com.cn/"
			}, {
				name: "美丽说",
				url: "http://www.meilishuo.com/"
			}, {
				name: "蘑菇街",
				url: "http://www.mogujie.com/"
			}, {
				name: "YOKA",
				url: "http://www.yoka.com/"
			}, {
				name: "OnlyLady",
				url: "http://www.onlylady.com/"
			}, {
				name: "VOGUE",
				url: "http://www.vogue.com.cn/"
			}]
		}, {
			tag: "健康",
			link: [{
				name: "搜狐健康",
				url: "http://health.sohu.com/"
			}, {
				name: "新浪健康",
				url: "http://health.sina.com.cn/"
			}, {
				name: "凤凰健康",
				url: "http://fashion.ifeng.com/health/"
			}, {
				name: "寻医问药",
				url: "http://www.xywy.com/"
			}, {
				name: "丁香园",
				url: "http://www.dxy.cn/"
			}, {
				name: "39健康网",
				url: "http://www.39.net/"
			}, {
				name: "有问必答",
				url: "http://www.120ask.com/"
			}]
		}, {
			tag: "查询",
			link: [{
				name: "网速测试",
				url: "http://www.speedtest.net/"
			}, {
				name: "电话归属地",
				url: "http://www.114best.com/dh/"
			}, {
				name: "列车时刻",
				url: "http://qq.ip138.com/train/"
			}, {
				name: "实时航班",
				url: "http://map.variflight.com/"
			}, {
				name: "台风路径",
				url: "http://typhoon.zjwater.gov.cn/"
			}, {
				name: "交通违章查询",
				url: "http://www.ip138.com/weizhang.htm"
			}, {
				name: "比一比价",
				url: "http://www.b1bj.com/"
			}]
		}]
	}, {
		slug: "tech",
		list: [{
			tag: "发现",
			link: [{
				name: "V2EX",
				url: "https://www.v2ex.com/"
			}, {
				name: "掘金",
				url: "https://juejin.im/"
			}, {
				name: "开源中国",
				url: "https://www.oschina.net/"
			}, {
				name: "CSDN",
				url: "https://www.csdn.net/"
			}, {
				name: "InfoQ",
				url: "http://www.infoq.com/cn/"
			}, {
				name: "NEXT",
				url: "http://next.36kr.com/"
			}, {
				name: "HackerNews",
				url: "https://news.ycombinator.com/"
			}]
		}, {
			tag: "数码",
			link: [{
				name: "数字尾巴",
				url: "http://www.dgtle.com/"
			}, {
				name: "爱范儿",
				url: "https://www.ifanr.com/"
			}, {
				name: "雷锋网",
				url: "https://www.leiphone.com/"
			}, {
				name: "极客公园",
				url: "http://www.geekpark.net/"
			}, {
				name: "比特网",
				url: "http://www.chinabyte.com/"
			}, {
				name: "ZEALER",
				url: "http://www.zealer.com/"
			}, {
				name: "Engadget",
				url: "https://chinese.engadget.com/"
			}]
		}, {
			tag: "平台",
			link: [{
				name: "GitHub",
				url: "https://github.com/"
			}, {
				name: "Coding",
				url: "https://coding.net/"
			}, {
				name: "石墨",
				url: "https://shimo.im/"
			}, {
				name: "百度脑图",
				url: "http://naotu.baidu.com/"
			}, {
				name: "CmdMarkdown",
				url: "https://www.zybuluo.com/mdeditor"
			}, {
				name: "TinyPNG",
				url: "https://tinypng.com/"
			}, {
				name: "SM.MS 图床",
				url: "https://sm.ms/"
			}]
		}, {
			tag: "工具",
			link: [{
				name: "IP查询",
				url: "https://www.ipip.net/ip.html"
			}, {
				name: "Speedtest",
				url: "http://www.speedtest.net/"
			}, {
				name: "17CE",
				url: "https://www.17ce.com/"
			}, {
				name: "在线工具",
				url: "https://tool.lu/"
			}, {
				name: "代码格式化",
				url: "https://www.freeformatter.com/"
			}, {
				name: "临时邮箱",
				url: "https://www.moakt.com/"
			}, {
				name: "域名比价",
				url: "https://www.domcomp.com/"
			}]
		}, {
			tag: "文档",
			link: [{
				name: "Microsoft文档",
				url: "https://docs.microsoft.com/zh-cn/"
			}, {
				name: "Google开发者",
				url: "https://developers.google.com/china/"
			}, {
				name: "MDN文档",
				url: "https://developer.mozilla.org/zh-CN/"
			}, {
				name: "W3school",
				url: "http://www.w3school.com.cn/"
			}, {
				name: "菜鸟教程",
				url: "http://www.runoob.com/"
			}, {
				name: "Linux命令",
				url: "http://man.linuxde.net/"
			}, {
				name: "微信小程序",
				url: "https://mp.weixin.qq.com/debug/wxadoc/dev/index.html"
			}]
		}, {
			tag: "博客",
			link: [{
				name: "阿里UED",
				url: "http://www.aliued.cn/"
			}, {
				name: "有赞技术",
				url: "https://tech.youzan.com/"
			}, {
				name: "京东JDC",
				url: "http://jdc.jd.com/"
			}, {
				name: "腾讯全端",
				url: "http://www.alloyteam.com/"
			}, {
				name: "百度UED",
				url: "http://ued.baidu.com/"
			}, {
				name: "人人网FED",
				url: "https://fed.renren.com/"
			}, {
				name: "阮一峰博客",
				url: "http://www.ruanyifeng.com/"
			}]
		}, {
			tag: "资源",
			link: [{
				name: "少数派",
				url: "https://sspai.com/"
			}, {
				name: "数码荔枝",
				url: "https://www.lizhi.io/"
			}, {
				name: "异次元",
				url: "https://www.iplaysoft.com/"
			}, {
				name: "Softonic",
				url: "https://en.softonic.com/"
			}, {
				name: "MacInformer",
				url: "http://macdownload.informer.com/"
			}, {
				name: "站长下载",
				url: "http://down.chinaz.com/"
			}, {
				name: "中科大镜像",
				url: "http://mirrors.ustc.edu.cn/"
			}]
		}, {
			tag: "云端",
			link: [{
				name: "阿里云",
				url: "https://www.aliyun.com/"
			}, {
				name: "腾讯云",
				url: "https://cloud.tencent.com/"
			}, {
				name: "AWS",
				url: "https://aws.amazon.com/cn/"
			}, {
				name: "GoogleCloud",
				url: "https://cloud.google.com/"
			}, {
				name: "Linode",
				url: "https://www.linode.com/"
			}, {
				name: "DigitalOcean",
				url: "https://www.digitalocean.com/"
			}, {
				name: "Bandwagon",
				url: "https://bandwagonhost.com/"
			}]
		}]
	}, {
		slug: "design",
		list: [{
			tag: "灵感",
			link: [{
				name: "Behance",
				url: "https://www.behance.net/"
			}, {
				name: "Dribbble",
				url: "https://dribbble.com/"
			}, {
				name: "Muzli",
				url: "https://muz.li/"
			}, {
				name: "MyDesy",
				url: "https://www.mydesy.com/"
			}, {
				name: "ZCOOL",
				url: "http://www.zcool.com.cn/"
			}, {
				name: "FWA",
				url: "https://thefwa.com/"
			}, {
				name: "LandBook",
				url: "https://land-book.com/"
			}]
		}, {
			tag: "图库",
			link: [{
				name: "花瓣网",
				url: "http://huabanpro.com/"
			}, {
				name: "Pixabay",
				url: "https://pixabay.com/"
			}, {
				name: "PEXELS",
				url: "https://www.pexels.com/"
	}, {
				name: "懒人图库",
				url: "http://www.lanrentuku.com/"			
			}, {
				name: "阿里图库",
				url: "https://www.iconfont.cn/"
			}]
		}, {
			tag: "素材",
			link: [{
				name: "昵图网",
				url: "http://www.nipic.com/"
			}, {
				name: "千图网",
				url: "http://www.58pic.com/"
			}, {
				name: "freepik",
				url: "https://www.freepik.com/"
			}, {
				name: "UIKit",
				url: "http://www.uikit.me/"
			}, {
				name: "Pixeden",
				url: "https://www.pixeden.com/"
			}, {
				name: "Subtlepatterns",
				url: "http://subtlepatterns.com/"
			}, {
				name: "pngimg",
				url: "http://pngimg.com"
			}]
		}, {
			tag: "字体",
			link: [{
				name: "Fontsup",
				url: "https://fontsup.com/"
			}, {
				name: "dafont",
				url: "https://www.dafont.com/"
			}, {
				name: "Qiuziti",
				url: "http://www.qiuziti.com/"
			}, {
				name: "MyFonts",
				url: "https://www.myfonts.com/"
			}, {
				name: "Fonts2u",
				url: "https://zh.fonts2u.com/"
			}, {
				name: "Fontfabric",
				url: "http://www.fontfabric.com/"
			}, {
				name: "UrbanFonts",
				url: "https://www.urbanfonts.com/"
			}]
		}, {
			tag: "交互",
			link: [{
				name: "UICN",
				url: "http://www.ui.cn/"
			}, {
				name: "SiteSee",
				url: "https://sitesee.co/"
			}, {
				name: "UIGarage",
				url: "https://uigarage.net/"
			}, {
				name: "BestWebsite",
				url: "https://bestwebsite.gallery/"
			}, {
				name: "CollectUI",
				url: "http://collectui.com/"
			}, {
				name: "UIMovement",
				url: "https://uimovement.com/"
			}, {
				name: "Reeoo",
				url: "https://reeoo.com/"
			}]
		}, {
			tag: "颜色",
			link: [{
				name: "ColorHunt",
				url: "https://colorhunt.co/"
			}, {
				name: "Coolors",
				url: "https://coolors.co/"
			}, {
				name: "AdobeColor",
				url: "https://color.adobe.com/zh/"
			}, {
				name: "WebGradients",
				url: "https://webgradients.com/"
			}, {
				name: "Trianglify",
				url: "https://trianglify.io/"
			}, {
				name: "ColorFavs",
				url: "http://www.colorfavs.com/"
			}, {
				name: "Colllor",
				url: "http://colllor.com/"
			}]
		}, {
			tag: "工具",
			link: [{
				name: "图片压缩",
				url: "https://zh.recompressor.com/"
			}, {
				name: "Fotor",
				url: "https://www.fotor.com.cn/"
			}, {
				name: "Photopea",
				url: "https://www.photopea.com/"
			}, {
				name: "AutoDraw",
				url: "https://www.autodraw.com/"
			}, {
				name: "Figma",
				url: "https://www.figma.com/"
			}, {
				name: "SVG Draw",
				url: "http://editor.method.ac/"
			}, {
				name: "图片去底",
				url: "http://www.aigei.com/bgremover/"
	  
			  }, {
				name: "阿里扣图",
				url: "https://chuangyi.taobao.com/tools/santi"
			}, {
				name: "TinyPNG",
				url: "https://tinypng.com/"
			}]
		}, {
			tag: "规范",
			link: [{
				name: "Apple",
				url: "https://developer.apple.com/design/"
			}, {
				name: "Google",
				url: "https://design.google/"
			}, {
				name: "Microsoft",
				url: "https://www.microsoft.com/design/"
			}, {
				name: "Material",
				url: "https://material.io/"
			}, {
				name: "Android",
				url: "https://developer.android.google.cn/design/"
			}, {
				name: "ScreenSize",
				url: "http://screensiz.es/phone"
			}, {
				name: "WeUI",
				url: "https://weui.io/"
			}]
		}]
	}, {
		slug: "my",
		list: [{

			tag: "软件",
			link: [{
				name: "423Down",
				url: "https://www.423down.com/"
			}, {
				name: "小兵工作室",
				url: "https://www.down66.com/"
			}, {
				name: "不忘初心",
				url: "https://www.pc521.net/"
			}, {
				name: "乐享网",
				url: "https://www.lxapk.com/"
			}, {
			  name: "鸡哥",
				url: "https://www.wotianna.com/"
			}, {
				name: "MEFCL",
				url: "https://www.mefcl.com/"
			}, {
			  		name: "Apphot",
				url: "https://apphot.cc/"
			}, {
				name: "心海e站",
				url: "https://apphot.cc/"
			}, {
				name: "HBuilder",
				url: "https://www.dcloud.io/",
			}, {
				name: "易破解",
				url: "http://www.ypojie.com/"
			}, {
				name: "异星软件",
				url: "http://www.yxssp.com/"
			}]
		}, {
			tag: "其它",
			link: [{
				name: "潢川房管局",
				url: "http://123.7.82.118:8081/"
			}, {
				name: "立返聚合",
				url: "https://sd.hrxz.net/"
			}, {
				name: "efcloudC机场",
				url: "https://www.efcloud.net/"
			}, {
				name: "IPLC机场",
				url: "https://www.iplcq.xyz/"
			}, {			
				name: "成套工具箱",
				url: "https://ct.hrxz.net/"
			}, {
				name: "V2EX",
				url: "https://www.v2ex.com/"
		
			}, {
				name: "浩然小站",
				url: "https://www.hrxz.net/"
			}]
		}, {
			tag: "手机",
			link: [{
			
				name: "蓝鲨",
				url: "https://www.lan-sha.com/"
				}, {
				name: "via插件",
				url: "http://via-app.cn/#/tabBar/home"
				}, {
				name: "图标工厂",
				url: "https://icon.wuruihong.com/"
			}, {
				name: "移动叔叔",
				url: "http://bbs.ydss.cn"
			}, {
				name: "易安卓",
				url: "http://bbs.e4asoft.com/index.php"

			}, {
				name: "易如意",
				url: "https://www.eruyi.cn/thread-4430-1-1.html",
			}, {
				name: "科技美学",
				url: "http://www.kejimeixue.com/",
	
			}]
		}, {
			tag: "工具1",
			link: [{
				name: "站长工具",
				url: "http://mtool.chinaz.com/othertools"
			}, {
				name: "不死鸟分享",
				url: "https://iui.su/155/"			
			}, {
				name: "文本转语音",
				url: "https://toolb.cn/microsoftspeech"			
			}, {
				name: "在线工具",
				url: "https://tool.lu/"
			}, {
				name: "toolzl在线工具",
				url: "http://www.toolzl.com/"
			}, {
				name: "菜鸟工具",
				url: "https://c.runoob.com/"
			}, {
					name: "码工具",
				url: "https://www.matools.com/gif"
			}, {
				name: "一个工具箱",
				url: "http://www.atoolbox.net"
			}, {
				name: "二维码生成器",
				url: "http://cli.im/",
			}, {
				name: "Photo在线编辑",
				url: "http://www.pixlr.com/editor/?loc=zh-cn"
			}, {
				name: "LOGO生成",
				url: "http://www.uugai.com",
			}, {
				name: "Gif生成",
				url: "https://www.matools.com/gif",
			}, {
				name: "PPT导航站",
				url: "http://www.hippter.com/"
			}, {
				name: "图贴士",
				url: "http://tool.gifhome.com"
			}, {
				name: "医学微视",
				url: "http://www.mvyxws.com"

			}]
		}, {

			tag: "建站",
			link: [{
				name: "阿里云",
				url: "https://www.aliyun.com/?spm=a2c44.11131515.0.0.d041525cIwM7mZ"
			}, {
				name: "W3school",
				url: "https://www.w3school.com.cn/h.asp"
			}, {
				name: "源码收藏网",
				url: "http://www.codesocang.com/"
			}, {
				name: "阿里图标库",
				url: "https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2"
			}, {
				name: "pornhub",
				url: "https://cn.pornhub.com/"
			}, {
				name: "bitcron-pro",
				url: "https://github.com/qyxtim/bitcron-pro"
			}, {
				name: "畅言云评",
				url: "http://changyan.kuaizhan.com/",
			}, {		
				name: "github",
				url: "https://github.com/hrxz/",
					}, {		
				name: "站长素材",
				url: "https://sc.chinaz.com/jiaoben/",
					}, {
				name: "源码搜藏网",
				url: "http://www.codesocang.com/png/128x128/17583.html",
			}, {		
				name: "dplayer生成",
				url: "https://github.menhood.wang/DPlayer-html-code/",
							}, {		
				name: "ckplayer",
				url: "https://www.ckplayer.com/",
			}, {
				name: "设计导航",
				url: "http://hao.uisdc.com/"
			}]
		}, {

			tag: "破解",
			link: [{
				name: "飘云阁ziyun",
				url: "http://bbs.chinapyg.com/"
			}, {
				name: "卡饭_紫云_",
				url: "http://bbs.kafan.cn/"
			}, {
				name: "看雪",
				url: "http://bbs.pediy.com/"
			}, {
				name: "吾爱破解_紫云",
				url: "http://www.52pojie.cn/index.php"
			}, {
				name: "MD5查询",
				url: "http://www.md5.cc/"
			}, {
				name: "无忧启动ziyun",
				url: "http://bbs.wuyou.net/?fromuid=195578",
			}, {
				name: "恩山论坛",
				url: "https://www.right.com.cn/forum/"
			}]
		}, {
			tag: "编程",
			link: [{
				name: "易语言",
				url: "http://www.dywt.com.cn/"
			}, {
				name: "易论坛yang_hao",
				url: "http://bbs.eyuyan.com/"
			}, {
				name: "精易论坛",
				url: "https://bbs.125.la/plugin.php?id=dsu_paulsign:sign"
			}, {
				name: "泪闯天涯",
				url: "http://go.it608.com/link/earticle.html"
			}, {
				name: "云外归鸟",
				url: "http://www.ywgn.net/"
			}]
		}, {

			tag: "系统",
			link: [{
				name: "51电脑_紫云",
				url: "http://www.51nb.com"
			}, {

				name: "萝卜头yaung",
				url: "https://bbs.luobotou.org/thread-761-1-1.html"
			}, {
				name: "远景yaungmg",
				url: "http://bbs.pcbeta.com/"
			}, {
				name: "自由天空yaung",
				url: "https://www.itsk.com/"
			}, {
				name: "秋无痕ziyun",
				url: "http://bbs.realqwh.cn/index.php"
			}, {
				name: "ventoy",
				url: "https://www.ventoy.net/cn/doc_disk_layout.html",
			}, {
				name: "驱动总裁",
					url: "https://www.sysceo.com/",
				}, {
				name: "木蚂蚁ziyun_2009",
				url: "http://bbs.mumayi.net/"
			}]
		}, {
			tag: "网盘",
			link: [{
				name: "阿里云盘资源",
				url: "https://alyunpan.com/"
			}, {
				name: "小马盘",
				url: "https://www.xiaomapan.com/"
			}, {

				name: "罗马盘",
				url: "https://www.luomapan.com/"
			}, {
				name: "大力盘",
				url: "https://www.dalipan.com/"
			}, {
				name: "盘么么",
				url: "http://www.panmeme.com/"
			}, {
				name: "迷思爱聚",
				url: "http://hao.misiai.com/"
			}, {
				name: "小白盘搜索",
				url: "https://www.xiaobaipan.com/"
			}, {
				name: "小不点搜索",
				url: "https://www.xiaoso.net/"
			}, {
				name: "蓝奏云",
				url: "https://www.lanzou.com/u"
			}]
		}, {
			tag: "情怀",
			link: [{
				name: "耍下",
				url: "http://shuax.com/"
			}, {
				name: "寒星随意录",
				url: "http://www.hxlive.cn/"
			}, {
				name: "JayXon",
				url: "http://www.jayxon.com/"
			}, {
				name: "cencrack",
				url: "http://cencrack.com/"
			}, {
				name: "落尘之木",
				url: "https://www.luochenzhimu.com/"
			}, {
				name: "chenall BLOG",
				url: "http://chenall.net/"

			}, {
				name: "轻狂志",
				url: "https://www.flighty.cn/"
			}, {
				name: "技术小站",
				url: "http://iytc.net/wordpress/"
			}, {
				name: "DOS之家",
				url: "http://doshome.com/soft/"
			}, {
				name: "QiuQuan",
				url: "http://www.qiuquan.cc/"
			}, {
				name: "星空不寂寞",
				url: "http://www.xingkbjm.com/"
			}, {
				name: "KanX",
				url: "http://ikanx.lofter.com/"
			}, {
				name: "数码之家_紫云",
				url: "http://bbs.mydigit.cn/read.php?tid=141664"
			}, {
				name: "iYa软件交流",
				url: "https://iya.app/forum-7-1.html"
							}, {
				name: "麦田一颗葱",
				url: "https://www.52maicong.com/android/"
							}, {
				name: "大眼仔",
				url: "http://www.dayanzai.me/android"


			}]
		}]
	}]


	! function(o) {
		"use strict"

		function t(t) {
			o(".work-link").find(".tab span.active").removeClass("active")
			var e, n, a = "",
				l = o(t).attr("class")
			if (o(t).addClass("active"), o.each(comm_list, function(t, i) {
					l == i.slug && (e = i.list, o.each(e, function(t, i) {
						a += "<ul><li>" + i.tag + "</li>", n = i.link, o.each(n, function(o, t) {
							a += '<li><a href="' + t.url + '" target="_blank">' + t.name + "</a></li>"
						}), a += "</ul>"
					}))
				}), o(".work-link").find(".tab span:first").hasClass("active") && "1" == i("schl")) {
				var s = "assets/data/univ/" + i("univ") + ".js"
				o.getScript(s, function() {
					var t = univ_list.link,
						i = "<ul><li>校园</li>"
					o.each(t, function(o, t) {
						i += '<li><a href="' + t.url + '" target="_blank">' + t.name + "</a></li>"
					}), i += "</ul>", o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200).find(
						"ul:nth-child(6)").html(i)
				}).fail(function() {
					var t = "<ul><li>校园</li><li>暂未收录</li></ul>"
					o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200).find("ul:nth-child(6)").html(t)
				})
			} else o(".work-link").css("opacity", "1").find(".info").hide().html(a).fadeIn(200)
		}

		function i(o) {
			var t = {
				bkgd: "#ededed",
				srch: "lookao",
				schl: "0",
				prov: "1",
				univ: "1001"
			}
			return Cookies.get(o) || t[o]
		}

		function e(o, t, i) {
			Cookies.set(o, t, {
				expires: i || 3650
			})
		}

		function n(t) {
			o("body").css("background", t)
		}

		function a(t) {
			if (o(t).addClass("active").siblings(".active").removeClass("active"), o(".search-hidden").remove(), o(t).hasClass(
					"baidu")) o(".search-form").attr("action", "https://www.baidu.com/s"), o(".search-keyword").attr({
				name: "word",
				placeholder: "百度一下，你就知道"
			})
			else if (o(t).hasClass("google")) o(".search-form").attr("action", "https://www.google.com/search"), o(
				".search-keyword").attr({
				name: "q",
				placeholder: "Google 搜索"
			})
			else if (o(t).hasClass("bing")) o(".search-form").attr("action", "https://cn.bing.com/search"), o(".search-keyword")
				.attr({
					name: "q",
					placeholder: "微软 Bing 搜索"
				})
			else if (o(t).hasClass("image")) {
				o(".search-form").attr("action", "https://cn.bing.com/images/search"), o(".search-keyword").attr({
					name: "q",
					placeholder: "海量图片搜索"
				})
				var i = new Image
				i.src = "https://images.google.com/favicon.ico?" + Date.now(), i.onload = function() {
					o(".search-form").attr("action", "https://www.google.com/search"), o(".search-form").prepend(
						'<input class="search-hidden" type="hidden" name="tbm" value="isch">')
				}
			} else if (o(t).hasClass("lookao")) {
				o(".search-form").attr("action", "https://lookao.com/search"), o(".search-keyword").attr({
					name: "q",
					placeholder: "Lookao 搜索"
				})
			} else if (o(t).hasClass("torrent")) o(".search-form").attr("action", "https://torrentz2.eu/search"), o(
				".search-keyword").attr({
				name: "f",
				placeholder: "磁力链，种子搜索"
			})
			else if (o(t).hasClass("scholar")) {
				o(".search-form").attr("action", "https://xueshu.baidu.com/s"), o(".search-keyword").attr({
					name: "wd",
					placeholder: "中英文文献检索"
				})
				var i = new Image
				i.src = "https://scholar.google.com/favicon.ico?" + Date.now(), i.onload = function() {
					o(".search-form").attr("action", "https://scholar.google.com/scholar"), o(".search-keyword").attr({
						name: "q"
					}), o(".search-form").prepend('<input class="search-hidden" type="hidden" name="hl" value="zh-CN">')
				}
			}
			o(".search-keyword").focus()
		}
		o.ajaxSetup({
			cache: !0
		}), n(i("bkgd")), t(o(".work-link").find(".tab span:first")), a(o(".search-tab").find("span." + i("srch"))), o(
			".work-link .tab").on("click", "span", function() {
			t(o(this))
		}), o(".search-tab").on("click", "span", function() {
			a(o(this)), e("srch", this.className.split(" ")[0])
		}), o("#setting-icon").on("click", function() {
			o(".work-link .info").hide().html(

			).fadeIn(200), o("#setting-bkgd select").val(i("bkgd")), o("#setting-schl select").val(i("schl")), o(
				"#setting-prov select").val(i("prov")), o("#setting-bkgd select").change(function() {
				n(o(this).val())
			}), o.getScript("assets/data/univ.li.js", function() {
				function t(t, i) {
					var e, n
					o.each(univ_list, function(a, l) {
						t == l.id && (e = l.univs, n = "", o.each(e, function(o, t) {
							n += "<option value=" + t.id + ">" + t.name + "</option>"
						}), o("#setting-univ select").html(n), i && o("#setting-univ select").val(i))
					})
				}
				t(o("#setting-prov select").val(), i("univ")), o("#setting-prov select").change(function() {
					t(o("#setting-prov select").val())
				})
			}), o("#setting-save").off("click").on("click", function() {
				e("bkgd", o("#setting-bkgd select").val()), e("schl", o("#setting-schl select").val()), o(
					"#setting-univ select").val() && (e("prov", o("#setting-prov select").val()), e("univ", o(
					"#setting-univ select").val())), t(o(".work-link").find(".tab span:first"))
			})
		})
	}(jQuery)
