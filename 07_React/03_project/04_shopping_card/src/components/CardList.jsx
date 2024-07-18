import { useEffect, useState } from "react";

const CardList = ({ cart, setCart,increamentQty,decreamentQty }) => {
    const [price, setPrice] = useState(0);
    const handleDelete = (id) => {
        let data = [];
        cart.forEach((item) => {
            if (item.id !== id) {
                data.push(item);
            }
        })
        setCart(data);
    }
    useEffect(() => {
        let sum = 0;
        cart.map((item) => {
            let qty = item.amount;
            let price = item.price;
            sum += qty * price;
        });
        setPrice(sum)
    }, [cart])

    return (
        <>
            <div className="container mx-auto">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 dark:bg-slate-900 dark:text-white">
                        <thead>
                            <tr className="dark:bg-slate-950 dark:text-white uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Image</th>
                                <th className="py-3 px-6 text-left">Title</th>
                                <th className="py-3 px-6 text-left">Qty</th>
                                <th className="py-3 px-6 text-left">Price</th>
                                <th className="py-3 px-6 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="dark:bg-slate-800 dark:text-white text-lg font-light">
                            {
                                cart.map((item) => (
                                    <tr className="border-b border-gray-200 hover:bg-slate-700" key={item.id}>
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <img className="w-14 h-14 rounded-full" src={item.img} alt="Avatar" />
                                                </div>

                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span className="font-medium">{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.amount}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <span>{item.price} x {item.amount} = {item.price * item.amount}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center">
                                                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm" onClick={() => increamentQty(item.id)}>+</button>
                                                <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-4 focus:outline-none hover:bg-purple-600 rounded text-sm" onClick={() => decreamentQty(item.id)}>-</button>
                                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={5} className="py-3 px-6 text-center">
                                    <div className="flex items-center">
                                        <span className="text-center text-lg font-bold">Total Amount:- {price.toFixed(2)}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default CardList;