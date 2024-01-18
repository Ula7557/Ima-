import classes from "./ActivityArbitrage.Table.module.scss";
import parse from "html-react-parser";
export default function ActivityArbitrageTable({
  object,
  object1,
  left,
  columns,
  data,
}) {
  
  return (
    <div>
      <div className={classes.ActivityArbitrageTable}>
        <div className={classes.ActivityArbitrageTable_item}>
          <table className={classes.laptop}>
            <tr className={classes.mediatab}>
              {!columns ? (
                <>
                  <th className={left ? classes.left : ""}>Ф.И.О. </th>
                  <th className={left ? classes.left : ""}>Должность </th>
                  <th className={left ? classes.left : ""}>
                    Дни и время приема{" "}
                  </th>
                </>
              ) : (
                <>
                  {columns.map((item, i) => (
                    <th key={i} className={left ? classes.left : ""}>
                      {item.name}
                    </th>
                  ))}
                </>
              )}
            </tr>
            {!!data ? (
             <tr className={classes.mediatab}>
                {data.map((item, i) => (
                  <td className={left ? classes.left : ""} key={i}>
                    {item}
                  </td>
                ))}
              </tr>
            ) : (
              <>
                {object.map((elem, i) => (
                  <tr key={i} className={classes.mediatab}>
                    <td className={left ? classes.left : ""} key={i}>
                      {elem.title}
                    </td>
                    <td className={left ? classes.left : ""} key={i}>
                      {elem.position}
                    </td>
                    <td className={left ? classes.left : ""} key={i}>
                      {elem.description && parse(elem.description)}
                    </td>
                    <td className={left ? classes.left : ""} key={i}>
                      {elem.email && parse(elem.email)}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </table>
        </div>
      </div>
      {/* {object1?.map((item) => (
          <div className={classes.ActivityArbitrageTable}>
            <div className={classes.ActivityArbitrageTable_item}>
              <div className={classes.mobaile}>
                {item.parent.map((elem, i) => (
                  <tr key={i}>
                    {elem.parchild.map((it, i) => (
                      <p key={i}>
                        {it.child1}:<span>{it.child}</span>
                      </p>
                    ))}
                  </tr>
                ))}
              </div>
            </div>
          </div>
        ))} */}
    </div>
  );
}
