"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/components/content.module.css'

export default function Content({ id }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://raw.githubusercontent.com/BankTNBD/c-cpp-data/refs/heads/main/data/${String(id).padStart(4, '0')}/index.html`);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    let markup = { __html: data };

    return (
        <div className={styles.container} dangerouslySetInnerHTML={markup}>
        </div>
    );
}
