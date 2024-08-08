import Card from "./Card";
import list from "./../list"

const Shop = ({ handleAddToCart }) => {
    return (
        <>
            <div className="container px-5 py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        list.map((items) => {
                            return (
                                <Card data={items} key={items.id} handleAddToCart={handleAddToCart} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Shop;