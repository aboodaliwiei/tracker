
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';

const AlertHistory = () => {
  const [alerts, setAlerts] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const q = query(collection(db, 'alerts'), where('email', '==', user.email));
        const querySnapshot = await getDocs(q);
        const userAlerts = querySnapshot.docs.map(doc => doc.data());
        setAlerts(userAlerts);
      }
    });
  }, []);

  return (
    <div>
      <h2>Alert History</h2>
      {userEmail ? (
        alerts.length > 0 ? (
          <ul>
            {alerts.map((alert, index) => (
              <li key={index}>
                Price: {alert.price}, Triggered at: {new Date(alert.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : <p>No alerts found.</p>
      ) : <p>Please log in to see your alert history.</p>}
    </div>
  );
};

export default AlertHistory;
