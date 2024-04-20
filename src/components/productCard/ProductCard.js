
import "./product-card.scss";
import ProductCounter from "../productCounter/ProductCounter";
import { useSelector } from "react-redux";
import { useState } from "react";
import { rescrement } from '../../action/CounterAction';
import { useDispatch } from 'react-redux';


const ProductCard = () => {



      const count = useSelector(state => state.counter)
      const [checked, setChecked] = useState(false)
      const dispatch = useDispatch()

      const toggleChecked = () => {
            setChecked(!checked)
            dispatch(rescrement())

      }

      const price = 1000
      const summ = count * price



      return (

            <div className="product-card">
                  <div className="product-card_imgs">
                        <input onChange={toggleChecked}

                              checked={checked}
                              className="product-card_checkbox"
                              type="checkbox"
                              class="product_checkbox"
                              id="happy"
                              name="happy"
                        />
                        <img className="product-card_img" src="https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-vegan-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B5-vec-94404386.jpg" alt="картинка" />
                  </div>
                  <div className="product-description">
                        <div className="product-description_summ">
                              <p className="product-description_price" >{summ}</p>
                        </div>

                        <p className="product-description_feature" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores maxime similique aperiam ducimus blanditiis
                        </p>
                        <p className="product-description_color" > красный</p>

                  </div>
                  <ProductCounter checked={checked} />
            </div>

      )
}





export default ProductCard
