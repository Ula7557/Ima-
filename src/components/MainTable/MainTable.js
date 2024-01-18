import Recat from 'react'
import classes from './MainTable.module.scss'
export default function MainTable({title,text}) {
    return(
        <div className={classes.MainTable_table}>
            <table>
                <tr>
                    {
                        title.map((item,i)=>(
                            <th key={i} > {item.subTitle} </th>
                        ))
                    }
                </tr>
                <tr>
                    {
                        text.map((elem,i)=>(
                            <td key={i}  >  {elem.subText}</td>
                        ))
                    }
                </tr>
            </table>
        </div>
    )
    
} 