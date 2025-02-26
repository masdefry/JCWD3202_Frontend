"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount
  // - Di Eksekusi Pertama Kali Ketika Halaman di Buka. Dijalankan Setelah Proses Render Element HTML
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  // componentDidUpdate
  // - Di Eksekusi Ketika Terjadi Perubahan State ataupun Dependency Lainnya
  // useEffect(() => {

  // }, [dependecies])

  // componentWillUnmount
  // - Di Eksekusi Ketika Akan Terjadi Perpindahan Halaman
  useEffect(() => {
    return () => {
      alert("Are you sure want to exit page?");
    };
  }, []);

  return (
    <>
      {console.log("RENDER")}
      <h1>CSR</h1>
      {data.map((item, index) => {
        return <h1 key={index}>{item.title}</h1>;
      })}
    </>
  );
}
