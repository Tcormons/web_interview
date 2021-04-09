import React, { useReducer } from "react";
import ReactDOM from "react-dom";
// import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const reducer = (state, action) => {
  switch (action.parentKey) {
    case "owner":
      return {
        ...state,
        owner: { ...state.owner, [action.key]: action.newValue },
      };
    case "address":
      return {
        ...state,
        address: { ...state.address, [action.key]: action.newValue },
      };
    default:
      return {
        ...state,
        [action.key]: action.newValue,
      };
  }
};

const steps = ["Client Info", "Logo", "Branding", "App Store"];

const dropDownSteps = [
  { label: "Client Info", value: "Client Info" },
  { label: "Client Info", value: "Client Info" },
  { label: "Client Info", value: "Client Info" },
  { label: "Client Info", value: "Client Info" },
];

const App = () => {
  const [object, setObject] = useReducer(reducer, {
    name: "",
    eSpace: "",
    subscription: {},
    owner: {
      name: "",
      email: "",
      phone: "",
    },
    address: {
      street: "",
      unit: "",
      city: "",
      country: "",
      zipCode: "",
    },
  });

  const handleInputChange = (newValue, key, parentKey) => {
    setObject({ key, newValue, parentKey });
  };

  const handleDropdownChange = (newValue, key, parentKey) => {
    setObject({ key, newValue, parentKey });
  };

  const handleSave = () => {
    console.log({ object });
  };

  return (
    <div className="bg-black h-full w-full flex justify-center overflow-auto">
      <div className="w-full">
        <NavBar />
        <div className="p-10">
          <div className="p-10">
            ADD NEW CLIENT
            <ProgressTracker steps={steps} />
          </div>
          <div>
            <CollapsibleSection title="Overview">
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Company Name"
                  placeholder="Company Name"
                  value={object.name}
                  onChange={(newValue) => handleInputChange(newValue, "name")}
                />
                <Input
                  className="w-full p-5"
                  label="eSpace Name*"
                  placeholder="eSpace Name"
                  value={object.eSpace}
                  onChange={(newValue) => handleInputChange(newValue, "eSpace")}
                />
              </div>
              <div className="flex justify-between">
                <Dropdown
                  className="w-1/2 p-5"
                  label="Subscription*"
                  value={object.subscription}
                  options={dropDownSteps}
                  onChange={(newValue) =>
                    handleDropdownChange(newValue, "subscription")
                  }
                />
              </div>
            </CollapsibleSection>
          </div>
          <hr />
          <div>
            <CollapsibleSection title="Owner Information">
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Primary Owner"
                  placeholder="Primary Owner"
                  value={object.owner.name}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "name", "owner")
                  }
                />
                <Input
                  className="w-full p-5"
                  label="Primary Owner Email"
                  placeholder="Primary Owner Email"
                  value={object.owner.email}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "email", "owner")
                  }
                />
              </div>
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Primary Owner Phone"
                  placeholder="Primary Owner Phone"
                  value={object.owner.phone}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "phone", "owner")
                  }
                />
              </div>
            </CollapsibleSection>
          </div>
          <hr />
          <div>
            <CollapsibleSection title="Location Information">
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Street Address*"
                  placeholder="Street Address"
                  value={object.address.street}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "street", "address")
                  }
                />
                <Input
                  className="w-full p-5"
                  label="City"
                  placeholder="City"
                  value={object.address.city}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "city", "address")
                  }
                />
              </div>
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Suit/Unit"
                  placeholder="Suit/Unit"
                  value={object.address.unit}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "unit", "address")
                  }
                />
                <Dropdown
                  className="w-full p-5"
                  label="Country"
                  options={dropDownSteps}
                  value={object.address.country}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "country", "address")
                  }
                />
              </div>
              <div className="flex justify-between">
                <Input
                  className="w-full p-5"
                  label="Postal Code"
                  placeholder="Postal Code"
                  value={object.address.zipCode}
                  onChange={(newValue) =>
                    handleInputChange(newValue, "zipCode", "address")
                  }
                />
              </div>
            </CollapsibleSection>
          </div>
          <div className="p-10">
            <Button title="Save" onClick={handleSave} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
