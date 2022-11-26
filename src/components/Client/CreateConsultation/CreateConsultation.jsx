import React from 'react';
import { DatePicker, Form, Input } from "antd";
import './CreateConsultation.css';



export default function CreateConsultation(){


    return(
        <div className="create-consultation">
            <div className="create-con">
        
                <div className="con-form">

                    <div className="consultation-form">
                        <Form className='form-con'>
                            <Form.Item
                                label='От кого'
                                rules={[
                                    {
                                    required: true,
                                    message: '',
                                    },
                                ]}
                                >   
                               <Input className='req-ocoo' placeholder='Осоо “Примавера”' />
                            </Form.Item>

                            <Form.Item
                                label='Тема'
                                rules={[
                                    {
                                    required: true,
                                    message: '',
                                    },
                                ]}
                                >   
                               <Input className='req-ocoo' placeholder='Договор аренды' />
                            </Form.Item>
                            
                            <Form.Item
                                label='Описание'
                                rules={[
                                    {
                                    required: true,
                                    message: '',
                                    },
                                ]}
                                >   
                               <Input className='req-ocoo' placeholder='Добрый день! Помогите составить договор аренды офиса. Реквизиты во вложении.' />
                            </Form.Item>

                            <Form.Item label="DatePicker" >
                                <div className='data'><DatePicker /></div>
                            </Form.Item>

                            <Form.Item>
                                <Input type="text" />
                            </Form.Item>

                            <Form.Item>
                                <button className='button-con'>Запланировать</button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </div>
        </div>
    )
}