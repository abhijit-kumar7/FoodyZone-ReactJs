import { ButtonsContainer, Button } from "./ButtonContainer.styles";

const ButtonContainer = ({ filterBtns, selectedButton, ButtonMenuFood }) => {
  return (
    <ButtonsContainer>
      {filterBtns.map((value) => (
        <Button
          isSelected={selectedButton === value.type}
          key={value.name}
          onClick={() => ButtonMenuFood(value.type)}
        >
          {value.name}
        </Button>
      ))}
    </ButtonsContainer>
  );
};

export default ButtonContainer;
