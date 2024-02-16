import { useForm } from "react-hook-form";
import { useAppState } from "../Components/state";
import { Section, SectionRow } from "../Components/Forms/Section";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";

const Confirmation = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section url="/">
        <SectionRow>
          <div>
            I am one of your constituents, my postcode is {state.postcode}
          </div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};

export default Confirmation;
