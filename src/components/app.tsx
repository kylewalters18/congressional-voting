import React from 'react'
import { Layout, Affix, Row, Col, Typography } from "antd";
import Graph from '../containers/graph_container'
import Timeline from '../containers/timeline_container'
import Bills from '../components/bills'
import 'antd/dist/antd.css';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const App = () =>
    <Layout style={{ height: "100vh" }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "#85144b" }}>
            <div style={{ height: 10 }}></div>
            <Title
                style={{ color: "white", textAlign: "center" }}
                level={2}
            >
                Senate Voting Record
            </Title>
        </Header>

        <Layout>
            <Content>
                <div>
                    <Row>
                        <Col span={1} />
                        <Col span={6}>
                            <Bills />
                        </Col>
                        <Col span={17}>
                            <Graph />
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>

        <Affix offsetBottom={0}>
            <Footer>
                <Timeline />
            </Footer>
        </Affix>
    </Layout >

export default App
