import React from "react";
import "./style.css";
import {
  Wrapper,
  Button,
  Input,
  Image,
  Title,
  StyledText,
  StyledButtonWrapper,
  Subtitle
} from "./styles";

class Giphy extends React.Component {
  state = {
    term: "",
    img: ""
  };

  onChange = event => {
    this.setState({ term: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const api_key = "dc6zaTOxFJmzC";
    const url = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.term
    }&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ term: "", img: data.data[0].images.fixed_height.url })
      )
      .catch(e => console.log("error", e));
  };

  render() {
    return (
      <Wrapper>
        <StyledText>
          <Title> Find GIFs </Title>
          <Subtitle>Get the best GIF on GIPHY</Subtitle>
        </StyledText>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={this.state.term}
            onChange={this.onChange}
            placeholder="Enter name"
          />
          <StyledButtonWrapper>
            <Button>Search!</Button>
          </StyledButtonWrapper>
        </form>
        <Image src={this.state.img} />
      </Wrapper>
    );
  }
}

export default Giphy;
