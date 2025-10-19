import React from 'react';
import { Modal, Form, Input } from 'antd';
import { Task } from '../types/Task';

interface CreateTaskModalProps {
  visible: boolean;
  onCancel: () => void;
  onCreate: (task: Task) => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  visible,
  onCancel,
  onCreate
}) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((values) => {
      onCreate(values as Task);
      form.resetFields();
    });
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="✨ Create New Task"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Create Task"
      cancelText="Cancel"
      width={600}
    >
      <Form form={form} layout="vertical" style={{ marginTop: '24px' }}>
        <Form.Item
          name="name"
          label="Task Name"
          rules={[{ required: true, message: 'Please enter task name' }]}
        >
          <Input placeholder="e.g., Database Backup" size="large" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="Owner"
          rules={[{ required: true, message: 'Please enter owner name' }]}
        >
          <Input placeholder="e.g., Shyam Anand" size="large" />
        </Form.Item>
        <Form.Item
          name="command"
          label="Command"
          rules={[{ required: true, message: 'Please enter command' }]}
        >
          <Input placeholder="e.g., echo Hello World" size="large" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateTaskModal;
