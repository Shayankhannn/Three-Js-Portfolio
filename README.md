threee js

npm i three @react-three/fiber @react-three/drei react-responsive leva


sketch fab

for eslint warnings 

npm i @react-three/eslint-plugin --save-dev

and then add this in eslint config

plugin section: 
 '@react-three': ReactThreeFiber,

 but if error didnt go away add this too
 in rules: 

 "react/no-unknown-property":"off"

 leva is used to work easily with 3d models it gives controls 

 you will usually see this error when working with three react

 chunk-K4Z4YRBF.js?v=4c77a1d0:16268 Uncaught Error: R3F: Input is not part of the THREE namespace! Did you forget to extend? See: 

 thats usually mean you have to brin html element or component that create html element outside of the canvas in this case leva should be outside canvas


 leva didnt worked for some reason

 we needed gsap

 npm i @gsap/react gsap

 for your own images or texture in monitor use
  <meshMatcapMaterial map={screenTxt} />


  for herocamera we needed extra package

  npm i maath

  for globe installed package :
  npm i react-globe.gl  

  for getting email from people use email js

  npm i @emailjs/browser