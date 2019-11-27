const obj=[
{id:"name",flage:true},
{id:"name1",flage:true},
{id:"name2",flage:true},
{id:"name3",flage:true},
]
let x={id:"name1",flage:true}
let {id,flage}=x
let newobj={id:id}
let v=obj.indexOf(x)

Object.assign(newobj,{flage:false})
 for(let i=0;obj.length-1;i++){
if(obj[i] == newobj ){
    obj[i]=x
}
 }
 obj[0]




