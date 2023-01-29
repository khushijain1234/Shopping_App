import { connect } from "react-redux";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import  addToCart from '../Services/Actions/Action';

const mapStateToProps = state =>({
data:state.cardItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Description);