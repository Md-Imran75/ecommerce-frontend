import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Category from "../category/Category";

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
    { id: 5, name: "Jordan", doc_count: 11 },
    { id: 6, name: "Sneakers", doc_count: 8 },
    { id: 7, name: "Running shoes", doc_count: 64 },
    { id: 8, name: "Football shoes", doc_count: 107 },
   
];

const MobileMenu = ({ categories , showCartMenu , setShowCartMenu , setMobileMenu }) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-8 w-[375px] h-[calc(100vh-50px)] bg-primary-100 border-t  " >
         
        {
            data.map((item) => {
                return(
                    <React.Fragment key={item.id}>
                    {
                        !!item?.subMenu ? (
                            <li className="cursor-pointer py-2 px-5 border-b flex flex-col relative"
                            onClick={() => setShowCartMenu(!showCartMenu)}
                            >
                                <div className="flex font-roboto  text-[15px] justify-between items-center">
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                        
                                { showCartMenu && (

                                    <ul className="bg-primary-200 mt-[30px] -mx-5 ">
                                        {subMenuData.map((submenu) => {
                                           return(
                                                   <Link key={submenu.id} href='/' onClick={() => {
                                                    setMobileMenu(false)
                                                    setShowCartMenu(false)
                                                   }} >
                                                    
                                                    {
                                                        submenu.id < 9 && (
                                                            <li className="py-2 font-roboto text-[15px] font-light px-8 flex justify-between">
                                                            {submenu.name}
                                                           <span className="opacity-50 text-sm  ">
                                                            65
                                                          </span>
                                                          </li>
                                                        )
                                                    }
                          
                                                  </Link>
                                                  
                                                )
                                      })}


                                                  {
                                                    subMenuData.map((submenu) => {
                                                        return (
                                                           <Link key={submenu.id} href='/categories'>
                                                            {
                                                                submenu.id === 8 && (
                                                                    <h4 className='px-5 py-2 text-[15px] font-roboto bg-secondary-500 text-primary-200'>See All Category</h4>  
                                                                )
                                                            }
                                                           </Link>
                                                        )
                                                    })
                                                  }
                                       

                                  </ul>
                                             ) }
                            </li>
                        ) : (
                          <li className="py-2 text-[15px] font-roboto px-5 border-b">
                            <Link href={item?.url} onClick={() => setMobileMenu(false )} >
                            {item.name}
                            </Link>
                          </li>
                        )
                    }
                    </React.Fragment>
                )
            })
        }

        </ul>
    );
};

export default MobileMenu;