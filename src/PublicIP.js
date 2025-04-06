import { useEffect, useState } from 'react';

function PublicIP({ version }) {
  const [ip, setIP] = useState('Loading...');
  const isIPv6 = version === 'v6';

  useEffect(() => {
    const url = isIPv6 
      ? 'https://api64.ipify.org?format=json'
      : 'https://api.ipify.org?format=json';

    fetch(url)
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => {
        console.error(err);
        setIP('Error fetching IP');
      });
  }, [version]);

  return (
    <div>
      <p>Your Public IP ({version.toUpperCase()}): {ip}</p>
    </div>
  );
}

export default PublicIP;
