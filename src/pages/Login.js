import React, {useState} from 'react';
import {Button, Col, Form, Input, message, Row} from 'antd';
import {useHistory} from 'react-router-dom';
import {api} from "../config/api";

export default function Login() {
    const [form] = Form.useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false)

    // const onFinish = (value) => {
    //     // TODO отправляем логин+пароль на бэк, если получилось залогиниться - перебрасываем на главную
    //     setLoading(true)
    //     api.post('login', {...value})
    //         .then((res) => {
    //             history.push('/tasks-list');
    //             form.resetFields();
    //         })
    //         .catch((error) => {
    //             // TODO проверить что пришло в ошибке и это вывести в message
    //             message.error('Не удалось авторизоваться');
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    //
    // };
    const onFinish = (value) => {
        history.push('/tasks-list');

    };

    return (
        <>
            <br/>
            <br/>
            <br/>
            <Form form={form} onFinish={onFinish}>
                <Row type="flex" justify="center">
                    <h1>Войдите на сайт Владика!</h1>
                </Row>
                <Row type="flex" justify="center">
                    <Col span={6}>
                        <Form.Item
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Введите логин',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Логин"
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <br/>
                <Row type="flex" justify="center">
                    <Col span={6}>
                        <Form.Item
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Введите пароль',
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Пароль"
                                allowClear
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <br/>
                <Row type="flex" justify="center">
                    <Col span={6}
                    >
                        <Button
                            className="btnLogin"
                            type="dashed"
                            htmlType="submit"
                            loading={loading}
                            style={{
                                backgroundColor: 'transparent',
                                width: '100%',
                            }}
                        >
                            Войти
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

// "start": "set PORT=8080 && react-scripts start",
