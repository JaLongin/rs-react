import React, { Component } from "react";
import { Form } from "../components/Form";
import FormCard from "../components/FormCard";
import Cards from "../util/types/Cards";

type FormState = {
  cards: Cards[];
};

class Forms extends Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
    };
    this.updateFormsPage = this.updateFormsPage.bind(this);
  }
  updateFormsPage(card: Cards) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
    }));
  }
  render() {
    return (
      <div>
        <h2>Forms</h2>
        <Form updateFormPage={this.updateFormsPage} />
        <div>
          {this.state.cards.map((card) => (
            <FormCard key={card.name} data={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
