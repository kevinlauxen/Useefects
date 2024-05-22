import { useEffect, useState } from "react";
import Moment from "moment";
import Container from "../components/container/container";
import CoinInfo from "../components/coininfo/coinifo";

function HomePage() {
  const [data, setdata] = useState(null);
  const [qtdDays, setqtdDays] = useState(7);

  useEffect(() => {
    getCryptoData();
  }, [qtdDays]);

  async function getCryptoData() {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=brl&days=${qtdDays}`);
      const responseData = await response.json();
      setdata(responseData);
    } catch (error) {
      console.error(error);
    }
  }
    console.log (data)
  return (
    <div>
      <Container>
        <div>
          <h1>Home Page</h1>
          <h1>BitcoinDev</h1>
          <p>Acompanhe o gráfico da principal cryptomoeda da atualidade.</p>

          <label>Selecione quantidade de dias</label>
          <input
            type="number"
            value={qtdDays}
            min={1}
            onChange={(e) => setqtdDays(e.target.value)} // Update state with the new value
          />
        </div>
      </Container>
      <CoinInfo prices={data?.prices} />
    </div>
  );
}

export default HomePage;