import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import Image from "next/image"

const MobileNav = ({ user }: MobileNavProps) => {
  return (
    <section className="w-full max-w-[270px]">
   <Sheet>
      <SheetTrigger> 
        <Image 
        src="/icons/hamburger.svg"
        width={24}
        height={24}
        alt=" menu"
        className="cursor-pointer"
        />
      </SheetTrigger>
  open
       <SheetContent>
      <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>This action cannot be undone.</SheetDescription>
      </SheetHeader>
      </SheetContent>
  
</Sheet>
    </section>
  )
}

export default MobileNav