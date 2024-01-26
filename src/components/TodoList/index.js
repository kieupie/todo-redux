import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';

export default function TodoList() {
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                <Todo name='Learn React' prioriry='High' />
                <Todo name='Learn Redux' prioriry='Medium' />
                <Todo name='Learn JavaScript' prioriry='Low' />
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }} compact>
                    <Input />
                    <Select defaultValue="Medium">
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' className=" bg-blue-500 rounded-full" >
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}