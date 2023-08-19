import React from "react";
import ClassComponent from "./Komponen/Pembahasan/ClassComponent";
import FunctionalComponent from "./Komponen/Pembahasan/FunctionalComponent";


export default class Komponen extends React.Component {
    render () {
        return (
            <div>
                <ClassComponent nama= "Jeffrey Pasaribu" />
                <FunctionalComponent  />
                
            </div>
        )
    }
}