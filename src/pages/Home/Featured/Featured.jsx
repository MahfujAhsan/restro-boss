import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20 ">
        <SectionTitle 
        subHeading="check it out"
        heading="Featured Item"
        />
        <div className="md:flex justify-center bg-slate-700 bg-opacity-30 items-center pb-20 pt-12 px-36">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia tempora soluta sapiente consequuntur magni enim nemo eius dicta ex nihil minima repudiandae placeat, ea tempore explicabo doloribus sit maxime quasi, ipsam nostrum ut porro corporis illum. Minima soluta a libero, nihil sint est doloribus omnis, perferendis temporibus consectetur quo.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Featured