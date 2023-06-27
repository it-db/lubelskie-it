import React, { useEffect } from 'react';

export const CompanyTableItem = ({ name, email, phone, tags, url, status, onChange }) => {
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
    <tr className="border-neutral-800/60">
      <td className="w-1/5">
        <a href={url} target="_blank" className="text-lg font-bold text-neutral-50 transition hover:text-violet-600">
          {name}
        </a>
      </td>

      <td className="w-1/5">
        <div className="text-md mb-1 font-semibold text-neutral-300">{email}</div>
        <div className=" text-md font-semibold text-neutral-300">{phone}</div>
      </td>

      <td className="my-3 flex w-auto flex-wrap items-center gap-2">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="rounded-lg  bg-gradient-to-r from-purple-600 to-violet-700 px-2 py-1 text-center text-sm font-semibold text-neutral-300">
              {tag}
            </div>
          );
        })}
      </td>

      <td className="w-1/5">
        <select defaultValue={status} onChange={handleStatusChange} className="text-md trunkate select -ml-4 w-full max-w-xs bg-neutral-900 font-semibold text-neutral-300">
          <option disabled selected>
            Wybierz status
          </option>
          <option value="Wysłane CV">Wysłane CV</option>
          <option value="Zaplanowana rozmowa">Zaplanowana rozmowa</option>
          <option value="Po rozmowie">Po rozmowie</option>
          <option value="Oczekiwanie na decyzję">Oczekiwanie na decyzję</option>
          <option value="Odrzucone">Odrzucone</option>
        </select>
      </td>
    </tr>
  );
};
