import React, { useState, useEffect } from 'react';
// import styles from './CV.module.css';
import CVIntroSection from '../../components/CVIntroSection/CVIntroSection';
import CVProgressSection from '../../components/CVProgressSection/CVProgressSection';

const mockedUsername = 'Dan';
const mockedPath = 'Front-end';

export default function CV() {
  const [username, setUsername] = useState('Alyx');
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    setUsername(mockedUsername);
    setUserdata({ ...userdata, path: mockedPath });
  }, []);

  return (
    <>
      <CVIntroSection username={username} path={userdata.path} />
      <CVProgressSection progress={userdata} />
    </>
  );
}
