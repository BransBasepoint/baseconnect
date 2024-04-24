import { TitleCard } from "@/components/site";
import Image from "next/image";
import type { TWrapper } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Card,CardHeader, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BasketBallIcon, InstagramIcon, LinkedlinIcon, PencilCircle, Pointer, Scaler, Star, TwitterIcon, YoutubeIcon } from "@/components/globals/assets";
import { FooterNavList, faqsList, pricingCards } from "@/lib/constant";
import { Check } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
  <>
  <section className=" min-h-screen flex flex-col px-[1.5rem] md:px-[3rem] py-[5rem] ">
    <TitleCard 
    type="main"
      title="Unlimited Designs On-Demand" 
      subheadings="Work with a senior product designer to improve usability, user adoption and retention on a fixed fee. Pause or cancel at any time."/>
    <CardSection/>
  </section>
  <section className=" min-h-screen flex flex-col px-[1.5rem] md:px-[3rem] py-[5rem] items-start ">
    <div className=" w-full grid grid-cols-1 md:grid-cols-2">
    <h1 className="text-[2rem] sm:text-[2.25rem] md:text-[3.5rem] leading-[1.2] mb-[4rem]">Our process for your success</h1>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[3rem] gap-x-[2rem] md:gap-y-[4rem] md:gap-x-[3rem]">
      <div className="flex flex-col gap-[0.75rem] ">
        <div className="h-[3rem] w-[3rem]"><Pointer/></div>
        <h2 className="text-[1.25rem] md:text-[1.5rem]">Discovery & consultation</h2>
        <p  className="text-[1rem] md:text-[1.125rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        <div className="h-[3rem] w-[3rem]"><Scaler/></div>
        <h2 className="text-[1.25rem] md:text-[1.5rem]">Strategy & research</h2>
        <p  className="text-[1rem] md:text-[1.125rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      <div className="flex flex-col gap-[0.75rem]">
        <div className="h-[3rem] w-[3rem]"><PencilCircle/></div>
        <h2 className="text-[1.25rem] md:text-[1.5rem]">Design & implementationn</h2>
        <p  className="text-[1rem] md:text-[1.125rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      
    </div>
  </section>
  <section className="min-h-screen flex flex-col items-center px-[1.5rem] md:px-[3rem] pb-[5rem]">
    <TitleCard 
      title="Pricing plan" 
      subheadings="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
    <PricingSection/>
  </section>
  <section className="min-h-screen flex flex-col px-[1.5rem] md:px-[3rem] py-[5rem]">
    <TitleCard 
      title="FAQs" 
      subheadings="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
    <div className="px-[3rem] mt-[3.5rem] flex flex-col justify-center items-center ">
      <Accordion type="single" collapsible className="max-w-[48rem] md:w-[48rem]">
        {faqsList.map((faq, index)=>(
          <AccordionItem key ={`items-${index+1}`} value={`items-${index+1}`}>
          <AccordionTrigger className="text-[1.2rem] font-semibold">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-[1.125rem] font-light">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
        )
        )}
      </Accordion>
    </div>
    <div className="px-[3rem] mt-[10rem] ">
    <Carousel>
      <CarouselContent >
      {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className=" flex justify-center items-center">
            <div className="max-w-[48rem] md:w-[48rem] px-[3rem]">
              <div className="flex justify-center items-center gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                <div 
                  className="h-[1.5rem] w-[1.5rem]"
                  key={`Star-${index+1}`}><Star/></div>))}
              </div>
              <div className="m-[1.5rem] md:m-[2rem] text-[1.25rem] md:text-[1.5rem] text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
              </div>
              <div className="flex gap-2 relative justify-center items-center">
                <Avatar>
                  <AvatarImage src={`./avatars/${index+1}.png`} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
               <div className = "flex flex-col">
                John Doe <span>CEO, Webflow</span>
               </div>
               
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    
  </section>
  <section className="flex flex-col px-[1.5rem] md:px-[3rem] py-[5rem]">
    <div className="rounded-[20px] bg-white p-[2rem] flex flex-wrap justify-between items-center">
        <div className="flex flex-col justify-between">
          <h2 className="text-[2.25rem]">Let's create something wonderful together</h2>
          <span className="text-[1.125rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className="flex flex-col gap-[1rem] w-[20rem]">
          <Button className="p-[2rem] bg-black  text-[1.125rem]
          rounded-[20px] ">View Pricing</Button>
          <Button variant={"outline"} className="p-[2rem] text-[1.125rem] rounded-[20px] border-[1px] border-black">Contact</Button>
        </div>
    </div>
  </section>
  <section className=" flex flex-col px-[1.5rem] md:px-[3rem] justify-end pt-[5rem]">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_.5fr] gap-2">
      <div className="w-full">
        <h2 className="text-[1.8rem] mb-[2rem]">Tessa</h2>
        <div className="mb-[2rem]">
          <div className="mb-[1.5rem] text-[0.875rem]">
            <span className="font-semibold">Address:</span>
            <p className="font-light">
            6736 S Sherbourne Dr <br/>
            Los Angeles, California(CA), 90056
            </p>
            
          </div>
          <div className="mb-[1.5rem] text-[0.875rem]">
            <span className="font-semibold">Contact:</span>
            <p className="font-light">
              (310) 645-1575<br/>
              contact@tessa.com
            </p>
          </div>
        </div>
       
        <div className="flex gap-2 mb-[2rem]">
          <div className="h-[1.5rem] w-[1.5rem]"><BasketBallIcon/></div>
          <div className="h-[1.5rem] w-[1.5rem]"><LinkedlinIcon/></div>
          <div className="h-[1.5rem] w-[1.5rem]"><TwitterIcon/></div>
          <div className="h-[1.5rem] w-[1.5rem]"><YoutubeIcon/></div>
          <div className="h-[1.5rem] w-[1.5rem]"><InstagramIcon/></div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 md:h-[2rem] text-[.875rem] font-[600] ">
        { FooterNavList.map((item) =>(
          <Link key={item} className="p-[0.5rem]" href="#">{item}</Link>
          )
        )}
      </div>
      
    </div>
    <div className="py-[2rem]"><Separator /></div>
    <div className="flex flex-col md:flex-row justify-between font-light text-[.875rem]">
      <div>© Tessa by George Barbu. Powered by Webflow.</div>
      <div className="flex flex-col md:flex-row gap-2 ">
          {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((link)=>
          <Link key={link} className="underline decoration-1 " href={'#'}>{link}</Link>)}
      </div>
    </div>
  </section>
  </>
  );
}
function PricingSection(){
  const Wrapper = ({children, className}:TWrapper)=>{
    return(<div className={className}>{children}</div>)
  };
  const GridContainer = ({children, className}:TWrapper)=>(<div className={cn('grid',className)}>{children}</div>);

  return(
  <Wrapper className="mt-[5rem] w-full">
    <GridContainer className="grid-cols-1 md:grid-cols-3  gap-[1.5rem]">
      {
        pricingCards.map((item,index)=>(
          <div 
            key={`priceItem-${index+1}`}
            className="rounded-[20px] p-[2rem] md:px-[1.5rem] bg-white "  
          >
            <div className="text-[1.125rem] md:text-[1.25rem]">{item.title}</div>
            <div className="font-light">{item.description}</div>
            <div className="my-[2rem]"><Separator /></div>
            <div className="text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] mb-[1rem]">{item.price}</div>
            <Button className="w-full rounded-[20px] text-[1.125rem] px-[1.2rem] py-[2rem]">Get Started</Button>
            <div className="my-[2rem]"><Separator /></div>
           
            <div className="flex flex-col gap-[1rem]">
              {item.features.map((feature, i)=>(
                <div 
                className="flex gap-2 "
                key={`feature-${i+1}`}>
                  <Check/>
                  <span className="font-light">{feature}</span>
                </div>
              )
              )}
            </div>
          
          </div>
        ))
      }
    </GridContainer>
  </Wrapper>
  )
}
function CardSection(){
  const Wrapper = ({children, className}:TWrapper)=>{
    return(<div className={className}>{children}</div>)
  }
  const GridContainer = ({children, className}:TWrapper)=>(<div className={cn('grid',className)}>{children}</div>)
  return(
  <Wrapper className="mt-[5rem] md:mt-[12rem] w-full flex flex-col gap-4
  md:grid md:grid-cols-3 md:grid-rows-2
  ">
    <GridContainer className="grid-cols-2 gap-[1.5rem] grid-rows-2 md:row-span-2">
      <Card className="relative rounded-[20px] border-transparent col-span-2 row-span-2 overflow-hidden h-[23rem] md:h-full">
        <CardHeader className="absolute bg-white z-10 w-full flex flex-1 flex-col p-[2rem] justify-center">
          <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-[1.3] mb-[1rem]">Improve the user experience of your product</h2>
          <p className="font-light text-[1rem] md:text-[1.125rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </CardHeader>
        <div className="w-full h-full flex justify-end items-end">
        <AspectRatio ratio={5/4}>
            <Image src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixid=M3w0ODMyOTN8MHwxfHNlYXJjaHwzNHx8YWJzdHJhY3R8ZW58MHx8fHwxNzA1OTI4NTUxfDA&ixlib=rb-4.0.3&fit=clamp&auto=format&w=2000" alt="Image" 
            fill
            className=" object-cover rounded-t-[20px] md:rounded-none " />
        </AspectRatio>
        </div>
      </Card>
    </GridContainer>
    <GridContainer className="grid-cols-1 md:grid-cols-2 bg-white rounded-[20px] overflow-hidden md:col-span-2">
      <div className="p-[1.5rem] md:p-[2rem] flex flex-1 flex-col justify-center ">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-[1.3] mb-[1rem]">Design user-friendly products</h2>
        <p className="font-light text-[1rem] md:text-[1.125rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <AspectRatio ratio={3/2} >
        <Image 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixid=M3w0ODMyOTN8MHwxfHNlYXJjaHw2NHx8YWJzdHJhY3R8ZW58MHx8fHwxNzA1OTI4NTc1fDA&ixlib=rb-4.0.3&fit=clamp&auto=format&w=1200" alt="Image" 
          fill
          className=" object-cover rounded-r-[20px]" />
      </AspectRatio>
    </GridContainer>
    <GridContainer className="grid-cols-1 md:grid-cols-2 gap-[1.2rem] md:col-span-2">
      <div className="p-[1.5rem] md:p-[2rem] bg-white rounded-[20px] flex flex-1 flex-col justify-center ">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-[1.3] mb-[1rem]">Mobile & web development</h2>
        <p className="font-light text-[1rem] md:text-[1.125rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="p-[1.5rem] md:p-[2rem] bg-white rounded-[20px] flex flex-1 flex-col justify-center ">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] leading-[1.3] mb-[1rem]">Branding & strategy</h2>
        <p className="font-light text-[1rem] md:text-[1.125rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </GridContainer>
  </Wrapper>
  )
}