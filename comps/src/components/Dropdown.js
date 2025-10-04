import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  //this makes the dropdown close when user clicks on the document red
  useEffect(() => {
    const handler = (event) => {
        //check to see if we have ref to a div or not
        //IF NOT 👇
      if (!divEl.current) {
        return;
      }
      //ELSE 👇
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);
    //cleanup
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    //simple way to do it => setIsOpen(!isOpen); red
    //Best way to do it 👇 Just incase the user clicks the dropdown very fast red
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    //CLOSE DROPDOWN
    setIsOpen(false);
    //WHAT OPTION THE USER CLICKED ON?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover: bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //NOTE red
  //   let content = 'Select...';
  //   if (value) {
  //     content = value.label;
  //   }
  // OR
  //{value?.label || 'Select...'}

  return (
    <div
      ref={divEl}
      className="relative"
      style={{ display: "inline-block", width: "12rem", flexShrink: 0 }}
    >
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
        style={{ width: "12rem" }}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-2xl" />
      </Panel>

      {isOpen && (
        <Panel
          className="absolute top-full left-0 mt-1"
          style={{ width: "12rem" }}
        >
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
