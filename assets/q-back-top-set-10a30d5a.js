import"./base-08fe9ac4.js";import{E as a,a as e,b as l}from"./el-popper-9202855f.js";import{E as t}from"./el-tooltip-6aa1d629.js";import{G as o,az as d,o as s,bs as m,z as p,r}from"./main-dae0909e.js";const u={class:"w-214"},n=o({__name:"q-back-top-set",props:{data:{type:Object,default:{}}},setup:o=>(n,i)=>{const b=t,V=e,c=l,f=a;return d(),s(f,{model:o.data,"label-position":"right","label-width":"80px"},{default:m((()=>[p(V,{label:"位置"},{default:m((()=>[r("div",u,[p(b,{modelValue:o.data.right,"onUpdate:modelValue":i[0]||(i[0]=a=>o.data.right=a),min:0,max:100,step:1},null,8,["modelValue"]),p(b,{modelValue:o.data.bottom,"onUpdate:modelValue":i[1]||(i[1]=a=>o.data.bottom=a),min:0,max:100,step:1},null,8,["modelValue"])])])),_:1}),p(V,{label:"所在父级"},{default:m((()=>[p(c,{class:"w-214",modelValue:o.data.teleport,"onUpdate:modelValue":i[2]||(i[2]=a=>o.data.teleport=a),clearable:"",placeholder:"输入所在父级元素的类名",maxlength:"200"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])}});export{n as default};