webpackJsonp([7],{0:function(e,t,r){r("j1ja"),e.exports=r("NHnr")},BfUi:function(e,t){!function(e,t){for(var r in void 0===window[t]&&(window[t]={}),e)window[t][r]=e[r]}({url:"https://scan.biut.io/rpctransfer/callrpc",url_sen:"https://scan.biut.io/rpctransfer/callrpc-sen",url_mapping:"https://scan.biut.io/mapping",passReg:/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{8,30}$/,priverKeyReg:/[0-9a-f]{64}$/,addressReg:/^(0x)(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/,hashReg:/^(0x)/,amountReg:/^(([1-9]\d*)|\d)(\.\d{1,8})?$/},"_const")},L2k4:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),n=r.n(a),s=r("mvHQ"),o=r.n(s),i=r("exGp"),l=r.n(i),p=r("7+uW"),u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"container",attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=r("VU/8")({name:"App"},u,!1,function(e){r("L2k4")},null,null).exports,d=r("/ocq"),f=r("Dd8w"),m=r.n(f),h=r("TXmL"),y=r("lbHh"),w=r.n(y),g=r("wUZ8"),v=r.n(g),T=r("Vi3T"),b=r.n(T),E={en:m()({},{newWallet:{createWallet:"Create New Wallet",enterPass1:"Enter your wallet password",enterPass2:"Confirm your wallet password",saveKeyStore:"Save Your Keystore File",keyStoreDown:"Keystore Download",next:"Next",savePrivateKey:"Save your Private Key"},tipsListPass:{tipsCnt1:"Please ensure it is a strong password.",tipsCnt2:"Password should not start or end with space.",tipsCnt3:"The download file contains your wallet info, don't share it to others, otherwise your money will be stolen."},tipsListKey:{tipsCnt1:"Do not lose it! It cannot be recovered if you lose it.",tipsCnt2:"Do not share it! Your funds may be stolen if you use this file on a malicious/phishing site.",tipsCnt3:"Make a backup! Secure it like the millions of dollars it may one day be worth."},passTips:{passFormat:"8-30 characters, must contain at least 2 types of numbers, English letters, and special characters.",passNoMatch:"Password doesn't match , please try again.",passFormatError:"The password format is incorrect, please reenter it.",passEncryption:"Your wallet is encrypted! Please enter the password",newWalletPass:"Enter your new wallet password",passError:"Password error, unlock fail."},walletInfo:{accessWallet:"How would you like to access your wallet?",privateKey:"Private Key",invalidPrivateKey:"This is not a valid private key.",checkKeyStore1:"Select Your Keystore",checkKeyStore2:"Select Keystore",unlock:"Unlock",inputPrivateKey1:"Enter Your Private Key",inputPrivateKey2:"Enter your wallet Private Key",walletAddress:"Address",walletPrivateKey:"Private Key",walletMoney:"Balance",qrCode:"Your address (QR Code)",newKeyStore:"Download New Keystore"},receiveSec:{secAddress:"BIUT Wallet Address",receiveBtn:"Get Test Coin",errorAddress:"This is not a valid private key"},transfer:{youAddress:"From address",transferAdddress:"To",transferNumber:"Amount",balance:"Balance",all:"All",generateTrading:"Generate transaction",confirmTransferInfo:"Confirm the following information",orderInfo:"Order information",transferTxt:"Transfer",collectionAddress:"Receive",paymentAddress:"Sent",transferAomunt:"Amount",transferMoneyError:"Please enter the correct transfer amount.",transferMoney:"Amount is not valid.",transferMoney1:"The transfer amount must not be 0",transferMoneyN:"Transfer fee must be less than balance.",transferMoneyN1:"Poundage cannot be 0.",transferAddressError:"This is not a valid address.",transferAddressError2:"The same address cannot be transferred.",transferError:"Transfer failed, please try again later.",transferPoundage:"Fee",transferPoundage1:"Gas Price",transferFast:"Fast",transferSlow:"Slow"},mapping:{ethaddress:"ETH Wallet Address",ethwalletddress:"ETH Wallet Address",mappingTipsTxt1:"Please try to map the same ETH address completely, one transfer, corresponding to submit a mapping request; if you transfer multiple transactions, you need to submit multiple mapping requests.",mappingTipsTxt2:"Please use ETH's private key to log in and view BIUT wallet.",mappingTipsTxt3:"If in doubt, check out the help mapping tutorial.",ethAddressErrorTxt:"ETH address error",tipTxt:"Notice",confirmMapping:"Confirm the following information",mappingButton:"Mapping",mappingButtonAcitve:"Mapping...",mappingSuccess:"Submit the mapping successfully. Please wait for 1-3 working days to check BIUT arrival in the new wallet address.  If you have any questions, please contact the BIUT staff.",mappingFailure1:"Eth Transaction Hash Error or Eth Address Error or Your transaction not confirmed in Eth network, please try again later...",mappingFailure2:"You have already submitted!",mappingFailure3:"System Error, please try again later!",mappingHash:"ETH Transaction Hash",mappingHashError:"Invalid transaction hash",mappingHashTxt:"Please enter the transaction hash value transferred on ETH"},mask:{tips:"Operation success, click the URL below to view the results:",maskTimeout:"The network request has timed out. Please try again later...",confirm:"Confirm",confirms:"Confirm...",cancel:"Cancal"},headerNav:{Newallet:"New Wallet",ViewWalletInfo:"View Wallet Info",TransferSEC:"Transfer BIUT",Guide:"Guide",Language:"Language",Mapping:"Mapping"},helpTips:{helpTipsTxt:"Check out the tutorial on your computer."},footer:{FooterCnt:"Any question? Please contact us.Official email address"}},v.a),zh:m()({},{newWallet:{createWallet:"创建新钱包",enterPass1:"请输入钱包密码",enterPass2:"请再次输入钱包密码",saveKeyStore:"保存Keystore文件",keyStoreDown:"Keystore文件下载",next:"继续",savePrivateKey:"保存私钥"},tipsListPass:{tipsCnt1:"请确保密码强度",tipsCnt2:"密码首尾不可包含空格",tipsCnt3:"下载文件包含您的钱包信息，不要与其他人分享，否则您的钱会被偷走"},tipsListKey:{tipsCnt1:"不要丢失！如果丢失，将无法恢复",tipsCnt2:"不要分享它！如果您在恶意/钓鱼网站上使用此文件，您的资金将被盗用",tipsCnt3:"备份！保护它就像哪天它有可能值数百万美元"},passTips:{passFormat:"请输入8-30位密码，密码必须包含字母、数字和特殊字符至少两种",passNoMatch:"密码输入不一致，请重试",passFormatError:"密码格式不正确，请重新输入",passEncryption:"你的钱包是加密的！请输入密码",newWalletPass:"请输入新钱包密码",passError:"密码错误, 解锁失败"},walletInfo:{accessWallet:"如何访问你的钱包？",privateKey:"私钥",invalidPrivateKey:"无效私钥",checkKeyStore1:"选择Keystore文件",checkKeyStore2:"选择Keystore",unlock:"解锁",inputPrivateKey1:"输入您的私钥",inputPrivateKey2:"请输入你的私钥",walletAddress:"地址",walletPrivateKey:"私钥",walletMoney:"余额",qrCode:"你的地址（二维码）",newKeyStore:"下载新的Keystore"},receiveSec:{secAddress:"SEC地址",receiveBtn:"领取测试币",errorAddress:"无效的地址"},transfer:{youAddress:"你的地址",transferAdddress:"转账地址",transferNumber:"转账数量",balance:"余额",all:"全部",generateTrading:"生成交易",confirmTransferInfo:"请确认您的转帐信息",orderInfo:"订单信息",transferTxt:"转账",collectionAddress:"收款地址",paymentAddress:"付款地址",transferAomunt:"金额",transferMoneyError:"请输入正确的转账金额",transferMoney:"转账金额必须小于余额",transferMoney1:"转账金额不能为0",transferMoneyN:"转账手续费必须小于余额",transferMoneyN1:"手续费不能为0",transferAddressError:"转账地址无效",transferAddressError2:"相同地址不能转账",transferError:"转账失败，请稍后重试...",transferPoundage:"手续费",transferPoundage1:"手续费",transferFast:"快",transferSlow:"慢"},mapping:{ethaddress:"ETH地址",ethwalletddress:"ETH钱包地址",mappingTipsTxt1:"同一ETH地址请尽量一次性映射完全，一笔交易转账，对应提交一次映射请求；若分多笔交易转账，则需要对应提交多次映射请求。",mappingTipsTxt2:"请使用ETH的私钥登录查看BIUT钱包；",mappingTipsTxt3:"如有疑问，请查看帮助的映射教程。",ethAddressErrorTxt:"ETH地址无效",confirmMapping:"确认以下信息",tipTxt:"提示",mappingButton:"映射",mappingButtonAcitve:"映射中...",mappingSuccess:"提交映射成功，请等待1-3个工作日查看新钱包地址中新币映射到账情况，如有任何疑问，请联系BIUT工作人员。",mappingFailure1:"提交的hash和eth地址错误，或者您的提交还未在以太网络确认，请稍候再试！",mappingFailure2:"您已经提交过了，请不要重复提交！",mappingFailure3:"系统错误，请稍后再试！",mappingHash:"ETH交易哈希值",mappingHashError:"请输入有效的交易哈希",mappingHashTxt:"请输入在ETH上转账的交易哈希值"},mask:{tips:"操作成功，点击下方链接查看结果:",maskTimeout:"网络请求超时，请稍后重试...",confirm:"确定",confirms:"确定...",cancel:"取消"},headerNav:{Newallet:"新钱包",ViewWalletInfo:"钱包信息",TransferSEC:"转账",Guide:"帮助",Language:"语言",Mapping:"映射"},helpTips:{helpTipsTxt:"请在电脑上查看相关教程"},footer:{FooterCnt:"有任何问题，请与我们联系。官方邮箱"}},b.a)};p.default.use(h.a);var A=new h.a({locale:w.a.get("LANG")||"en",messages:E});p.default.use(d.a);var P=new d.a({routes:[{path:"/",name:"Index",component:function(){return r.e(2).then(r.bind(null,"2NXm"))},redirect:"createWallet",meta:{title:"headerNav.Newallet"},children:[{path:"/createWallet",name:"createWallet",component:function(){return r.e(0).then(r.bind(null,"ynPe"))},meta:{title:"headerNav.Newallet"}},{path:"/transferAccounts",name:"transferAccounts",component:function(){return r.e(3).then(r.bind(null,"al3Q"))},meta:{title:"headerNav.TransferSEC"}},{path:"/walletInfo",name:"walletInfo",component:function(){return r.e(5).then(r.bind(null,"cb0b"))},meta:{title:"headerNav.ViewWalletInfo"}},{path:"/walletHelp",name:"walletHelp",component:function(){return r.e(4).then(r.bind(null,"LHv4"))},meta:{title:"headerNav.Guide"}},{path:"/walletMapping",name:"walletMapping",component:function(){return r.e(1).then(r.bind(null,"9utS"))},meta:{title:"headerNav.Mapping"}}]}],scrollBehavior:function(e,t,r){return r||void 0===r?r||void 0:{x:0,y:0}}});P.beforeEach(function(e,t,r){e.meta.title&&(document.title=A.t(e.meta.title.replace(/\s+/g,""))),r()});var K=P,N=(r("tvR6"),r("sfy8"),r("uMhA"),r("RFxO"),r("WHFa"),r("mtWM")),k=r.n(N),S=r("mw3O"),x=r.n(S),C=(r("BfUi"),r("zL8q")),H=r.n(C),M=(r("j1ja"),this);k.a.defaults.headers.post["Content-Type"]="application/json",p.default.prototype.$axios=k.a,p.default.prototype.$qs=x.a,p.default.config.productionTip=!1,p.default.use(H.a,{i18n:function(e,t){return A.t(e,t)}});var B,W,F={"content-type":"application/json"},I=r("4PV6");p.default.prototype.getWalletBalance=(B=l()(n.a.mark(function e(t){var r,a,s,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=_const.url,a={method:"sec_getBalance",params:[""+t]},e.next=4,I(r,{method:"post",body:o()(a),headers:F}).then(function(e){return e.json()});case 4:return s=e.sent,i=JSON.parse(s.body).result.value,e.abrupt("return",i);case 7:case"end":return e.stop()}},e,M)})),function(e){return B.apply(this,arguments)}),p.default.prototype.getWalletBalanceSEN=(W=l()(n.a.mark(function e(t){var r,a,s,i;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=_const.url_sen,a={method:"sec_getBalance",params:[""+t]},e.next=4,I(r,{method:"post",body:o()(a),headers:F}).then(function(e){return e.json()});case 4:return s=e.sent,i=JSON.parse(s.body).result.value,e.abrupt("return",i);case 7:case"end":return e.stop()}},e,M)})),function(e){return W.apply(this,arguments)}),p.default.prototype.getObjectURL=function(e){var t=null;return void 0!=window.createObjcectURL?t=window.createOjcectURL(e):void 0!=window.URL?t=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(t=window.webkitURL.createObjectURL(e)),t},p.default.prototype.inputNull=function(e){return e.replace(/[\u4E00-\u9FA5]/g,"").replace(/\s+/g,"")},p.default.prototype.scientificNotationToString=function(e){var t=String(e);if(!/e/.test(t))return e;var r=!0;/e-/.test(t)&&(r=!1);var a=Number(t.match(/\d+$/)[0]),n=t.match(/^[\d\.]+/)[0].replace(/\./,"");return r?n.padEnd(a+1,0):n.padStart(a+n.length,0).replace(/^0/,"0.")},p.default.prototype.ismobile=function(){var e=navigator.userAgent;return["iPhone","iPad","Android","Windows Phone","BB10; Touch","BB10; Touch","PlayBook","Nokia"].filter(function(t){return e.indexOf(t)>0}).length>0},p.default.prototype.getPointNum=function(e,t){var r=String(e),a=r.indexOf("."),n=r.substring(0,a+t+1);return n=Number(n)},new p.default({el:"#app",router:K,i18n:A,components:{App:c},template:"<App/>"}).$mount("#app")},RFxO:function(e,t){},WHFa:function(e,t){},sfy8:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){}},[0]);