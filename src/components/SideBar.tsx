import Link from "next/link";
import Image from 'next/image';

 
 const SideBar = ({user}: SiderbarProps) => {
   return (
     <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-2
        cursor-pointer
        flex items-center gap-2"
        >
          < Image
          src="/icons/logo.svg"
          width={30}
          height={30}
          alt="Horizon logo"
          className="size-[24px]
          max-xl:size-14"

          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
      </nav>
        </section>
   );
 };
 
 export default SideBar;