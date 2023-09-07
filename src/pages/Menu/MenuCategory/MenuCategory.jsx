import { Link } from "react-router-dom"
import Cover from "../../Shared/Cover/Cover"
import MenuItem from "../../Shared/MenuItem/MenuItem"


const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8 text-center mb-8">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-16 text-left">
        {
          items?.map((item) => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-1 border-b-4 mx-auto">Order Your Food Now</button>
      </Link>
    </div>
  )
}

export default MenuCategory