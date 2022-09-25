import React from "react";
import { Image, Item } from "semantic-ui-react";

const SearchResult = (props) => (
  <Item.Group>
    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <div>{props.title}</div>
          <div>{props.description}</div>
          <div> {props.date}</div>
          <div>{props.rate}</div>
          <div> {props.topic}</div>
          <div> {props.version}</div>
          <div>{props.owner}</div>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />

      <Item.Content>
        <Item.Header as="a">Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src="/images/wireframe/short-paragraph.png" />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default SearchResult;
