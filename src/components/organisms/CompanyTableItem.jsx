import React, { useEffect } from 'react';

export const CompanyTableItem = ({ name, email, phone, tags, status, onChange }) => {
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
      <td>
        <div>
          <div className="text-xl font-bold text-neutral-50">{name}</div>
        </div>
      </td>
      <td>
        <div className="text-lg font-semibold text-neutral-300">{email}</div>
      </td>
      <td>
        <div className=" text-lg font-semibold text-neutral-300">{phone}</div>
      </td>
      <td className="mt-2 flex items-center gap-2">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="rounded-lg  bg-gradient-to-r from-purple-600 to-violet-700 px-2 py-1 text-center text-sm font-semibold text-neutral-300">
              {tag}
            </div>
          );
        })}
      </td>
      <td>
        <select defaultValue={status} onChange={handleStatusChange} className="select -ml-4 w-full max-w-xs bg-neutral-900 text-lg font-semibold text-neutral-300">
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
