import React from 'react';

export const Home = () => {
  return (
    <div className="h-auto min-h-screen bg-neutral-900 py-10">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-600 to-violet-700 tracking-tight">Lubelskie IT</div>
        <div className="text-2xl mt-2 font-semibold text-neutral-300">Baza Danych Lubelskich Firm IT</div>
        <div className="lg:w-4/5 mt-10 flex flex-col items-center justify-center">
          <div className="lg:w-full md:w-full sm:w-full flex gap-3">
            <input type="text" placeholder="Szukaj firm..." className="input outline-1  w-full bg-neutral-800/60 h-14 text-neutral-300 placeholder:text-neutral-500 placeholder:font-semibold " />
            <button className="btn  bg-purple-600 h-14 w-28 text-neutral-300 hover:bg-purple-700 normal-case font-bold">Szukaj</button>
          </div>

          <div className="lg:w-full flex justify-end mt-12">
            <select className="select  max-w-xs bg-neutral-800/60  text-neutral-400 text-lg font-semibold ">
              <option disabled selected>
                Status
              </option>
              <option>Brak</option>
              <option>Brak odzewu</option>
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
                  <th>Twój Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-neutral-800/60 ">
                  <td>
                    <div>
                      <div className="font-bold text-xl text-neutral-300">Asseco</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300">asseco@gmail.com</div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300"> 521 128 128</div>
                  </td>
                  <td className="flex mt-2 gap-2 items-center">
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">React</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">JS</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">Frontend</div>
                  </td>
                  <td>
                    <select className="select w-full max-w-xs bg-neutral-900  text-neutral-300 text-lg font-semibold -ml-4">
                      <option disabled selected>
                        Wybierz
                      </option>
                      <option>Brak</option>
                      <option>Brak odzewu</option>
                    </select>
                  </td>
                </tr>

                <tr className="border-neutral-800/60 ">
                  <td>
                    <div>
                      <div className="font-bold text-xl text-neutral-300">Asseco</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300">asseco@gmail.com</div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300"> 521 128 128</div>
                  </td>
                  <td className="flex mt-2 gap-2 items-center">
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">React</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">JS</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">Frontend</div>
                  </td>
                  <td>
                    <select className="select w-full max-w-xs bg-neutral-900  text-neutral-300 text-lg font-semibold -ml-4">
                      <option disabled selected>
                        Wybierz
                      </option>
                      <option>Brak</option>
                      <option>Brak odzewu</option>
                    </select>
                  </td>
                </tr>

                <tr className="border-neutral-800/60 ">
                  <td>
                    <div>
                      <div className="font-bold text-xl text-neutral-300">Asseco</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300">asseco@gmail.com</div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300"> 521 128 128</div>
                  </td>
                  <td className="flex mt-2 gap-2 items-center">
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">React</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">JS</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">Frontend</div>
                  </td>
                  <td>
                    <select className="select w-full max-w-xs bg-neutral-900  text-neutral-300 text-lg font-semibold -ml-4">
                      <option disabled selected>
                        Wybierz
                      </option>
                      <option>Brak</option>
                      <option>Brak odzewu</option>
                    </select>
                  </td>
                </tr>

                <tr className="border-neutral-800/60 ">
                  <td>
                    <div>
                      <div className="font-bold text-xl text-neutral-300">Asseco</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300">asseco@gmail.com</div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300"> 521 128 128</div>
                  </td>
                  <td className="flex mt-2 gap-2 items-center">
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">React</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">JS</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">Frontend</div>
                  </td>
                  <td>
                    <select className="select w-full max-w-xs bg-neutral-900  text-neutral-300 text-lg font-semibold -ml-4">
                      <option disabled selected>
                        Wybierz
                      </option>
                      <option>Brak</option>
                      <option>Brak odzewu</option>
                    </select>
                  </td>
                </tr>

                <tr className="border-neutral-800/60 ">
                  <td>
                    <div>
                      <div className="font-bold text-xl text-neutral-300">Asseco</div>
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300">asseco@gmail.com</div>
                  </td>
                  <td>
                    <div className="font-semibold text-lg  text-neutral-300"> 521 128 128</div>
                  </td>
                  <td className="flex mt-2 gap-2 items-center">
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">React</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">JS</div>
                    <div className="font-semibold  text-neutral-300 border-2 rounded-xl text-center py-1 px-2 border-purple-600 text-sm">Frontend</div>
                  </td>
                  <td>
                    <select className="select w-full max-w-xs bg-neutral-900  text-neutral-300 text-lg font-semibold -ml-4">
                      <option disabled selected>
                        Wybierz
                      </option>
                      <option>Brak odzewu</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full flex flex-col justify-center items-center mt-10  fixed bottom-0 bg-neutral-900 border-t-2 border-neutral-800/20 py-4">
            <div className="text-neutral-400 text-m font-semibold ">Dane z dnia 28.07.2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
