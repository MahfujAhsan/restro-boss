import './Poster.css'

const Poster = () => {
    return (
        <div className='poster h-auto md:h-[568px] flex justify-center items-center my-12 md:my-16 mx-2 md:mx-0 py-4 md:py-0'>
            <div className='h-auto md:h-[330px] bg-white w-8/12 md:w-[1096px] text-center flex flex-col justify-center rounded py-4 md:py-0'>
                <h2 className='uppercase text-xl md:text-3xl font-semibold'>Bistro Boss</h2>
                <p className='w-auto md:w-[762px] mx-auto mt-1 md:mt-4 text-[11px] md:text-[16px] px-2 md:px-0 leading-4 md:leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    )
}

export default Poster