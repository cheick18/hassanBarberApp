
"use client";

import {

  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,

} from "flowbite-react";
import Image from "next/image";

import logo2 from './logo2.png';



export  default function DrawerComonent({isMobileMenuOpen,toggleMobileMenu}) {


  return (
    <>
      
      <Drawer open={isMobileMenuOpen} onClose={toggleMobileMenu} >
        <DrawerHeader title=""
        titleIcon={() => (
    <Image
      src={logo2} // remplace par le bon chemin
      alt="Icône du menu"
      width={170}
      height={80}
    />
  )}
          />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
               
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/"  style={{color:'#C4A35A'}}>
                      Home
                    </SidebarItem>
                    <SidebarItem href="services" >
                      Servives
                    </SidebarItem>
                    <SidebarItem href="contact"  >
                      Contact us
                    </SidebarItem>
                  
                  </SidebarItemGroup>
                
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
