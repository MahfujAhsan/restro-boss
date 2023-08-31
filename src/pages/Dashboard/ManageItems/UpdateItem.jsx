import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";


const UpdateItem = () => {
    const { itemId } = useParams();

    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/menu/${itemId}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [itemId]);

    if (!item) {
        return <div className="flex h-screen items-center justify-center"><FaSpinner size={90} color="purple" /></div>;
    }


    const onSubmit = async (data) => {
        await axios.patch(`http://localhost:5000/menu/${itemId}`, data)
            .then((response) => {
                if (response.data.lastErrorObject.updatedExisting === true) {
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} Updated Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate('/dashboard/manage-items')
            })
    }

    // refetch();


    return (
        <section className="">

            <div className=" text-center p-8 h-screen flex justify-center items-center flex-col">
                <h3 className="text-4xl font-bold my-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">Update Items</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Item Name<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">*</span></span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" defaultValue={item?.name} onChange={() => { }} className="input input-bordered w-full border-purple-700" />
                        {errors.name && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Name is required</span>}
                    </div>
                    <div className="flex space-x-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-500">Item Category<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">*</span></span>
                            </label>
                            {/* <p>Selected Option: {category}</p> */}
                            <select defaultValue={item?.category} onChange={() => { }} {...register("category", { required: true })} className="select select-bordered border border-purple-700">
                                <option selected disabled>Select One</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>popular</option>
                                <option>drinks</option>
                                <option>offered</option>
                            </select>

                            {errors.category && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Category is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold text-slate-500">Item Price<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">*</span></span>
                            </label>
                            <input step="any" {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full border border-purple-700" defaultValue={item?.price} onChange={() => { }} />
                            {errors.price && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Price is required</span>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold text-slate-500">Item Details<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">*</span></span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24 border border-purple-700" defaultValue={item?.recipe} onChange={(e) => e.currentTarget.value} placeholder="Recipe Details"></textarea>
                        {errors.recipe && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Details is required</span>}
                    </div>
                    <input className="btn btn-primary w-1/2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white text-lg border-none mt-8" type="submit" value="Update Recipe Details" />
                </form>
            </div>
        </section>
    )
}

export default UpdateItem