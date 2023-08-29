

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 italic mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 border-purple-950 py-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 font-bold">{heading}</h3>
        </div>
    )
}

export default SectionTitle