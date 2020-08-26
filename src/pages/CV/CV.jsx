import React, { useState, useEffect } from 'react';
import styles from './CV.module.css';
import CVIntroSection from '../../components/CVIntroSection/CVIntroSection';
import CVProgressSection from '../../components/CVProgressSection/CVProgressSection';

const mockedUsername = 'Dan';

export default function CV() {
  const [username, setUsername] = useState('Alyx');
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    setUsername(mockedUsername);
  }, []);

  return (
    <>
      <CVIntroSection username={username} />
      <CVProgressSection progress={userdata} />
    </>
  );
}
