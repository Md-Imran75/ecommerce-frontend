import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import Category from "../category/Category";
import getCategories from "@/libs/getCategories";

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
    { id: 9, name: "Jordan", doc_count: 11 },
    { id: 10, name: "Jordan", doc_count: 11 },
    { id: 11, name: "Jordan", doc_count: 11 },
    { id: 12, name: "Jordan", doc_count: 11 },
    { id: 13, name: "Jordan", doc_count: 11 },
];


// position='fixed'
// right='0'

// border='5px solid #ff686e'
// marginTop='66px'
// width='max(320px , 25%)'
// height='100%'
// backgroundColor='white'


const Menu = async({ categories , categoryMenu , setCategoryMenu }) => {
    const res = await getCategories()
    const data = await res?.data

    return (
    //  <div className="  w-full h-full fixed right-0 top-0 overflow-auto">
    //   <div className=" fixed overflow-scroll  left-0 w-max-[230px]  h-full mt-[58px] ">
     <div>
     <ul className="hidden md:flex  items-center gap-8 font-medium text-black" >
         
         {
          
                     <React.Fragment>
                     {
                             <li className="cursor-pointer  flex items-center gap-2  left-0 top-20"
                             >
 
                         
                                 { (
 
                                     <Category className='z-50' category={data}  />
                                     
                                 )}
                             </li>
                                            
                                            
                    }
                     </React.Fragment>
                 
         
         }
 
         </ul>
     </div>
    //   </div>

    //  </div>
    );
};

export default Menu;