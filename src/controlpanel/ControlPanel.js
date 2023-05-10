import React, {useState} from "react";
import {isMobile} from 'react-device-detect';
import {Link, Redirect, Route, Switch, useRouteMatch, useHistory} from "react-router-dom";
import {Layout, Menu, message, Divider, Tooltip, Dropdown, Typography, ConfigProvider, Avatar, Card, Anchor, Button} from 'antd';
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
        <Menu style={{marginTop: "150px"}} className="menu-background" onClick={onMenuClick}  defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="calendar" style={{color: "white"}} icon={<CalendarFilled style={{fontSize: 25}}/>}/>
          <Menu.Item key="list" style={{color: "white"}} icon={<ProfileFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="folder" style={{color: "white"}} icon={<FolderFilled style={{fontSize: 25}} />}/>
          <Menu.Item style={{color: "white"}} key="users" icon={<UserOutlined style={{fontSize: 25}} />}>
            <Link to={`${url}/users`}>Задачи</Link>
          </Menu.Item>
          <Menu.Item key="statistic" style={{color: "white"}} icon={<SignalFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="chart" style={{color: "white"}} icon={<PieChartFilled style={{fontSize: 25}} />}/>
          <Menu.Item key="settings" style={{color: "white"}} icon={<SettingFilled style={{fontSize: 25}} />}/>
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

  const layoutColor = `linear-gradient(0deg, rgba(77, 189, 176, 1) 1.6%, rgba(90, 219, 204, 1) 100%)`;

  return (
    <div>
      <Layout className="site-layout" style={{minHeight: '100vh'}}>
        <Layout className="site-layout">
          <Sider style={{background: layoutColor}} width={210} collapsed={true}>
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
              <div direction="horizontal" align="start" style={{float: "left", width: "15%"}}>
                <Card style={{ width: "100%", backgroundColor: "white", height: 100, border: "2px solid white" }}>
                  <Button shape="circle" style={{margin: 5, border: "1px solid white", boxShadow: "0 0 10px 5px rgba(242, 242, 242, 1)"}} icon={<CaretLeftOutlined style={{color: "grey", fontSize: 18}} />}/>
                  <Button shape="circle" style={{margin: 5, border: "1px solid white", boxShadow: "0 0 10px 5px rgba(242, 242, 242, 1)"}} icon={<CaretRightOutlined style={{color: "grey", fontSize: 18}} />}/>
                </Card>
              </div>
              <div direction="horizontal" align="start" style={{float: "left", width: "60%"}}>
                <ConfigProvider
                  theme={{
                    components: {
                      Anchor: {
                        colorPrimary: "black",
                        colorText: "grey",
                      }
                    },
                  }}
                >
                  <Card style={{ width: "100%", backgroundColor: "white", height: 100, border: "2px solid white" }}>
                    <Anchor
                      style={{}}
                      direction="horizontal"
                      items={[
                        {
                          key: 'employee_profiles',
                          href: '#employee profiles',
                          title: 'База анкет сотрудников',
                        },
                        {
                          key: 'common_employee_base',
                          href: '#common_employee_base',
                          title: 'Общая база сотрудников',
                        },
                        {
                          key: 'employee_base',
                          href: '#employee_base',
                          title: 'База сотрудников',
                        },
                        {
                          key: 'calendar_of_events',
                          href: 'calendar_of_events',
                          title: 'Календарь событий',
                        },
                      ]}
                    />
                  </Card>
                </ConfigProvider>
              </div>
              <div direction="horizontal" align="start" style={{float: "right", width: "20%"}}>
                <Card style={{ width: "100%", backgroundColor: "white", height: 100, border: "2px solid white" }}>
                  <div class="flexbox-container" style={{marginBottom: 20}}>
                    <div style={{width: '30%', float: 'left'}}>
                      <Avatar src={imageLogoName} size="large" style={{ backgroundColor: 'white'}} shape="circle"/>
                    </div>
                    <div style={{width: '70%', float: 'left'}}>
                    <Text>Kristina</Text>
                    <br/><Text style={{color: "grey"}}>менеджер продаж</Text>
                    </div>
                  </div>
                </Card>
              </div>
            </Header>
            <Content style={isMobile ? {width: "1600px", background: "white"} : {background: "white"}}>
              <Content style={{backgroundColor: "#f7f7f7", height: 1000, borderTopRightRadius: 30, borderTopLeftRadius: 30, padding: 50, paddingTop: 10}}>
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
      </Layout>
    </div>
  );
}