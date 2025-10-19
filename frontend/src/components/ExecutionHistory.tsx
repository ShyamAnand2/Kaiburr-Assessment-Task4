import React from 'react';
import { List, Typography, Tag, Space, Divider } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { TaskExecution } from '../types/Task';

const { Text, Paragraph } = Typography;

interface ExecutionHistoryProps {
  executions: TaskExecution[];
}

const ExecutionHistory: React.FC<ExecutionHistoryProps> = ({ executions }) => {
  if (executions.length === 0) {
    return (
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <Text type="secondary" style={{ fontSize: '15px' }}>
          No execution history available
        </Text>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '16px 24px', 
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
      borderLeft: '4px solid #667eea'
    }}>
      <Text strong style={{ fontSize: '16px', color: '#667eea', marginBottom: '16px', display: 'block' }}>
        🚀 Execution History
      </Text>
      <List
        dataSource={executions}
        renderItem={(execution, index) => (
          <List.Item 
            key={index}
            style={{ 
              border: 'none',
              padding: '16px 0'
            }}
          >
            <Space direction="vertical" style={{ width: '100%' }} size="small">
              <Space>
                <Tag color="purple" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Execution #{index + 1}
                </Tag>
                <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '16px' }} />
              </Space>
              <Space style={{ fontSize: '13px' }}>
                <ClockCircleOutlined style={{ color: '#667eea' }} />
                <Text type="secondary">
                  Started: {new Date(execution.startTime).toLocaleString()}
                </Text>
                <Divider type="vertical" />
                <Text type="secondary">
                  Ended: {new Date(execution.endTime).toLocaleString()}
                </Text>
              </Space>
              <div style={{
                background: '#1e1e1e',
                padding: '16px',
                borderRadius: '8px',
                marginTop: '8px',
                border: '1px solid #333'
              }}>
                <Text style={{ 
                  fontFamily: 'monospace', 
                  color: '#00ff00',
                  fontSize: '14px',
                  whiteSpace: 'pre-wrap',
                  display: 'block'
                }}>
                  {execution.output || 'No output'}
                </Text>
              </div>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ExecutionHistory;
