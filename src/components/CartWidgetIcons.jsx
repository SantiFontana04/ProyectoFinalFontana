import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const CartWidgetIcons = () => {
    const {cartQuantity}= useContext(CartContext)
   
    return(
        <div>
            < MdOutlineShoppingCart fontSize={'1.3rem'} style={{ color: '#1a73e8', fontSize: 30 }} />
             <Badge className="bg-primary">{cartQuantity()}</Badge>
        </div>
    )
}

export default CartWidgetIcons