import { useState, useEffect } from "react";
import { Modal } from "bootstrap"
import TahuList from "../components/TahuList";
export default function JualTahu(props) {
    let [jualtahu, setJualTahu] = useState([])

    useEffect(() => {
        let arrayjualtahu = [
            {
                Tanggal: `01-03-2022`,
                StokAwal: 100,
                Terjual: 85,
                Rusak: 5,
                HargaDasar: 3000,
                HargaJual: 4500,
            },
            {
                Tanggal: `04-03-2022`,
                StokAwal: 50,
                Terjual: 40,
                Rusak: 5,
                HargaDasar: 3500,
                HargaJual: 4500,
            },
            {
                Tanggal: `10-03-2022`,
                StokAwal: 70,
                Terjual: 60,
                Rusak: 10,
                HargaDasar: 4000,
                HargaJual: 5000,
            },
        ];
        setJualTahu(arrayjualtahu);
    }, []);
    let hitung = (Terjual, HargaDasar, HargaJual) => {
        let hasil = (Terjual * HargaJual) - (Terjual * HargaDasar);
        return hasil
    }
    let persentase = (StokAwal, Rusak) => {
            let hasilp = (StokAwal - Rusak)
        return hasilp
    }
    return (
        <div className="card bg-secondary">
            {/* <h1 style={{fontFamily:`poppins`}} className="align-center">Penjualan Tahu </h1> */}
            {jualtahu.map(item => (
                <TahuList
                    Tanggal={item.Tanggal}
                    StokAwal={item.StokAwal}
                    Terjual={item.Terjual}
                    Rusak={item.Rusak}
                    Keuntungan={hitung(item.Terjual, item.HargaDasar, item.HargaJual)}
                    persentase={persentase(item.StokAwal, item.Rusak)}
                />
            ))}
        </div>
    )
}