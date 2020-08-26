import React, { useState, useEffect } from 'react';
// import styles from './CV.module.css';
import CVIntroSection from '../../components/CVIntroSection/CVIntroSection';
import CVProgressSection from '../../components/CVProgressSection/CVProgressSection';
import { roadmapApiUrl } from '../../environment';

const mockedUsername = 'Dan';

export default function CV() {
  const [username, setUsername] = useState('Alyx');
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setUsername(mockedUsername);
  }, []);

  useEffect(() => {
    const path = 'back';
    fetchSkill(path);
  }, []);

  const fetchSkill = (path) => {
    let fetchUrl = `${roadmapApiUrl}/all/${path}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((skills) => {
        setUserdata(skills);
      });
  };

  return (
    <>
      <CVIntroSection username={username} path={userdata.path} />
      <CVProgressSection data={userdata} />
    </>
  );
}
