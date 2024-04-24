import type { TWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function LayoutDefault({children, className}:TWrapper){
    const style = cn(`min-h-screen`, className);
    return(<div className={style}>{children}</div>)
}