

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="flex items-center space-x-4">
        <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
        <div>
            <h3>{name}------------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-yellow-500 text-xl font-semibold">${price}</p>
    </div>
  )
}

export default MenuItem