import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (name: string) => void;
  onCreateClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCreateClick }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      background: 'rgba(255, 255, 255, 0.95)',
      borderRadius: '16px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      backdropFilter: 'blur(10px)',
    }}>
      <Input.Search
        placeholder="Search tasks by name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        style={{ width: 450 }}
        prefix={<SearchOutlined style={{ color: '#667eea' }} />}
        size="large"
        allowClear
      />
      <Button 
        type="primary" 
        icon={<PlusOutlined />} 
        onClick={onCreateClick}
        size="large"
        style={{ height: '48px', minWidth: '160px', fontSize: '16px', fontWeight: 600 }}
      >
        Create Task
      </Button>
    </div>
  );
};

export default SearchBar;
