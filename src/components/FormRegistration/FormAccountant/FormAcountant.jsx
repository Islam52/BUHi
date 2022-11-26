import React, { useState } from 'react';
import './FormAccountant.css';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import Logo from '../../images/Logo.png'
// import lefthalfCircle from '../../images/lefthalfCircle.png'
// import HalfCircle from '../../images/rightHalfCircle.png'
import { Link } from 'react-router-dom'
import {
  Button,
  Radio,
  Form,
  Input,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 40,
    },
    sm: {
      span: 30,
    },
  },
  wrapperCol: {
    xs: {
      span: 40,
    },
    sm: {
      span: 30,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }

  return isJpgOrPng && isLt2M;
};


function FormAccountant() {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const [value, setValue] = useState(1);
  const [form] = Form.useForm();

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined/>}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Загрузить
      </div>
    </div>
  );


  return (
    <div className='reg-form'>
      <div className="reg">
      <Link to="/"><img src='/img/Logo.png' className="reg_logo" /></Link>
        <img src='/img/lefthalfCircle.png' className='lefthalfCircle' />
        <img src='/img/HalfCircle.png' className='HalfCircle' />

        <div className="form">
          <div className="form_title">
            <h2>Данные о бухгалтере</h2>
            <p>Правовая форма</p>
          </div>


          <div className="form_items">


            <Form
              className='form_items__input'
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >


              <Form.Item
                name="companyname"
                label="Ф.И.О."
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_company' placeholder='Александрова Александра Александровна' />
              </Form.Item>

              <Form.Item
                name="data"
                label="ИНДата РожденияН"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='ДД/ММ/ГГГГ' />
              </Form.Item>

              <Form.Item
                name="inn"
                label="ИНН"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='12345678910111' />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Номер телефона"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='0555-55-55-55' />
              </Form.Item>

              <Form.Item
                name="town"
                label="Выберите город"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='Бишкек' />
              </Form.Item>

              <Form.Item
                name="town"
                label="Образование"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='Высшее' />
              </Form.Item>

              <h3>Опыт работы</h3>
              <div className="form_choose">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Есть</Radio>
              <Radio value={2}>Нет</Radio>
            </Radio.Group>
          </div>

          <Form.Item
                name="town"
                label="Способы оплаты"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_inn' placeholder='MBank' />
              </Form.Item>

              <Form.Item
                label='Загрузить файлы (дипломы, сертификаты)'                             
                >
                <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      beforeUpload={beforeUpload}
                      onChange={handleChange}
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="avatar"
                          style={{
                            width: '100%',
                          }}
                        />
                      ) : (
                        uploadButton
                      )}
                    </Upload>
              </Form.Item>


              <Form.Item
                name="email"
                label="Введите электронную почту"
                rules={[
                  {
                    type: 'email',
                    message: '',
                  },
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input className='input_email' placeholder='sample@buhi.kg' />
              </Form.Item>

              <Form.Item
                name="password"
                label="Придумайте пароль"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
                hasFeedback
              >
                <Input.Password className='input_password' placeholder='*************' />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Повторите  пароль"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error(''));
                    },
                  }),
                ]}
              >
                <Input.Password className='input_password' placeholder='*************' />
              </Form.Item>


              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" >
                  Зарегистрироваться
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormAccountant