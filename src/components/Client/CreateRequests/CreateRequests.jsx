// import './CreateRequests.css';
// import 'antd/dist/antd.css';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// import { Form, Input, Slider, Upload, message } from 'antd';
// import { useState } from 'react';
// import DateSelector from './Data';


// import { Link, NavLink } from 'react-router-dom';
// // import logo from '../../images/Logo.png'
// import CreateButton from './../../UI/CreateButton/CreateButton';
// import CreateInput from './../../UI/CreateInput/CreateInput';

// // const formItemLayout = {
// //     labelCol: {
// //       xs: {
// //         span: 40,
// //       },
// //       sm: {
// //         span: 30,
// //       },
// //     },
// //     wrapperCol: {
// //       xs: {
// //         span: 40,
// //       },
// //       sm: {
// //         span: 30,
// //       },
// //     },
// //   };
  
// //   const tailFormItemLayout = {
// //     wrapperCol: {
// //       xs: {
// //         span: 24,
// //         offset: 0,
// //       },
// //       sm: {
// //         span: 16,
// //         offset: 8,
// //       },
// //     },
// //   };

// // const props = {
// //   name: 'file',
// //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
// //   headers: {
// //     authorization: 'authorization-text',
// //   },

// //   onChange(info) {
// //     if (info.file.status !== 'uploading') {
// //       console.log(info.file, info.fileList);
// //     }

// //     if (info.file.status === 'done') {
// //       message.success(`${info.file.name} file uploaded successfully`);
// //     } else if (info.file.status === 'error') {
// //       message.error(`${info.file.name} file upload failed.`);
// //     }
// //   },
// // };


// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// };

// const beforeUpload = (file) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }

//   const isLt2M = file.size / 1024 / 1024 < 2;

//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }

//   return isJpgOrPng && isLt2M;
// };


    
// export default function CreateRequests(){


//   const [loading, setLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState();

//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   // const bodyInputRef = useRef();

//   const handleChange = (info) => {
//     if (info.file.status === 'uploading') {
//       setLoading(true);
//       return;
//     }

//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, (url) => {
//         setLoading(false);
//         setImageUrl(url);
//       });
//     }
//   };

//   const uploadButton = (
//     <div>
//       {loading ? <LoadingOutlined /> : <PlusOutlined />}
//       <div
//         style={{
//           marginTop: 8,
//         }}
//       >
//         Загрузить
//       </div>
//     </div>
//   );


//   const addNewPost = (e) =>{
//     e.preventDefault()
//     const newPost = {
//       id: Data.now(),
//       title,
//       body
//     }
//     setPosts([...posts, newPost])

//     // console.log(title)
//     // console.log(bodyInputRef.current.value)
//   }


//     return(
//         <div className="create-req">
//             <div className="create">
//             <Link to="/"><img src='/img/Logo.png' className="reg_logo" /></Link>
            
//             <div className='req-form'>
//             <div className='request-bar'>
//            <Link to='/' className='Us'>Заявки</Link>
//            <br />
//            <Link to='/consultation' className='Us'>Консультации</Link>
//            <br />
//            <Link to="#" className='Us'>Услуги</Link>
//         </div>
            
//             <div className='create-form'>
//                 <Form
//                 className='req-input'
//                 // {...formItemLayout}
//                 // form={form}
//                 // name="register"
//                 // onFinish={onFinish}
//                 // scrollToFirstError
//                 >
//                     <Form.Item
//                      name='req'
//                      label='От кого'
//                      rules={[
//                         {
//                           required: true,
//                           message: '',
//                         },
//                       ]}
//                     >
                        
//                      <CreateInput 
//                       value={title}
//                       onChange={e => setTitle(e.target.value)}
//                       placeholder='Осоо “Примавера”' />
//                     </Form.Item>

//                     <Form.Item
//                      name='sum  '
//                      label='Сумма'
//                      rules={[
//                         {
//                           required: true,
//                           message: '',
//                         },
//                       ]}
//                     >
                        
//                      <CreateInput 
//                       value={body}
//                       onChange={e => setBody(e.target.value)}
//                       placeholder='14569 сом'/>
//                     </Form.Item>

//                     <Form.Item
//                      className='reqdata'
//                      name='date'
//                      label='Дата'
//                      rules={[
//                         {
//                           required: true,
//                           message: '',
//                         },
//                       ]}
//                     >
                        
//                      <CreateInput placeholder='ДД/ММ/ГГ' />                      
//                      {/* <Input className='req-inputs' placeholder='14569 сом'/> */}
//                      {/* <DateSelector/> */}
//                     </Form.Item>

//                     <Form.Item
//                 name="slider"
//                 label="Сроки исполнения"
//                 rules={[
//                   {
//                     required: true,
//                     message: '',
//                   },
//                 ]}
//               >
//                 <Slider 
//                   min={3}
//                   max={31}
//                   marks={{
//                     3: '3 дня',
//                     31: '31 день',
//                   }}
//                 />
//               </Form.Item>

//               <Form.Item
//                 label='Загрузить файлы'                             
//                 >

// <Upload
//       name="avatar"
//       listType="picture-card"
//       className="avatar-uploader"
//       showUploadList={false}
//       action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//       beforeUpload={beforeUpload}
//       onChange={handleChange}
//     >
//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt="avatar"
//           style={{
//             width: '100%',
//           }}
//         />
//       ) : (
//         uploadButton
//       )}
//     </Upload>
//               </Form.Item>


//               <Form.Item>
//               <div className='batton-req'>
//                   <CreateButton>
//                   <NavLink to="/create-post">
//                   Создать  
//               </NavLink>
//                   </CreateButton>
//                 <button className='delete-req'>
//                   Удалить
//                 </button>
//                 </div>
//               </Form.Item>




// {/* 
//               <Form.Item label="Dragger">
//         <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
//           <Upload.Dragger name="files" action="/upload.do">
//             <p className="ant-upload-drag-icon">
//               <InboxOutlined />
//             </p>
//             <p className="ant-upload-text">Click or drag file to this area to upload</p>
//             <p className="ant-upload-hint">Support for a single or bulk upload.</p>
//           </Upload.Dragger>
//         </Form.Item>
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           span: 12,
//           offset: 6,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item> */}

//                 </Form>



//             </div>
//             </div>



//             </div>
//         </div>
//     )
// }