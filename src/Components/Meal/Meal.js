import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

const Meal = ({ countIncrease }) => {
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [])

    return (
        <div className='mt-10'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 lg:gap-10 mx-5 lg:mx-10' >
                {
                    meal.map(meal => <Product
                        key={meal.idMeal}
                        meal={meal}
                        countIncrease={countIncrease}

                    ></Product>)
                }
            </div>


        </div>
    );
};

export default Meal;