import React, { useState } from 'react';
import { CompanyTableItem } from '../organisms/CompanyTableItem';
import { useEffect } from 'react';
// import { companiesData } from '../../helpers/companiesData';
import GitHubButton from 'react-github-btn';
import useData from '../../hooks/useData';

export const Home = () => {
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

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

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  useEffect(() => {
    localStorage.setItem('statuses', JSON.stringify(statuses));
  }, [statuses]);
  console.log('before useData');
  const { data, isLoading } = useData();
  console.log(data, isLoading);
  return (
    <div className="h-auto min-h-screen bg-neutral-900 py-10">
      <div className="flex w-full flex-col items-center justify-center pb-10">
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent">
          <span className="text-neutral-300"></span> Lubelskie IT
        </div>
        <div className="mt-2 text-2xl font-semibold text-neutral-300">Baza Danych Lubelskich Firm IT</div>
        <div className="mt-10 flex flex-col items-center justify-center md:w-4/5 lg:w-4/5 ">
          <div className="flex gap-5 border-b-2 border-neutral-800/30 pb-10 sm:w-4/5 md:w-full lg:w-full">
            <input type="text" placeholder="Szukaj firm lub technologii..." className="input h-14 w-full bg-neutral-800/60 text-lg font-semibold text-neutral-300 outline-1 placeholder:font-semibold placeholder:text-neutral-400   " />
            <button className="text-md btn h-14 w-28 bg-neutral-800/60 font-bold text-neutral-50 transition duration-150 ease-linear hover:bg-violet-700 ">Szukaj</button>
          </div>

          <div className="mt-10 flex justify-between lg:w-full">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} className="checkbox-primary checkbox mr-4" />
                <span onChange={handleCheckboxChange} className="label-text font-semibold text-neutral-300">
                  Pokaż tylko firmy do których rekrutuje
                </span>
              </label>
            </div>

            <select className="text-md  select max-w-xs  bg-neutral-800/60 font-semibold text-neutral-400" onChange={(event) => setSelectedStatusFilter(event.target.value)}>
              <option disabled>Status Rekrutacji</option>
              <option value="Wszystkie">Wszystkie</option>
              <option value="Wysłane CV">Wysłane CV</option>
              <option value="Zaplanowana rozmowa">Zaplanowana rozmowa</option>
              <option value="Po rozmowie">Po rozmowie</option>
              <option value="Oczekiwanie na decyzję">Oczekiwanie na decyzję</option>
              <option value="Odrzucone">Odrzucone</option>
            </select>
          </div>

          <div className="mt-5 w-full overflow-x-auto">
            <table className="table ">
              <thead>
                <tr className="border-neutral-800/60 ">
                  <th className="text-neutral-500">Firma</th>
                  <th className="text-neutral-500">Kontakt</th>
                  <th className="text-neutral-500">Tagi</th>
                  <th className="text-neutral-500">Twój Status Rekrutacji</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>Loading...</tr>
                ) : (
                  data.map((company) => {
                    if (selectedStatusFilter && statuses[company.name] !== selectedStatusFilter && selectedStatusFilter !== 'Wszystkie') {
                      return null;
                    } else if (isCheckboxChecked && statuses[company.name] === undefined) {
                      return null;
                    }
                    return <CompanyTableItem key={company.name} name={company.name} email={'fake@gmail.com'} url={company.url} phone={'532 328 213'} tags={company.tags} status={statuses[company.name]} onChange={handleStatusChange} />;
                  })
                )}
              </tbody>
            </table>
            <div className="mb-3 w-auto border-t  border-neutral-800/60 py-4 text-center font-semibold  text-neutral-200">Dane z dnia 28.07.2023</div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 mt-10 flex w-full flex-col items-center justify-center border-t-2 border-neutral-800/80  bg-neutral-900 py-2">
        <div className="mb-2 text-sm font-semibold text-neutral-300">Wesprzyj projekt na GitHubie!</div>
        <div>
          <GitHubButton href="https://github.com/it-db/lubelskie-it" className="" data-color-scheme="no-preference: dark-dimmed; light: dark-dimmed; dark: dark-dimmed;" data-size="medium" data-show-count="true" aria-label="Star it-db/lubelskie-it on GitHub">
            Star
          </GitHubButton>
        </div>
      </div>
    </div>
  );
};
