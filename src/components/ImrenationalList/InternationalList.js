import {React,useState} from 'react'
import classes from './InternationalList.module.scss'
import CollegiomMeetings from '../CollegiomMeetings'
export default function InternationalList(){
    let obj =[
        {
            title:'Международные конвеции',
            count: 2
        },
        {
            title:'Международные конвеции2',
            count: 3
        }
    ]
    const [open,setOpen]=useState(null)
    function toggle(i) {
        if(open===i){
            setOpen(null)
        }else{
            setOpen(i)
        }
        
    }
    return(
        <div className={classes.InternationalList}>
            {
                obj.map((elem,i)=>(
                <div className={classes.InternationalList_item}>
                    <div className={classes.InternationalList_item_title}>
                        <h1>{elem.title} <span>{elem.count} прикрепленных документов</span> </h1>
                        <button className={open === i ? classes.opens : classes.bts} onClick={()=>toggle(i)} ></button>
                    </div>
                    <div className={ open===i ?  classes.InternationalList_item_main :classes.close }>
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                        <CollegiomMeetings className={classes.module} text={''} title={'Будапештский договор о международном признании'} />
                    </div>
                </div>
                ))
            }

        </div>
    )
}