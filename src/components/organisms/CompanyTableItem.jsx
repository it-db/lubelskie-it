import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LinkLogo } from '../../assets/link.svg';

const tagStyles = {
  Admin: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Database: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Frontend: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Designer: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Architect: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Java: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  JS: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  ML: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Mobile: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  PHP: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Python: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Scrum: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Tester: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Web: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Embedded: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  '.NET': ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  Salesforce: ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  'Słabe opinie': ' from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
  'C++': 'from-indigo-500 to-violet-600  hover:from-indigo-500 hover:to-violet-800',
};

export const CompanyTableItem = ({ name, email, phone, tags, url, status, onChange, onClick, id }) => {
  const list = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: (0.05 * id) % 0.7,
        type: 'tween',
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  useEffect(() => {
    const storedStatus = localStorage.getItem(name);
    if (storedStatus && status !== storedStatus) {
      onChange({ target: { value: storedStatus } }, name);
    }
  }, [name, status, onChange]);

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    onChange(event, name);
    localStorage.setItem(name, newStatus);
  };

  return (
    <motion.tr
      className="border-neutral-800/60 hover:bg-neutral-800/10"
      variants={list}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (0.05 * id) % 0.7,
        type: 'tween',
        duration: 0.3,
      }}
      // transition={{
      //   delay: (0.05 * id) % 0.7,
      //   type: 'tween',
      //   duration: 0.3,
      // }}
    >
      <td className="w-1/5">
        <a href={url} target="_blank" className="w-full  py-4 text-lg font-bold text-neutral-50 transition hover:text-violet-600">
          <div className="flex items-center hover:stroke-violet-600">
            <div>
              <LinkLogo className="mr-2  inline-block h-4 w-4 " />
            </div>
            {name}
          </div>
        </a>
      </td>

      <td className="w-1/5">
        <div className="text-md mb-1 font-semibold text-neutral-300">{email}</div>
        <div className=" text-md font-semibold text-neutral-300">{phone}</div>
      </td>

      <td className="my-3 flex w-auto flex-wrap items-center gap-2">
        {tags.map((tag, index) => {
          return (
            <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} key={index} onClick={() => onClick(tag.toLowerCase())} className={`rounded-lg bg-gradient-to-r ${tagStyles[tag]}  px-2 py-1 text-center text-sm font-semibold text-neutral-200`}>
              {tag}
            </motion.button>
          );
        })}
      </td>

      <td className="w-1/5">
        <select onChange={handleStatusChange} value={status} className="text-md trunkate select -ml-4 w-full max-w-xs bg-transparent font-semibold text-neutral-300">
          <option value="notdefined">Wybierz status</option>
          <option value="Interesująca">Interesująca</option>
          <option value="Wysłane CV">Wysłane CV</option>
          <option value="Zaplanowana rozmowa">Zaplanowana rozmowa</option>
          <option value="Po rozmowie">Po rozmowie</option>
          <option value="Oczekiwanie na decyzję">Oczekiwanie na decyzję</option>
          <option value="Odrzucone">Odrzucone</option>
        </select>
      </td>
    </motion.tr>
  );
};
