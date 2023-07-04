import { useEffect, useState } from 'react';

export const TagInput = ({ tags, setTags, setHasFocus }) => {
  const [placeholder, setPlaceholder] = useState('Używaj tagów i szukaj wsród ponad 100 firm!');
  const [input, setInput] = useState('');

  const onChange = (e) => {
    handlePlaceholderChange();
    const { value } = e.target;
    var lastChar = value.substr(value.length - 1);
    setInput(value);
    const trimmedInput = input.trim();
    if ((lastChar === ' ' || lastChar === 'Enter') && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();

      setTags((prevState) => [...prevState, trimmedInput.toLowerCase()]);
      setInput('');
    }
  };

  const handlePlaceholderChange = () => {
    if (tags.length > 0) {
      setPlaceholder('');
    } else {
      setPlaceholder('Używaj tagów i szukaj wsród ponad 100 firm!');
    }
  };

  const onFocus = () => {
    setHasFocus(true);
  };

  const onBlur = () => {
    setHasFocus(false);
  };

  useEffect(() => {
    handlePlaceholderChange();
  }, [tags]);

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

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
    <div className="tagInput flex w-full max-w-full  items-center overflow-x-auto rounded-lg bg-neutral-800 pl-2 text-black">
      {tags.map((tag, index) => (
        <div key={index} className="ml-1 mr-1  flex h-8 items-center justify-center  rounded-lg bg-neutral-700/70 py-1 pl-3 text-center text-sm font-semibold text-neutral-50">
          {tag}
          <button onClick={() => deleteTag(index)} className=" text-md ml-3 cursor-pointer border-l-2  border-neutral-500/30 bg-transparent pl-3 pr-3 text-xs text-neutral-200 transition hover:text-neutral-50">
            x
          </button>
        </div>
      ))}
      <input value={input} onKeyDown={onKeyDown} onChange={onChange} onFocus={onFocus} onBlur={onBlur} type="text" placeholder={placeholder} className="input h-14 w-full bg-neutral-800 text-lg font-semibold text-neutral-100 placeholder:font-semibold placeholder:text-neutral-500  focus:outline-none " />
    </div>
  );
};
