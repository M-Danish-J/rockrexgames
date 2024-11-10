"use client"
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


export default function MyForm() {
    const [form] = Form.useForm();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [formMsg, setFormMsg] = useState(false);

    const onFinish = (values) => {
        console.log('Values:', values);
        setFormMsg(false);
        form.resetFields()
        emailjs.send('service_n08pfyh', 'template_in46ytk', values, 'NoMSHdZ8hBy4kNigW')
            .then((response) => {
                console.log('Email sent:', response);
                form.resetFields();
                toast.success("Email Sent Successfully! Thank You For Contacting Us!");
            })
            .catch((error) => {
                console.error('Email error:', error);
                toast.error("Failed to send email. Please try again later.");
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setFormMsg(true);

    };

    return (
        <Form
            form={form}
            name="MyForm"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            scrollToFirstError={true}
        >
            <div className="border-b-2 border-b-[#3572EF]">
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Name is required!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Name*"
                        className="text-lg bg-gray-100 border-none outline-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:border-none focus:ring-0"
                    />
                </Form.Item>
            </div>

            <div className="border-b-2 border-b-[#3572EF]">
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Email is required!',
                        },
                        {
                            pattern: emailRegex,
                            message: 'Please enter a valid email!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Email*"
                        className="text-lg bg-gray-100 border-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:border-none mt-5 focus:ring-0 outline-none"
                    />
                </Form.Item>
            </div>

            <div className="border-b-2 border-b-[#3572EF]">
                <Form.Item
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Message cannot be Empty!',
                        },
                        {
                            min: 10,
                            message: 'Message must be at least 10 characters!',
                        },
                    ]}
                >
                    <textarea
                        placeholder="Message*"
                        className="text-lg w-full h-44 bg-gray-100 focus:outline-none px-3 mt-5"
                    />
                </Form.Item>
            </div>
            <p className="text-[#999] py-4">*required field</p>
            <Form.Item>
                <Button
                    htmlType="submit"
                    className="bg-[#3572EF] text-white mt-10 text-2xl px-8 py-6 flex items-center justify-center hover:bg-black hover:!text-white border-none outline-none focus:outline-0 focus:border-none"
                >
                    Send Message
                </Button>
            </Form.Item>
            {formMsg && (
                <p className="text-xl text-[#dc3545] uppercase font-semibold text-center py-4">
                    Did you fill in the form properly?
                </p>
            )}
        </Form>
    );
};


