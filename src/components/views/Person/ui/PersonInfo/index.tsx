import { FC, Fragment } from "react";
import { IPersonInfoProps } from "../../types/personInfo.interface";

import styles from "./styles.module.sass";
import moment from "moment";
import Link from "next/link";
import { InfoBlock } from "@/components/common/InfoBlock";
import { Skeleton } from "@/components/ui/Skeleton";

const PersonInfo: FC<IPersonInfoProps> = ({ aboutPerson }) => {
  const info = [
    {
      title: "Карьера",
      content: (
        <>
          {aboutPerson.career ? (
            <>
              {aboutPerson.career.map((carrer, index) => (
                <Fragment key={carrer.value}>
                  {index ? ", " : ""}
                  {carrer.value}
                </Fragment>
              ))}
            </>
          ) : (
            "-"
          )}
        </>
      ),
    },
    { title: "Пол", content: <>{aboutPerson.sex ? aboutPerson.sex : "-"}</> },
    {
      title: "Рост",
      content: <>{aboutPerson.growth ? aboutPerson.growth : "-"}</>,
    },
    {
      title: "Дата Рождения",
      content: (
        <>
          {aboutPerson.birthday
            ? moment(aboutPerson.birthday).format("ll")
            : "-"}
        </>
      ),
    },
    {
      title: "Дата Смерти",
      content: (
        <>
          {aboutPerson.death
            ? moment(aboutPerson.death).format("DD.MM.YYYY")
            : "-"}
        </>
      ),
    },
    {
      title: "Всего фильмов",
      content: <>{aboutPerson.totalMovies ? aboutPerson.totalMovies : "-"}</>,
    },
    {
      title: <>{aboutPerson.sex === "Мужской" ? "Супруга" : "Супруг"}</>,
      content: (
        <>
          {aboutPerson.spouses?.length ? (
            <>
              {aboutPerson.spouses.map((spous) => (
                <Link href={`/name/${spous.id}`} key={spous.id}>
                  {spous.name}
                </Link>
              ))}
            </>
          ) : (
            "-"
          )}
        </>
      ),
    },
  ];

  return (
    <div className={styles.personAboutList}>
      <h4>
        {!aboutPerson.birthday ? (
          <Skeleton customStyles={{ width: "100px", height: "20px" }} />
        ) : (
          <>О персоне </>
        )}{" "}
      </h4>
      <InfoBlock infoContent={info} />
    </div>
  );
};

export default PersonInfo;
