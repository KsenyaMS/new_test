import React, {useState} from "react";
import {Button, Dropdown, Menu, Checkbox, Divider, Space, ConfigProvider} from "antd";
import {DownOutlined} from '@ant-design/icons';
import "./DropdownList.css";

export default function DropdownList({columnsStatus, onClick}) {

  let [visibleList, setVisibleList] = useState(false);
  let [columnsChange, setColumnsChange] = useState(columnsStatus);
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              // colorBgContainer: "red",
              colorPrimary: "rgba(90, 219, 204, 1)",
              borderRadiusSM: "10px"

            }
          },
        }}
      >
        <Dropdown
          open={visibleList}
          overlay={(
            <div style={{background: "white", borderRadius: 10}}>
              <Menu
                className="list-scroll"
                style={{borderRadius: 0, borderTopRightRadius: 5, borderTopLeftRadius: 5, boxShadow: "none"}}
                onClick={(e) => {setColumnsChange({...columnsChange, ...{[e.key]: columnsChange[e.key] === false
                  ? true : false}})}}
              >
                <Menu.Item style={{height: 28, marginBottom: 0}} key="fio" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   ФИО
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="basic_information" disabled={true}>
                  Общие сведения
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="id" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   ID номер
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="phone" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Телефон
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="gender">
                  <Checkbox
                    defaultChecked={columnsChange["gender"]}
                    checked={columnsChange["gender"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"gender": e.target.checked}})}}
                  />   Пол
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="birth_date">
                  <Checkbox
                    defaultChecked={columnsChange["birth_date"]}
                    checked={columnsChange["birth_date"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"birth_date": e.target.checked}})}}
                  />   Дата рождения
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="underground">
                  <Checkbox
                    defaultChecked={columnsChange["underground"]}
                    checked={columnsChange["underground"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"underground": e.target.checked}})}}
                  />   Метро
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="address">
                  <Checkbox
                    defaultChecked={columnsChange["address"]}
                    checked={columnsChange["address"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"address": e.target.checked}})}}
                  />   Адрес проживания
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="bank_information" disabled={true}>
                  Банковская информация
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="bank" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Банк
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="card_number">
                  <Checkbox
                    defaultChecked={columnsChange["card_number"]}
                    checked={columnsChange["card_number"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"card_number": e.target.checked}})}}
                  />   Номер карты
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="employee_documents" disabled={true}>
                  Документы сотрудника
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="citizenship" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Гражданство
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="passport" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Паспорт
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="place_of_issue">
                  <Checkbox
                    defaultChecked={columnsChange["place_of_issue"]}
                    checked={columnsChange["place_of_issue"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"place_of_issue": e.target.checked}})}}
                  />   Кем выдан
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="last_date">
                  <Checkbox
                    defaultChecked={columnsChange["last_date"]}
                    checked={columnsChange["last_date"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"last_date": e.target.checked}})}}
                  />   Срок действия
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="place_of_birth">
                  <Checkbox
                    defaultChecked={columnsChange["place_of_birth"]}
                    checked={columnsChange["place_of_birth"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"place_of_birth": e.target.checked}})}}
                  />   Место рождения
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="residence_address">
                  <Checkbox
                    defaultChecked={columnsChange["residence_address"]}
                    checked={columnsChange["residence_address"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"residence_address": e.target.checked}})}}
                  />   Адрес прописки
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="patent">
                  <Checkbox
                    defaultChecked={columnsChange["patent"]}
                    checked={columnsChange["patent"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"patent": e.target.checked}})}}
                  />   Патент
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="last_date_of_the_patent">
                  <Checkbox
                    defaultChecked={columnsChange["last_date_of_the_patent"]}
                    checked={columnsChange["last_date_of_the_patent"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"last_date_of_the_patent": e.target.checked}})}}
                  />   Срок действия
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="snils">
                  <Checkbox
                    defaultChecked={columnsChange["snils"]}
                    checked={columnsChange["snils"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"snils": e.target.checked}})}}
                  />   СНИЛС
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="inn">
                  <Checkbox
                    defaultChecked={columnsChange["inn"]}
                    checked={columnsChange["inn"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"inn": e.target.checked}})}}
                  />   ИНН
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="medical_book">
                  <Checkbox
                    defaultChecked={columnsChange["medical_book"]}
                    checked={columnsChange["medical_book"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"medical_book": e.target.checked}})}}
                  />   Мед. книжка
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="hr_information" disabled={true}>
                  Информация от HR
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="post" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Должность
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="department">
                  <Checkbox
                    defaultChecked={columnsChange["department"]}
                    checked={columnsChange["department"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"department": e.target.checked}})}}
                  />   Подразделение
                </Menu.Item>
                <Menu.Item style={{height: 28, marginBottom: 0}} key="decision" disabled={true}>
                  <Checkbox
                    disabled={true}
                    defaultChecked={true}
                    checked={true}
                  />   Решение
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="source">
                  <Checkbox
                    defaultChecked={columnsChange["source"]}
                    checked={columnsChange["source"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"source": e.target.checked}})}}
                  />   Источник
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="date">
                  <Checkbox
                    defaultChecked={columnsChange["date"]}
                    checked={columnsChange["date"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"date": e.target.checked}})}}
                  />   Дата
                </Menu.Item>
                <Menu.Item style={{height: 30, marginBottom: 0}} key="note">
                  <Checkbox
                    defaultChecked={columnsChange["note"]}
                    checked={columnsChange["note"]}
                    onClick={(e) => {setColumnsChange({...columnsChange, ...{"note": e.target.checked}})}}
                  />   Примечание
                </Menu.Item>
              </Menu>
              <Divider style={{ margin: 0 }} />
              <Space style={{ padding: 8 }}>
                <Button className="save-button-style" style={{borderRadius: "20px", width: "210px"}} size="middle" onClick={() => {setVisibleList(false); onClick(columnsChange)}}>Применить</Button>
              </Space>
            </div>
          )}
        >
          <Button
            className="edit-button-style"
            style={{borderRadius: "20px", textAlign: "left"}}
            size="large"
            onClick={() => {visibleList === false ? setVisibleList(true) : setVisibleList(false)}}
          >
            Выберите столбцы <DownOutlined style={{marginLeft: "20px"}}/>
          </Button>
        </Dropdown>
      </ConfigProvider>
    </>
  )
}