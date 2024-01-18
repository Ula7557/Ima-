import React from "react";
import classes from "./IntergovernmentalAagreements.module.scss";
import FileCard from "../../../../components/FileCard";
export default function IntergovernmentalAagreements() {
  return (
    <div>
      <div
        className={` ${classes.IntergovernmentalAagreements_container_items} load-anim`}
      >
        <FileCard
          large={true}
          title="Соглашение между Правительством Республики Узбекистан и Правительством Российской Федерации о сотрудничестве в области охраны промышленной собственности"
          variant="pdf"
          memory="39Kb"
        />
        <FileCard
          large={true}
          title="Соглашение между Правительством Республики Узбекистан и Правительством Российской Федерации о сотрудничестве в области охраны промышленной собственности"
          variant="pdf"
          memory="39Kb"
        />
      </div>
      <div className={classes.IntergovernmentalAagreements_container_items}>
        <FileCard
          large={true}
          title="Соглашение между Правительством Республики Узбекистан и Правительством Российской Федерации о сотрудничестве в области охраны промышленной собственности"
          variant="pdf"
          memory="39Kb"
        />
        <FileCard
          large={true}
          title="Соглашение между Правительством Республики Узбекистан и Правительством Российской Федерации о сотрудничестве в области охраны промышленной собственности"
          variant="pdf"
          memory="39Kb"
        />
      </div>
    </div>
  );
}
