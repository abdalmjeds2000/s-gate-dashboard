import { Card, Typography, Space, Dropdown, Menu } from "antd";
import { ChevronDown, Link, Phone, Upload, Users } from "lucide-react";

const { Title, Text } = Typography;

const UserCard = () => {
  const contactMenu = (
    <Menu>
      <Menu.Item key="email">Email</Menu.Item>
      <Menu.Item key="chat">Message</Menu.Item>
    </Menu>
  );

  return (
    <Card
      bordered={false}
      bodyStyle={{
        padding: 0,
        height: '100%'
      }}
      className="h-full !rounded-lg overflow-hidden"
    >
      <div className="w-full h-full bg-gradient-to-r from-salic-lightBlue/50 to-salic-lightGreen/35 p-4 lg:p-6 l:p-10 flex flex-col justify-between">
        <Text className="text-gray-500 text-sm lg:text-base">
          <span className="font-semibold">Welcome,</span> Have a nice day!
        </Text>

        <div className="flex items-center mt-3 lg:mt-5">
          <div className="w-10 lg:w-20 min-w-10 lg:min-w-20 aspect-square rounded-full border border-salic-lightBlue/50 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" className="w-[34px] lg:w-[70px] rounded-full" />
          </div>
          <div className="ml-2 lg:ml-4 flex-grow">
            <Title level={3} className="!mb-0 lg:!mb-2 max-lg:!text-sm max-sm:line-clamp-1">Akmal Aldahdouh</Title>
            <Text className="text-xs lg:text-sm max-sm:line-clamp-1">AVP - IT Development</Text>
          </div>
          <div className="flex lg:hidden gap-1 sm:gap-2">
            <a href="#" className="w-6 h-6 aspect-square rounded-sm flex items-center justify-center bg-white text-salic-skyBlue">
              <Users size={12} />
            </a>
            <a href="#" className="w-6 h-6 aspect-square rounded-sm flex items-center justify-center bg-white text-salic-skyBlue">
              <Upload size={12} />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-around items-center mt-6 text-sm">
          <Space direction="horizontal" align="center">
            <div className="bg-white p-2 rounded-xl">
              <Phone size={16} className="text-salic-skyBlue" />
            </div>
            <Text className="text-gray-500 font-medium">624</Text>
          </Space>

          <Space direction="horizontal" align="center">
            <div className="bg-white p-2 rounded-xl">
              <Users size={16} className="text-salic-skyBlue" />
            </div>
            <Text className="text-gray-500 font-medium">My Team</Text>
          </Space>

          <Dropdown overlay={contactMenu} trigger={['click']}>
            <Space className="cursor-pointer">
              <div className="bg-white p-2 rounded-xl">
                <Link size={16} className="text-salic-skyBlue" />
              </div>
              <Text className="text-gray-500 font-medium">Contact</Text>
              <ChevronDown size={16} />
            </Space>
          </Dropdown>
        </div>
      </div>
    </Card>
  );
};

export default UserCard;
