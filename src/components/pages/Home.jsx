import React, { useState } from 'react';
import { CompanyTableItem } from '../organisms/CompanyTableItem';
import { useEffect } from 'react';
// import { companiesData } from '../../helpers/companiesData';
import GitHubButton from 'react-github-btn';
import useData from '../../hooks/useData';
import TagInput from '../molecules/TagInput';
import { motion } from 'framer-motion';

const container = {
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 1,
  },
};

export const Home = () => {
  //select filtra
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('');

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(() => {
    const storedCheckboxValue = localStorage.getItem('isCheckboxChecked');
    return storedCheckboxValue ? JSON.parse(storedCheckboxValue) : false;
  });

  const { data, isLoading } = useData();
  const [tags, setTags] = useState([]);

  //
  const [statuses, setStatuses] = useState(() => {
    const storedStatuses = localStorage.getItem('statuses');
    return storedStatuses ? JSON.parse(storedStatuses) : {};
  });

  const handleTagClick = (name) => {
    if (tags.includes(name)) {
      return;
    }

    setTags((prevTags) => [...prevTags, name]);
  };

  const handleStatusChange = (event, name) => {
    const newStatus = event.target.value;
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [name]: newStatus,
    }));
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prevValue) => {
      const newValue = !prevValue;
      localStorage.setItem('isCheckboxChecked', JSON.stringify(newValue));
      return newValue;
    });
  };

  useEffect(() => {
    localStorage.setItem('statuses', JSON.stringify(statuses));

    const storedCheckboxValue = localStorage.getItem('isCheckboxChecked');
    if (storedCheckboxValue) {
      setIsCheckboxChecked(JSON.parse(storedCheckboxValue));
    }
  }, [statuses, tags]);

  const [filteredData, setFilteredData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    const newData = data
      .filter((company) => {
        return !(selectedStatusFilter && statuses[company.name] !== selectedStatusFilter && selectedStatusFilter !== 'Wszystkie');
      })
      .filter((company) => {
        return !(tags.length > 0 && !company.tags.some((item) => tags.includes(item.toLowerCase())));
      })
      .filter((company) => {
        return !(isCheckboxChecked && statuses[company.name] === undefined);
      });
    setFilteredData(newData);
    setIsFiltered(true);
  }, [selectedStatusFilter, tags, isCheckboxChecked, isLoading]);

  return (
    <div className="h-auto min-h-screen bg-neutral-900 py-10">
      <div className="flex w-full flex-col items-center justify-center pb-10">
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent">
          <span className="text-neutral-300"></span> Lubelskie IT
        </div>

        <div className="mt-2 text-2xl font-semibold text-neutral-300">Baza Danych Lubelskich Firm IT</div>
        <div className="mt-10 flex flex-col items-center justify-center md:w-4/5 lg:w-4/5 ">
          <div className="flex gap-5 border-b-2 border-neutral-800/30 pb-10 sm:w-4/5 md:w-full lg:w-full">
            <TagInput tags={tags} setTags={setTags} />
          </div>

          <div className="mt-10 flex justify-between lg:w-full">
            <div className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleCheckboxChange} className="checkbox-primary checkbox mr-4" />
                <span onChange={handleCheckboxChange} className="label-text font-semibold text-neutral-300">
                  Pokaż tylko firmy do których rekrutujesz
                </span>
              </label>
            </div>

            <select className="text-md  select max-w-xs  bg-neutral-800/60 font-semibold text-neutral-400" onChange={(event) => setSelectedStatusFilter(event.target.value)}>
              <option disabled value="status">
                Status Rekrutacji
              </option>
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
                <tr className="border-neutral-800/60">
                  <th className="w-1/5 text-neutral-500">Firma</th>
                  <th className="w-1/5 text-neutral-500">Kontakt</th>
                  <th className="text-neutral-500">Tagi</th>
                  <th className="w-1/5 text-neutral-500">Twój Status Rekrutacji</th>
                </tr>
              </thead>

              {isLoading && isFiltered ? (
                <tr>Loading...</tr>
              ) : (
                <motion.tbody
                  variants={container}
                  initial="hidden"
                  animate="visible"
                  key={filteredData}
                >
                  {  
                    filteredData.map((company, i) => {
                      return <CompanyTableItem id={i} key={i} onClick={handleTagClick} name={company.name} email={'fake@gmail.com'} url={company.url} phone={'532 328 213'} tags={company.tags} status={statuses[company.name]} onChange={handleStatusChange} />;
                    })

                    // data.map((company, i) => {
                    // if (selectedStatusFilter && statuses[company.name] !== selectedStatusFilter && selectedStatusFilter !== 'Wszystkie') {
                    // return null;
                    // } else if (tags.length > 0 && !company.tags.some((item) => tags.includes(item.toLowerCase()))) {
                    // return null;
                    // } else if (isCheckboxChecked && statuses[company.name] === undefined) {
                    // return null;
                    // }
                    // return <CompanyTableItem id={i} key={i} onClick={handleTagClick} name={company.name} email={'fake@gmail.com'} url={company.url} phone={'532 328 213'} tags={company.tags} status={statuses[company.name]} onChange={handleStatusChange} />;
                    // })
                  }
                </motion.tbody>
              )}
            </table>
            {isLoading ? <></> : <div className="mb-3 w-auto border-t  border-neutral-800/60 py-4 text-center font-semibold  text-neutral-200">Dane z dnia 28.07.2023</div>}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 mt-10 flex w-full flex-col items-center justify-center border-t-2 border-neutral-800/80  bg-neutral-900 py-2">
        <div className="mb-2 text-sm font-semibold text-neutral-300">Wesprzyj rozbudowę projektu</div>
        <div>
          <GitHubButton href="https://github.com/it-db/lubelskie-it" className="" data-color-scheme="no-preference: dark-dimmed; light: dark-dimmed; dark: dark-dimmed;" data-size="medium" data-show-count="true" aria-label="Star it-db/lubelskie-it on GitHub">
            Star
          </GitHubButton>
        </div>
      </div>
    </div>
  );
};
