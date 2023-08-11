import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;


const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = { name, recipe, image: imgURL, category, price: parseFloat(price) }
          axiosSecure.post('/menu', newItem).then(data => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${name} Added Successfully`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
        }
      })
  };

  return (
    <div className="w-full px-10">
      <SectionTitle subHeading="What's New?" heading="Add an Item" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semi">Recipe name*</span>
          </label>
          <input type="text" placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full" />

          <div className="flex my-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                <option disabled>Pick One</option>
                <option>pizza</option>
                <option>soup</option>
                <option>salad</option>
                <option>dessert</option>
                <option>Desi</option>
                <option>drinks</option>
              </select>
            </div>
            <div className="form-control w-full ml-4">
              <label className="label">
                <span className="label-text font-semi">Price*</span>
              </label>
              <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
            </div>
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full" />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  )
}

export default AddItem