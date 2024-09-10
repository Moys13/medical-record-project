"use client";
import { useState } from "react";

export default async function Regulation() {
  const [collapse, SetCollapse] = useState(false);
  const handleCollapse = () => {
    if (collapse) {
      SetCollapse(false);
    } else {
      SetCollapse(true);
    }
  };

  return (
    <div
      tabIndex={0}
      className={`collapse collapse-plus ${
        collapse === true ? "collapse-open" : "collapse-close"
      } bg-base-200 border border-base-content my-5`}
      onClick={() => handleCollapse()}
    >
      <div className="collapse-title text-xl font-medium">
        Pendaftaran Pasien
      </div>
      <div className="collapse-content bg-base-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique
        alias adipisci deserunt aut error, quia, blanditiis maxime sit eos est?
        Distinctio modi corrupti voluptatibus suscipit! Reiciendis veniam
        delectus aut debitis voluptatum aliquam, labore nobis sunt impedit
        laborum recusandae vitae voluptatem quo accusamus quam, et atque,
        doloribus ullam quos fugiat dicta laudantium! Asperiores nulla dolor
        nostrum, quia ex dolorem quibusdam optio ratione maiores, error libero!
        Possimus quos labore qui est, totam nesciunt? Eum id at unde fugit
        reiciendis provident omnis, nihil doloribus delectus cupiditate
        voluptatibus, a recusandae! Explicabo reprehenderit sint quae autem.
        Eveniet excepturi, deleniti blanditiis ab minus architecto totam aliquam
        dolorum magni neque cupiditate facere quaerat unde laboriosam explicabo
        assumenda iusto possimus nostrum ex nihil. Nostrum placeat illo aut
        atque eaque voluptatum ducimus. Blanditiis quaerat deleniti cumque nihil
        laudantium repellendus inventore earum saepe soluta vero harum, qui illo
        a minus expedita autem. Quam nihil, molestiae non, nam neque vel earum
        harum voluptatum iste laboriosam illo alias amet dolorem deserunt, sit
        ullam possimus exercitationem est impedit cum maiores deleniti
        doloribus. Nobis molestias corporis asperiores consequatur quaerat ipsum
        fuga distinctio repudiandae perferendis quam, odio id eaque tempora
        voluptas autem dolorem soluta nam voluptatum reiciendis porro, iste
        reprehenderit. Distinctio quibusdam tempora quam?
      </div>
    </div>
  );
}
