

const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="md:flex items-center space-x-4 text-center md:text-left">
      <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[200px] md:w-[120px] mx-auto" src={image} alt="" />
      <div className="mt-3">
        <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">{name}<span className="hidden md:inline-block">------------</span></h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 text-xl font-semibold"><span className="inline-block md:hidden mt-1 md:mt-auto">Price: </span>${price}</p>
    </div>
  )
}

export default MenuItem