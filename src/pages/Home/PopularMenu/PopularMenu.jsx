
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import MenuButton from "../../../components/MenuButton/MenuButton";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    // Popular menu's data loaded from custom hook called useMenu();
    const [menu] = useMenu();
    const popular = menu?.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12 mx-3">
            <SectionTitle
                subHeading="Popular Items"
                heading="From Our Menu" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                {
                    popular?.map((item) => <MenuItem key={item._id} item={item} />)
                }
            </div>
            <div className="text-center mt-6 md:mt-12">
                <Link to="/order/salad">
                    <MenuButton>
                        View Full Menu
                    </MenuButton>
                </Link>
            </div>
        </section>
    )
}

export default PopularMenu