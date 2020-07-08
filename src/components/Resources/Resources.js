import React, { useState, useEffect } from "react";
import Category from "./Category";
import axios from "axios";

import styles from "./Resources.module.css";

export default function () {
  const [resources, setResources] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const resp = await axios.get("/.netlify/functions/allResources");

      const newResources = await resp.data.map((resp) => resp.data);
      const newCategories = [
        ...new Set(newResources.map((resource) => resource.topic)),
      ];

      setResources(newResources);
      setCategories(newCategories);
    };

    fetchResources();
  }, []);

  function renderCategories() {
    categories.map((category) => {
      const categoryResources = resources.filter(
        (resource) => resource.topic === category
      );

      return <Category title={category} items={categoryResources} />;
    });

    if (categories.length < 1) {
      return (
        <>
          <Category skeleton={true} />
          <Category skeleton={true} />
          <Category skeleton={true} />
          <Category skeleton={true} />
        </>
      );
    }

    return categories.map(({ title, resources }) => {
      return <Category key={title} title={title} resources={resources} />;
    });
  }

  return (
    <div>
      <h1 className={`title5 ${styles.pageTitle}`}>Resources</h1>
      <a
        href="https://forms.gle/CVMbXaZjVk1tnwjDA"
        target="_blank"
        className={`btn primary ${styles.btn}`}
        rel="noopener noreferrer"
      >
        Add Educational Material
      </a>
      <div className={styles.grid}>{renderCategories()}</div>
    </div>
  );
}
