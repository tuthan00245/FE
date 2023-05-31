// import React, { useState } from 'react';
// import { Col, Row, Form, Input, DatePicker, Button } from 'antd';

// import './Profile.scss';
// import { useStore } from '../../../store';
// import { toJS } from 'mobx';
// import { updateAccountInfo } from '../../../api/authController';
// import { observer } from 'mobx-react';
// import { toast } from 'react-toastify';

// type Props = {};

// const Profile = (props: Props) => {
//     const { userStore } = useStore();
//     const user: any = toJS(userStore.getUserProfile);

//     const [loading, setLoading] = useState(false);

//     const handleUpdate = async (value: any) => {
//         value['birthdate'] = value['birthdate'].format('YYYY-MM-DD');
//         setLoading(true);
//         try {
//             await updateAccountInfo(value['username'], value['email'], value['birthdate']);
//             toast.success('Cập nhật thông tin thành công');
//             await userStore.userGetDetails();
//         } catch (error) {
//             console.log(error);
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="profile__info">
//             <div className="profile__info-title">
//                 <h4 style={{ fontWeight: '700', fontSize: '20px' }}>Cập nhật thông tin</h4>
//             </div>
//             <div className="profile__info-body">
//                 <h4 style={{ fontWeight: '700', color: '#47991f', marginBottom: '4px' }}>THÔNG TIN CHUNG</h4>

//                 {user.id && (
//                     <Form
//                         name="account-info"
//                         initialValues={{ remember: true }}
//                         autoComplete="off"
//                         layout="vertical"
//                         className="account-form"
//                         onFinish={handleUpdate}
//                         style={{ width: '100%' }}
//                     >
//                         <Row>
//                             <Col span={11}>
//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Họ tên"
//                                     name="username"
//                                     initialValue={user.name}
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Số điện thoại"
//                                     name="phone"
//                                     initialValue={user.username}
//                                 >
//                                     <Input disabled={true} />
//                                 </Form.Item>
//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Ngày sinh"
//                                     name="birthdate"
//                                 >
//                                     <DatePicker style={{ width: '100%' }} />
//                                 </Form.Item>
//                                 <div className="profile__info-social">
//                                     <span>Liên kết tài khoản với</span>
//                                     <div style={{ width: '45px', height: '45px' }}>
//                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//                                             <path
//                                                 fill="blue"
//                                                 d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
//                                             />
//                                         </svg>
//                                     </div>
//                                 </div>
//                                 <Form.Item>
//                                     <Button
//                                         type="primary"
//                                         style={{
//                                             marginTop: '3rem',
//                                             backgroundColor: '#47991f',
//                                             alignItems: 'center',
//                                         }}
//                                         htmlType="submit"
//                                         loading={loading}
//                                     >
//                                         Lưu
//                                     </Button>
//                                 </Form.Item>
//                             </Col>
//                             <Col span={2}></Col>
//                             <Col span={11}>
//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Giới tính"
//                                     name="gender"
//                                     initialValue="Nam"
//                                 >
//                                     <Input />
//                                 </Form.Item>

//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Email"
//                                     name="email"
//                                     rules={[
//                                         {
//                                             type: 'email',
//                                             message: 'The input is not valid E-mail!',
//                                         },
//                                     ]}
//                                 >
//                                     <Input />
//                                 </Form.Item>
//                                 <Form.Item
//                                     style={{ fontSize: '20px', fontWeight: 'bold' }}
//                                     label="Mã giới thiệu"
//                                     name="introduce"
//                                     initialValue="PHUCBMD"
//                                 >
//                                     <Input disabled={true} />
//                                 </Form.Item>
//                             </Col>
//                         </Row>
//                     </Form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default observer(Profile);
import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile
