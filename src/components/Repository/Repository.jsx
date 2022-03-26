import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';

const Repository = () => {
  const { search, result } = useContext(SearchContext);
  const [repos, setRepos] = useState([]);

  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;

  const token = username + ':' + password;

  const headers = {
    Authorization: 'Bearer ' + token.toString('base64'),
  };

  useEffect(() => {
    const getRepo = async () => {
      const repo = await result.map(
        async (user) =>
          await axios.get(`https://api.github.com/users/${user?.login}/repos`, {
            method: 'GET',
            headers: headers,
          })
      );
      //   setRepos(repo);
      console.log(await repo);
    };

    getRepo();
  }, []);

  //   console.log(repos.data.length);

  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default Repository;
