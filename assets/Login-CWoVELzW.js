import{r as l,j as e,a9 as c,a8 as n,ad as r,a7 as s,aA as x,ao as d,ai as g,I as j,aG as u,aH as f}from"./index-BHT3Q13r.js";import{F as w,C as y}from"./FormControlLabel-B5-IXQtI.js";const S=()=>{const[t,m]=l.useState({email:"",password:""}),[a,p]=l.useState(!1),i=o=>{m({...t,[o.target.name]:o.target.value})},h=o=>{o.preventDefault(),console.log(t)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{align:"center",variant:"h3",fontWeight:600,children:"LogIn"}),e.jsxs(n,{direction:{xs:"column",sm:"row"},mt:4,spacing:2,width:1,children:[e.jsx(r,{variant:"contained",color:"primary",fullWidth:!0,startIcon:e.jsx(s,{icon:"uim:google"}),children:"Login with Google"}),e.jsx(r,{variant:"contained",color:"secondary",fullWidth:!0,startIcon:e.jsx(s,{icon:"uim:apple"}),children:"Login with Apple"})]}),e.jsx(x,{sx:{my:3},children:"or Login with"}),e.jsxs(n,{onSubmit:h,component:"form",direction:"column",gap:2,children:[e.jsx(d,{id:"email",name:"email",type:"email",value:t.email,onChange:i,variant:"filled",placeholder:"Your Email",autoComplete:"email",fullWidth:!0,autoFocus:!0,required:!0}),e.jsx(d,{id:"password",name:"password",type:a?"text":"password",value:t.password,onChange:i,variant:"filled",placeholder:"Your Password",autoComplete:"current-password",fullWidth:!0,autoFocus:!0,required:!0,InputProps:{endAdornment:e.jsx(g,{position:"end",sx:{opacity:t.password?1:0},children:e.jsx(j,{"aria-label":"toggle password visibility",onClick:()=>p(!a),edge:"end",children:e.jsx(s,{icon:a?"ion:eye":"ion:eye-off"})})})}}),e.jsxs(n,{mt:-1.5,alignItems:"center",justifyContent:"space-between",children:[e.jsx(w,{control:e.jsx(y,{id:"checkbox",name:"checkbox",color:"primary"}),label:"Remember me"}),e.jsx(u,{href:"#!",fontSize:"body2.fontSize",letterSpacing:.5,children:"Forgot password?"})]}),e.jsx(r,{type:"submit",variant:"contained",size:"medium",fullWidth:!0,children:"Submit"}),e.jsxs(c,{my:3,color:"text.secondary",variant:"body2",align:"center",letterSpacing:.5,children:["Don't have an account? ",e.jsx(u,{href:f.signup,children:"Signup"})]})]})]})};export{S as default};
