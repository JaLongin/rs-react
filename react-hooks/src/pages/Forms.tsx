import React, { useState } from "react";
import { Form } from "../components/Form";
import FormCard from "../components/FormCard";
import Cards from "../util/types/Cards";

function Forms() {
  const [pageState, setFormPageState] = useState([] as Cards[]);
  function updateFormsPage(card: Cards) {
    setFormPageState([...pageState, card]);
  }
  return (
    <div>
      <h2>Forms</h2>
      <Form updateFormPage={updateFormsPage} />
      <div>
        {pageState.map((card, index) => (
          <FormCard key={index} data={card} />
        ))}
      </div>
    </div>
  );
}
export default Forms;
