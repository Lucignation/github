import { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext(null);

export const UseSearchContext = ({ children }) => {
  const [search, setSearch] = useState('');

  const [owners, setOwners] = useState('');
  const [ownersState, setOwnersState] = useState(false);
  const [repos, setRepos] = useState('');
  const [created, setCreated] = useState('');
  const [result, setResult] = useState([]);

  const value = useMemo(
    () => ({
      search,
      setSearch,
      owners,
      setOwners,
      ownersState,
      setOwnersState,
      repos,
      setRepos,
      created,
      setCreated,
      result,
      setResult,
    }),
    [
      search,
      setSearch,
      owners,
      setOwners,
      ownersState,
      setOwnersState,
      repos,
      setRepos,
      created,
      setCreated,
      result,
      setResult,
    ]
  );

  console.log(value);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
