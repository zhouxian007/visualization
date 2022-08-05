import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { px } from '../shared/px';

export const Chart2=()=>{
    const divRef = useRef(null)
    useEffect(()=>{
       
        var myChart = echarts.init(divRef.current);
    
        myChart.setOption({
          textStyle:{
            color:'#fff',
          },
         
          grid: {
            left: '2%',
            right: '10%',
            bottom: '5%',
            top:'1%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine:{show:false},
            axisLabel:{
                fontSize:px(12),
            }
          },
          yAxis: {
            axisLabel:{
                fontSize:px(12),
                formatter(val){
                  if(val.length>3){
                    const array=val.split('')
                    array.splice(2,0,'\n')
                    return array.join('')
                  }else{
                    return val;
                  }
                 
                }
              },
            axisTick:{show:false},
            axisLine:{show:true,lineStyle:{color:'#083B70'}},
            type: 'category',
            data: ['宝钢', '武勘', '设备院', '置业', '焦耐', ]
          },
          series: [
            {
              
              name:'风险资产',
              type: 'bar',
              data: [29, 31, 10, 21, 23, 81]
            },
            {
              
              name:'明文传输',
              type: 'bar',
              data: [125, 38, 31, 94, 141, 68]
            }
          ]
        });
      },[])
    return(
        <div className="bordered 脆弱性感知_弱密码">
            <h2>明文传输 - 风险资产</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}