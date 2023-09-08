import React, {useState} from "react";
import {isMobile} from 'react-device-detect';
import {Link, Redirect, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import {Layout, Menu, message, Divider, Tooltip, Dropdown, Typography, ConfigProvider, Avatar, Card, Anchor, Button, Breadcrumb} from 'antd';
import './ControlPanel.css'
import {UserOutlined, SignalFilled, PieChartFilled, SettingFilled, CaretLeftOutlined, CalendarFilled, FolderFilled, ProfileFilled, CaretRightOutlined} from "@ant-design/icons";
import EmployeesTab from "../employeeslist/EmployeesTab";
import Meta from "antd/es/card/Meta";
import imageLogoName from "../logo.svg";
// import DragAndDropPage from "../draganddrop/DragAndDropPage";

const {Header, Sider, Content, Footer} = Layout;
const {Text} = Typography;
let namesList = JSON.parse(localStorage.getItem("NAMES")) ? JSON.parse(localStorage.getItem("NAMES")) : [];

export default function ControlPanel(props) {
  let [activeRouteKey, setActiveRouteKey] = useState("users");

  const history = useHistory();

  let {path, url} = useRouteMatch();

  const onMenuClick = (item) => {
    setActiveRouteKey(item.key);
  };

  const systemMenu = () => {
    return (
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorItemBgSelected: 'rgba(255, 255, 255, 0.5)',
              colorItemBgHover: 'rgba(255, 255, 255, 0.3)',
            },
          },
        }}
      >
        <Menu className="menu-background" onClick={onMenuClick}  defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="calendar" className="menu-item-style" icon={<CalendarFilled style={{fontSize: 25}}/>}/>
          <Menu.Item key="list" className="menu-item-style" icon={<ProfileFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="folder" className="menu-item-style" icon={<FolderFilled style={{fontSize: 25}} />}/>
          <Menu.Item className="menu-item-style" key="users" icon={<UserOutlined style={{fontSize: 25}} />}>
            <Link to={`${url}/users`}>Задачи</Link>
          </Menu.Item>
          <Menu.Item key="statistic" className="menu-item-style" icon={<SignalFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="chart" className="menu-item-style" icon={<PieChartFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="settings" className="menu-item-style" icon={<SettingFilled style={{fontSize: 25}} />}/>
        </Menu>
      </ConfigProvider>
    )
  };

  const systemRoute = () => {
    if(activeRouteKey === "users") {
      return (
        <Route path={`${path}/users`} key="users">
          <EmployeesTab/>
        </Route>
      )
    }
  };

  const defaultRoute = () => {
    if(activeRouteKey === "users") {
      return (
        <Redirect to={`${path}/users`}/>
      )
    }
  };

  return (
    <div>
      <Layout className="site-layout" style={{minHeight: '100vh'}}>
        <Sider style={{background: "linear-gradient(0deg, rgba(77, 189, 176, 1) 1.6%, rgba(90, 219, 204, 1) 100%)"}} width={210} collapsed={true}>
          {
            systemMenu()
          }
        </Sider>
        <Layout className="site-layout" style={isMobile ? {width: "1600px"} : {}}>
          <Header
            style={isMobile
              ? {width: "1600px", background: "white", borderTopLeftRadius: 30, height: 100}
              : {width: "100%", background: "white", borderTopLeftRadius: 30, height: 100}
            }
          >
            <div className="flexbox-container">
              <div>
                <Button shape="circle" className="button-style" icon={<CaretLeftOutlined style={{color: "grey", fontSize: 18}} />}/>
                <Button shape="circle" className="button-style" icon={<CaretRightOutlined style={{color: "grey", fontSize: 18}} />}/>
              </div>
              <div>
                <Breadcrumb
                  style={{marginTop: "35px"}}
                  separator=" "
                  items={[
                    {
                      title: <u>База анкет сотрудников</u>,
                      href: ""
                    },
                    {
                      title: <u>Общая база сотрудников</u>,
                      href: ""
                    },
                    {
                      title: <u>База сотрудников</u>,
                      href: ""
                    },
                    {
                      title: <u>Календарь событий</u>,
                      href: ""
                    },
                  ]}
                />
              </div>
              <div className="user-content-div">
                <div className="avatar-style">
                  <Avatar src={imageLogoName} size="large" style={{ backgroundColor: 'grey'}} shape="circle"/>
                </div>
                <div className="user-inform-style">
                  <div><Text style={{fontSize: "20px"}}>Kristina</Text> <Text style={{color: "grey", fontSize: "15px"}}>менеджер продаж</Text></div>
                </div>
              </div>
            </div>
          </Header>
          <Content style={isMobile ? {width: "1600px", background: "white"} : {background: "white"}}>
            <Content className="content-style">
              <Switch>
                {
                  systemRoute()
                }
                {
                  defaultRoute()
                }
              </Switch>
            </Content>
          </Content>
          <Footer style={isMobile ? {textAlign: 'right', fontSize: '0.8em', width: "1600px"} : {textAlign: 'right', fontSize: '0.8em'}}>Тестовое задание</Footer>
        </Layout>
      </Layout>
    </div>
  );
}