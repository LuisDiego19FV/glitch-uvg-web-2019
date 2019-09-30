import React from 'react';
import Title from './title/index.js';
import Robot from './Robot.js';
import DataInfo from './DataInfo.js';
import DiscButton from './button-dist/index.js';
import './cuadro.css';

const robotInstance = new Robot();
const robotCode = robotInstance.render();

const titleInstance = new Title();
const titleCode = titleInstance.render();

const datainfoInstance = new DataInfo();
const datainfoCode = datainfoInstance.render();

const dbfoInstance = new DiscButton();
const dbfoCode = dbfoInstance.render();

export default class Cuadro extends React.Component{
  render(){
    return(
      <div class="cuadro">
        <div class="imagen">
            {robotCode}
            {titleCode}
            {datainfoCode}
            {dbfoCode}
        </div>
    </div>
    )
  }
}
