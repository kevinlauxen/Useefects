import styles from './coininfo.module.css'
import Moment from 'moment'
import CoinChart from '../../coincharts/coinchat'




export default function CoinInfo({prices}){
    

    return(
        <div className={styles.CoinInfo}>
        { 
        /*
          
          //Iria utilizar apenas data.prices.map mas o resultado estava dando como null, utilizei   data && data.prices para verificar se a variavel não está como null
          //função getcripto é async
          
             prices?.map((data, index) =>
              <div key={`market-info-price- ${index}`}>
                {Moment(data[0]).format('DD/MM/YYYY HH:MM')} - R${data[1]}
              </div>
            )
            */
          }
          <CoinChart  prices={prices}/>
        
        
        </div>
    )

}