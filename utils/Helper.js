import { useRouter } from "next/navigation";

// function for discount price
export const DiscountPriceCalculate = (orginalPrice , price) => {
     const discount = orginalPrice - price;
     const discountPercentage = (discount/orginalPrice) * 100 ;
     return discountPercentage.toFixed(0) 
}

// store user for login
export const storeUser = (data) => {
     localStorage.setItem('user' , 
     JSON.stringify({
        username: data.user.username,
        name: data.user.name,
        jwt: data.jwt

     }))
};

export const userData = () => {

     if (typeof window !== 'undefined') {
          const stringifiedData = localStorage.getItem('user') || '""';
          const user =JSON.parse(stringifiedData) || {};
          return user
        }
}


// validation jwt token

export const isJwtTokenPresent = () => {
     if (typeof window !== 'undefined') {
          const stringifiedData = localStorage.getItem('user') || '""';
          const user =JSON.parse(stringifiedData) || {};
     
          return user.jwt
        }

     // return jwt !== null && jwt !== undefined;
   };