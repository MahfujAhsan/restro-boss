import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonials from "../Testimonials/Testimonials"
import Poster from "../Poster/Poster"
import CallUs from "../CallUs/CallUs"
import RecommendFood from "../RecommendFood/RecommendFood"


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Poster />
      <PopularMenu />
      <CallUs />
      <RecommendFood />
      <Featured />
      <Testimonials />
    </>
  )
}

export default Home