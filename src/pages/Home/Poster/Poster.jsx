import './Poster.css'

const Poster = () => {
    return (
        <div className='poster h-[568px] flex justify-center items-center my-16'>
            <div className='h-[330px] bg-white w-[1096px] text-center flex flex-col justify-center rounded'>
                <h2 className='uppercase text-3xl font-semibold'>Bistro Boss</h2>
                <p className='w-auto md:w-[762px] mx-auto mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    )
}

export default Poster