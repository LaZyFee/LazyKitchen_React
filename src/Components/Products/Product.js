import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Product = (props) => {
    const [modalData, setModalData] = useState({});
    const { meal, countIncrease } = props
    const { strMeal, strMealThumb, strInstructions, strArea, } = meal
    return (
        <div>
            <div className="card shadow-xl ">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body  text-slate-100">
                    <h2 className="card-title justify-center text-3xl font-bold text-red-800 mb-10">{strMeal}</h2>
                    {/* <p className='text-xl'> Origin:{strArea}</p>
                     <p><small>{strInstructions.slice(0, 200)}</small></p> */}
                    <div className="flex justify-between">
                        <button className="btn btn-[#2A435D] hover:bg-red-500" onClick={countIncrease}>Buy Now</button>
                        <label
                            onClick={() => setModalData(meal)}
                            htmlFor="my-modal-3"
                            className="btn modal-button btn-[#2A435D] hover:bg-red-500"
                        >
                            Details
                        </label>
                    </div>
                </div>

            </div>
            {modalData && (
                <Modal data={modalData} setModalData={setModalData}></Modal>
            )}

        </div>
    );
};

export default Product;
// 