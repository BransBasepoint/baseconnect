"use client"
import React, {useEffect, useMemo, useState} from "react";
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { NavList } from "@/lib/constant";
import Link from "next/link";
import { Menu } from "lucide-react";
type Props = {
    defaultOpen?: boolean
}

export function MobileMenuOptions(){
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=> setIsMounted(true), []);
    if(!isMounted) return
    return(
    <Sheet>
        <SheetTrigger asChild >
            <Button variant="ghost" size={"icon"}>
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent side={"top"} className="h-full mt-[24px]">
            Test
        </SheetContent>
    </Sheet>
    )
}
export default function MenuOptions({defaultOpen}:Props){
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=> setIsMounted(true), []);
    const openState = useMemo(
        () => (defaultOpen ? { open: true } : {}),
        [defaultOpen]
    )
    if(!isMounted) return
    return(
    <Sheet modal={false} {...openState}>
        <SheetTrigger asChild className="block md:!hidden  ">
            <div>
                <Button variant="ghost" size={"icon"}>
                    <Menu/>
                </Button>
            </div>
        </SheetTrigger>
        <SheetContent side={"top"} className="h-full flex flex-col">
        {NavList.map((link)=>(
            <Link 
                className=" py-[.75rem] text-[1.125rem]"
                key={link} 
                href="#">{link}</Link>
            )
        )}
        </SheetContent>
    </Sheet>
    )
}