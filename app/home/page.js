import HomeCarousel from '@/app/ui/homepageUi/homePageCarousel/HomeCarousel';
import getAnything from '@/app/lib/getAnything';
import PaginationProducts from '../ui/homePageData/productData/PaginationProducts';
import CategoryData from '../ui/homePageData/categoryData/CategoryData';






export default async function Home() {
 
  
  // home curousel image 
  const res = await getAnything('/api/home-curousel?populate=*')
    const data = await res.data
    const image = await data?.attributes?.image?.data
  
    
    
   
  
   
  
  return (
   <div  //main div
   className='bg-white-500 scroll-smooth '
    > 
    
  
    
    {/* Home Carousel start */}
    <div className=' w-full '>
       <HomeCarousel image={image} />
    </div>
    {/* Home Carousel end */}

    {/* Category carousel add */}
    <div className='mt-10 mb-10'>
    <CategoryData/>
    </div>
    {/* Category carousel end */}


    {/* Home Product Card start */}
     <div>
     <PaginationProducts/>
     </div>
    {/* Product Card End */}

  
   </div>
  );
}
