import React from "react";
import DarkVariantExample from "../slider/slider";

const Main = () => {
    return(
        <div className="main">
            <div className="main__content">
                <h3 className="main__content_subtitle">Памятники от</h3>
                <h1 className="main__content_title">ГУП «Ритуал»</h1>
                <p className="main__content_desc">
                    Организуем установку памятника на любых кладбищах.
                    Сертифицированные мастера производят качественный
                    монтаж в соответствии с нормативными требованиями.
                    Предоставляем гарантию на работы и закрепляем ее
                    условия в официальном договоре.
                </p>
                <div className="main__content_buttons">
                    <button>Заказать</button>
                    <button>Ритуальные товары</button>
                </div>
            </div>
            <DarkVariantExample />
        </div>
    )
}

export default Main