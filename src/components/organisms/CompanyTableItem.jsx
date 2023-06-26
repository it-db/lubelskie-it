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
          <div className="font-bold text-xl text-neutral-100">{name}</div>
        </div>
      </td>
      <td>
        <div className="font-semibold text-lg text-neutral-300">{email}</div>
      </td>
      <td>
        <div className="font-semibold text-lg text-neutral-300">{phone}</div>
      </td>
      <td className="flex mt-2 gap-2 items-center">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="font-semibold text-neutral-300 border-2 rounded-lg text-center py-1 px-2 border-purple-600 text-sm">
              {tag}
            </div>
          );
        })}
      </td>
      <td>
        <select defaultValue={status} onChange={handleStatusChange} className="select w-full max-w-xs bg-neutral-900 text-neutral-300 text-lg font-semibold -ml-4">
          <option disabled selected>
            Wybierz status
          </option>
          <option value="Brak">Brak</option>
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
