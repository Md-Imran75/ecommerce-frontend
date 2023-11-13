
import ProductCard from '@/app/ui/ProductPage/ProductCard';
import Wrapper from '@/app/ui/wrapper/Wrapper';
import getProducts from '@/app/lib/getProducts';
import HomeCarousel from '@/app/ui/homepageUi/homePageCarousel/HomeCarousel';
import getAnything from '@/app/lib/getAnything';






export default async function Home() {
  const response = await getProducts()
  const products = await response?.data
  
  // home curousel image 
  const res = await getAnything('/api/home-curousel?populate=*')
    const data = await res.data
    const image = await data?.attributes?.image?.data
  


  
   
  
  return (
   <div  //main div
   className='bg-white-500 '
    > 

    
    
    <div className=' w-full h-200px md:h-[600px] '>
       <HomeCarousel image={image} />
    </div>
    
   


    


    {/* Product Card Add */}
    <div className='bg-background-500  py-10'>
    <Wrapper>
    <div className='bg-white-500 border font-roboto border-white-600 py-10 px-10'>
    <div>
      <h1 className='text-2xl uppercase font-md'>Latest Bike</h1>
      <p>Choice your favorite bike</p>
    </div>
    <div
  className='grid grid-cols-1  grid-rows-1 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5   mt-5  '
    >
  {products?.map((item) => {
    return (
      <ProductCard key={item.id} data={item}  />
    );
  })}
      </div>
    
    </div>
    </Wrapper>
    </div>
    {/* Product Card End */}

  
   </div>
  );
}
