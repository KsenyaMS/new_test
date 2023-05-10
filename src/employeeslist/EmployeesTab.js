import React, {useEffect, useState} from "react";
import Typography from "antd/es/typography/Typography";
import {Button, message, Space, Table, Input, Modal, Avatar, ConfigProvider, Pagination} from "antd";
import {SearchOutlined, EyeOutlined} from '@ant-design/icons';
import Meta from "antd/es/card/Meta";
import { format } from 'date-fns';
import moment from "moment";
const {Search} = Input;
const { Text, Title } = Typography;
const data = [
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

  let [loading, setLoading] = useState(false);
  let [selectedCabinets, setSelectedCabinets] = useState([]);
  let [ids, setIds] = useState("");
  let [personalCabinets, setPersonalCabinets] = useState([]);
  let [editedCabinet, setIsCabinetVisible] = useState(null);
  let [addCabinet, setAddCabinet] = useState(false);
  let [search, setSearch] = useState("");

  const cols = [
    {
      title: "№",
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
      align: "center",
      children: [
        {
          title: "ID номер",
          align: "center",
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => {
            return a.id - b.id;
          },
        },
        {
          title: "Телефон",
          align: "center",
          dataIndex: 'phone',
          key: 'phone',
          sorter: (a, b) => {
            return a.phone.localeCompare(b.phone);
          },
        },
        {
          title: "Пол",
          align: "center",
          dataIndex: 'gender',
          key: 'gender',
          sorter: (a, b) => {
            return a.gender.localeCompare(b.gender);
          },
        },
        {
          title: "Дата рождения",
          align: "center",
          dataIndex: 'birth_date',
          key: 'birth_date',
        },
        {
          title: "Метро",
          align: "center",
          dataIndex: 'underground',
          key: 'underground',
          sorter: (a, b) => {
            return a.underground.localeCompare(b.underground);
          },
        },
        {
          title: "Адрес проживания",
          align: "center",
          dataIndex: 'address',
          key: 'address',
          sorter: (a, b) => {
            return a.address.localeCompare(b.address);
          },
        }
      ]
    },
    {
      title: "Банковская информация",
      align: "center",
      children: [
        {
          title: "Банк",
          align: "center",
          dataIndex: 'bank',
          key: 'bank',
          sorter: (a, b) => {
            return a.bank.localeCompare(b.bank);
          },
        },
        {
          title: "Номер карты",
          align: "center",
          dataIndex: 'card_number',
          key: 'card_number',
          sorter: (a, b) => {
            return a.card_number - b.card_number;
          },
        },
      ]
    },
    {
      title: "Документы сотрудника",
      align: "center",
      children: [
        {
          title: "Гражданство",
          align: "center",
          dataIndex: 'citizenship',
          key: 'citizenship',
          sorter: (a, b) => {
            return a.citizenship.localeCompare(b.citizenship);
          },
        },
        {
          title: "Паспорт",
          align: "center",
          dataIndex: 'passport',
          key: 'passport',
          sorter: (a, b) => {
            return a.passport.localeCompare(b.passport);
          },
        },
        {
          title: "Кем выдан",
          align: "center",
          dataIndex: 'place_of_issue',
          key: 'place_of_issue',
          sorter: (a, b) => {
            return a.place_of_issue.localeCompare(b.place_of_issue);
          },
        },
        {
          title: "Срок действия",
          align: "center",
          dataIndex: 'last_date',
          key: 'last_date',
        },
        {
          title: "Место рождения",
          align: "center",
          dataIndex: 'place_of_birth',
          key: 'place_of_birth',
          sorter: (a, b) => {
            return a.place_of_birth.localeCompare(b.place_of_birth);
          },
        },
        {
          title: "Адрес прописки",
          align: "center",
          dataIndex: 'residence_address',
          key: 'residence_address',
          sorter: (a, b) => {
            return a.residence_address.localeCompare(b.residence_address);
          },
        },
        {
          title: "Патент",
          align: "center",
          dataIndex: 'patent',
          key: 'patent',
          sorter: (a, b) => {
            return a.patent.localeCompare(b.patent);
          },
        },
        {
          title: "Срок действия",
          align: "center",
          dataIndex: 'last_date_of_the_patent',
          key: 'last_date_of_the_patent',
        },
        {
          title: "СНИЛС",
          align: "center",
          dataIndex: 'snils',
          key: 'snils',
          sorter: (a, b) => {
            return a.snils - b.snils;
          },
        },
        {
          title: "ИНН",
          align: "center",
          dataIndex: 'inn',
          key: 'inn',
          sorter: (a, b) => {
            return a.inn - b.inn;
          },
        },
        {
          title: "Мед. книжка",
          align: "center",
          dataIndex: 'medical_book',
          key: 'medical_book',
          sorter: (a, b) => {
            return a.medical_book.localeCompare(b.medical_book);
          },
        },
        {
          title: "Информация от HR",
          align: "center",
          children: [
            {
              title: "Должность",
              align: "center",
              dataIndex: 'post',
              key: 'post',
              sorter: (a, b) => {
                return a.post.localeCompare(b.post);
              },
            },
            {
              title: "Подразделение",
              align: "center",
              dataIndex: 'department',
              key: 'department',
              sorter: (a, b) => {
                return a.department.localeCompare(b.department);
              },
            },
            {
              title: "Решение",
              align: "center",
              dataIndex: 'decision',
              key: 'decision',
              sorter: (a, b) => {
                return a.decision.localeCompare(b.decision);
              },
            },
            {
              title: "Источник",
              align: "center",
              dataIndex: 'source',
              key: 'source',
              sorter: (a, b) => {
                return a.source.localeCompare(b.source);
              },
            },
            {
              title: "Дата",
              align: "center",
              dataIndex: 'date',
              key: 'date',
            },
            {
              title: "Примечание",
              align: "center",
              dataIndex: 'note',
              key: 'note',
              sorter: (a, b) => {
                return a.note.localeCompare(b.note);
              },
            }
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

  const onSelectChange = selectedRowKeys => {
    setSelectedCabinets(selectedRowKeys);
    setIds("");
    setIds(selectedRowKeys.toString().replaceAll(',',';'));
  };

  const showPersonalCabinet = (record) => {
    setIsCabinetVisible(record);
  };

  return (
    <>
      <Title strong level={4}>Общая база сотрудников</Title>
      <div class="flexbox-container" style={{backgroundColor: "white", height: 110, borderRadius: 30, padding: 30, marginTop: 25}}>
        <div style={{width: '7%', float: 'left', margin: 5}}>
          <Text strong style={{color: "rgba(90, 219, 204, 1)", fontSize: 25}}>2345</Text>
        </div>
        <div style={{width: '13%', float: 'left', margin: 5, marginTop: 15}}>
          <Text style={{fontSize: 12}}>Контактов</Text>
        </div>
        <div style={{width: '60%', float: 'left', margin: 5}}>
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
              className="input-style"
              placeholder={"Поиск"}
              prefix={<SearchOutlined style={{fontSize: "18px", color: "black"}}/>}
              // onChange={(e) => { setSearch(e.target.value) }}
              allowClear={true}
              style={{width: 350, borderRadius: 30}}
            />
          </ConfigProvider>
        </div>
        <div style={{width: '20%', float: 'right', margin: 5}}>
          <Button
            style={{
              borderRadius: "20px",
              color: "rgba(90, 219, 204, 1)",
              borderColor: "rgba(90, 219, 204, 1)",
              border: "2px solid rgba(90, 219, 204, 1)"
            }}
            size="large"
          >
            Режим редактирования
          </Button>
        </div>
      </div>
      <div style={{marginTop: 50, backgroundColor: "white", borderRadius: 30, padding: 8, paddingBottom: 20}}>
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
          sticky
          scroll={{x: 3000}}
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