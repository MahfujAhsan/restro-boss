import FoodCard from "../../../components/FoodCard/FoodCard"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../hooks/useMenu"


const RecommendFood = () => {
    const [menu] = useMenu();
    return (
        <div className="my-24">
            <SectionTitle subHeading="Should Try" heading="Chef Recommends" />
            <div className='grid md:grid-cols-3 gap-10 place-items-center'>
                {
                  menu?.slice(-3).map((item) => <FoodCard key={item._id} item={item}/>)  
                }
            </div>
        </div>
    )
}

export default RecommendFood