import type { TWrapper } from "@/lib/types";
import MenuOptions from "./menu-option";
import { ShoppingCart } from "../globals/assets";
import Link from "next/link";
import { NavList } from "@/lib/constant";
const Wrapper = ({children, className}:TWrapper) =>{
    return(<div className={className}>{children}</div>)
}

export const LinkGroup = ({children}:TWrapper)=>{
    const style = `px-2 items-center gap-6 mx-5 text-[16px] hidden md:flex`;
    return(<div className={style}>{children}</div>)
}
export default function Topbar(){
    
    return(
    <Wrapper 
     className="fixed top-0 bg-muted/50 w-full 
     py-3 px-6 md:px-20 md:py-6 z-50
     backdrop-blur-lg flex justify-between items-center">
        <span className="text-2xl ">Tessa</span>
        <div className="flex items-center">
           <LinkGroup>
            {NavList.map((link)=>(
            <Link 
                className="hidden md:inline-block"
                key={link} 
                href="#">{link}</Link>
            )
            )}
           </LinkGroup>
           <div className="flex items-center gap-[8px]">
                <ShoppingCart/>
                <span className="text-[18px]">Cart</span>
           </div>
           
        </div>
        <MenuOptions/>
    </Wrapper>
    )
}