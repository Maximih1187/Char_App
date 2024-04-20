import './productCounterButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../action/CounterAction';


const ProductCounter = (props) => {
      const dispatch = useDispatch()
      const count = useSelector(state => state.counter)


      return (
            <div className="productCounter_wrapper">
                  <button disabled={count > 9 || !props.checked} onClick={() => dispatch(increment())} className="productCounter_wrapper_button">+</button>
                  <div className={props.checked ? 'productCounter_wrapper_border  productCounter_wrapper_border-active' : 'productCounter_wrapper_border'}>
                        <span>{count}</span>
                  </div>
                  <button disabled={count < 2 || !props.checked} onClick={() => dispatch(decrement())} className="productCounter_wrapper_button">-</button>
            </div>
      )

}
export default ProductCounter;
