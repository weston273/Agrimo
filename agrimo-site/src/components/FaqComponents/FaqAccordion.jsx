import "./FaqAccordion.css";

function FaqAccordion({ question, answer, open }) {
  return (
    <details className="faq-item" open={open}>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

export default FaqAccordion;
