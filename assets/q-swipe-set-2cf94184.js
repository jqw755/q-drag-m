import"./base-08fe9ac4.js";import{E as a,a as e}from"./el-popper-9202855f.js";import{E as l}from"./el-color-picker-c1ef27d3.js";import"./el-button-cd7ed795.js";import{E as t}from"./el-switch-7e1c368c.js";import{E as o}from"./el-tooltip-6aa1d629.js";import{G as d,aH as s,aF as i,az as m,o as p,bs as r,z as n,r as u,p as f}from"./main-dae0909e.js";import"./index-3046e463.js";import"./index-9f7f807c.js";import"./validator-4df8a5b9.js";const c={class:"w-214"},h={class:"w-214"},b=d({__name:"q-swipe-set",props:{data:{type:Object,default:{}}},setup(d){const b=s(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return i([{fnName:"getList",label:"回车(确认)查询列表"}]),(s,i)=>{const V=e,j=o,v=t,x=l,w=a;return m(),p(w,{model:d.data,"label-position":"right","label-width":"100px"},{default:r((()=>[n(V,{label:"轮播图片"}),n(V,{label:"高度"},{default:r((()=>[u("div",c,[n(j,{modelValue:d.data.height,"onUpdate:modelValue":i[0]||(i[0]=a=>d.data.height=a),min:100,max:500,step:100},null,8,["modelValue"])])])),_:1}),n(V,{label:"轮播间隔"},{default:r((()=>[u("div",h,[n(j,{modelValue:d.data.autoplay,"onUpdate:modelValue":i[1]||(i[1]=a=>d.data.autoplay=a),min:1e3,max:5e3,step:1e3},null,8,["modelValue"])])])),_:1}),n(V,{label:"循环播放"},{default:r((()=>[n(v,{modelValue:d.data.loop,"onUpdate:modelValue":i[2]||(i[2]=a=>d.data.loop=a),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])])),_:1}),n(V,{label:"显示指示器"},{default:r((()=>[n(v,{modelValue:d.data.showIndicators,"onUpdate:modelValue":i[3]||(i[3]=a=>d.data.showIndicators=a),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"])])),_:1}),d.data.showIndicators?(m(),p(V,{key:0,label:"指示器颜色"},{default:r((()=>[n(x,{modelValue:d.data.indicatorColor,"onUpdate:modelValue":i[4]||(i[4]=a=>d.data.indicatorColor=a),"show-alpha":"",predefine:b.value},null,8,["modelValue","predefine"])])),_:1})):f("",!0)])),_:1},8,["model"])}}});export{b as default};