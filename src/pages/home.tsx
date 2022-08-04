import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/head.png'
import * as echarts from 'echarts';
const px =(n)=>n/1920*(window as any).pageWidth;

export const Home = () => {
  const divRef = useRef(null)
  useEffect(()=>{
    console.log(divRef.current) 
    var myChart = echarts.init(divRef.current);

    myChart.setOption({
      textStyle:{
        fontSize:px(6),
        color:'#fff',
      },
     
      xAxis: {
        data: ['2月', '3月', '4月', '5月', '6月', '7月'],
        axisTick:{show:false},
        axisLabel:{
          fontSize:px(6),
          formatter(val){
            if(val.length>2){
              const array=val.split('')
              array.splice(2,0,'\n')
              return array.join('')
            }else{
              return val;
            }
           
          }
        }
      },
      yAxis: {
        splitLine:{show:false},
        axisLine:{show:true,lineStyle:{color:'#083B70'}},
        axisLabel:{
        fontSize:px(6),
        }
      },
      grid:{
        x:50,
        y:25,
        X2:40,
        y2:35,

      },
      series: [
        {
          name: '事件',
          type: 'bar',
          data: [4, 174, 51, 3, 4, 385]
        }
      ]
    });
  },[])

  return (

      <div className="home" >
      <header style={{backgroundImage:`url(${headerBg})`}}/>
      <main  className="main">
          <section className="section1">
            <div className="bordered 脆弱性感知_弱密码">
              <h2>脆弱性感知 - 弱密码</h2>
              <div ref={divRef} className='chart'></div>
            </div>
          </section>
          <section className="bordered section2"></section>
          <section className="bordered section3"></section>
          <section className="bordered section4"></section>
          <section className="bordered section5"></section>
      </main>
    </div>
  );
};
