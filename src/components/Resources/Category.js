import React from "react";

import { SkeletonLine } from "../UI/Skeleton";

import styles from "./Category.module.css";

export default function ({ title = "", resources = [], skeleton = false }) {
  function renderResources() {
    return resources.map(({ title, category, link }) => {
      return (
        <div className="groupItem">
          <h3 className={styles.resourceTitle}>{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link}
          </a>
          <span className="label">{category}</span>
        </div>
      );
    });
  }

  if (skeleton) {
    return (
      <div className="py-5 text-left resource-card">
        <h2 className="groupTitle">
          <SkeletonLine />
        </h2>
        <div className="groupItem">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </div>
        <div className="groupItem">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="groupTitle">{title}</h2>
      {renderResources()}
    </div>
  );
}
