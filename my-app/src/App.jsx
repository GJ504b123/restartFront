import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons"; //引入icon库
import { Button, Flex, message, Modal,Form,Input } from "antd";
import useMessage from "antd/es/message/useMessage";
const App = () => {
  const [loading, setLoadings] = useState(false);
  const clickButton = () => {
    setLoadings(true);
    setTimeout(() => {
      setLoadings(false);
      messageApi.info("搜索完成，找到0个相关患者"); //4. 引入message统一格式，info()方法，里面写要输出的内容
    }, 3000);
    //2. 3秒后loading状态变成false
  };
  const [messageApi, contextHolder] = message.useMessage(); //4. 引入message统一格式

  const [isOpen, setIsOpen] = useState(false);
  const opening = () => {
    setIsOpen(true);
  };
  const isOk = () => {
    setIsOpen(false);
  };
  const isCancel = () => {
    setIsOpen(false);
  };


  const onFinish = (value)=>{
    // console.log(`已经收到${value}`)
    // 打印一句话用 ${}，检查一个对象用 逗号
    console.log("你拿到了数据",value)
    message.success(`成功录入：${value.username}`)
    setFrom(false)
  }


  const [form,setFrom] = useState(false)
  const formAdd =()=>{
    setFrom(true)
  }
  return (
    <Flex gap='small' vertical>
      {contextHolder}
      {/* 4. 引入message统一格式，必须写 */}

      <Button type='primary' danger icon={<SearchOutlined />} loading>
        加载中……
      </Button>
      {/* 1. danger是一个独立的属性 而不是在type里 */}
      <Button
        type='primary'
        danger
        icon={<SearchOutlined />}
        loading={loading}
        onClick={clickButton}
      >
        加载中……
      </Button>
      {/* 3. 绑定点击事件和loading状态 */}

{/* 5. Modal与Button是同级的 */}
{/* 为什么不是父子结构：① HTML 的“肚量”有限
在网页的最底层，<button> 标签是一个行内块级元素，它只能装着文字、图标或者少量的修饰标签。

Modal 的本质：它包含了遮罩层、标题、内容区、页脚按钮……这其实是一大堆嵌套的 <div>。

后果：把一整栋楼（Modal）塞进一个信箱（Button）里，会导致浏览器解析出错，样式会变得乱七八糟。

② “冒泡”效应 (Event Bubbling)
这是最麻烦的一点。在 JS 中，事件会向上冒泡：

如果你把 Modal 放在 Button 里面，当你点击 Modal 里的“确定”按钮时，浏览器可能会认为你同时也点击了外层的 Button。

死循环：这可能导致你刚想关掉弹窗，它又被外层的按钮触发重新打开了。

③ 传送门逻辑 (Portals)
Ant Design 的 Modal 看起来是在你点击的地方弹出来的，但实际上为了不被父元素的样式（比如 overflow: hidden）遮挡，它在底层利用了 React 的 Portal（传送门） 技术，把自己偷偷渲染到了 HTML 的 <body> 最底部。

所以，哪怕你在代码里把它写在按钮里，它最终也会“飞”到别的地方去。既然如此，为了代码整洁，我们干脆就让它们并列排放。 */}


      <Button onClick={opening}>want to say sth to u</Button>
      <Modal onCancel={isCancel} onOk={isOk} open={isOpen}>
        {/* onCancel,onOk,open属性，当open属性true则显示，而button绑定切换open功能 */}
        <p>Happy New Year!</p>

      </Modal>

      <Button type="primary" style={{width:'20%'}} onClick={formAdd}>添加姓名</Button>
      <Modal open={form} footer={null}>
        {/* footer={null}：去掉Modal默认的下部分（取消，ok） */}
      <h2>患者登记表</h2>
      <Form layout="vertical" onFinish={onFinish} >
        <Form.Item label="姓名" name="username" rules={[{required:true,message:'请输入您的姓名'}]}>
          <Input type="text" placeholder="请输入您的姓名" />

        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType='submit'>立即登记</Button>
        </Form.Item>
      </Form>
      </Modal>

    </Flex>
  );
};
export default App;


