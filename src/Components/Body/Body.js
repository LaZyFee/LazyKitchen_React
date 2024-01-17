import React from 'react';

const Body = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 container-fluid '>
                <div className='mt-10'>
                    <p className='lg:ml-40 md:ml-10 text-[#CC3333] text-md' >Best In Town</p>
                    <h3 className='text-3xl font-bold text-[#2A435D] text-center italic'>ENJOY OUR CHICKEN <br />  <span className='text-[#CC3333]'> BURGER </span>  FAST FOOD</h3>
                    <div className='md:flex gap-5 align-center justify-center mt-10 hidden md:block'>
                        <button className="btn btn-outline btn-error">Order NOw</button>
                        <p className='text-[#2A435D] mt-5'>Price: $10.50</p>
                    </div>
                </div>
                <div>
                    <img className='w-4/5 h-4/5' src="https://s3-alpha-sig.figma.com/img/c895/f5e9/0768b88ed1235bc96dcc4cb94c645a9a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lltBYvF7i8yGSrmeLcEwSuwrZr2094pXWbAXcYPnqRelZ9CqvL6j~ZNhVpZ5cf1AiMD4xKupcKymy21fLhVBMS49gBJbkKJIW6M7Q7JY0XNdrtMB87jjOzxQTJuRcBAiH5z~wbfJVGxwMlZuNFLbjbDOEvRTKWW1I8RO0RrVDK0oRvuN8Jz0QEDdyBEvsHMeyiVyJmR7a69oDoy6zLvgxECQsmTPIYRKhsSP84nvZJUQoP0~4D8Iloj7HOD-sj8pfe-1VtSFdYnwJjZEXgJNx8WwWOgzThi8NYkMdGqMjSgmK-wO4UhvnsPA~CE8K8GOBMHB25FDa7wr9uVdwEM2wA__" alt="" />

                </div>
            </div>
            <div className='text-center'>
                <p className='text-[#2A435D] mt-5'>Food Items</p>
                <h1 className='text-3xl text-[#CC3333] font-bold'>Popular Dishes</h1>
            </div>
        </div>
    );
};

export default Body;