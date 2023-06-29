import { useEffect, useState } from 'react';

const TagInput = ({ tags, setTags }) => {
  const [placeholder, setPlaceholder] = useState('Używaj tagów i szukaj wsród ponad 100 firm!');
  const [input, setInput] = useState('');

  const onChange = (e) => {
    handlePlaceholderChange();
    const { value } = e.target;
    setInput(value);
  };

  const handlePlaceholderChange = () => {
    if (tags.length > 0) {
      setPlaceholder('');
    } else {
      setPlaceholder('Używaj tagów i szukaj wsród ponad 100 firm!');
    }
  };

  useEffect(() => {
    handlePlaceholderChange();
  }, [tags]);

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if ((key === ' ' || key === 'Enter') && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();

      setTags((prevState) => [...prevState, trimmedInput.toLowerCase()]);
      setInput('');
    }

    if (key === 'Backspace' && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setTags(tagsCopy);
      setInput(poppedTag);
    }
  };

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <div className="tagInput flex w-full  max-w-full items-center overflow-x-scroll rounded-lg bg-neutral-800 pl-2 text-black">
      {tags.map((tag, index) => (
        <div key={index} className="ml-1 mr-1  flex h-8 items-center justify-center  rounded-lg bg-neutral-700/80 py-1 pl-3 text-center text-sm font-semibold text-neutral-50">
          {tag}
          <button onClick={() => deleteTag(index)} className=" text-md ml-3 cursor-pointer border-l-2  border-neutral-500/30 bg-transparent pl-3 pr-3 text-xs text-neutral-200 transition hover:text-neutral-50">
            x
          </button>
        </div>
      ))}
      <input value={input} onKeyDown={onKeyDown} onChange={onChange} type="text" placeholder={placeholder} className="input h-14 w-full bg-neutral-800 text-lg font-semibold text-neutral-300 placeholder:font-semibold placeholder:text-neutral-500  focus:outline-none " />
    </div>
  );
};

export default TagInput;
