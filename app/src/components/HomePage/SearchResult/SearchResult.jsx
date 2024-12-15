import styled from "styled-components";
import {BASE_URL} from "../../../App";
import { Button } from "../ButtonContainer/ButtonContainer.styles";
import { FoodCardContainer, FoodCards, FoodCard } from './SearchResult.styles';

const SearchResult = ({ data }) => {
    return (
        <FoodCardContainer>
            <FoodCards>
                {data?.map((food) => (
                    <FoodCard key={food.name}>
                      <div className="food_image" >
                        <img src={BASE_URL + food.image}></img>
                      </div>
                      <div className="food_info">
                          <div className="info">
                            <h3>{food.name}</h3>
                            <p>{food.text}</p>
                          </div>
                          <Button>${food.price.toFixed(2)}</Button>
                      </div>
                    </FoodCard>
                ))}
            </FoodCards>
        </FoodCardContainer>
    );
};


export default SearchResult

