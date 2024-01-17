import React from 'react';


const Modal = (props) => {
    //   console.log(props);
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        onClick={() => props.setModalData(null)}
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-2xl text-center font-bold text-orange-500">{props.data.strMeal}</h3>
                    <p className="text-md text-violet-300">Origin: {props.data.strArea}</p>
                    <p className="text-md text-green-300">Category: {props.data.strCategory}</p>
                    <p className="text-md text-blue-300">Tags: {props.data.strTags ? props.data.strTags : "No Tags available"}</p>
                    <p className="md:py-4">
                        {props.data.strInstructions}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
