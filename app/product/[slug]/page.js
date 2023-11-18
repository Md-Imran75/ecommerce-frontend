"use client";

import React, { useEffect, useState } from "react";
import ProductPageCarousel from "@/app/ui/ProductPage/ProductPageCurosel";
import Wrapper from "@/app/ui/wrapper/Wrapper";
import RelatedProductCurousel from "@/app/ui/ProductPage/RelatedProductCurousel";
import getAnything from "@/app/lib/getAnything";
import Markdown from "react-markdown";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailsPage = ({ params }) => {
  const dispatch = useDispatch();
  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const getProduct = async () => {
    const productSlug = params.slug;
    const resProducts = await getAnything(
      `/api/products?populate=*&[filters][slug][$eq]=${productSlug}`
    );
    const dataProduct = await resProducts?.data;

    const relatedProducts = await getAnything(
      `/api/products?populate=*&[filters][slug][$ne]=${productSlug}`
    );
    const dataRelatedProducts = await relatedProducts?.data;

    setData(dataProduct);
    setRelatedProductsData(dataRelatedProducts);

    return data;
  };

  {
    /* products data */
  }
  const [data, setData] = useState([]);

  {
    /* Relatedproducts data */
  }
  const [relatedProductsData, setRelatedProductsData] = useState([]);

  // call the getProduct funtion
  useEffect(() => {
    getProduct();
  }, []);

  console.log(data)

  return (
    <div className="w-full mt-[30px]   md:my-0 md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px] ">
          {/* left coloum start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <ProductPageCarousel data={data} />
          </div>
          {/* left coloum End */}

          {/* right coloum start */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[25px] text-neutral-500 font-roboto font-medium mb-2 leading-tight">
              {data?.[0]?.attributes?.title}
            </div>

            {/* product price */}
            <div className="text-lg text-neutral-500 font-semibold font-roboto">
              Price: {data?.[0]?.attributes?.price} BDT
            </div>

            <div className="flex mt-5  justify-between">
              {/* brand */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border  border-background-500 font-medium text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Brand:{data?.[0]?.attributes?.brand}
            </div>

            {/* mile age*/}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Mileage: {data?.[0]?.attributes?.mileAge}
            </div>
            </div>



            <div className="flex justify-between">
              {/* seller Id */}

            <div className="text-[12px] md:text-md my-1 mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Seller Id: {data?.[0]?.attributes?.sellerId}
            </div>

            {/* cc */}

            <div className="text-[12px] md:text-md my-1 font-medium py-1 border border-background-500 px-1 text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              CC: {data?.[0]?.attributes?.cc}
            </div>
            </div>



           <div className="flex justify-between">
             {/* fl */}

             <div className="text-[12px] md:text-md my-1 mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Fl: {data?.[0]?.attributes?.fl}
            </div>

            {/* reg year */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Reg Year: {data?.[0]?.attributes?.regYear}
            </div>
           </div>




            <div className="flex justify-between">
              {/* kelo metter */}

            <div className="text-[12px] md:text-md my-1 mr-2 py-1 px-1 border border-background-500 font-medium text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              K. Meter: {data?.[0]?.attributes?.kMeter}
            </div>

            {/* taxt Valid */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Tax Valid: {data?.[0]?.attributes?.taxValid}
            </div>
            </div>

            <div className="mb-10">

               {/* condition */}
            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Condition: {data?.[0]?.attributes?.condition}
            </div>

            {/* abs */}

            <div className="text-[12px] md:text-md my-1 py-1 px-1 font-medium border border-background-500 text-neutral-500 bg-primary-500 w-[150px] text-left font-roboto">
              Abs: {data?.[0]?.attributes?.abs}
            </div>
            </div>


            

            {/* Add to button Add */}

            <div className="flex justify-between mb-10">
              <button
                className="w-[180px] h-[50px] mr-2 py-1 md:py-2 rounded-md lg:mr-5 xl:mr-[0] bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500 font-roboto "
                onClick={() => {
                  dispatch(
                    addToCart({
                      ...data?.[0],

                      oneProductPrice: data?.[0]?.attributes?.price,
                    })
                  );
                  notify();
                }}
              >
                Add to Garage
              </button>

              {/* Add to button end */}

              {/* Add to wishlist add */}

              <button className="w-[180px] h-[50px] py-1  md:py-2 rounded-md bg-secondary-500 text-primary-100 text-sm md:text-lg font-medium transition-transform  active:scale-95 mb-3 hover:bg-primary-500 hover:text-secondary-500 font-roboto ">
                Add to Wishlist
              </button>
            </div>

            {/* Add to wishlist end */}

            {/* Product description Add */}
            <div>
              <div className="text-lg font-bold mb-5 font-roboto">
                Product Details
              </div>

              <div className="markdown text-md mb-5 font-roboto">
                <Markdown>{data?.[0]?.attributes?.description}</Markdown>
              </div>
            </div>
            {/* Product description Add */}
          </div>
          {/* right coloum end */}
        </div>

        {/* related product curousel */}
        <div className="border-background-500 border px-5 py-10 mt-10">
          <RelatedProductCurousel products={relatedProductsData} />
        </div>
        {/* related product curousel */}
      </Wrapper>
    </div>
  );
};

export default ProductDetailsPage;
