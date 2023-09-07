import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/menu-bg.png'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();
  // const offered = menu.filter(item => item.category === 'offered');
  const desserts = menu?.filter(item => item?.category === 'dessert');
  const soup = menu?.filter(item => item?.category === 'soup');
  const salad = menu?.filter(item => item?.category === 'salad');
  const pizza = menu?.filter(item => item?.category === 'pizza');
  const drinks = menu?.filter(item => item?.category === 'drinks');
  const offered = menu?.filter(item => item?.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImg} title="our menu" />

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      />
      {/* Offered Menu Items */}
      <MenuCategory items={offered}
      title="offered"
      img={soupImg} />
      {/* Desserts Menu Items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      />
      {/* Pizza Menu Items */}
      <MenuCategory
        items={pizza}
        title="pizza"
        img={pizzaImg}
      />
      {/* Salad Menu Items */}
      <MenuCategory
        items={salad}
        title="salad"
        img={saladImg}
      />
      {/* Soup Menu Items */}
      <MenuCategory
        items={soup}
        title="soup"
        img={soupImg}
      />
      <MenuCategory
        items={drinks}
        title="drinks"
        img={soupImg}
      />
    </div>
  )
}

export default Menu