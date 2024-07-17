// const Card = ({ data, handleAddToCart }) => {
const Card = ({data,handleAddToCart}) => {
    const { img, title, author, price } = data;
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img} />
                </a>
                <div className="mt-4">
                    <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">{title}</h2>
                    <h3 className="text-gray-900 title-font text-base font-medium dark:text-white">{author}</h3>
                    <p className="mt-1 dark:text-white">₹ {price}</p>
                    <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => handleAddToCart(data)}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default Card;