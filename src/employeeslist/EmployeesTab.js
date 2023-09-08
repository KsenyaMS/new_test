import React, {useState, useEffect} from "react";
import Typography from "antd/es/typography/Typography";
import {Button, Table, Input, ConfigProvider, Pagination} from "antd";
import {SearchOutlined} from '@ant-design/icons';
import "./EmployeesTab.css";
import { format } from 'date-fns';
import moment from "moment";
import DropdownList from "./components/DropdownList";

const { Text, Title } = Typography;
const initialData = [
  {
      number: 1,
      fio: "Иванов Иван Иванович",
      id: 1,
      phone: "77777777777",
      gender: "Мужской",
      birth_date: "22.03.1999",
      underground: "Адмиралтейская",
      address: "Адрес1",
      bank: "Сбербанк",
      card_number: "1111111111",
      citizenship: "РФ",
      passport: "0000 000000",
      place_of_issue: "РФ",
      last_date: "22.03.2024",
      place_of_birth: "РФ",
      residence_address: "Адрес1",
      patent: "Патент1",
      last_date_of_the_patent: "22.03.2024",
      snils: "222222222222",
      inn: "44444444444",
      medical_book: "Есть",
      post: "Бухгалтер",
      department: "№2",
      decision: "Принят",
      source: "HeadHunter",
      date: "22.03.2023",
      note: "Примечание",
  },
  {
      number: 2,
      fio: "Смирнов Иван Иванович",
      id: 2,
      phone: "78888888888",
      gender: "Мужской",
      birth_date: "12.11.1999",
      underground: "Адмиралтейская",
      address: "Адрес2",
      bank: "Сбербанк",
      card_number: "23413412412",
      citizenship: "РФ",
      passport: "1111 222222",
      place_of_issue: "РФ",
      last_date: "16.07.2028",
      place_of_birth: "РФ",
      residence_address: "Адрес2",
      patent: "Патент2",
      last_date_of_the_patent: "17.04.2024",
      snils: "1242222222222",
      inn: "89765432",
      medical_book: "Нет",
      post: "Программист",
      department: "№3",
      decision: "Принят",
      source: "Авито",
      date: "29.09.2018",
      note: "Примечание",
  },
]


