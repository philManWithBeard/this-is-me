import { useForm } from "react-hook-form";
import { useAppState } from "../Components/state";
import { Section, SectionRow } from "../Components/Forms/Section";
import { Button } from "../Components/Forms/Button";
import { Form } from "../Components/Forms/Form";
import Layout from "../Components/Layout/Layout";

const Confirmation = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const submitData = (data) => {
    console.info(data);
    // Submit data to the server
  };

  console.log(state);
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Confirm</h1>
      <Section url="/">
        <p>Dear *insert MP*,</p>
        <p>I am one of your constituents, my postcode is {state.postcode}.</p>
      </Section>
      <Section url="/who">
        <p>The high cost of housing affects: </p>
        <ul>
          {state.mePersonally ? <li>Me personally</li> : ""}
          {state.myChildren ? <li>My children</li> : ""}
          {state.myRelatives ? <li>My relatives</li> : ""}
          {state.myFriends ? <li>My friends</li> : ""}
          {state.myColleagues ? <li>My colleagues</li> : ""}.
        </ul>
      </Section>
      <Section url="/life">
        <p>This has an impact on my:</p>
        <ul>
          {state.mentalHealth ? <li>Mental health</li> : ""}
          {state.physicalHealth ? <li>Physical health"</li> : ""}
          {state.affordEssentials ? (
            <li>Ability to afford essentials like heating and eating</li>
          ) : (
            ""
          )}
          {state.nonEssentials ? (
            <li>
              Ability to afford non essentials like meeting friends and
              socialising
            </li>
          ) : (
            ""
          )}
        </ul>
      </Section>
      <Section url="/scale">
        <p>
          This issue
          {state.biggestIssue ? " is my biggest issue" : ""}
          {state.affectLot ? " affects me a lot" : ""}
          {state.affects ? " affects me" : ""}
          {state.affectLittle ? " affects me a little" : ""}
          {state.doesntAffect ? " doesn't affect me" : ""}.
        </p>
      </Section>
      <div className="d-flex justify-content-start">
        <Button>Submit</Button>
      </div>
    </Form>
  );
};

export default Confirmation;
