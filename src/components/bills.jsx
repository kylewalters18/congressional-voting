import React from 'react'
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'On Motion to Table: H.Res. 603: Raising a question of the privileges of the House.'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'S.J.Res. 54: A joint resolution relating to a national emergency declared by the President on February 15, 2019.'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
    {
        title: 'H.R. 3722: Joint Task Force to Combat Opioid Trafficking Act of 2019'
    },
];

const Bills = () =>
    <div style={{ overflow: 'scroll', height: 500, marginTop: 100 }}>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="bill-icon-17.jpg" shape="square" />}
                        title={<a href="https://www.govtrack.us/congress/votes/116-2019/h554">{item.title}</a>}
                    />
                </List.Item>
            )}
        />
    </div >


export default Bills
