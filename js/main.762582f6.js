(function(e){function t(t){for(var a,r,l=t[0],s=t[1],p=t[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,p||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,l=1;l<i.length;l++){var s=i[l];0!==o[s]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},o={main:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=s;n.push(["e35a","chunk-vendors"]),i()})({"43d8":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".ele-upload-image,.ele-upload-image .el-loading-spinner{line-height:1}.ele-upload-image .el-icon-plus{vertical-align:middle}.ele-upload-image .el-upload--picture-card{width:auto;height:auto;background:none;line-height:inherit}.vue-image-crop-upload.ele-upload-image--cropper{z-index:99}.ele-upload-image--cropper .vicp-drop-area{background-color:#fbfdff!important}.ele-upload-image--cropper .vicp-icon1-arrow{border-bottom-color:#909399!important}.ele-upload-image--cropper .vicp-icon1-body{background-color:#909399!important}.ele-upload-image--cropper .vicp-icon1-bottom{border-color:#909399!important}",""])},"87dd":function(e,t,i){"use strict";var a=i("a959"),o=i.n(a);o.a},a959:function(e,t,i){var a=i("43d8");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("499e").default;o("2550b335",a,!0,{sourceMap:!1,shadowMode:!1})},e35a:function(e,t,i){"use strict";i.r(t);i("7f7f"),i("cadf"),i("551c"),i("f751"),i("097d");var a=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"margin-left":"50px","margin-top":"50px"}},[i("h1",[e._v("单张图片")]),i("ele-upload-image",{attrs:{fileSize:.1,isShowTip:!1,lazy:!0,responseFn:e.handleResponse,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",title:"单张图片"},model:{value:e.image1,callback:function(t){e.image1=t},expression:"image1"}}),i("h1",[e._v("多张图片")]),i("ele-upload-image",{attrs:{fileSize:5,responseFn:e.handleResponse,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76/",multiple:""},model:{value:e.images,callback:function(t){e.images=t},expression:"images"}}),i("h1",[e._v("拖拽")]),i("ele-upload-image",{attrs:{responseFn:e.handleResponse,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76/",drag:""},model:{value:e.image2,callback:function(t){e.image2=t},expression:"image2"}}),i("h1",[e._v("裁剪")]),i("ele-upload-image",{attrs:{responseFn:e.handleResponse,size:100,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76/",crop:""},model:{value:e.image3,callback:function(t){e.image3=t},expression:"image3"}})],1)},n=[],r={name:"App",data:function(){return{image1:"",image2:"",image3:"",images:[]}},methods:{handleResponse:function(e,t,i){return t.url}}},l=r,s=i("2877"),p=Object(s["a"])(l,o,n,!1,null,null,null),c=p.exports,u=i("5c96"),d=i.n(u),h=(i("0fae"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ele-upload-image"},[e.crop?e._e():i("el-upload",{directives:[{name:"show",rawName:"v-show",value:e.isShowUpload,expression:"isShowUpload"}],ref:"upload",style:{marginBottom:e.multiple&&e.computedValues.length?"20px":"0px"},attrs:{accept:e.accept,action:e.action,"before-upload":e.handleBeforeUpload,data:e.data,disabled:e.uploading,drag:Boolean(e.drag),headers:e.headers,"http-request":e.httpRequest,limit:e.limit,"list-type":e.drag?"picture":"picture-card",multiple:e.multiple,name:e.name,"on-change":e.handleChange,"on-error":e.handleUploadError,"on-exceed":e.handleExceed,"on-success":e.handleUploadSuccess,"show-file-list":!1,withCredentials:e.withCredentials}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.uploading,expression:"uploading"}]},[e.drag?[i("i",{staticClass:"el-icon-upload"}),i("div",{staticClass:"el-upload__text"},[e._v("\n          将文件拖到此处，或\n          "),i("em",[e._v("点击上传")])])]:[i("div",{style:{width:e.size+"px",height:e.size+"px",lineHeight:e.size+"px"}},[i("i",{staticClass:"el-icon-plus"})])]],2),e.showTip?i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n      请上传\n      "),i("b",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.fileType.length?e.fileType.join("/"):"图片"))]),e._v("\n      格式文件\n      "),e.fileSize?[e._v("\n        ，且大小不超过\n        "),i("b",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.fileSize)+"MB")])]:e._e()],2):e._e()]),e.crop?i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowUpload,expression:"isShowUpload"}],staticClass:"el-upload el-upload--picture-card",staticStyle:{"margin-bottom":"20px"},style:{width:e.size+"px",height:e.size+"px",lineHeight:e.size+"px"},on:{click:function(t){e.isShowCrop=!0}}},[i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e.isShowCrop?i("cropper",{ref:"cropper",staticClass:"ele-upload-image--cropper",attrs:{field:e.name,headers:e.headers,height:e.cropHeight,noCircle:e.cropHeight!==e.cropWidth,params:e.data,url:e.action,width:e.cropWidth,withCredentials:e.withCredentials,"img-format":"png"},on:{"crop-success":e.handleCropSuccess,"crop-upload-fail":e.handleCropUploadError,"crop-upload-success":e.handleCropUploadSuccess,"src-file-set":e.handleSetFileSet},model:{value:e.isShowCrop,callback:function(t){e.isShowCrop=t},expression:"isShowCrop"}}):e._e()],1):e._e(),i("ele-gallery",{attrs:{lazy:e.lazy,"remove-fn":e.handleRemove,size:e.size,sliceSingle:!0,source:e.value,thumbSuffix:e.thumbSuffix,title:e.title}})],1)}),f=[],m=(i("20d6"),i("75fc")),g=(i("c5f6"),i("0b4d")),v=i("d38b"),y={name:"EleUploadImage",props:{value:{type:[String,Array],default:function(){return[]}},crop:{type:Boolean,default:!1},size:{type:Number,default:150},cropHeight:{type:Number},cropWidth:{type:Number},fileSize:{type:Number},responseFn:Function,fileType:{type:Array,default:function(){return[]}},thumbSuffix:{type:String,default:""},isShowTip:{type:Boolean,default:!0},title:String,lazy:{type:Boolean,default:!1},action:{type:String,required:!0},headers:Object,limit:Number,drag:{type:Boolean,default:!1},withCredentials:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},data:Object,name:{type:String,default:"file"},httpRequest:Function,accept:String},components:{Cropper:g["a"],EleGallery:v["a"]},data:function(){return{cropData:{},isShowCrop:!1,uploading:!1,fileList:[]}},computed:{showTip:function(){return this.isShowTip&&(this.fileType.length||this.fileSize)},computedValues:function(){return this.value?"string"===typeof this.value?[this.value]:Object(m["a"])(this.value):[]},isShowUpload:function(){return!!this.multiple||0===this.computedValues.length},successFiles:function(){return this.fileList.filter((function(e){return"success"===e.status}))}},watch:{isShowCrop:function(e){!1===e&&(this.cropData={})}},methods:{handleSetFileSet:function(e,t,i){var a=this.cropData.uid||(new Date).getTime();this.cropData={name:e,percentage:0,size:i,type:t,status:"ready",uid:a}},handleCropSuccess:function(e){this.cropData.url=e},handleCropUploadError:function(e){this.$message.error("上传失败, 请重试"),this.$emit("error",e)},handleCropUploadSuccess:function(e){this.cropData.status="success",this.cropData.percentage=100,this.cropData.response=e;var t=Object.assign({},this.cropData),i=this.fileList.findIndex((function(e){return e.uid===t.uid}));i>-1?this.fileList.splice(i,1,t):this.fileList.push(t),this.handleUploadSuccess(e,t,this.fileList)},handleBeforeUpload:function(e){var t=!1;if(this.fileType.length){var i="";e.name.lastIndexOf(".")>-1&&(i=e.name.slice(e.name.lastIndexOf(".")+1)),t=this.fileType.some((function(t){return e.type.indexOf(t)>-1||!!(i&&i.indexOf(t)>-1)}))}else t=e.type.indexOf("image")>-1;if(!t)return this.$message.error("文件格式不正确, 请上传".concat(this.fileType.join("/"),"图片格式文件!")),!1;if(this.fileSize){var a=e.size/1024/1024<this.fileSize;if(!a)return this.$message.error("上传头像图片大小不能超过 ".concat(this.fileSize," MB!")),!1}return this.uploading=!0,!0},handleChange:function(e,t){this.uploading=!1,this.fileList=t},handleExceed:function(){this.$message.error("最多上传".concat(this.limit,"张图片"))},handleUploadError:function(e){this.uploading=!1,this.$message.error("上传失败, 请重试"),this.$emit("error",e)},handleUploadSuccess:function(e,t){var i=e;this.uploading=!1,this.$message.success("上传成功"),this.responseFn&&(i=this.responseFn(e,t,this.successFiles)),this.multiple?Array.isArray(this.value)?this.$emit("input",[].concat(Object(m["a"])(this.value),[i])):this.$emit("input",[i]):this.$emit("input",i)},handleRemove:function(e){if(this.multiple){var t=Object(m["a"])(this.computedValues);t.splice(e,1),this.$emit("input",t||[])}else this.$emit("input",null)}},mounted:function(){this.crop&&this.$refs.cropper&&document.body.appendChild(this.$refs.cropper.$el)}},w=y,b=(i("87dd"),Object(s["a"])(w,h,f,!1,null,null,null)),S=b.exports;"undefined"!==typeof window&&window.Vue&&window.Vue.component(S.name,S);var x=S;a["default"].config.productionTip=!1,a["default"].use(d.a),a["default"].component(x.name,x),new a["default"]({render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=main.762582f6.js.map