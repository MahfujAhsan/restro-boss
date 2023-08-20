import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const UpdateItem = () => {
    const { itemId } = useParams();

    // const { loading } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // const [axiosSecure] = useAxiosSecure();

    // const { data: item = {}, isLoading } = useQuery({
    //     queryKey: ["item"],
    //     enabled: !loading,
    //     queryFn: async () => {
    //         const res = await axiosSecure(`/menu/${itemId}`)
    //         return res.data;
    //     }
    // });

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <section className="">

            <div className="bg-[#D9D9D9] text-center p-8 h-screen flex justify-center items-center flex-col">
                <h3 className="text-4xl font-semibold my-8 uppercase">Update Items</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" defaultValue={""} className="input input-bordered w-full" />
                        {errors.name && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Name is required</span>}
                    </div>
                    <div className="flex space-x-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled selected>{}</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>salad</option>
                                <option>dessert</option>
                                <option>Desi</option>
                                <option>drinks</option>
                            </select>
                            {errors.category && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Category is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" defaultValue={""} />
                            {errors.price && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Price is required</span>}
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" defaultValue={""} placeholder="Recipe Details"></textarea>
                        {errors.recipe && <span className='mt-2 ml-1 text-[#CA4142] font-semibold text-xs'>Details is required</span>}
                    </div>
                    <input className="btn btn-primary mt-4 w-1/2" type="submit" value="Update Recipe Details" />
                </form>
            </div>
        </section>
    )
}

export default UpdateItem