import Bubble from "./bubble";
import BubbleLogo from "./bubbleLogo";
import { useState } from "react";
import Underlay from './Underlay'
function Nav() {
  const [showMenu,upShowMenu]= useState(0);
  return ( <>
    <BubbleLogo onPress={()=>upShowMenu(1-showMenu)}/>
    {(showMenu==1)&&<>
    <Bubble contain="About" x={55} y={-120}/>
    <Bubble contain="Education" x={115} y={-45}/>
    <Bubble contain="Projects" x={115} y={45}/>
      <Bubble contain="Skills" x={55} y={120}/>
      <Underlay/>
    </>}
  </> );
}

export
 default Nav;