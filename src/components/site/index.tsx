import clsx from "clsx"
type Props = {
    type?: string,
    title: string,
    subheadings?:string,
}

export function TitleCard({type, title, subheadings}: Props){
    return(
    <div>
    <h1 className={clsx("leading-[1.2] text-[2.5rem] md:text-[3.5rem] text-center",{
        'lg:text-[7.5rem]': type == 'main'
    })}>{title}</h1>
    {subheadings && (
        <article className="text-[1.125rem] md:text-[1.25rem] font-light text-center">
            {subheadings}
        </article>
    )}
    </div>)
}