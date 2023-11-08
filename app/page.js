
import HomeGellary from '@/components/HomeStyles/HomeGellary';
import ProductCard from '@/components/ProductPage/ProductCard';
import Menu from '@/components/menu/Menu';
import Wrapper from '@/components/Wrapper';
import HomeBlock1 from '@/components/HomeStyles/HomeBlock1';
import SearchBox from '@/components/HomeStyles/SearchBox';
import Block2 from '@/components/HomeStyles/Block2';
import getProducts from '@/libs/getProducts';





export default async function Home() {
  const response = await getProducts()
  const products = await response?.data
 
  


  const divStyle = {
    backgroundImage: `url(${'homebanner.png'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '500px',
    margin:'20px',
    textAlign:'center'
     // You can adjust the height as needed
  };
   
  
  return (
   <div  //main div
   className='bg-white-500 '
    > 

    <div className='flex w-full h-[500px] bg-primary-500  justify-between'>
      <div className='top-0  h-[500px] left-0 lg:block hidden mr-[20px]  overflow-y-scroll '>
        <Menu/>
      </div>
      <div className='top-0 w-full md:w-full md:px-[100px]  lg:w-[500px]  lg:mx-o  lg:px-0 text-center mt-[30px] right-0'>
       <HomeBlock1/>
       <SearchBox/>
      </div>
      <div className='w-[500px] lg:block lg:relative absolute  hidden'>
        <HomeGellary/>
      </div>
    </div>
   


    {/* Second Hero Section Add */}

    <div className='h-[150px] '>
    <Wrapper>
    <Block2/>
    </Wrapper>
    </div>

    {/* Second Hero Section End */}


    {/* Product Card Add */}
    <Wrapper>
    <div
  className='grid grid-cols-1  grid-rows-1 h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-5   md:my-14 px-5   md:px-0 '
    >
  {products?.map((item) => {
    return (
      <ProductCard key={item.id} data={item} className='h-full' />
    );
  })}
      </div>
    </Wrapper>
    {/* Product Card End */}

  
   </div>
  );
}
