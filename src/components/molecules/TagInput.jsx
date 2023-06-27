import { useState } from 'react';

const TagInput = ({ tags, setTags }) => {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
      };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();
      
        if (key === ' ' && trimmedInput.length && !tags.includes(trimmedInput)) {
          e.preventDefault();
          setTags(prevState => [...prevState, trimmedInput]);
          setInput('');
        }

        if (key === "Backspace" && !input.length && tags.length) {
            e.preventDefault();
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
        
            setTags(tagsCopy);
            setInput(poppedTag);
          }
        //   console.log(tags)
      };
    
    return(
        <div className='tagInput bg-neutral-800 flex  items-center overflow-x-scroll w-full max-w-full pl-2 rounded text-black'>
            {tags.map((tag) => (
                <div className="h-8 flex justify-center items-center rounded-lg  bg-gradient-to-r from-purple-600 to-violet-700 px-2 py-1 text-center text-sm font-semibold text-neutral-300 mr-2">
                  {tag}
                  <button onClick={() => deleteTag(index)} className='flex p-1 border-0 bg-transparent cursor-pointer text-white'>x</button>
               </div>
            ))}
            <input value={input} onKeyDown={onKeyDown} onChange={onChange} type="text" placeholder="Szukaj wpisując nazwy firm lub technologie..." className="input h-14 w-full bg-neutral-800/60 text-lg font-semibold text-neutral-300 placeholder:font-semibold placeholder:text-neutral-500  focus:outline-none " />
        </div>
    )
}

export default TagInput;