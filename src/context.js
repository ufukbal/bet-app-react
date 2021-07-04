import React, { useState, useEffect, useContext } from 'react';

const AppContext = React.createContext();
const url = './bulten_data.json';

const AppProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const bulten = await response.json();

      if (bulten.Events) {
        const newEvents = Object.keys(bulten.Events).map((item) => {
          const newItem = bulten.Events[item];
          const { D, C, T, DAY, LN, NID, N } = newItem;
          return {
            name: N,
            date: D,
            code: C,
            time: T,
            day: DAY,
            league: LN,
            nid: NID,
            mbs: newItem.OCG[1].MBS,

            rat1: newItem.OCG[1].OC[0].O,
            name1: newItem.OCG[1].OC[0].N,
            ratX: newItem.OCG[1].OC[1].O,
            nameX: newItem.OCG[1].OC[1].N,
            ratAlt: newItem.OCG[5].OC[25].O,
            nameAlt: newItem.OCG[5].OC[25].N,
            ratUst: newItem.OCG[5].OC[26].O,
            nameUst: newItem.OCG[5].OC[26].N,
            name1X: newItem.OCG[2].OC[3]?.N,
            name12: newItem.OCG[2].OC[4]?.N,
            nameX2: newItem.OCG[2].OC[5]?.N,
            rat1X: newItem.OCG[2].OC[3]?.O,
            rat12: newItem.OCG[2].OC[4]?.O,
            ratX2: newItem.OCG[2].OC[5]?.O,
          };
        });
        setData(newEvents);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }

  const addEvents = (evnt) => {
    setEvents((events) => [...events, evnt]);
  };
  const removeEvents = (evnt) => {
    setEvents(
      events.filter(
        (item) => item.event.nid !== evnt.event.nid || item.rat !== evnt.rat
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        events,
        data,
        addEvents,
        removeEvents,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
