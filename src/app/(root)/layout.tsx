import SideBar from "@/components/SideBar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  const loggedIn = { firstName: "CHERRY"  };
  return (
   <main className="flex h-screen w-full font-inter">
    
      SIDEBAR
    
    <SideBar user = {loggedIn}/>
      {children}
    
   </main>
  );
}
