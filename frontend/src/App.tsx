import React, { useEffect, useState } from 'react';
import { Layout, Typography, Space, message, theme } from 'antd';
import { ThunderboltOutlined } from '@ant-design/icons';
import TaskList from './components/TaskList';
import CreateTaskModal from './components/CreateTaskModal';
import SearchBar from './components/SearchBar';
import { taskService } from './services/taskService';
import { Task } from './types/Task';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { token } = theme.useToken();

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (error) {
      message.error('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task: Task) => {
    try {
      await taskService.createTask(task);
      message.success('Task created successfully');
      loadTasks();
      setIsModalVisible(false);
    } catch (error) {
      message.error('Failed to create task');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await taskService.deleteTask(id);
      message.success('Task deleted successfully');
      loadTasks();
    } catch (error) {
      message.error('Failed to delete task');
    }
  };

  const handleExecute = async (id: string) => {
    try {
      setLoading(true);
      await taskService.executeTask(id);
      message.success('Task executed successfully');
      loadTasks();
    } catch (error) {
      message.error('Failed to execute task');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (name: string) => {
    if (!name) {
      loadTasks();
      return;
    }
    setLoading(true);
    try {
      const data = await taskService.searchTasks(name);
      setTasks(data);
    } catch (error) {
      message.error('Failed to search tasks');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <ThunderboltOutlined className="logo-icon" />
            <Title level={2} className="app-title">
              Task Manager
            </Title>
          </div>
          <Text className="subtitle">Manage and execute your tasks efficiently</Text>
        </div>
      </Header>
      <Content className="app-content">
        <div className="content-container">
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <SearchBar
              onSearch={handleSearch}
              onCreateClick={() => setIsModalVisible(true)}
            />
            <TaskList
              tasks={tasks}
              loading={loading}
              onDelete={handleDelete}
              onExecute={handleExecute}
              onRefresh={loadTasks}
            />
          </Space>
        </div>
      </Content>
      <Footer className="app-footer">
        <Text className="footer-text">
          Task Manager © 2025 | Built with React, TypeScript & Ant Design
        </Text>
      </Footer>
      <CreateTaskModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onCreate={handleCreate}
      />
    </Layout>
  );
};

export default App;
