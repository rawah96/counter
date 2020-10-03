import React, {useState, useEffect} from 'react'
import './DayNumber.css'
import CheckIcon from '@material-ui/icons/Check';

function DayNumber() {
    const [day, setDay] = useState(1);
    const [date, setDate] = useState('');
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    useEffect(() => {
        setDate(today);
    }, []);

    useEffect(() => {
        const parsedCount = Number(localStorage.getItem("day") || 0)
        setDay(parsedCount)
      }, [])

    useEffect(() => {
        localStorage.setItem("day", day)
      }, [day])
    
    
    return (
        <div className="day-count">
            <h2 className="date">Today's Date: <span>{date}</span></h2>
            <br />
            <h2>Days Completed: <span>{day}</span></h2>
            <br />            
            <div className="btns">
                <button 
                className="completed-btn"
                onClick={() => setDay(c => c + 1)}> day {day + 1} done</button>
                <button 
                className="reset-btn"
                onClick={() => setDay(0)}>reset</button>
            </div>
            <h2>Days To Go: <span>{40-day}</span></h2>
        </div>
    )
}

export default DayNumber
