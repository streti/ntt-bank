// ІМПОРТУЄМО БІБЛІОТЕКИ БЕЗ ЯКИХ НЕ МОЖЕМО ПИСАТИ КОД
import React from "react";

// ІМПОРТУЄМО ПОТРІБНІ КОМПОНЕНТИ
import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";

// КОНФІГУРАЦІЯ ========================================

const START_BALANCE = 1000;
const LIMIT_BALANCE = 100000;
const GET_MONEY = 100;

const GET_SALARY = 1000;
const GET_COURCE = 800;
const SEND_AMYDRONS = 50;

export default function App() {
  // ФУНКЦІОНАЛ БАЛАНСУ ========================

  // Ось тут тримаємо актуальне значення балансу

  const [balance, setBalance] = React.useState(START_BALANCE);

  const [payments, setPayment] = React.useState([]);

  // Функція для прямого поповнення балансу
  const getMoney = () => setBalance(balance + GET_MONEY);

  const getSalery = () => {
    setBalance(balance + GET_SALARY);

    setPayment([
      {
        name: "Зарплата",
        amount: GET_SALARY,
        type: "+"
      },
      ...payments
    ]);
  };

  const sendAmyDrons = () => {
    setBalance(balance - SEND_AMYDRONS);

    setPayment([
      {
        name: "Армія дронів",
        amount: SEND_AMYDRONS,
        type: "-"
      },
      ...payments
    ]);
  };

  const getCource = () => {
    setBalance(balance - GET_COURCE);

    setPayment([
      {
        name: "Курс",
        amount: GET_COURCE,
        type: "-"
      },
      ...payments
    ]);
  };

  // Функція яка виконується кожен раз коли наш баланс змінився
  React.useEffect(() => {
    // Перевірка на ліміт балансу
    if (balance > LIMIT_BALANCE) {
      alert(`Ваш ліміт балансу: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    // Перевірка на мінусовий баланс
    if (balance < 0) {
      alert(`Ви використали усі свої гроші. Поповніть картку`);
      // setBalance(0);
    }
    // Сюди записуються змінні при оновленні яких буде виконуватися функція
  }, [balance]);

  // ВЕРСТКА ІНТЕРФЕЙСУ ==========================================

  // ця функція відкриває вікно в браузері з текстом
  const ShowHi = () => alert("Hi!");

  return (
    <Page>
      {/* компонент шапки з нашою назвою
          також при кліку мишкою на шапку
          в нас визивається функція HelloWorld
      */}

      <Header name="NTT BANK" onClick={ShowHi} />

      {/* Компонент баланса в який передається
          Актуальне значення балансу  */}
      <Balance balance={balance} />

      {/* Компонент меню з кнопками */}
      <Menu
        // ось сюди ми передаємо конфігурацію кнопок
        config={[
          {
            name: "Поповнити баланс",
            onClick: getMoney,
            img: "/icon/get.svg",
            key: "0"
          },
          {
            name: "Отримати зарплату",
            onClick: getSalery,
            img: "/icon/send.svg",
            key: "2"
          },
          {
            name: "Купити курс",
            onClick: getCource,
            img: "/icon/payment.svg",
            key: "3"
          },
          {
            name: "Армія дронів",
            onClick: sendAmyDrons,
            img: "/icon/protect.svg",
            key: "1"
          }
        ]}
      />
      {/* компонент списка наших транзакцій
          цей функціонал ми будемо робити на 3 уроці
      */}
      <Payment payments={payments} />
    </Page>
  );
}
