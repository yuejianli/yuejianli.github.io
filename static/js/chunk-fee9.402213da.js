(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fee9"],{Go3K:function(e,t,a){"use strict";var n=a("t3Un");t.a={historyPageList:function(e,t,a){return Object(n.a)({url:"/tradePositionHistory/history",method:"post",data:{pageNum:e,pageSize:t,mockType:a.mockType,code:a.code,startDate:a.startDate,endDate:a.endDate}})}}},HHGZ:function(e,t,a){},WVm4:function(e,t,a){"use strict";a.r(t);var n=a("Go3K"),i={filters:{},data:function(){return{listLoading:!0,list:null,searchObj:{code:"",mockType:1,startDate:"",endDate:""},currentPage:1,pagesize:10,total:0,dateRange:[],bks:null}},created:function(){this.initDate(),this.listLoading=!0,this.fetchData(this.currentPage,this.pagesize)},methods:{initDate:function(){var e=new Date((new Date).toLocaleDateString()),t=new Date((new Date).toLocaleDateString());t.setTime(t.getTime()-2592e6),e.setTime(e.getTime()+864e5-1);var a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();this.dateRange=[a,n],this.searchObj.startDate=a,this.searchObj.endDate=n},fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.currentPage=t,this.pagesize=a,n.a.historyPageList(this.currentPage,this.pagesize,this.searchObj).then(function(t){e.list=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(e){console.log(e)})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData(this.currentPage,this.pagesize)},handleSizeChange:function(e){this.pagesize=e,this.currentPage=1,this.fetchData(this.currentPage,this.pagesize)},changeDate:function(){this.searchObj.startDate=this.dateRange[0],this.searchObj.endDate=this.dateRange[1],this.fetchData(this.currentPage,this.pagesize)}}},s=(a("wT1Q"),a("KHd+")),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"股票编号:"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px","margin-bottom":"30px"},on:{change:function(t){e.fetchData()}},model:{value:e.searchObj.code,callback:function(t){e.$set(e.searchObj,"code",t)},expression:"searchObj.code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"查询范围: "}},[a("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:function(t){e.changeDate()}},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"交易日",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.currDate)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"编码",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.code)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"总数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.allAmount)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"可用数量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.useAmount)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"成本价",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.avgPrice)+"\n      ")]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{padding:"30px 0","text-align":"center"},attrs:{total:e.total,"current-page":e.currentPage,"page-sizes":[5,10,50,100,500],"page-size":e.pagesize,layout:"total, prev, pager, next,sizes, jumper"},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},[],!1,null,"3f4a591f",null);r.options.__file="index.vue";t.default=r.exports},wT1Q:function(e,t,a){"use strict";var n=a("HHGZ");a.n(n).a}}]);