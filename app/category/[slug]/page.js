
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductPage/ProductCard'
import getCategories from '@/libs/getCategories'
import getAnything from '@/libs/getAnything'



const Category = async({params}) => {

  const categoryName = params.slug
  const resProducts = await getAnything(`/api/products?populate=*&[filters][categories][slug][$eq]=${categoryName}`)
  const products = await resProducts?.data
  const resCategories = await getAnything(`/api/categories?[filters][slug][$eq]=${categoryName}`)
  const categories = await resCategories?.data



  

  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-roboto font-semibold leading-tight '>
            {categories?.[0]?.attributes?.name}
          </div>
        </div>

        {/* Product Card Add */}
        <Wrapper>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:my-14 px-5  md:px-0 '>

            {
              products?.map((item) => {
                return (
                  <ProductCard key={item.id} data={item} />
                )
              })
            }

          </div>
        </Wrapper>
        {/* Product Card End */}
      </Wrapper>
    </div>
  )
}
export default Category;
