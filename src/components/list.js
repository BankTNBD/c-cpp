"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/components/list.module.css';


export default function List() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/BankTNBD/c-cpp-data/refs/heads/main/list.json');
            setList(response.data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className={styles.listcontainer}>
                <h1 className={styles.loading}>Loading...</h1>
            </div>
        );
    }

    return (
        <div className={styles.listcontainer}>
            <h2>รวมข้อสงสัย</h2>
            {error && <div>Error: {error}</div>}
            <ul className={styles.list}>
                {list.map(item => (
                    <li key={item.id} /*className={styles.disable}*/>
                        <span className={styles.circle}></span>
                        <a href={`/view/${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}