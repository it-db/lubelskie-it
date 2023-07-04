import { useState } from 'react';
import { tagStyles } from '../helpers/tagStyles';

const allTags = ['Admin', 'Database', 'Frontend', 'Designer', 'Architect', 'Java', 'JS', 'ML', 'Mobile', 'PHP', 'Python', 'Scrum', 'Tester', 'Web', 'Embedded', '.NET', 'Salesforce', 'C++'];

export const TagPopup = ({ inputHasFocus, tags, onClick }) => {
  const [popupHasFocus, setPopupHasFocus] = useState(false);

  const onMouseOver = () => {
    setPopupHasFocus(true);
  };

  const onMouseOut = () => {
    setPopupHasFocus(false);
  };

  const handleClick = (tag) => {
    onClick(tag.toLowerCase());
  };

  return (
    <div onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`-mt-6 flex h-auto w-full py-4 ${inputHasFocus || popupHasFocus ? 'block' : 'hidden'} absolute top-24 flex-wrap items-center gap-2  rounded-lg border-2 border-neutral-800/40 bg-neutral-900 px-5  shadow-lg `}>
      {allTags.map((tag, index) => {
        if (!tags.includes(tag.toLowerCase())) {
          return (
            <button key={index} onClick={() => handleClick(tag)} className={`rounded-lg ${tagStyles[tag]} px-2 py-1 text-center text-sm font-semibold text-neutral-200 transition`}>
              {tag}
            </button>
          );
        }
      })}
    </div>
  );
};
