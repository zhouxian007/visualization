   
    import React, { useEffect, useRef } from 'react';
    import * as echarts from 'echarts';
    import { px } from '../shared/px';

    export const Chart1 =() =>{
        const divRef = useRef(null)
        useEffect(()=>{
            console.log(divRef.current) 
            var myChart = echarts.init(divRef.current);
        
            myChart.setOption({
              textStyle:{
                fontSize:8,
                color:'#fff',
              },
              
              xAxis: {
              
                data: ['2月', '3月', '4月', '5月', '6月', '7月'],
                axisTick:{show:false},
                axisLabel:{
                    fontSize:px(12),
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
                    fontSize:px(12),
                }
              },
              grid:{
                left: '20%',
                right: '10%',
                bottom: '20%',
                top:'10%',
                contaninLabel:true,
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
        


        return(
            
        <div className="bordered 脆弱性感知_弱密码">
            <h2>脆弱性感知 - 弱密码</h2>
            <div ref={divRef} className='chart'></div>
        </div>
        )
      
    }
    