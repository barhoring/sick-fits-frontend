import { useState } from 'react';

export default function useForm(initial = {}) {
  // create an state object for our inputs
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      // when working with files, insert and the 0 index ?
      // that is how file upload work
      value[0] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  function resetForm() {
    setInputs(initial);
  }

  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
