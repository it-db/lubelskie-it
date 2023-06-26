import React, { useState } from 'react';
import { CompanyTableItem } from '../organisms/CompanyTableItem';
import { useEffect } from 'react';
import { companiesData } from '../../helpers/companiesData';

export const Home = () => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('');

  const [statuses, setStatuses] = useState(() => {
    const storedStatuses = localStorage.getItem('statuses');
    return storedStatuses ? JSON.parse(storedStatuses) : {};
  });

  const handleStatusChange = (event, name) => {
    const newStatus = event.target.value;
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [name]: newStatus,
    }));
  };

  useEffect(() => {
    localStorage.setItem('statuses', JSON.stringify(statuses));
  }, [statuses]);

  return (
    <div className="h-auto min-h-screen bg-neutral-900 py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-violet-700 tracking-tight">Lubelskie IT</div>
        <div className="text-2xl mt-2 font-semibold text-neutral-300">Baza Danych Lubelskich Firm IT</div>
        <div className="lg:w-4/5 md:w-4/5 mt-10 flex flex-col items-center justify-center ">
          <div className="lg:w-full md:w-full sm:w-full flex gap-3 border-b-2 border-neutral-800/30 pb-10">
            <input type="text" placeholder="Szukaj firm..." className="input outline-1 w-full bg-neutral-800/60 h-14 text-neutral-300 placeholder:text-neutral-100 text-lg placeholder:font-semibold " />
            <button className="btn bg-purple-600 h-14 w-28 text-neutral-300 hover:bg-purple-700  text-md font-bold">Szukaj</button>
          </div>

          <div className="lg:w-full flex justify-end mt-10">
            <select className="select  max-w-xs bg-neutral-800/60  text-neutral-400 text-md font-normal" onChange={(event) => setSelectedStatusFilter(event.target.value)}>
              <option disabled selected>
                Filtruj po Statusie Rekrutacji
              </option>
              <option value="Brak">Brak</option>
              <option value="Wysłane CV">Wysłane CV</option>
              <option value="Zaplanowana rozmowa">Zaplanowana rozmowa</option>
              <option value="Po rozmowie">Po rozmowie</option>
              <option value="Oczekiwanie na decyzję">Oczekiwanie na decyzję</option>
              <option value="Odrzucone">Odrzucone</option>
            </select>
          </div>

          <div className="overflow-x-auto w-full mt-5">
            <table className="table ">
              <thead>
                <tr className="border-neutral-800/60 ">
                  <th>Firma</th>
                  <th>Email</th>
                  <th>Numer</th>
                  <th>Tagi</th>
                  <th>Twój Status Rekrutacji</th>
                </tr>
              </thead>
              <tbody>
                {companiesData.map((company) => {
                  console.log(company.status, selectedStatusFilter);
                  if (selectedStatusFilter && statuses[company.name] !== selectedStatusFilter) {
                    return null;
                  }
                  return <CompanyTableItem key={company.name} name={company.name} email={company.email} phone={company.phone} tags={company.tags} status={statuses[company.name]} onChange={handleStatusChange} />;
                })}
              </tbody>
            </table>
          </div>

          <div className="w-full flex flex-col justify-center items-center mt-10  fixed bottom-0 bg-neutral-900 border-t-2 border-neutral-800/20 py-4">
            <div className="text-neutral-100 text-sm ">Dane z dnia 28.07.2023</div>
            <div className="text-neutral-100 text-sm ">Pomogliśmy Ci w procesie rekrutacji? Odwiedź naszego GitHuba!</div>
          </div>
        </div>
      </div>
    </div>
  );
};
