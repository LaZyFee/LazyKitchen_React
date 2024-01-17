import React from 'react';

const Header = ({ count }) => {
    return (
        <div className=''>
            <div className="navbar text-[#2A435D] shadow-2xl bg-[#C33] flex justify-between">
                <div>
                    <h1 className="text-3xl font-bold"> LazyKitchen  </h1>
                </div>
                <div className='lg:flex gap-5 hidden lg:block'>
                    <a className='hover:text-slate-100' href="/">Home</a>
                    <a className='hover:text-slate-100' href="/">About</a>
                    <a className='hover:text-slate-100' href="/">Items</a>
                    <a className='hover:text-slate-100' href="/">Pages</a>
                    <a className='hover:text-slate-100' href="/">Contact</a>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search Your Meal" className="input input-bordered w-24 md:w-auto hidden md:block text-gray-100" />
                </div>
                <div className="flex flex-col hidden lg:block">
                    <h6 className="text-xl font-bold">Delivery Order</h6>
                    <p>+8801699969996</p>
                </div>


                {/* Cart button */}

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{count}</span>
                            </div>
                        </div>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-info">{count} Items</span>
                                <span className="text-info">Subtotal: $0</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <button className="btn btn-outline btn-warning">Login</button>
                </div>


                {/* Button nav for small  */}
                <div className="dropdown dropdown-end lg:hidden block">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                    <div>

                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a href="/order">Home</a></li>
                            <li><a href="/orderReview">About</a></li>
                            <li><a href="/manageInventory">Items</a></li>
                            <li><a href="/login">Pages</a></li>
                            <li><a href="/login">Contact</a></li>
                            <h6 className="text-xl font-bold">Delivery Order</h6>
                            <p className='mb-2'>+8801699969996</p>
                            <button className="btn btn-outline btn-warning">Login</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;