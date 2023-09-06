import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddReview = () => {
  const [rating, setRating] = useState(0);
  const error = "Please Select At least One Star";
  const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = data => {
    if (rating === 0) {
      return error;
    }
    const ratingContainer = {
      name: user?.displayName,
      email: user?.email,
      details: {
        likedRecipe: data?.likedRecipe,
        reviewDetail: data?.reviewDetail,
        suggestion: data?.suggestion
      },
      rating
    };
    axiosSecure.post('/api/v1/reviews', ratingContainer)
    .then((res) => {
      if (res.status === 201) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Thanks for your feedback.`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  return (
    <div>
      <SectionTitle subHeading="Sharing is Caring!!!" heading="GIVE A REVIEW..."/>
      <div className="mx-auto text-center">
        <h3 className="text-3xl uppercase font-semibold text-white mb-2">Rate Us!</h3>
        <Rating style={{ maxWidth: 250, margin: 'auto' }} value={rating} onChange={setRating} />
        {rating === 0 && <p className="text-xs my-1 font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto mt-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg text-slate-500 font-semibold">Which recipe you liked most?</span>
            </label>
            <input {...register("likedRecipe", { required: true })} type="text" placeholder="Recipe you liked most" className="input input-bordered w-full " />
            
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-lg text-slate-500 font-semibold">Do you have any suggestion for us?</span>
            </label>
            <input {...register("suggestion", { required: true })} type="text" placeholder="Suggestion" className="input input-bordered w-full " />
            
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg text-slate-500 font-semibold">Kindly express your care in a short way.</span>
            </label>
            <textarea {...register("reviewDetail", { required: true })} type="text" placeholder="Review in detail" className="input input-bordered w-full h-[120px] pt-4" />
            
          </div>
          <button className="btn btn-primary mt-4 w-1/2 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white text-lg border-none" type="submit">Send Review</button>
        </form>
      </div>
    </div>
  )
}

export default AddReview