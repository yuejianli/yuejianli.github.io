(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-aa62"],{LsXa:function(e,t,a){"use strict";var l=a("t3Un");t.a={getPageList:function(e,t,a){return Object(l.a)({url:"/tradeRuleCondition/list",method:"post",data:{pageNum:e,pageSize:t}})}}},Sbtq:function(e,t,a){"use strict";a.r(t);var l=a("P2sY"),i=a.n(l),n=a("qVnv"),o=a("LsXa"),s=a("dwxI"),r=[{id:"1",name:"金额"},{id:"2",name:"比例"}],u={filters:{ruleValueTypeFormatter:function(e){return 1===e?"金额":"比例"},ruleTypeFormatter:function(e){return 1===e?"买入":"卖出"},statusFormatter:function(e){return 1===e?"正常":"禁用"}},data:function(){return{listLoading:!0,list:null,searchObj:{mockType:1,ruleType:2},currentPage:1,pagesize:10,total:0,temp:{id:null,name:"",conditionId:"",ruleValueType:"",ruleValue:"",tradeNum:100,tradeValueType:"",tradePrice:"",ruleType:"2",mockType:1},dialogFormVisible:!1,dialogStatus:"",conditions:null,ruleValueTypeOptions:r,applyDialogFormVisible:!1,applyAllList:null,applyList:[],multipleSelection:[],clickRuleId:null}},created:function(){this.listLoading=!0,this.fetchData(this.currentPage,this.pagesize),this.findConditions()},methods:{fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.currentPage=t,this.pagesize=a,n.a.getPageList(this.currentPage,this.pagesize,this.searchObj).then(function(t){e.list=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(e){console.log(e)})},findConditions:function(){var e=this;o.a.getPageList(1,100,null).then(function(t){e.conditions=t.data}).catch(function(e){console.log(e)})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData(this.currentPage,this.pagesize)},handleSizeChange:function(e){this.pagesize=e,this.currentPage=1,this.fetchData(this.currentPage,this.pagesize)},resetTemp:function(){this.temp={id:null,name:"",conditionId:"",ruleValueType:"",ruleValue:"",tradeNum:100,tradeValueType:"",tradePrice:"",ruleType:"2",mockType:1}},handleCreate:function(){this.resetTemp(),this.dialogFormVisible=!0,this.dialogStatus="create"},handlerUpdate:function(e){this.temp=i()({},e),this.dialogFormVisible=!0,this.dialogStatus="update"},disable:function(e){var t=this;n.a.disable({id:e.id}).then(function(){t.$message({type:"success",message:"禁用规则成功!"}),t.fetchData()})},enable:function(e){var t=this;n.a.enable({id:e.id}).then(function(){t.$message({type:"success",message:"启用规则成功!"}),t.fetchData()})},config:function(e){var t=this;this.clickRuleId=e.id,this.applyDialogFormVisible=!0,s.a.applyList({id:e.id}).then(function(e){t.applyAllList=e.data.allList;var a=e.data.applyList||[];if(a.length>0){for(var l=0;l<a.length;l++)t.applyList.push(a[l].stockCode);t.$nextTick(function(){for(var e=0;e<t.applyAllList.length;e++)t.applyList.includes(t.applyAllList[e].stockCode)&&t.$refs.multipleTable.toggleRowSelection(t.applyAllList[e],!0)})}})},applyConfig:function(){for(var e=this,t=[],a=0;a<this.multipleSelection.length;a++){var l=this.multipleSelection[a];t.push(l.stockCode)}t.length<1?this.$message({type:"warning",message:"请配置股票!"}):s.a.apply({id:this.clickRuleId,applyCodeList:t}).then(function(t){e.applyDialogFormVisible=!1,e.$message({type:"success",message:"配置成功!"}),e.fetchData()})},deleteData:function(e){var t=this;console.log("删除规则"),this.$confirm("是否要删除该规则?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"danger"}).then(function(){n.a.delete({id:e.id}).then(function(){t.$message({type:"success",message:"删除规则成功!"}),t.fetchData()})})},updateData:function(){var e=this;n.a.update(this.temp).then(function(){e.dialogFormVisible=!1,e.$message({type:"success",message:"更新规则成功!"}),e.fetchData()})},createData:function(){var e=this;n.a.add(this.temp).then(function(){e.dialogFormVisible=!1,e.$message({type:"success",message:"添加规则成功!"}),e.fetchData()})},handleSelectionChange:function(e){this.multipleSelection=e}}},c=a("KHd+"),p=Object(c.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px","margin-bottom":"30px"},attrs:{type:"primary",icon:"el-icon-add"},on:{click:e.handleCreate}},[e._v("添加规则")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"规则条件编号",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.conditionName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"比较类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("ruleValueTypeFormatter")(t.row.ruleValueType))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"规则对应值",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ruleValue))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"交易股票数",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.tradeNum))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"交易差值类型",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("ruleValueTypeFormatter")(t.row.tradeValueType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"交易差值",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.tradePrice))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"规则类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("ruleTypeFormatter")(t.row.ruleType)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"状态",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusFormatter")(t.row.status)}},[e._v(e._s(e._f("statusFormatter")(t.row.status)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"更新时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updateTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-setting"},on:{click:function(a){e.handlerUpdate(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-setting"},on:{click:function(a){e.deleteData(t.row)}}},[e._v("删除")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),1!=t.row.status?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.enable(t.row)}}},[e._v("启用")]):e._e(),e._v(" "),0!=t.row.status?a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.disable(t.row)}}},[e._v("禁用")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-setting"},on:{click:function(a){e.config(t.row)}}},[e._v("应用股票")])]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{total:e.total,"current-page":e.currentPage,"page-sizes":[5,10,50,100,500],"page-size":e.pagesize,layout:"total, prev, pager, next,sizes, jumper"},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}}),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"维护规则"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{model:e.temp,"label-position":"left"}},[a("el-form-item",{attrs:{label:"规则名称:",prop:"name"}},[a("el-col",{attrs:{span:18}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"选择条件:"}},[a("el-select",{staticClass:"filter-item",model:{value:e.temp.conditionId,callback:function(t){e.$set(e.temp,"conditionId",t)},expression:"temp.conditionId"}},e._l(e.conditions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"对应类型:"}},[a("el-select",{staticClass:"filter-item",model:{value:e.temp.ruleValueType,callback:function(t){e.$set(e.temp,"ruleValueType",t)},expression:"temp.ruleValueType"}},e._l(e.ruleValueTypeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"对应关系值:",prop:"ruleValue"}},[a("el-col",{attrs:{span:18}},[a("el-input",{model:{value:e.temp.ruleValue,callback:function(t){e.$set(e.temp,"ruleValue",t)},expression:"temp.ruleValue"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"交易股票数:",prop:"tradeNum"}},[a("el-col",{attrs:{span:18}},[a("el-input-number",{attrs:{step:100,min:100,"step-strictly":""},model:{value:e.temp.tradeNum,callback:function(t){e.$set(e.temp,"tradeNum",t)},expression:"temp.tradeNum"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"交易差值类型:"}},[a("el-select",{staticClass:"filter-item",model:{value:e.temp.tradeValueType,callback:function(t){e.$set(e.temp,"tradeValueType",t)},expression:"temp.tradeValueType"}},e._l(e.ruleValueTypeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"交易差值:",prop:"tradePrice"}},[a("el-col",{attrs:{span:18}},[a("el-input",{model:{value:e.temp.tradePrice,callback:function(t){e.$set(e.temp,"tradePrice",t)},expression:"temp.tradePrice"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("确认")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.applyDialogFormVisible,title:"配置适用股票信息"},on:{"update:visible":function(t){e.applyDialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{"label-position":"left"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.applyAllList,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",value:"true"}}),e._v(" "),a("el-table-column",{attrs:{prop:"stockCode",label:"股票编码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"stockName",label:"股票名称"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.applyDialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(t){e.applyConfig()}}},[e._v("确认")])],1)],1)],1)},[],!1,null,null,null);p.options.__file="index.vue";t.default=p.exports},dwxI:function(e,t,a){"use strict";var l=a("t3Un");t.a={getPageList:function(e,t,a){return Object(l.a)({url:"/tradeRuleStock/stockRuleList",method:"post",data:{pageNum:e,pageSize:t,keyword:a.keyword}})},applyList:function(e){return Object(l.a)({url:"/tradeRuleStock/applyList",method:"post",data:e})},apply:function(e){return Object(l.a)({url:"/tradeRuleStock/apply",method:"post",data:e})}}},qVnv:function(e,t,a){"use strict";var l=a("t3Un");t.a={getPageList:function(e,t,a){return Object(l.a)({url:"/tradeRule/list",method:"post",data:{pageNum:e,pageSize:t,mockType:a.mockType,ruleType:a.ruleType}})},add:function(e){return Object(l.a)({url:"/tradeRule/add",method:"post",data:e})},update:function(e){return Object(l.a)({url:"/tradeRule/update",method:"post",data:e})},delete:function(e){return Object(l.a)({url:"/tradeRule/delete",method:"post",data:e})},enable:function(e){return Object(l.a)({url:"/tradeRule/enable",method:"post",data:e})},disable:function(e){return Object(l.a)({url:"/tradeRule/disable",method:"post",data:e})}}}}]);