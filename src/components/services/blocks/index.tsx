import React from "react";
import { useRouter } from "next/router";

const Blocks = () => {
  const router = useRouter();

  return (
    <div className="blocks">
      <div className="block" onClick={() => router.push("/pneumatic")}>
        <p>агроконсультирование</p>
        <div className="tags">
          <div className="row">
            <div className="tag">Пневмоходы</div>
            <div className="tag">Аренда</div>
          </div>
          <div className="row">
            <p className="tag">Продажа</p>
            <p className="tag">Воронеж</p>
          </div>
        </div>
      </div>
      <div className="block" onClick={() => router.push("/elevator")}>
        <p>своевременная доставка товаров на собственном транспорте</p>
        <div className="tags">
          <div className="row">
            <p className="tag">Элеватор</p>
            <p className="tag">Хранение</p>
          </div>
          <div className="row">
            <p className="tag">Доработка урожая</p>
            <p className="tag">Аренда</p>
          </div>
        </div>
      </div>
      <div className="block" onClick={() => router.push("/elevator")}>
        <p>аренда элеватора</p>
        <div className="tags">
          <div className="row">
            <p className="tag">Элеватор</p>
            <p className="tag">Хранение</p>
          </div>
          <div className="row">
            <p className="tag">Доработка урожая</p>
            <p className="tag">Аренда</p>
          </div>
        </div>
      </div>
      <div className="block" onClick={() => router.push("/elevator")}>
        <p>аренда элеватора</p>
        <div className="tags">
          <div className="row">
            <p className="tag">Элеватор</p>
            <p className="tag">Хранение</p>
          </div>
          <div className="row">
            <p className="tag">Доработка урожая</p>
            <p className="tag">Аренда</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
