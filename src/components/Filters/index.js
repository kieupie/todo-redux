import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

// const { Search } = Input;

export default function Filters() {
  return (
    <Row justify='center'>
      {/* <Col span={24}>
        <Typography.Paragraph
          className='font-bold mb-3 mt-10'
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' />
      </Col> */}
      <Col span={24}>
        <p className="font-bold mb-3 mt-10">Search</p>
        <Input
          placeholder="input search text"
          prefix={<SearchOutlined className="text-gray-400" />}
          className="w-full"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          className='font-bold mb-3 mt-10'
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          className='font-bold mb-3 mt-10'
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          className="w-full"
        >
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
      </Col>
    </Row>
  );
}