export default function EmployeesTab() {

  
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [columnsStatus, setColumnsStatus] = useState({
    fio: true,
    id: true,
    phone: true,
    gender: true,
    birth_date: true,
    underground: true,
    address: true,
    bank: true,
    card_number: true,
    citizenship: true,
    passport: true,
    place_of_issue: true,
    last_date: true,
    place_of_birth: true,
    residence_address: true,
    patent: true,
    last_date_of_the_patent: true,
    snils: true,
    inn: true,
    medical_book: true,
    post: true,
    department: true,
    decision: true,
    source: true,
    date: true,
    note: true
  });

  const cols = [
    {
      title: "№",
      width: 50,
      align: "center",
      fixed: "left",
      key: 'number',
      dataIndex: 'number',
    },
    {
      title: "Имя сотрудника",
      align: "center",
      fixed: "left",
      dataIndex: 'fio',
      width: 250,
      key: 'fio',
      sorter: (a, b) => {
        return a.fio.localeCompare(b.fio);
      },
    },
    {
      title: "Основная информация",
      dataIndex: "basic_information",
      align: "center",
      children: [
        {
          title: "ID номер",
          width: 200,
          align: "center",
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => {
            return a.id - b.id;
          },
        },
        {
          title: "Телефон",
          width: 200,
          align: "center",
          dataIndex: 'phone',
          key: 'phone',
          sorter: (a, b) => {
            return a.phone.localeCompare(b.phone);
          },
        },
        {...(columnsStatus.gender === true &&
          {
            title: "Пол",
            align: "center",
            width: 200,
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => {
              return a.gender.localeCompare(b.gender);
            },
          }
        )},
        {...(columnsStatus.birth_date === true &&
          {
            title: "Дата рождения",
            width: 200,
            align: "center",
            dataIndex: 'birth_date',
            key: 'birth_date',
          }
        )},
        {...(columnsStatus.underground === true &&
          {
            title: "Метро",
            align: "center",
            width: 200,
            dataIndex: 'underground',
            key: 'underground',
            sorter: (a, b) => {
              return a.underground.localeCompare(b.underground);
            },
          }
        )},
        {...(columnsStatus.address === true &&
          {
            title: "Адрес проживания",
            width: 200,
            align: "center",
            dataIndex: 'address',
            key: 'address',
            sorter: (a, b) => {
              return a.address.localeCompare(b.address);
            },
          }
        )}
      ]
    },
    {
      title: "Банковская информация",
      align: "center",
      dataIndex: "bank_information",
      children: [
        {
          title: "Банк",
          width: 200,
          align: "center",
          dataIndex: 'bank',
          key: 'bank',
          sorter: (a, b) => {
            return a.bank.localeCompare(b.bank);
          },
        },
        {...(columnsStatus.card_number === true &&
          {
            title: "Номер карты",
            width: 200,
            align: "center",
            dataIndex: 'card_number',
            key: 'card_number',
            sorter: (a, b) => {
              return a.card_number - b.card_number;
            },
          }
        )},
      ]
    },
    {
      title: "Документы сотрудника",
      align: "center",
      dataIndex: "employee_documents",
      children: [
        {
          title: "Гражданство",
          width: 200,
          align: "center",
          dataIndex: 'citizenship',
          key: 'citizenship',
          sorter: (a, b) => {
            return a.citizenship.localeCompare(b.citizenship);
          },
        },
        {
          title: "Паспорт",
          width: 200,
          align: "center",
          dataIndex: 'passport',
          key: 'passport',
          sorter: (a, b) => {
            return a.passport.localeCompare(b.passport);
          },
        },
        {...(columnsStatus.place_of_issue === true &&
          {
            title: "Кем выдан",
            width: 200,
            align: "center",
            dataIndex: 'place_of_issue',
            key: 'place_of_issue',
            sorter: (a, b) => {
              return a.place_of_issue.localeCompare(b.place_of_issue);
            },
          }
        )},
        {...(columnsStatus.last_date === true &&
          {
            title: "Срок действия",
            width: 200,
            align: "center",
            dataIndex: 'last_date',
            key: 'last_date',
          }
        )},
        {...(columnsStatus.place_of_birth === true &&
          {
            title: "Место рождения",
            width: 200,
            align: "center",
            dataIndex: 'place_of_birth',
            key: 'place_of_birth',
            sorter: (a, b) => {
              return a.place_of_birth.localeCompare(b.place_of_birth);
            },
          }
        )},
        {...(columnsStatus.residence_address === true &&
          {
            title: "Адрес прописки",
            width: 200,
            align: "center",
            dataIndex: 'residence_address',
            key: 'residence_address',
            sorter: (a, b) => {
              return a.residence_address.localeCompare(b.residence_address);
            },
          }
        )},
        {...(columnsStatus.patent === true &&
          {
            title: "Патент",
            width: 200,
            align: "center",
            dataIndex: 'patent',
            key: 'patent',
            sorter: (a, b) => {
              return a.patent.localeCompare(b.patent);
            },
          }
        )},
        {...(columnsStatus.last_date_of_the_patent === true &&
          {
            title: "Срок действия",
            width: 200,
            align: "center",
            dataIndex: 'last_date_of_the_patent',
            key: 'last_date_of_the_patent',
          }
        )},
        {...(columnsStatus.snils === true &&
          {
            title: "СНИЛС",
            width: 200,
            align: "center",
            dataIndex: 'snils',
            key: 'snils',
            sorter: (a, b) => {
              return a.snils - b.snils;
            },
          }
        )},
        {...(columnsStatus.inn === true &&
          {
            title: "ИНН",
            width: 200,
            align: "center",
            dataIndex: 'inn',
            key: 'inn',
            sorter: (a, b) => {
              return a.inn - b.inn;
            },
          }
        )},
        {...(columnsStatus.medical_book === true &&
          {
            title: "Мед. книжка",
            width: 200,
            align: "center",
            dataIndex: 'medical_book',
            key: 'medical_book',
            sorter: (a, b) => {
              return a.medical_book.localeCompare(b.medical_book);
            },
          }
        )},
        {
          title: "Информация от HR",
          align: "center",
          dataIndex: "hr_information",
          children: [
            {
              title: "Должность",
              width: 200,
              align: "center",
              dataIndex: 'post',
              key: 'post',
              sorter: (a, b) => {
                return a.post.localeCompare(b.post);
              },
            },
            {...(columnsStatus.department === true &&
              {
                title: "Подразделение",
                width: 200,
                align: "center",
                dataIndex: 'department',
                key: 'department',
                sorter: (a, b) => {
                  return a.department.localeCompare(b.department);
                },
              }
            )},
            {
              title: "Решение",
              align: "center",
              width: 200,
              dataIndex: 'decision',
              key: 'decision',
              sorter: (a, b) => {
                return a.decision.localeCompare(b.decision);
              },
            },
            {...(columnsStatus.source === true &&
              {
                title: "Источник",
                width: 200,
                align: "center",
                dataIndex: 'source',
                key: 'source',
                sorter: (a, b) => {
                  return a.source.localeCompare(b.source);
                },
              }
            )},
            {...(columnsStatus.date === true &&
              {
                title: "Дата",
                align: "center",
                width: 200,
                dataIndex: 'date',
                key: 'date',
              }
            )},
            {...(columnsStatus.note === true &&
              {
                title: "Примечание",
                width: 200,
                align: "center",
                dataIndex: 'note',
                key: 'note',
                sorter: (a, b) => {
                  return a.note.localeCompare(b.note);
                },
              }
            )}
          ]
        },
      ]
    },
    {
      title: "",
      align: "center",
      width: 20,
    }
  ];

  useEffect(() => {
    setLoading(true);
    setData(initialData);
    setLoading(false);
  }, [loading, columnsStatus]);

  return (
    <>
      <Title strong level={4}>Общая база сотрудников</Title>
      <div className="flexbox-container-with-inform-panel">
        <div className="text-div-style">
          <div>
            <Text strong style={{color: "rgba(90, 219, 204, 1)", fontSize: 25}}>2345</Text>
          </div>
          <div>
            <Text style={{fontSize: 15, color: "grey"}}>Контактов</Text>
          </div>
        </div>
        <div>
          <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: "#f7f7f7",

                }
              },
            }}
          >
            <Input
              size="large"
              placeholder={"Поиск"}
              prefix={<SearchOutlined style={{fontSize: "18px", color: "black"}}/>}
              // onChange={(e) => { setSearch(e.target.value) }}
              allowClear={true}
              style={{width: 350, borderRadius: 30}}
            />
          </ConfigProvider>
        </div>
        <div>
          <DropdownList columnsStatus={columnsStatus} onClick={(value) => {setColumnsStatus(value)}}/>
        </div>
      </div>
      <div className="table-div-style">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                colorBgContainer: "white",
                colorBorderSecondary: "#f7f7f7",
                colorFillAlter: "white",
                colorTextHeading: "rgba(90, 219, 204, 1)",
                borderRadiusLG: 30,
              },
              Pagination: {
                colorPrimary: "rgba(90, 219, 204, 1)",
                colorPrimaryHover: "rgba(90, 219, 204, 1)",
                colorPrimaryText: "black",
                colorPrimaryTextHover: "rgba(90, 219, 204, 1)",
                colorPrimaryBorder: "red",
                colorPrimaryBorderHover: "red",
              }
            },
          }}
        >
        <Table
          loading={loading}
          columns={cols}
          dataSource={data}
          rowKey="id"
          size='small'
          scroll={{x: 2000}}
          pagination={false}
        />
        <div style={{justifyContent: "center", display: "flex"}}>
          <Pagination
            style={{marginTop: 20, marginLeft: 20, float: "center"}}
            total={85}
            showTotal={(total, range) => `показано 1-2 из ${data.length} результатов`}
            defaultPageSize={50}
            defaultCurrent={1}
          />
        </div>
      </ConfigProvider>
      </div>
    </>
  )
}