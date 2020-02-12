import React from 'react';
// import Calendar from 'react-calendar/dist/entry.nostyle'
import '../App.css';

export default function Calcul(props) {

    //la date ou ce déroule la course
    var dateCourse = new Date(props.date_course)
    dateCourse.setHours(12)

    //Détecter quel jour de la semaine tombe la course
    var dayCourse = dateCourse.getDay()-1
    //Dimanche vaut -1 donc on le change en 6
    if(dayCourse === -1){
        var dayCourse = 6
    }

    //La date du Lundi de la semaine ou ce passe la course
    var mondayCourse = new Date(dateCourse.getFullYear(), dateCourse.getMonth(), dateCourse.getDate() - dayCourse)

    //Détermine le nombre de jours entre le premier et le dernier Lundi
    var week = (props.week_course - 1)*7
    //Le premier Lundi du programme (Donc le Lundi de la semaine 1)
    var dayoneCourse = new Date(mondayCourse.getFullYear(), mondayCourse.getMonth(), mondayCourse.getDate() - week)

    //Calendar
    
    let className = 'box semaineplus box-type1'
    let classNameNd = 'box semaineplus box-type2'
    if(props.week_course >= 14){
        className += ' show';
        classNameNd += ' show';
    }

    var fracCourt = Math.round(props.dist_course*0.05)
    var fracLong = fracCourt*0.5
    var tempsmin = props.temps_course*60

    //

    if(props.week_course != null && props.date_course != null && props.dist_course != null && props.temps_course != null && props.temps_course != null){
        return (
            <div>
                <h4>Début programme : {dayoneCourse.toDateString()} | Jour Course : {dateCourse.toDateString()}</h4>
                <div className="calendar">
                    <div className="row-box">
                        <div className={className}>
                            <h2>Semaine 14</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 30" + R30") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.16)} min</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.21)} +5LD</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.32)} min</p>
                        </div>
                        <div className={classNameNd}>
                            <h2>Semaine 13</h2>
                            <h3>Fractionné Court</h3>
                            <p>(7 x 30" + R30") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(5 x 3' + R1'30") x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.35)} min</p>
                        </div>
                        <div className="box box-type3">
                            <h2>Semaine 12</h2>
                            <h3>Fractionné Court</h3>
                            <p>(5 x 40" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.2)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(4 x 4' + R2') x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.4)} min</p>
                        </div>
                        <div className="box box-type4">
                            <h2>Semaine 11</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 40" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.22)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(3 x 5' + R2'30") x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.43)} min</p>
                        </div>
                        <div className="box box-type3">
                            <h2>Semaine 10</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 50" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.21)} +5LD</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.45)} min</p>
                        </div>
                        <div className="box box-type4">
                            <h2>Semaine 9</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 1' + R1') x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.22)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(3 x 6' + R3) x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.47)} min</p>
                        </div>
                        <div className="box box-type1">
                            <h2>Semaine 8</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 50" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.21)} +5LD</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.45)} min</p>
                        </div>
                        <div className="box box-type2">
                            <h2>Semaine 7</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 1' + R1') x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.22)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(3 x 6' + R3') x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.47)} min</p>
                        </div>
                        <div className="box box-type1">
                            <h2>Semaine 6</h2>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 40" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.15)} min</p>
                            <h3>Course</h3>
                            <p>{Math.round(props.dist_course*0.5)} Km</p>
                        </div>
                        <div className="box box-type2">
                            <h2>Semaine 5</h2>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.16)} min</p>
                            <h3>Fractionné Court</h3>
                            <p>(7 x 30" + R30") x {fracCourt}</p>
                            <h3>Fractionné Long</h3>
                            <p>(3 x 10' + R1'30") x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.53)} min</p>
                        </div>
                        <div className="box box-type3">
                            <h2>Semaine 4</h2>
                            <h3>Fractionné Court</h3>
                            <p>(7 x 1' + R1') x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(2 x 15' + R2') x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.54)} min</p>
                        </div>
                        <div className="box box-type4">
                            <h2>Semaine 3</h2>
                            <h3>Fractionné Court</h3>
                            <p>(7 x 1' + R1') x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Fractionné Long</h3>
                            <p>(2 x 15' + R2') x {fracLong}</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.54)} min</p>
                        </div>
                        <div className="box box-type3">
                            <h2>Semaine 2</h2>
                            <h3>Fractionné Court</h3>
                            <p>(6 x 40" + R40") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.18)} min</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.21)} +5LD</p>
                            <h3>Sortie Longue</h3>
                            <p>{Math.round(tempsmin*0.35)} min</p>
                        </div>
                        <div className="box box-type4">
                            <h2>Semaine 1</h2>
                            <h3>Fractionné Court</h3>
                            <p>(5 x 30" + R30") x {fracCourt}</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.14)} min</p>
                            <h3>Footing</h3>
                            <p>{Math.round(tempsmin*0.1)} min</p>
                            <h3>{props.title}</h3>
                            <p>{Math.round(props.dist_course)} Km</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <h4>Veuillez remplir tous les champs</h4>
            </div>
        )
    }
}