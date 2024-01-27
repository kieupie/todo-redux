import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/action'

export default function Filters() {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriorities, setFilterPriorities] = useState([]);


  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  }

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  }

  const handlePriorityChange = (value) => {
    setFilterPriorities(value);
    dispatch(priorityFilterChange(value));
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <p className="font-bold mb-3 mt-10">Search</p>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined className="text-gray-400" />}
          className="w-full"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          className='font-bold mb-3 mt-10'
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleFilterStatusChange}>
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
          value={filterPriorities}
          onChange={handlePriorityChange}
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