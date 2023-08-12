import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
  return (
    <>
      <SectionTitle
        subHeading="check it out"
        heading="From Our Menu"
      />
      <div className="featured-item bg-fixed text-white pt-0 mb-20 rounded-lg">
        <div className="md:flex justify-center items-center py-20 px-36 bg-slate-700 bg-opacity-60 rounded-lg">
          <div>
            <img className="rounded-lg" src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p className="font-semibold">Aug 20, 2029</p>
            <p className="uppercase font-semibold my-3">Where can i get some?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia tempora soluta sapiente consequuntur magni enim nemo eius dicta ex nihil minima repudiandae placeat, ea tempore explicabo doloribus sit maxime quasi, ipsam nostrum ut porro corporis illum. Minima soluta a libero, nihil sint est doloribus omnis, perferendis temporibus consectetur quo.</p>
            <button className="btn btn-outline border-1 border-white text-white font-semibold border-b-4 mt-4">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured